import { db, session } from '../db/localDb';
import { hashPassword, verifyPassword } from './password';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const normalizeEmail = (email) => email.trim().toLowerCase();
const toPublic = ({ id, name, email, createdAt }) => ({ id, name, email, createdAt });

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

  if (cleanName.length < 2) throw new Error('Entre ton prénom (2 lettres minimum).');
  if (!EMAIL_RE.test(cleanEmail)) throw new Error('Adresse email invalide.');
  if (password.length < 6) throw new Error('Le mot de passe doit contenir au moins 6 caractères.');
  if (confirm !== undefined && password !== confirm) throw new Error('Les deux mots de passe sont différents.');
  if (db.find('users', (u) => u.email === cleanEmail)) throw new Error('Un compte existe déjà avec cet email.');

  const passwordHash = await hashPassword(password);
  const user = db.insert('users', { name: cleanName, email: cleanEmail, passwordHash });
  session.set(user.id);
  return toPublic(user);
}

export async function loginUser({ email, password }) {
  const user = db.find('users', (u) => u.email === normalizeEmail(email));
  const ok = user ? await verifyPassword(password, user.passwordHash) : false;
  if (!ok) throw new Error('Email ou mot de passe incorrect.');
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