import { useState } from 'react';
import { contact } from '../contactInfo';
import { useI18n } from '../i18n/useI18n';
import './InfoPages.css';

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: '', subject: '', message: '' });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = form.subject.trim() || t('contact.defaultSubject');
    const body = `${form.message.trim()}\n\n\u2014 ${form.name.trim()}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="info-page">
      <section className="info-hero">
        <p className="info-eyebrow">{t('contact.eyebrow')}</p>
        <h1>{t('common.contactTeacher', { name: t('teacher.inline') })}</h1>
        <p>{t('contact.intro')}</p>
      </section>

      <div className="contact-layout">
        <section className="info-card">
          <h2>{t('contact.detailsTitle')}</h2>
          <ul className="contact-list">
            <li>
              <span className="contact-label">{t('contact.name')}</span>
              <span>{t('teacher.name')}</span>
            </li>
            <li>
              <span className="contact-label">{t('contact.email')}</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span className="contact-label">{t('contact.facebook')}</span>
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
                {t('contact.facebookLink')}
              </a>
            </li>
          </ul>
          <div className="info-actions">
            <a className="info-button" href={`mailto:${contact.email}`}>{t('contact.sendEmail')}</a>
            <a className="info-button info-button--alt" href={contact.facebook} target="_blank" rel="noopener noreferrer">
              {t('contact.openFacebook')}
            </a>
          </div>
        </section>

        <section className="info-card">
          <h2>{t('contact.formTitle')}</h2>
          <form className="contact-form" onSubmit={submit}>
            <label>
              {t('contact.yourName')}
              <input name="name" value={form.name} onChange={update} required autoComplete="name" />
            </label>
            <label>
              {t('contact.subject')}
              <input name="subject" value={form.subject} onChange={update} placeholder={t('contact.subjectPh')} />
            </label>
            <label>
              {t('contact.message')}
              <textarea name="message" value={form.message} onChange={update} required />
            </label>
            <button className="info-button" type="submit">{t('contact.send')}</button>
            <p className="contact-hint">{t('contact.hint')}</p>
          </form>
        </section>
      </div>
    </main>
  );
}