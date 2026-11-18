import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { getResults } from '../db/results';
import { api } from '../api';
import { contact } from '../contactInfo';
import { useI18n } from '../i18n/useI18n';
import './Auth.css';

const levelNames = { '5eme': '5e année', '6eme': '6e année', '7eme': '7e année' };

export default function Profile() {
  const { user, logout, deleteAccount } = useAuth();
  const { t, locale } = useI18n();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [messages, setMessages] = useState([]);
  const [level, setLevel] = useState(user?.level || '5eme');
  const [subject, setSubject] = useState('Question pour mon enseignant');
  const [body, setBody] = useState('');
  const [messageStatus, setMessageStatus] = useState('');
  const [inbox, setInbox] = useState([]);

  useEffect(() => {
    if (user) {
      getResults().then(setResults).catch(() => setResults([]));
      api('/messages').then(setMessages).catch(() => setMessages([]));
      if (user.email.toLowerCase() === contact.email.toLowerCase()) {
        api('/messages/inbox').then(setInbox).catch(() => setInbox([]));
      }
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDelete = () => {
    if (window.confirm(t('profile.confirmDelete'))) {
      deleteAccount();
      navigate('/');
    }
  };

  async function changeLevel(nextLevel) {
    try {
      await api('/profile/level', { method: 'PUT', body: JSON.stringify({ level: nextLevel }) });
      setLevel(nextLevel);
      window.location.reload();
    } catch (error) {
      setMessageStatus(error.message);
    }
  }

  async function sendMessage(event) {
    event.preventDefault();
    setMessageStatus('');
    try {
      const message = await api('/messages', {
        method: 'POST',
        body: JSON.stringify({ subject, body, recipientEmail: contact.email }),
      });
      setMessages((current) => [message, ...current]);
      setBody('');
      setMessageStatus('Message envoyé à ton enseignant.');
    } catch (error) {
      setMessageStatus(error.message);
    }
  }

  const quizPoints = results.reduce((total, item) => total + item.score, 0);
  const totalPoints = Number(user?.points || quizPoints);

  return (
    <main className="auth-page auth-page--wide">
      <section className="auth-card">
        <h1>Bonjour {user.name} !</h1>
        <p className="auth-lead"><strong>{user.email}</strong></p>
        <div className="auth-actions">
          <Link className="auth-button" to={`/courses/${level}`}>📚 Ouvrir mon niveau : {levelNames[level]}</Link>
          <button type="button" className="auth-button auth-button--alt" onClick={handleLogout}>{t('profile.logout')}</button>
        </div>
      </section>

      <section className="auth-card">
        <h2>Mon niveau</h2>
        <p className="auth-lead">Ton espace ouvre uniquement ton niveau scolaire.</p>
        <div className="auth-actions">
          {['5eme', '6eme', '7eme'].map((option) => (
            <button key={option} type="button" className={`auth-button ${level === option ? '' : 'auth-button--alt'}`} onClick={() => changeLevel(option)}>{levelNames[option]}</button>
          ))}
        </div>
      </section>

      <section className="auth-card">
        <h2>Ma progression</h2>
        <p className="profile-score"><strong>{totalPoints}</strong> points</p>
        <p className="auth-lead">Tes points viennent des quiz et des exercices terminés.</p>
        {results.length === 0 ? <p className="auth-lead">Aucun quiz enregistré pour le moment.</p> : (
          <div className="auth-table-wrap">
            <table className="auth-table">
              <thead><tr><th>Travail</th><th>Score</th><th>Date</th></tr></thead>
              <tbody>{results.map((r) => <tr key={r.id}><td>{r.quiz}</td><td>{r.score} / {r.total}</td><td>{new Date(r.createdAt).toLocaleDateString(locale)}</td></tr>)}</tbody>
            </table>
          </div>
        )}
      </section>

      <section className="auth-card">
        <h2>Messagerie avec {contact.name}</h2>
        <p className="auth-lead">Adresse : <strong>{contact.email}</strong></p>
        <form className="auth-form" onSubmit={sendMessage}>
          <label>Sujet<input value={subject} onChange={(event) => setSubject(event.target.value)} maxLength="120" required /></label>
          <label>Mon message<textarea value={body} onChange={(event) => setBody(event.target.value)} rows="5" maxLength="3000" required /></label>
          <button className="auth-button" type="submit">Envoyer le message</button>
        </form>
        {messageStatus && <p className="auth-lead" role="status">{messageStatus}</p>}
        {messages.length > 0 && <div className="auth-table-wrap"><h3>Mes messages envoyés</h3>{messages.map((message) => <article className="profile-message" key={message.id}><strong>{message.subject}</strong><p>{message.body}</p><small>{new Date(message.createdAt).toLocaleString(locale)}</small></article>)}</div>}
      </section>

      {user.email.toLowerCase() === contact.email.toLowerCase() && (
        <section className="auth-card">
          <h2>Boîte de réception enseignant</h2>
          {inbox.length === 0 ? <p className="auth-lead">Aucun message reçu.</p> : inbox.map((message) => (
            <article className="profile-message" key={message.id}>
              <strong>{message.subject}</strong>
              <p>{message.body}</p>
              <small>De {message.senderName} — {message.senderEmail} — {message.senderLevel} — {new Date(message.createdAt).toLocaleString(locale)}</small>
            </article>
          ))}
        </section>
      )}

      <section className="auth-card auth-danger">
        <h2>{t('profile.danger')}</h2>
        <p className="auth-lead">{t('profile.dangerText')}</p>
        <button type="button" className="auth-button auth-button--danger" onClick={handleDelete}>{t('profile.delete')}</button>
      </section>
    </main>
  );
}
