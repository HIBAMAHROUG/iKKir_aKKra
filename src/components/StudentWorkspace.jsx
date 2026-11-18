import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './StudentWorkspace.css'

const questionLabels = ['Réponse 1', 'Réponse 2', 'Réponse 3', 'Réponse 4', 'Réponse 5', 'Réponse 6']

function readStored(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

function StudentWorkspace() {
  const { pathname } = useLocation()
  const [answers, setAnswers] = useState(() => readStored(`student:${pathname}:answers`, ['', '', '', '', '', '']))
  const [words, setWords] = useState(() => readStored(`student:${pathname}:words`, ['', '', '', '', '']))
  const [production, setProduction] = useState(() => readStored(`student:${pathname}:production`, ''))
  const [saved, setSaved] = useState(false)
  const productionMode = /production|rédaction|redaction|writing|écriture|ecriture|en-famille|project|projet/i.test(pathname)
  const saveTimer = useRef(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      document.querySelectorAll('input[type="text"], textarea').forEach((field) => {
        if (!field.placeholder) field.placeholder = 'Écris ta réponse ici…'
      })
    }, 100)

    return () => window.clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    if (saveTimer.current) window.clearTimeout(saveTimer.current)
    saveTimer.current = window.setTimeout(() => {
      localStorage.setItem(`student:${pathname}:answers`, JSON.stringify(answers))
      localStorage.setItem(`student:${pathname}:words`, JSON.stringify(words))
      localStorage.setItem(`student:${pathname}:production`, JSON.stringify(production))
    }, 250)
    return () => window.clearTimeout(saveTimer.current)
  }, [answers, words, production, pathname])

  const isLesson = pathname.startsWith('/courses/') && !pathname.endsWith('/quiz')
  if (!isLesson) return null

  function updateAnswer(index, value) {
    setAnswers((current) => current.map((answer, answerIndex) => answerIndex === index ? value : answer))
  }

  function updateWord(index, value) {
    setWords((current) => current.map((word, wordIndex) => wordIndex === index ? value : word))
  }

  function saveNow() {
    localStorage.setItem(`student:${pathname}:answers`, JSON.stringify(answers))
    localStorage.setItem(`student:${pathname}:words`, JSON.stringify(words))
    localStorage.setItem(`student:${pathname}:production`, JSON.stringify(production))
    setSaved(true)
  }

  function clearWorkspace() {
    if (!window.confirm('Effacer toutes les réponses de cette fiche ?')) return
    setAnswers(['', '', '', '', '', ''])
    setWords(['', '', '', '', ''])
    setProduction('')
    setSaved(false)
  }

  return (
    <aside className="student-workspace" aria-label="Cahier de réponses de l’élève">
      <header className="student-workspace__header">
        <div>
          <p className="eyebrow">Mon cahier</p>
          <h2>Mes réponses</h2>
        </div>
        <span className="student-workspace__badge">Auto-enregistré</span>
      </header>

      <section className="student-workspace__answers">
        <h3>📝 Réponses aux exercices</h3>
        <p>Écris une réponse courte dans chaque case.</p>
        <div className="student-workspace__answer-grid">
          {questionLabels.map((label, index) => (
            <label key={label}>{label}<input value={answers[index]} onChange={(event) => updateAnswer(index, event.target.value)} placeholder="Ma réponse…" /></label>
          ))}
        </div>
      </section>

      {productionMode && (
        <section className="student-workspace__production">
          <h3>✍️ Ma production écrite</h3>
          <p>Construis tes phrases ici. Tu peux utiliser les mots utiles ci-dessous.</p>
          <textarea value={production} onChange={(event) => setProduction(event.target.value)} rows="10" placeholder="Je commence ma production ici…" />
        </section>
      )}

      <section className="student-workspace__words">
        <h3>📚 Mes mots utiles</h3>
        <p>Ajoute les mots difficiles ou les mots que tu veux employer.</p>
        <div className="student-workspace__word-grid">
          {words.map((word, index) => (
            <input key={index} value={word} onChange={(event) => updateWord(index, event.target.value)} aria-label={`Mot utile ${index + 1}`} placeholder={`Mot ${index + 1}`} />
          ))}
        </div>
      </section>

      <div className="student-workspace__actions">
        <button type="button" onClick={saveNow}>💾 Enregistrer</button>
        <button type="button" onClick={() => window.print()}>🖨️ Imprimer</button>
        <button type="button" className="student-workspace__clear" onClick={clearWorkspace}>Effacer</button>
        {saved && <span role="status">Réponses enregistrées.</span>}
      </div>
    </aside>
  )
}

export default StudentWorkspace
