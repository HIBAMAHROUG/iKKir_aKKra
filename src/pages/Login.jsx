import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import './Auth.css';

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/profile';

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  if (user) return <Navigate to="/profile" replace />;

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      await login(form);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Connexion</h1>
        <p className="auth-lead">Retrouve ta progression et tes résultats de quiz.</p>
        <form className="auth-form" onSubmit={submit}>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" />
          </label>
          <label>
            Mot de passe
            <input type="password" name="password" value={form.password} onChange={update} required autoComplete="current-password" />
          </label>
          {error && <p className="auth-error" role="alert">{error}</p>}
          <button className="auth-button" type="submit" disabled={busy}>
            {busy ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
        <p className="auth-switch">
          Pas encore de compte ? <Link to="/register">Créer un compte</Link>
        </p>
      </section>
    </main>
  );
}