import { useState } from 'react';
import { contact } from '../contactInfo';
import './InfoPages.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = form.subject.trim() || 'Message depuis Ikkir Akkra';
    const body = `${form.message.trim()}\n\n— ${form.name.trim()}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="info-page">
      <section className="info-hero">
        <p className="info-eyebrow">Contact</p>
        <h1>Contacter {contact.name}</h1>
        <p>
          Une question, une erreur repérée dans un cours ou une idée de nouvelle leçon ? Écris-moi, je te répondrai dès que possible.
        </p>
      </section>

      <div className="contact-layout">
        <section className="info-card">
          <h2>Mes coordonnées</h2>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Nom</span>
              <span>{contact.name}</span>
            </li>
            <li>
              <span className="contact-label">Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span className="contact-label">Facebook</span>
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
                Ma page Facebook
              </a>
            </li>
          </ul>
          <div className="info-actions">
            <a className="info-button" href={`mailto:${contact.email}`}>Envoyer un email</a>
            <a className="info-button info-button--alt" href={contact.facebook} target="_blank" rel="noopener noreferrer">
              Ouvrir Facebook
            </a>
          </div>
        </section>

        <section className="info-card">
          <h2>Envoyer un message</h2>
          <form className="contact-form" onSubmit={submit}>
            <label>
              Ton nom
              <input name="name" value={form.name} onChange={update} required autoComplete="name" />
            </label>
            <label>
              Sujet
              <input name="subject" value={form.subject} onChange={update} placeholder="Ex. : une question sur le cours de 6ème" />
            </label>
            <label>
              Message
              <textarea name="message" value={form.message} onChange={update} required />
            </label>
            <button className="info-button" type="submit">Envoyer</button>
            <p className="contact-hint">
              Le bouton ouvre ton application de messagerie avec le message déjà rédigé : il te reste à l’envoyer.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}