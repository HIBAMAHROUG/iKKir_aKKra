import { Link } from 'react-router-dom';
import { contact } from '../contactInfo';
import { useI18n } from '../i18n/useI18n';
import './InfoPages.css';

const features = [
  { icon: '\u{1F4DA}', k: 'about.f1' },
  { icon: '\u270D\uFE0F', k: 'about.f2' },
  { icon: '\u{1F3AF}', k: 'about.f3' },
  { icon: '\u{1F30D}', k: 'about.f4' },
];

const levels = [
  { to: '/courses/5eme', k: 'level.5' },
  { to: '/courses/6eme', k: 'level.6' },
  { to: '/courses/7eme', k: 'level.7' },
];

const steps = ['about.step1', 'about.step2', 'about.step3'];

export default function About() {
  const { t } = useI18n();
  const name = t('teacher.inline');

  return (
    <main className="info-page">
      <section className="info-hero">
        <p className="info-eyebrow">{t('about.eyebrow')}</p>
        <h1>{t('about.title')}</h1>
        <p>{t('about.intro')}</p>
      </section>

      <section className="info-section">
        <h2>{t('about.missionTitle')}</h2>
        <div className="info-card">
          <p>{t('about.mission1')}</p>
          <p>{t('about.mission2')}</p>
        </div>
      </section>

      <section className="info-section">
        <h2>{t('about.featuresTitle')}</h2>
        <div className="info-grid">
          {features.map((f) => (
            <article className="info-item" key={f.k}>
              <div className="info-icon" aria-hidden="true">{f.icon}</div>
              <h3>{t(`${f.k}.title`)}</h3>
              <p>{t(`${f.k}.text`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="info-section">
        <h2>{t('about.levelsTitle')}</h2>
        <div className="info-levels">
          {levels.map((l) => (
            <Link className="info-level" to={l.to} key={l.to}>
              {t(l.k)}
              <small>{t('level.text')}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="info-section">
        <h2>{t('about.howTitle')}</h2>
        <ol className="info-steps">
          {steps.map((s) => (
            <li key={s}>{t(s)}</li>
          ))}
        </ol>
      </section>

      <section className="info-section">
        <h2>{t('about.whoTitle')}</h2>
        <div className="info-card info-author">
          <div className="info-avatar" aria-hidden="true">{'\u{1F469}\u200D\u{1F3EB}'}</div>
          <div>
            <p><strong>{t('teacher.name')}</strong></p>
            <p>{t('about.whoText')}</p>
            <div className="info-actions">
              <Link className="info-button" to="/contact">{t('common.contactTeacher', { name })}</Link>
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