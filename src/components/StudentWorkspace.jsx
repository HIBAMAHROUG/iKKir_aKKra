import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { api } from '../api'
import { useAuth } from '../auth/useAuth'
import './StudentWorkspace.css'

const missions = [
  { title: 'Le bon verbe', icon: '⭐', sentence: 'Je ___ une histoire.', choices: ['lis', 'lit', 'lire'], answer: 'lis' },
  { title: 'Le bon mot', icon: '🎯', sentence: 'Nous travaillons ___ équipe.', choices: ['en', 'un', 'et'], answer: 'en' },
  { title: 'La bonne action', icon: '🧩', sentence: 'Le policier ___ les citoyens.', choices: ['protège', 'protègent', 'protéger'], answer: 'protège' },
  { title: 'Le bon adjectif', icon: '💡', sentence: 'La fleur est ___.', choices: ['colorée', 'colorer', 'couleur'], answer: 'colorée' },
  { title: 'La bonne liaison', icon: '🔤', sentence: 'D’abord, je lis. ___, je réponds.', choices: ['Ensuite', 'Jamais', 'Hier'], answer: 'Ensuite' },
  { title: 'Le bon temps', icon: '🏆', sentence: 'Demain, je ___ mon devoir.', choices: ['ferai', 'fais', 'faire'], answer: 'ferai' },
]

const sentenceParts = [
  'D’abord,', 'Ensuite,', 'Puis,', 'Enfin,',
  'je travaille avec les autres', 'je suis fier de mon travail',
  'notre quartier devient propre', 'j’aide ma classe',
]

function readStored(key, fallback) {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback } catch { return fallback }
}

function StudentWorkspace() {
  const { pathname } = useLocation()
  const { user } = useAuth()
  const [answers, setAnswers] = useState(() => readStored(`student:${pathname}:game`, [null, null, null, null, null, null]))
  const [builtParts, setBuiltParts] = useState(() => readStored(`student:${pathname}:parts`, []))
  const [saved, setSaved] = useState(false)
  const productionMode = /production|rédaction|redaction|writing|écriture|ecriture|en-famille|project|projet/i.test(pathname)

  const isLesson = pathname.startsWith('/courses/') && !pathname.endsWith('/quiz')
  if (!isLesson) return null

  function chooseAnswer(index, value) {
    setAnswers((current) => current.map((answer, answerIndex) => answerIndex === index ? value : answer))
  }

  function saveNow() {
    localStorage.setItem(`student:${pathname}:game`, JSON.stringify(answers))
    localStorage.setItem(`student:${pathname}:parts`, JSON.stringify(builtParts))
    const stars = answers.filter((answer, index) => answer === missions[index].answer).length
    if (user && stars > 0) {
      api('/progress/workspace', {
        method: 'POST',
        body: JSON.stringify({ quiz: pathname, score: stars, total: 6 }),
      }).catch(() => {})
    }
    setSaved(true)
  }

  function resetGame() {
    if (!window.confirm('Recommencer les jeux de cette fiche ?')) return
    setAnswers([null, null, null, null, null, null])
    setBuiltParts([])
    setSaved(false)
  }

  const stars = answers.filter((answer, index) => answer === missions[index].answer).length

  return (
    <aside className="student-workspace" aria-label="Jeux de réponses de l’élève">
      <header className="student-workspace__header">
        <div><p className="eyebrow">Mini-jeux</p><h2>Choisis ta réponse</h2></div>
        <div className="student-workspace__stars" aria-label={`${stars} étoiles gagnées`}>{[0, 1, 2, 3, 4, 5].map((star) => <span key={star} className={star < stars ? 'is-earned' : ''}>★</span>)}</div>
      </header>

      <div className="student-workspace__missions">
        {missions.map((mission, index) => (
          <section className="student-workspace__mission" key={mission.title}>
            <div className="student-workspace__mission-title"><span>{mission.icon}</span><h3>{index + 1}. {mission.title}</h3></div>
            <p className="student-workspace__sentence-prompt">{mission.sentence}</p>
            <button
              type="button"
              className={`student-workspace__blank${answers[index] ? ' is-filled' : ''}${answers[index] && answers[index] === mission.answer ? ' is-correct' : ''}`}
              onClick={() => chooseAnswer(index, null)}
              aria-label={answers[index] ? `Effacer ${answers[index]}` : 'Blanc vide'}
            >
              {answers[index] || 'Clique sur une carte pour remplir le blanc'}
            </button>
            <div className="student-workspace__choices">
              {mission.choices.map((choice) => (
                <button type="button" key={choice} aria-pressed={answers[index] === choice} className={answers[index] === choice ? 'is-selected' : ''} onClick={() => chooseAnswer(index, choice)}>{choice}</button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {productionMode && (
        <section className="student-workspace__builder">
          <h3>✍️ Construis une phrase avec les cartes</h3>
          <p>Appuie sur les cartes dans l’ordre. Aucun clavier n’est nécessaire.</p>
          <div className="student-workspace__sentence" aria-live="polite">
            {builtParts.length ? builtParts.join(' ') : 'Ta phrase apparaîtra ici.'}
          </div>
          <div className="student-workspace__parts">
            {sentenceParts.map((part) => <button type="button" key={part} onClick={() => setBuiltParts((current) => [...current, part])}>{part}</button>)}
          </div>
          <button type="button" className="student-workspace__undo" onClick={() => setBuiltParts((current) => current.slice(0, -1))}>↩️ Retirer la dernière carte</button>
        </section>
      )}

      <div className="student-workspace__actions">
        <button type="button" onClick={saveNow}>💾 Sauvegarder mon jeu</button>
        <button type="button" onClick={() => window.print()}>🖨️ Imprimer</button>
        <button type="button" className="student-workspace__clear" onClick={resetGame}>Recommencer</button>
        {saved && <span role="status">Bravo ! Tes choix sont sauvegardés.</span>}
      </div>
    </aside>
  )
}

export default StudentWorkspace
