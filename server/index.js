import 'dotenv/config';
import cors from 'cors';
import crypto from 'node:crypto';
import express from 'express';
import { query } from './db.js';
import { rateLimit } from './rateLimit.js';

const app = express();
const port = Number(process.env.PORT || 3001);
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
const isProduction = process.env.NODE_ENV === 'production';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL est obligatoire.');
if (isProduction && (!clientUrl.startsWith('https://') || process.env.TRUST_PROXY !== 'true')) {
  throw new Error('En production, CLIENT_URL doit être en HTTPS et TRUST_PROXY=true.');
}

app.disable('x-powered-by');
app.set('trust proxy', process.env.TRUST_PROXY === 'true');
app.use(cors({ origin: clientUrl, methods: ['GET', 'POST', 'DELETE'], optionsSuccessStatus: 204 }));
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader('Cache-Control', 'no-store');
  if (isProduction) res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  next();
});
app.use(express.json({ limit: '100kb' }));

const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Trop de tentatives. Réessayez plus tard.',
});
const writeRateLimit = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: 'Trop de requêtes. Réessayez plus tard.',
});

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email, createdAt: user.created_at };
}

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, storedHash) {
  const [salt, expected] = storedHash?.split(':') ?? [];
  if (!salt || !expected || !/^[a-f0-9]{128}$/i.test(expected)) return false;
  const actual = crypto.scryptSync(password, salt, 64);
  const expectedBuffer = Buffer.from(expected, 'hex');
  return crypto.timingSafeEqual(actual, expectedBuffer);
}

async function createSession(userId) {
  const token = crypto.randomBytes(32).toString('hex');
  await query(
    `INSERT INTO sessions (token, user_id, expires_at)
     VALUES ($1, $2, NOW() + INTERVAL '30 days')`,
    [token, userId],
  );
  return token;
}

async function authenticate(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.startsWith('Bearer ') ? authorization.slice(7).trim() : '';
  if (!token) return res.status(401).json({ error: 'Non authentifie.' });

  const { rows } = await query(
    `SELECT u.id, u.name, u.email, u.created_at
     FROM sessions s JOIN users u ON u.id = s.user_id
     WHERE s.token = $1 AND s.expires_at > NOW()`,
    [token],
  );
  if (!rows[0]) return res.status(401).json({ error: 'Session expiree.' });
  req.user = rows[0];
  req.token = token;
  next();
}

app.get('/api/health', async (_req, res) => {
  await query('SELECT 1');
  res.json({ ok: true });
});

app.post('/api/auth/register', authRateLimit, async (req, res) => {
  const { name, email, password } = req.body;
  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    name.trim().length < 2 ||
    name.trim().length > 100 ||
    email.trim().length > 254 ||
    password.length < 6 ||
    password.length > 200
  ) {
    return res.status(400).json({ error: 'Donnees d’inscription invalides.' });
  }
  try {
    const { rows } = await query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email, created_at',
      [name.trim(), email.trim().toLowerCase(), hashPassword(password)],
    );
    const token = await createSession(rows[0].id);
    res.status(201).json({ user: publicUser(rows[0]), token });
  } catch (error) {
    if (error.code === '23505') return res.status(409).json({ error: 'Cette adresse existe deja.' });
    throw error;
  }
});

app.post('/api/auth/login', authRateLimit, async (req, res) => {
  const { email, password } = req.body;
  if (typeof email !== 'string' || typeof password !== 'string' || email.length > 254 || password.length > 200) {
    return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
  }
  const { rows } = await query('SELECT * FROM users WHERE email = $1', [email.trim().toLowerCase()]);
  if (!rows[0] || !verifyPassword(password || '', rows[0].password_hash)) {
    return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
  }
  const token = await createSession(rows[0].id);
  res.json({ user: publicUser(rows[0]), token });
});

app.get('/api/auth/me', authenticate, (req, res) => res.json({ user: publicUser(req.user) }));

app.post('/api/auth/logout', authenticate, writeRateLimit, async (req, res) => {
  await query('DELETE FROM sessions WHERE token = $1', [req.token]);
  res.status(204).end();
});

app.delete('/api/auth/account', authenticate, writeRateLimit, async (req, res) => {
  await query('DELETE FROM users WHERE id = $1', [req.user.id]);
  res.status(204).end();
});

app.get('/api/results', authenticate, async (req, res) => {
  const { rows } = await query(
    'SELECT id, quiz, score, total, created_at AS "createdAt" FROM results WHERE user_id = $1 ORDER BY created_at DESC',
    [req.user.id],
  );
  res.json(rows);
});

app.post('/api/results', authenticate, writeRateLimit, async (req, res) => {
  const { quiz, score, total } = req.body;
  if (
    typeof quiz !== 'string' ||
    quiz.trim().length < 1 ||
    quiz.trim().length > 200 ||
    !Number.isInteger(score) ||
    !Number.isInteger(total) ||
    score < 0 ||
    total < 1 ||
    score > total
  ) {
    return res.status(400).json({ error: 'Résultat de quiz invalide.' });
  }
  const { rows } = await query(
    'INSERT INTO results (user_id, quiz, score, total) VALUES ($1, $2, $3, $4) RETURNING id, quiz, score, total, created_at AS "createdAt"',
    [req.user.id, quiz, score, total],
  );
  res.status(201).json(rows[0]);
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erreur serveur.' });
});

const server = app.listen(port, () => console.log(`API PostgreSQL disponible sur le port ${port}`));
server.requestTimeout = 30_000;
server.headersTimeout = 35_000;

async function shutdown(signal) {
  console.log(`${signal} reçu, arrêt du serveur...`);
  await new Promise((resolve) => server.close(resolve));
  process.exit(0);
}

process.once('SIGTERM', () => shutdown('SIGTERM'));
process.once('SIGINT', () => shutdown('SIGINT'));