import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { useI18n } from '../i18n/useI18n';
import './AuthNav.css';

export default function AuthNav() {
  const { user, logout } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="auth-nav">
        <Link className="auth-nav__link" to="/login">{t('nav.login')}</Link>
        <Link className="auth-nav__cta" to="/register">{t('nav.register')}</Link>
      </div>
    );
  }

  return (
    <div className="auth-nav">
      <Link className="auth-nav__link" to="/profile">{'\u{1F464}'} {user.name}</Link>
      <button
        type="button"
        className="auth-nav__cta"
        onClick={() => {
          logout();
          navigate('/');
        }}
      >
        {t('nav.logout')}
      </button>
    </div>
  );
}