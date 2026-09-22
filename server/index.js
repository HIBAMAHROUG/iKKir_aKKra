import 'dotenv/config';
import cors from 'cors';
import crypto from 'node:crypto';
import express from 'express';
import { query } from './db.js';

const app = express();
const port = Number(process.env.PORT || 3001);
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';

app.use(cors({ origin: clientUrl }));
app.use(express.json());

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email, createdAt: user.created_at };
}

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, storedHash) {
  const [salt, expected] = storedHash.split(':');
  const actual = crypto.scryptSync(password, salt, 64).toString('hex');
  return expected && crypto.timingSafeEqual(Buffer.from(actual, 'hex'), Buffer.from(expected, 'hex'));
}

async function createSession(userId) {
  const token = crypto.randomBytes(32).toString('hex');
  await query('INSERT INTO sessions (token, user_id) VALUES ($1, $2)', [token, userId]);
  return token;
}

async function authenticate(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Non authentifie.' });

  const { rows } = await query(
    `SELECT u.id, u.name, u.email, u.created_at
     FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = $1`,
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

app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name?.trim() || !email?.trim() || !password || password.length < 6) {
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

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const { rows } = await query('SELECT * FROM users WHERE email = $1', [email?.trim().toLowerCase()]);
  if (!rows[0] || !verifyPassword(password || '', rows[0].password_hash)) {
    return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
  }
  const token = await createSession(rows[0].id);
  res.json({ user: publicUser(rows[0]), token });
});

app.get('/api/auth/me', authenticate, (req, res) => res.json({ user: publicUser(req.user) }));

app.post('/api/auth/logout', authenticate, async (req, res) => {
  await query('DELETE FROM sessions WHERE token = $1', [req.token]);
  res.status(204).end();
});

app.delete('/api/auth/account', authenticate, async (req, res) => {
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

app.post('/api/results', authenticate, async (req, res) => {
  const { quiz, score, total } = req.body;
  const { rows } = await query(
    'INSERT INTO results (user_id, quiz, score, total) VALUES ($1, $2, $3, $4) RETURNING id, quiz, score, total, created_at AS "createdAt"',
    [req.user.id, quiz, score, total],
  );
  res.status(201).json(rows[0]);
});

app.listen(port, () => console.log(`API PostgreSQL disponible sur http://localhost:${port}`));