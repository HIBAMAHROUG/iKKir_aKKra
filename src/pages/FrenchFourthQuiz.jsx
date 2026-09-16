import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FrenchFourth.css'

const questions = [
  { q: 'Nous ___ à l’école.', options: ['allons', 'allez', 'vont'], answer: 0 },
  { q: 'Vous ___ fatigués.', options: ['êtes', 'sommes', 'sont'], answer: 0 },
  { q: 'Ils ___ un chien.', options: ['a', 'ont', 'avez'], answer: 1 },
  { q: 'Je vais ___ boulanger.', options: ['à la', 'au', 'chez le'], answer: 2 },
  { q: 'Nous ___ du sport.', options: ['faisons', 'faites', 'font'], answer: 0 },
  { q: 'Tu ___ ton cartable.', options: ['mets', 'met', 'mettez'], answer: 0 },
  { q: 'C’est ___ vélo : il est à moi.', options: ['ma', 'mon', 'mes'], answer: 1 },
  { q: 'Ils ___ leurs devoirs.', options: ['finissent', 'finis', 'finissez'], answer: 0 },
  { q: 'Une fille ___ .', options: ['courageux', 'courageuse', 'courageuses'], answer: 1 },
  { q: 'Après “chez”, on place généralement...', options: ['une personne', 'un adjectif', 'un verbe conjugué'], answer: 0 },
]

function FrenchFourthQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item.answer ? 2 : 0), 0)

  return (
    <div className="fourth-page fourth-quiz-page">
      <header className="fourth-heading">
        <p className="eyebrow">Français · 5th form</p>
        <h1>Évaluation de remédiation</h1>
        <p>Quiz séparé · 10 questions · 2 points par bonne réponse · total /20.</p>
      </header>
      <section className="fourth-quiz-box">
        {questions.map((item, index) => (
          <fieldset className="fourth-question" key={item.q}>
            <legend>{index + 1}. {item.q}</legend>
            {item.options.map((option, optionIndex) => <label key={option}><input type="radio" name={`french-fourth-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}
          </fieldset>
        ))}
        <button className="fourth-button" type="button" onClick={() => setSubmitted(true)}>Corriger le quiz</button>
        {submitted && <div className="fourth-score"><strong>Ta note : {score}/20</strong><span>{score >= 16 ? 'Excellent travail !' : score >= 10 ? 'Bon travail, continue tes révisions.' : 'Relis les leçons et réessaie.'}</span></div>}
      </section>
      <Link className="quiz-link" to="/courses/5eme">Retour au 5th form →</Link>
    </div>
  )
}

export default FrenchFourthQuiz
