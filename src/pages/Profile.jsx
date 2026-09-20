import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { getResults } from '../db/results';
import './Auth.css';

export default function Profile() {
  const { user, logout, deleteAccount } = useAuth();
  const navigate = useNavigate();
  const results = useMemo(() => (user ? getResults(user.id) : []), [user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDelete = () => {
    if (window.confirm('Supprimer ton compte et tous tes résultats ? Cette action est définitive.')) {
      deleteAccount();
      navigate('/');
    }
  };

  return (
    <main className="auth-page auth-page--wide">
      <section className="auth-card">
        <h1>Bonjour {user.name} 👋</h1>
        <p className="auth-lead">{user.email}</p>
        <div className="auth-actions">
          <Link className="auth-button" to="/courses">Continuer mes cours</Link>
          <button type="button" className="auth-button auth-button--alt" onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
      </section>

      <section className="auth-card">
        <h2>Mes résultats de quiz</h2>
        {results.length === 0 ? (
          <p className="auth-lead">Aucun résultat pour l’instant. Passe un quiz pour le voir apparaître ici.</p>
        ) : (
          <div className="auth-table-wrap">
            <table className="auth-table">
              <thead>
                <tr><th>Quiz</th><th>Score</th><th>Date</th></tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r.id}>
                    <td>{r.quiz}</td>
                    <td>{r.score} / {r.total}</td>
                    <td>{new Date(r.createdAt).toLocaleDateString('fr-FR')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="auth-card auth-danger">
        <h2>Zone sensible</h2>
        <p className="auth-lead">Supprime ton compte et toutes les données enregistrées sur cet appareil.</p>
        <button type="button" className="auth-button auth-button--danger" onClick={handleDelete}>
          Supprimer mon compte
        </button>
      </section>
    </main>
  );
}