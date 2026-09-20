import { Link } from 'react-router-dom';

import { contact } from '../contactInfo';
import './SiteFooter.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          
          <h2>Ikkir Akkra</h2>
          <p>Apprendre ensemble, progresser chaque jour.</p>
          <p className="site-footer__note">Cours de français et d’anglais avec exercices corrigés et quiz.</p>
        </div>

        <nav aria-label="Navigation">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/courses">Cours</Link></li>
            <li><Link to="/levels">Niveaux</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Niveaux">
          <h3>Niveaux</h3>
          <ul>
            <li><Link to="/courses/5eme">5ème</Link></li>
            <li><Link to="/courses/6eme">6ème</Link></li>
            <li><Link to="/courses/7eme">7ème</Link></li>
          </ul>
        </nav>

        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li><Link to="/contact">Écrire à {contact.name}</Link></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {year} Ikkir Akkra. Tous droits réservés.</p>
        <p>Créé avec ❤️ par {contact.name}</p>
      </div>
    </footer>
  );
}