import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './FrenchPresent.css'

const questions = [
  ['Nous ___ les participants.', ['applaudissons', 'applaudissez', 'applaudissent'], 0],
  ['Tu ___ ranger ta chambre.', ['veux', 'veut', 'voulez'], 0],
  ['Vous ___ la cuisine.', ['nettoyez', 'nettoies', 'nettoient'], 0],
  ['Les enfants ___ leur petit déjeuner.', ['prend', 'prennent', 'prenons'], 1],
  ['Je ___ une pente.', ['descends', 'descend', 'descendons'], 0],
  ['Mon père ___ en haut de la piste.', ['se prépare', 'se prépares', 'se préparons'], 0],
  ['Nous ___ des fleurs.', ['mettons', 'mettez', 'mettent'], 0],
  ['Je ___ mon chat contre moi.', ['prends', 'prend', 'prenons'], 0],
  ['Le présent peut exprimer...', ['une vérité générale', 'seulement le passé', 'seulement le futur'], 0],
  ['« Ils finissent » appartient au...', ['1er groupe', '2e groupe', '3e groupe'], 1],
  ['« Vous faites » vient du verbe...', ['faire', 'prendre', 'aller'], 0],
  ['« Je peux » vient du verbe...', ['pouvoir', 'vouloir', 'venir'], 0],
  ['« Nous allons » vient du verbe...', ['avoir', 'être', 'aller'], 2],
  ['La terminaison de nous au 1er groupe est...', ['-ons', '-ez', '-ent'], 0],
  ['La terminaison de ils au 2e groupe est...', ['-issent', '-issons', '-issez'], 0],
  ['« Elle est » vient du verbe...', ['être', 'avoir', 'aller'], 0],
  ['« J’ai » vient du verbe...', ['faire', 'avoir', 'savoir'], 1],
  ['« Ils prennent » est au...', ['présent', 'futur', 'infinitif'], 0],
  ['« Tu veux » vient du verbe...', ['voir', 'vouloir', 'venir'], 1],
  ['« Les oiseaux chantent » exprime...', ['une vérité ou habitude', 'une question', 'un ordre'], 0],
]

function FrenchPresentQuiz() {
  const { level = '7eme' } = useParams()
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)

  return (
    <div className="present-page present-quiz-page">
      <header className="present-heading"><p className="eyebrow">Français · conjugaison</p><h1>Évaluation : présent de l’indicatif</h1><p>20 questions · 1 point par bonne réponse · total /20.</p></header>
      <section className="present-quiz-box">
        {questions.map((item, index) => <fieldset className="present-question" key={item[0]}><legend>{index + 1}. {item[0]}</legend>{item[1].map((option, optionIndex) => <label key={option}><input type="radio" name={`present-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}</fieldset>)}
        <button className="present-button" type="button" onClick={() => setSubmitted(true)}>Corriger le quiz</button>
        {submitted && <div className="present-score"><strong>Ta note : {score}/20</strong><span>{score >= 16 ? 'Excellent travail !' : score >= 10 ? 'Bon travail, continue tes efforts.' : 'Relis la leçon et réessaie.'}</span></div>}
      </section>
      <Link className="present-quiz-link" to={`/courses/${level}`}>Retour au niveau →</Link>
    </div>
  )
}

export default FrenchPresentQuiz
