import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { useI18n } from '../i18n/useI18n';
import './Auth.css';

export default function Login() {
  const { user, login } = useAuth();
  const { t } = useI18n();
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
        <h1>{t('login.title')}</h1>
        <p className="auth-lead">{t('login.lead')}</p>
        <form className="auth-form" onSubmit={submit}>
          <label>
            {t('login.email')}
            <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" />
          </label>
          <label>
            {t('login.password')}
            <input type="password" name="password" value={form.password} onChange={update} required autoComplete="current-password" />
          </label>
          {error && <p className="auth-error" role="alert">{t(error)}</p>}
          <button className="auth-button" type="submit" disabled={busy}>
            {busy ? t('login.busy') : t('login.submit')}
          </button>
        </form>
        <p className="auth-switch">
          {t('login.noAccount')} <Link to="/register">{t('login.createLink')}</Link>
        </p>
      </section>
    </main>
  );
}