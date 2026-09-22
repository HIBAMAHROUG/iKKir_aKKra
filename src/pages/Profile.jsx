import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { getResults } from '../db/results';
import { useI18n } from '../i18n/useI18n';
import './Auth.css';

export default function Profile() {
  const { user, logout, deleteAccount } = useAuth();
  const { t, locale } = useI18n();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (user) getResults().then(setResults).catch(() => setResults([]));
  }, [user]);

  const handleLogout = () => {
    logout().then(() => navigate('/'));
  };

  const handleDelete = () => {
    if (window.confirm(t('profile.confirmDelete'))) {
      deleteAccount().then(() => navigate('/'));
    }
  };

  return (
    <main className="auth-page auth-page--wide">
      <section className="auth-card">
        <h1>{t('profile.hello', { name: user.name })}</h1>
        <p className="auth-lead">{user.email}</p>
        <div className="auth-actions">
          <Link className="auth-button" to="/courses">{t('profile.continue')}</Link>
          <button type="button" className="auth-button auth-button--alt" onClick={handleLogout}>
            {t('profile.logout')}
          </button>
        </div>
      </section>

      <section className="auth-card">
        <h2>{t('profile.results')}</h2>
        {results.length === 0 ? (
          <p className="auth-lead">{t('profile.noResults')}</p>
        ) : (
          <div className="auth-table-wrap">
            <table className="auth-table">
              <thead>
                <tr>
                  <th>{t('profile.colQuiz')}</th>
                  <th>{t('profile.colScore')}</th>
                  <th>{t('profile.colDate')}</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r.id}>
                    <td>{r.quiz}</td>
                    <td>{r.score} / {r.total}</td>
                    <td>{new Date(r.createdAt).toLocaleDateString(locale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="auth-card auth-danger">
        <h2>{t('profile.danger')}</h2>
        <p className="auth-lead">{t('profile.dangerText')}</p>
        <button type="button" className="auth-button auth-button--danger" onClick={handleDelete}>
          {t('profile.delete')}
        </button>
      </section>
    </main>
  );
}