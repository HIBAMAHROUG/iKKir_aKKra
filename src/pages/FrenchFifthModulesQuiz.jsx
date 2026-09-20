import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FrenchFifth.css'

const questions = [
  ['Que font les habitants du quartier ?', ['Ils organisent une journée de propreté', 'Ils organisent une fête', 'Ils quittent le quartier'], 0],
  ['« Changer de visage » signifie...', ['changer de nom', 'changer totalement d’aspect', 'fermer les rues'], 1],
  ['Quel mot indique le futur ?', ['hier', 'aujourd’hui', 'demain'], 2],
  ['« La semaine dernière, ils ___ les papiers. »', ['ramassent', 'ont ramassé', 'ramasseront'], 1],
  ['Une action utile est de...', ['jeter les déchets', 'planter des fleurs', 'écrire sur les murs'], 1],
  ['Mayar éclabousse Adam...', ['exprès', 'sans le vouloir', 'pour rire'], 1],
  ['Que fait Mayar pour se faire pardonner ?', ['Elle prête son vélo', 'Elle part sans parler', 'Elle jette son vélo'], 0],
  ['Les deux voisines se réconcilient grâce...', ['au silence', 'au dialogue et au nettoyage', 'à une dispute'], 1],
  ['Quelle négation convient : « Ils ___ se disputent ___ » ?', ['ne / jamais', 'ne / plus pas', 'pas / jamais'], 0],
  ['« La pluie ne tombe plus » devient...', ['La pluie tombe encore', 'La pluie tombe jamais', 'La pluie ne tombe pas'], 0],
  ['Au futur : « Nous ___ unis. »', ['sommes', 'étions', 'serons'], 2],
  ['Au présent : « Je ___ content. »', ['suis', 'serai', 'été'], 0],
  ['On écrit...', ['une guitare', 'une gitare', 'une guittare'], 0],
  ['Dans « gomme », le g se prononce...', ['[j]', '[gue]', '[ch]'], 1],
  ['« S’entraider » signifie...', ['s’aider mutuellement', 'se disputer', 'se moquer'], 0],
  ['Le contraire de « propre » est...', ['net', 'sale', 'lumineux'], 1],
  ['Les déchets doivent être mis...', ['sur le sol', 'dans la poubelle', 'sur les murs'], 1],
  ['« Ils admireront » est au...', ['passé', 'présent', 'futur'], 2],
  ['Une classe accueillante est...', ['sombre et sale', 'propre et agréable', 'bruyante et désordonnée'], 1],
  ['« L’union fait la force » parle de...', ['la solidarité', 'la solitude', 'la colère'], 0],
]

function FrenchFifthModulesQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)
  return <div className="environment-page environment-quiz-page"><header className="environment-heading"><p className="eyebrow">Français · 5e année</p><h1>Quiz · Modules 1 &amp; 2</h1><p>20 questions · 1 point par bonne réponse · total /20.</p></header><section className="environment-quiz-box">{questions.map((item, index) => <fieldset className="environment-question" key={item[0]}><legend>{index + 1}. {item[0]}</legend>{item[1].map((option, optionIndex) => <label key={option}><input type="radio" name={`modules-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}</fieldset>)}<button className="environment-button" type="button" onClick={() => setSubmitted(true)}>✅ Corriger le quiz</button>{submitted && <div className="environment-score" role="status"><strong>Ta note : {score}/20</strong><span>{score >= 16 ? 'Excellent travail !' : score >= 10 ? 'Bon travail, continue tes révisions.' : 'Relis les deux modules et réessaie.'}</span></div>}</section><Link className="environment-quiz-link" to="/courses/5eme">Retour au niveau 5e →</Link></div>
}

export default FrenchFifthModulesQuiz