import { Link } from 'react-router-dom';

import { contact } from '../contactInfo';
import { useI18n } from '../i18n/useI18n';
import './SiteFooter.css';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const name = t('teacher.inline');

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          
          <h2>Ikkir Akkra</h2>
          <p>{t('footer.tagline')}</p>
          <p className="site-footer__note">{t('footer.note')}</p>
        </div>

        <nav aria-label={t('footer.navigation')}>
          <h3>{t('footer.navigation')}</h3>
          <ul>
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/courses">{t('nav.courses')}</Link></li>
            <li><Link to="/levels">{t('nav.levels')}</Link></li>
            <li><Link to="/about">{t('nav.about')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
          </ul>
        </nav>

        <nav aria-label={t('footer.levels')}>
          <h3>{t('footer.levels')}</h3>
          <ul>
            <li><Link to="/courses/5eme">{t('level.5')}</Link></li>
            <li><Link to="/courses/6eme">{t('level.6')}</Link></li>
            <li><Link to="/courses/7eme">{t('level.7')}</Link></li>
          </ul>
        </nav>

        <div>
          <h3>{t('footer.contact')}</h3>
          <ul>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li><Link to="/contact">{t('footer.writeTo', { name })}</Link></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>{t('footer.rights', { year })}</p>
        <p>{t('footer.madeBy', { name })}</p>
      </div>
    </footer>
  );
}