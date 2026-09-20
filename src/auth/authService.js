import { db, session } from '../db/localDb';
import { hashPassword, verifyPassword } from './password';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const normalizeEmail = (email) => email.trim().toLowerCase();
const toPublic = ({ id, name, email, createdAt }) => ({ id, name, email, createdAt });

// Les erreurs sont des clés de traduction (voir src/i18n/*.js)
export function getCurrentUser() {
  const id = session.get();
  if (!id) return null;
  const user = db.find('users', (u) => u.id === id);
  if (!user) {
    session.clear();
    return null;
  }
  return toPublic(user);
}

export async function registerUser({ name, email, password, confirm }) {
  const cleanName = name.trim();
  const cleanEmail = normalizeEmail(email);

  if (cleanName.length < 2) throw new Error('err.name');
  if (!EMAIL_RE.test(cleanEmail)) throw new Error('err.email');
  if (password.length < 6) throw new Error('err.password');
  if (confirm !== undefined && password !== confirm) throw new Error('err.confirm');
  if (db.find('users', (u) => u.email === cleanEmail)) throw new Error('err.exists');

  const passwordHash = await hashPassword(password);
  const user = db.insert('users', { name: cleanName, email: cleanEmail, passwordHash });
  session.set(user.id);
  return toPublic(user);
}

export async function loginUser({ email, password }) {
  const user = db.find('users', (u) => u.email === normalizeEmail(email));
  const ok = user ? await verifyPassword(password, user.passwordHash) : false;
  if (!ok) throw new Error('err.login');
  session.set(user.id);
  return toPublic(user);
}

export function logout() {
  session.clear();
}

export function deleteAccount(userId) {
  db.removeWhere('results', (r) => r.userId === userId);
  db.remove('users', userId);
  session.clear();
}