import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import './AuthNav.css';

export default function AuthNav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="auth-nav">
        <Link className="auth-nav__link" to="/login">Connexion</Link>
        <Link className="auth-nav__cta" to="/register">Inscription</Link>
      </div>
    );
  }

  return (
    <div className="auth-nav">
      <Link className="auth-nav__link" to="/profile">👤 {user.name}</Link>
      <button
        type="button"
        className="auth-nav__cta"
        onClick={() => {
          logout();
          navigate('/');
        }}
      >
        Déconnexion
      </button>
    </div>
  );
}