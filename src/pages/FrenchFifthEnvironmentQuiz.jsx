import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FrenchFifth.css'

const questions = [
  ['Qui a un problème à discuter ?', ['Le père', 'La mère', 'Mireille'], 1],
  ['Que propose Mireille ?', ['De voyager', 'D’élever des animaux', 'De tricoter'], 1],
  ['Une idée géniale est...', ['une bonne idée', 'une idée stupide', 'une mauvaise idée'], 0],
  ['Un arrosoir sert à...', ['arroser les fleurs', 'lire un livre', 'accrocher un tableau'], 0],
  ['Désherber signifie...', ['enlever les mauvaises herbes', 'planter des arbres', 'cueillir des fleurs'], 0],
  ['“Quel beau jardin !” est une phrase...', ['déclarative', 'interrogative', 'exclamative'], 2],
  ['Une phrase interrogative se termine par...', ['.', '?', '!'], 1],
  ['“Hier” indique le...', ['présent', 'passé', 'futur'], 1],
  ['“Demain” indique le...', ['passé', 'présent', 'futur'], 2],
  ['Chaque jour, elle ___ les fleurs.', ['arrose', 'a arrosé', 'arrosera'], 0],
  ['La semaine dernière, ils ___ les papiers.', ['ramassent', 'ont ramassé', 'ramasseront'], 1],
  ['Le son [é] dans “café” s’écrit...', ['er', 'é', 'ez'], 1],
  ['Le son [é] dans “protéger” s’écrit...', ['er', 'et', 'es'], 0],
  ['“Chez” se termine par...', ['é', 'ez', 'es'], 1],
  ['Les pots peuvent ___ le balcon.', ['embellir', 'arrosoir', 'chez'], 0],
  ['Il ne faut pas toucher...', ['les nids', 'les cahiers', 'les rideaux'], 0],
  ['“Nous créerons” est au...', ['passé', 'présent', 'futur'], 2],
  ['“Les élèves nettoient” est au...', ['présent', 'passé', 'futur'], 0],
  ['Un tuyau appartient au champ lexical...', ['du jardin', 'de la classe', 'des métiers'], 0],
  ['Une idée pour protéger la nature est de...', ['jeter les papiers', 'respecter les oiseaux', 'cueillir toutes les fleurs'], 1],
]

function FrenchFifthEnvironmentQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)
  return <div className="environment-page"><header className="environment-heading"><p className="eyebrow">Français · 5th form</p><h1>🌿 Évaluation : Une idée géniale</h1><p>20 questions · 1 point par bonne réponse · total /20.</p></header><section className="environment-quiz-box">{questions.map((item,index)=><fieldset className="environment-question" key={item[0]}><legend>{index+1}. {item[0]}</legend>{item[1].map((option,optionIndex)=><label key={option}><input type="radio" name={`environment-${index}`} checked={selected[index]===optionIndex} onChange={()=>{setSelected((current)=>({...current,[index]:optionIndex}));setSubmitted(false)}} />{option}</label>)}</fieldset>)}<button className="environment-button" type="button" onClick={()=>setSubmitted(true)}>✅ Corriger le quiz</button>{submitted&&<div className="environment-score"><strong>Ta note : {score}/20</strong><span>{score>=16?'Excellent travail !':score>=10?'Bon travail, continue tes révisions.':'Relis la fiche et réessaie.'}</span></div>}</section><Link className="environment-quiz-link" to="/courses/5eme">Retour au 5th form →</Link></div>
}

export default FrenchFifthEnvironmentQuiz
