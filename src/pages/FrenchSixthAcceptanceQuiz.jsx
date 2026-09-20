import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ModuleSix.css'

const questions = [
  ['Accepter les autres signifie...', ['les rejeter', 'respecter leurs différences', 'se moquer d’eux'], 1],
  ['Une différence culturelle peut être...', ['la langue ou une tradition', 'la taille seulement', 'la couleur des yeux'], 0],
  ['Tendre la main signifie...', ['aider', 'insulter', 'refuser'], 0],
  ['Dans « une meilleure amie », l’adjectif est...', ['attribut', 'épithète', 'un verbe'], 1],
  ['Dans « la voisine est curieuse », curieuse est...', ['épithète', 'attribut', 'un nom'], 1],
  ['« Nous sommes » est au...', ['présent', 'passé composé', 'futur'], 0],
  ['« Elles seront gaies » est au...', ['présent', 'passé composé', 'futur'], 2],
  ['« Nous avons été heureux » est au...', ['présent', 'passé composé', 'futur'], 1],
  ['On écrit : Les infirmières ___ gentilles.', ['son', 'sont', 'sons'], 1],
  ['On écrit : Omar aide ___ voisin.', ['sont', 'son', 'sons'], 1],
  ['Un synonyme de respecter est...', ['honorer', 'humilier', 'ridiculiser'], 0],
  ['Le contraire de généreux est...', ['solidaire', 'égoïste', 'poli'], 1],
  ['Un verbe pour introduire une question est...', ['demander', 'murmurer', 'hurler'], 0],
  ['Un verbe pour parler à voix basse est...', ['crier', 'chuchoter', 'ordonner'], 1],
  ['La solidarité consiste à...', ['s’aider', 'se rejeter', 'se moquer'], 0],
  ['Une personne non-voyante...', ['ne peut pas voir', 'ne peut pas parler', 'ne peut pas entendre'], 0],
  ['Dans un récit, un dialogue doit être introduit par...', ['des verbes introducteurs', 'des chiffres', 'un tableau'], 0],
  ['« Il a été courageux » est au...', ['présent', 'passé composé', 'futur'], 1],
  ['« Je serai aviatrice » est au...', ['présent', 'passé composé', 'futur'], 2],
  ['« L’union fait la force » exprime...', ['la solidarité', 'la méchanceté', 'le rejet'], 0],
]

function FrenchSixthAcceptanceQuiz() { const [selected, setSelected] = useState({}); const [submitted, setSubmitted] = useState(false); const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0); return <div className="module-page"><div className="module-heading"><p className="eyebrow">Français · 6e année</p><h1>Quiz : Accepter les autres</h1><p>20 questions · total /20.</p></div><section className="quiz-section">{questions.map((item, index) => <fieldset className="quiz-question" key={item[0]}><legend>{index + 1}. {item[0]}</legend>{item[1].map((option, optionIndex) => <label key={option}><input type="radio" name={`acceptance-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}</fieldset>)}<button className="quiz-button" type="button" onClick={() => setSubmitted(true)}>Corriger le quiz</button>{submitted && <div className="score-box" role="status"><strong>Ta note : {score}/20</strong><span>{score >= 16 ? 'Excellent travail !' : score >= 10 ? 'Bon travail !' : 'Relis la fiche et réessaie.'}</span></div>}</section><Link className="button-link" to="/courses/6eme">Retour au niveau 6e</Link></div> }

export default FrenchSixthAcceptanceQuiz