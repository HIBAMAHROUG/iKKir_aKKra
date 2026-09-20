import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import './Auth.css';

export default function Register() {
  const { user, register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  if (user) return <Navigate to="/profile" replace />;

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      await register(form);
      navigate('/profile', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Créer un compte</h1>
        <p className="auth-lead">Enregistre ta progression et tes scores.</p>
        <form className="auth-form" onSubmit={submit}>
          <label>
            Prénom
            <input name="name" value={form.name} onChange={update} required autoComplete="given-name" />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" />
          </label>
          <label>
            Mot de passe (6 caractères minimum)
            <input type="password" name="password" value={form.password} onChange={update} required autoComplete="new-password" />
          </label>
          <label>
            Confirmer le mot de passe
            <input type="password" name="confirm" value={form.confirm} onChange={update} required autoComplete="new-password" />
          </label>
          {error && <p className="auth-error" role="alert">{error}</p>}
          <button className="auth-button" type="submit" disabled={busy}>
            {busy ? 'Création...' : 'Créer mon compte'}
          </button>
        </form>
        <p className="auth-switch">
          Déjà inscrit ? <Link to="/login">Se connecter</Link>
        </p>
      </section>
    </main>
  );
}