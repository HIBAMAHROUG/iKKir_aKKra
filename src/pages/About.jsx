import { Link } from 'react-router-dom';
import { contact } from '../contactInfo';
import './InfoPages.css';

const features = [
  { icon: '📚', title: 'Des cours clairs', text: 'Des leçons de français et d’anglais organisées par module, avec des explications simples et des exemples.' },
  { icon: '✍️', title: 'Des exercices corrigés', text: 'Chaque leçon propose des exercices avec leur correction pour comprendre ses erreurs et progresser.' },
  { icon: '🎯', title: 'Des quiz interactifs', text: 'Teste-toi à la fin de chaque module et vois tout de suite ton score.' },
  { icon: '🌍', title: 'Un coup de pouce en arabe', text: 'Dans les leçons d’anglais, le vocabulaire important est traduit en arabe pour mieux retenir.' },
];

const levels = [
  { to: '/courses/5eme', label: '5ème', text: 'Français et anglais' },
  { to: '/courses/6eme', label: '6ème', text: 'Français et anglais' },
  { to: '/courses/7eme', label: '7ème', text: 'Français et anglais' },
];

const steps = [
  'Choisis ton niveau, puis le module que tu veux réviser.',
  'Lis la leçon et fais les exercices à ton rythme.',
  'Consulte la correction, puis passe le quiz pour vérifier ce que tu as retenu.',
];

export default function About() {
  return (
    <main className="info-page">
      <section className="info-hero">
        <p className="info-eyebrow">À propos</p>
        <h1>Ikkir Akkra, apprendre ensemble</h1>
        <p>
          Ikkir Akkra est une plateforme éducative gratuite qui aide les élèves à réviser le français et
          l’anglais avec des leçons simples, des exercices corrigés et des quiz.
        </p>
      </section>

      <section className="info-section">
        <h2>Notre mission</h2>
        <div className="info-card">
          <p>
            Rendre l’apprentissage accessible à tous les élèves. Nous croyons que l’on progresse mieux
            en avançant pas à pas, en s’entraînant régulièrement et en comprenant ses erreurs.
          </p>
          <p>
            Le nom « Ikkir Akkra » exprime cette idée : apprendre, réviser et grandir ensemble, chaque jour.
          </p>
        </div>
      </section>

      <section className="info-section">
        <h2>Ce que tu trouveras ici</h2>
        <div className="info-grid">
          {features.map((f) => (
            <article className="info-item" key={f.title}>
              <div className="info-icon" aria-hidden="true">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="info-section">
        <h2>Nos niveaux</h2>
        <div className="info-levels">
          {levels.map((l) => (
            <Link className="info-level" to={l.to} key={l.to}>
              {l.label}
              <small>{l.text}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="info-section">
        <h2>Comment ça marche</h2>
        <ol className="info-steps">
          {steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="info-section">
        <h2>Qui est derrière Ikkir Akkra ?</h2>
        <div className="info-card info-author">
          <div className="info-avatar" aria-hidden="true">AH</div>
          <div>
            <p><strong>{contact.name}</strong></p>
            <p>Créatrice de la plateforme. Tes remarques et tes idées sont les bienvenues.</p>
            <div className="info-actions">
              <Link className="info-button" to="/contact">Contacter {contact.name}</Link>
              <a className="info-button info-button--alt" href={contact.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}