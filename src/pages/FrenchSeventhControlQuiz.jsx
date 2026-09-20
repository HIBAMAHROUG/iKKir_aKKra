import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FrenchPresent.css'

const questions = [
  ['Le texte parle principalement...', ['du père', 'de la mère', 'd’un professeur'], 1],
  ['La maman prépare notamment...', ['la soupe', 'un voyage', 'un spectacle'], 0],
  ['Le narrateur éprouve pour sa mère...', ['de l’indifférence', 'de l’admiration et de la tendresse', 'de la colère'], 1],
  ['Une besogne est...', ['un travail', 'un vêtement', 'un marché'], 0],
  ['La mère veille à ce que...', ['rien ne manque', 'personne ne parle', 'l’école ferme'], 0],
  ['Dans « L’enfant regarde sa maman », le verbe correct est...', ['voir', 'regarder', 'regardé'], 1],
  ['« Le travail du père leur donne la vie » répond à...', ['Où ?', 'Quel travail leur donne la vie ?', 'Quand ?'], 1],
  ['L’impératif de « tu regardes » est...', ['Regarde !', 'Regardes !', 'Regardez !'], 0],
  ['Hier, le boulanger...', ['se dépêche', 's’est dépêché', 'se dépêcher'], 1],
  ['___ avec l’ordinateur que Thomas corrige ___ fautes.', ['C’est / ses', 'S’est / ces', 'Ce / ses'], 0],
  ['« ces livres » est correct lorsque les livres sont...', ['désignés', 'possédés par quelqu’un', 'des verbes'], 0],
  ['Le raccommodage consiste à...', ['réparer un vêtement', 'préparer une soupe', 'balayer une cour'], 0],
  ['« Quelle maman courageuse ! » est une phrase...', ['interrogative', 'exclamative', 'négative'], 1],
  ['Au présent : « Les campeurs ___ découvrir le lieu. »', ['préfèrent', 'ont préféré', 'préférer'], 0],
  ['Au passé composé : « Le policier ___ au piéton... »', ['interdit', 'a interdit', 'interdire'], 1],
  ['Le travail de la mère consiste à...', ['ordonner la vie familiale', 'vendre des livres', 'conduire un autobus'], 0],
  ['« s’est dépêché » contient...', ['se + est', 'ce + est', 'ses + ait'], 0],
  ['Le narrateur est reconnaissant parce que sa mère...', ['s’occupe de sa vie', 'l’empêche de dormir', 'quitte la maison'], 0],
  ['« l’épicier » désigne...', ['une personne qui vend des produits', 'un vêtement', 'une pièce de la maison'], 0],
  ['Le devoir comporte...', ['10 points seulement', '20 points : compréhension et langue', '30 points de vocabulaire'], 1],
]

function FrenchSeventhControlQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)
  return <div className="present-page present-quiz-page"><header className="present-heading"><p className="eyebrow">Français · 7e année</p><h1>Évaluation interactive · Devoir n°1</h1><p>20 questions · 1 point par bonne réponse · total /20.</p></header><section className="present-quiz-box">{questions.map((item, index) => <fieldset className="present-question" key={item[0]}><legend>{index + 1}. {item[0]}</legend>{item[1].map((option, optionIndex) => <label key={option}><input type="radio" name={`control-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}</fieldset>)}<button className="present-button" type="button" onClick={() => setSubmitted(true)}>Corriger le devoir</button>{submitted && <div className="present-score" role="status"><strong>Ta note : {score}/20</strong><span>{score >= 16 ? 'Excellent travail !' : score >= 10 ? 'Bon travail, continue tes efforts.' : 'Relis le texte et réessaie.'}</span></div>}</section><Link className="present-quiz-link" to="/courses/7eme">Retour au niveau 7e →</Link></div>
}

export default FrenchSeventhControlQuiz