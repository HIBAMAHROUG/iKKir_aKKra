import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { useI18n } from '../i18n/useI18n';
import './Auth.css';

export default function Register() {
  const { user, register } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', level: '5eme' });
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
        <h1>{t('register.title')}</h1>
        <p className="auth-lead">{t('register.lead')}</p>
        <form className="auth-form" onSubmit={submit}>
          <label>
            {t('register.name')}
            <input name="name" value={form.name} onChange={update} required autoComplete="given-name" />
          </label>
          <label>
            {t('login.email')}
            <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" />
          </label>
          <label>
            Mon niveau
            <select name="level" value={form.level} onChange={update} required>
              <option value="5eme">5e année</option>
              <option value="6eme">6e année</option>
              <option value="7eme">7e année</option>
            </select>
          </label>
          <label>
            {t('register.password')}
            <input type="password" name="password" value={form.password} onChange={update} required autoComplete="new-password" />
          </label>
          <label>
            {t('register.confirm')}
            <input type="password" name="confirm" value={form.confirm} onChange={update} required autoComplete="new-password" />
          </label>
          {error && <p className="auth-error" role="alert">{t(error)}</p>}
          <button className="auth-button" type="submit" disabled={busy}>
            {busy ? t('register.busy') : t('register.submit')}
          </button>
        </form>
        <p className="auth-switch">
          {t('register.haveAccount')} <Link to="/login">{t('register.loginLink')}</Link>
        </p>
      </section>
    </main>
  );
}