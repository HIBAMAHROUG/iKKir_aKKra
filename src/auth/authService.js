import { api, clearToken, setToken } from '../api';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const normalizeEmail = (email) => email.trim().toLowerCase();
const toPublic = ({ id, name, email, createdAt }) => ({ id, name, email, createdAt });

// Les erreurs sont des clés de traduction (voir src/i18n/*.js)
export async function getCurrentUser() {
  try {
    const { user } = await api('/auth/me');
    return toPublic(user);
  } catch {
    clearToken();
    return null;
  }
}

export async function registerUser({ name, email, password, confirm }) {
  const cleanName = name.trim();
  const cleanEmail = normalizeEmail(email);

  if (cleanName.length < 2) throw new Error('err.name');
  if (!EMAIL_RE.test(cleanEmail)) throw new Error('err.email');
  if (password.length < 6) throw new Error('err.password');
  if (confirm !== undefined && password !== confirm) throw new Error('err.confirm');
  if (db.find('users', (u) => u.email === cleanEmail)) throw new Error('err.exists');

  const { user, token } = await api('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name: cleanName, email: cleanEmail, password }),
  });
  setToken(token);
  return toPublic(user);
}

export async function loginUser({ email, password }) {
  try {
    const { user, token } = await api('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: normalizeEmail(email), password }),
    });
    setToken(token);
    return toPublic(user);
  } catch {
    throw new Error('err.login');
  }
}

export async function logout() {
  try { await api('/auth/logout', { method: 'POST' }); } finally { clearToken(); }
}

export async function deleteAccount() {
  try { await api('/auth/account', { method: 'DELETE' }); } finally { clearToken(); }
}