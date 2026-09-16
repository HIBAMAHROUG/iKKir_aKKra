import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FrenchPresent.css'

const questions = [
  ['Le passé composé se forme avec...', ['un auxiliaire au présent + participe passé', 'un infinitif seul', 'un adjectif'], 0],
  ['Nous ___ à une fête.', ['avons participé', 'sommes participer', 'avons participer'], 0],
  ['Elle ___ la fenêtre.', ['a ouvrir', 'a ouvert', 'est ouvrir'], 1],
  ['Ils ___ les cadeaux.', ['ont choisi', 'sont choisir', 'ont choisir'], 0],
  ['Les filles sont ___ .', ['parti', 'parties', 'partis'], 1],
  ['Je ___ mon exposé.', ['ai fait', 'suis faire', 'ai faire'], 0],
  ['Le bateau ___ sur les rochers.', ['s’est brisé', 'a se brisé', 'est briser'], 0],
  ['Nous ___ sous le parasol.', ['nous sommes allongés', 'avons allonger', 'sommes allonger'], 0],
  ['Tu ___ tôt ce matin.', ['t’es levé(e)', 'as se levé', 'es lever'], 0],
  ['Un verbe pronominal utilise...', ['un pronom réfléchi', 'un déterminant', 'un nom propre'], 0],
  ['Je ___ les dents.', ['me suis brossé(e)', 'ai me brossé', 'suis brosser'], 0],
  ['Elles ___ dans les rues.', ['se sont promenées', 'ont se promener', 'sont promener'], 0],
  ['“Méfions-nous !” est...', ['un impératif', 'un futur', 'un infinitif'], 0],
  ['Le participe passé de “faire” est...', ['fait', 'faisé', 'fais'], 0],
  ['Le participe passé de “choisir” est...', ['choisi', 'choisit', 'choisir'], 0],
  ['Le participe passé de “téléphoner” est...', ['téléphoné', 'téléphone', 'téléphoner'], 0],
  ['Avec être, le participe passé...', ['s’accorde avec le sujet', 'ne change jamais', 'devient un infinitif'], 0],
  ['“Elles se sont promenées” est au...', ['passé composé', 'présent', 'futur'], 0],
  ['“Nous avons lu” utilise l’auxiliaire...', ['avoir', 'être', 'aller'], 0],
  ['“Je suis sorti(e)” utilise l’auxiliaire...', ['avoir', 'être', 'faire'], 1],
]

function FrenchSeventhPastQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)

  return (
    <div className="present-page present-quiz-page">
      <header className="present-heading"><p className="eyebrow">Français · 7th form</p><h1>Évaluation : passé composé</h1><p>20 questions · 1 point par bonne réponse · total /20.</p></header>
      <section className="present-quiz-box">
        {questions.map((item, index) => <fieldset className="present-question" key={item[0]}><legend>{index + 1}. {item[0]}</legend>{item[1].map((option, optionIndex) => <label key={option}><input type="radio" name={`past-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}</fieldset>)}
        <button className="present-button" type="button" onClick={() => setSubmitted(true)}>Corriger le quiz</button>
        {submitted && <div className="present-score"><strong>Ta note : {score}/20</strong><span>{score >= 16 ? 'Excellent travail !' : score >= 10 ? 'Bon travail, continue tes efforts.' : 'Relis la leçon et réessaie.'}</span></div>}
      </section>
      <Link className="present-quiz-link" to="/courses/7eme">Retour au 7th form →</Link>
    </div>
  )
}

export default FrenchSeventhPastQuiz
