import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ModuleSix.css'

const questions = [
  ['Dans « une voiture », « une » est...', ['un nom propre', 'un déterminant', 'un pronom'], 1],
  ['Dans « Jacques écoute », Jacques est...', ['un nom propre', 'un déterminant', 'un verbe'], 0],
  ['Quel pronom remplace « Aline » ?', ['ils', 'elle', 'nous'], 1],
  ['Quel est le GN dans « Mon père aime les films » ?', ['aime', 'Mon père', 'les'], 1],
  ['Quel est l’impératif de « écouter » avec tu ?', ['Écoute !', 'Écoutes !', 'Écoutez !'], 0],
  ['« Soyons solidaires ! » correspond à...', ['tu', 'nous', 'vous'], 1],
  ['Après « pour », on utilise...', ['un infinitif', 'un impératif', 'un nom propre'], 0],
  ['« La famille va ___ » :', ['campe', 'camper', 'campée'], 1],
  ['« Hier, il ___ » appelle généralement...', ['le présent', 'le passé composé', 'le futur'], 1],
  ['Quelle forme est correcte ?', ['ils admirent', 'ils admirer', 'ils admirés'], 0],
  ['Le déterminant de « ___ enfant » peut être...', ['un', 'une', 'des'], 0],
  ['« Nous avons apporté » est au...', ['présent', 'passé composé', 'futur'], 1],
  ['L’impératif de « prendre » avec vous est...', ['Prenons !', 'Prends !', 'Prenez !'], 2],
  ['Dans « s’est inscrit », le verbe est au...', ['passé composé', 'futur', 'présent'], 0],
  ['« Demain, ils ___ » :', ['arracheront', 'arrachaient', 'ont arraché'], 0],
  ['Quel mot est un pronom personnel ?', ['ses', 'elle', 'cette'], 1],
  ['« Ne fais pas de bruit ! » est...', ['une phrase impérative', 'une phrase nominale', 'une phrase interrogative'], 0],
  ['Complète : « Le photographe ___ une photo. »', ['prendra', 'prendre', 'prendront'], 0],
  ['Dans « les vieux films », le nom commun est...', ['les', 'vieux', 'films'], 2],
  ['L’infinitif de « ils visitent » est...', ['visiter', 'visités', 'visitez'], 0],
]

function FrenchSixthRevisionQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, question, index) => sum + (selected[index] === question[2] ? 1 : 0), 0)
  return <div className="module-page"><div className="module-heading"><p className="eyebrow">Français · 6e année</p><h1>Quiz : Modules 1 &amp; 2</h1><p>20 questions · 1 point par bonne réponse · total /20.</p></div><section className="quiz-section">{questions.map((question, index) => <fieldset className="quiz-question" key={question[0]}><legend>{index + 1}. {question[0]}</legend>{question[1].map((option, optionIndex) => <label key={option}><input type="radio" name={`sixth-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}</fieldset>)}<button className="quiz-button" type="button" onClick={() => setSubmitted(true)}>Corriger le quiz</button>{submitted && <div className="score-box" role="status"><strong>Ta note : {score}/20</strong><span>{score >= 16 ? 'Excellent travail !' : score >= 10 ? 'Bon travail, continue tes révisions.' : 'Relis la fiche et réessaie.'}</span></div>}</section><Link className="button-link" to="/courses/6eme">Retour au niveau 6e →</Link></div>
}

export default FrenchSixthRevisionQuiz