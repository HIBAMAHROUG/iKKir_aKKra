import { useState } from 'react'
import { Link } from 'react-router-dom'
import './EnglishSeventh.css'

const questions = [
  ['Meriam is ___ years old.', ['twelve', 'twenty', 'seven'], 0],
  ['Sana is a...', ['doctor', 'teacher', 'pupil'], 0],
  ['Selim is an English...', ['student', 'teacher', 'doctor'], 1],
  ['This is Peter. ___ is a pupil.', ['She', 'He', 'They'], 1],
  ['Susan is Peter’s sister. ___ is a pupil.', ['She', 'He', 'It'], 0],
  ['Diana ___ fair hair.', ['have got', 'has got', 'got has'], 1],
  ['They ___ two brothers.', ['has got', 'have got', 'having'], 1],
  ['I enjoy ___ music.', ['listen', 'listening to', 'listens'], 1],
  ['My favourite ___ is football.', ['pastime', 'teacher', 'surname'], 0],
  ['The correct sentence is...', ['I love dancing.', 'I dancing love.', 'Love I dance.'], 0],
  ['Free time means...', ['spare time', 'school time', 'night'], 0],
  ['I brush ___ teeth.', ['my', 'mine', 'me'], 0],
  ['I go to school ___ foot.', ['by', 'on', 'with'], 1],
  ['He ___ up at nine.', ['get', 'gets', 'getting'], 1],
  ['Caroline ___ eats fish.', ['never', 'does never', 'never does'], 0],
  ['___ your father a teacher?', ['Does', 'Is', 'Are'], 1],
  ['___ your mother work in a bank?', ['Does', 'Is', 'Are'], 0],
  ['My mother is ___ doctor.', ['a', 'an', 'Ø'], 0],
  ['She is ___ excellent teacher.', ['a', 'an', 'Ø'], 1],
  ['The negative of “Maria likes grammar” is...', ['Maria don’t like grammar.', 'Maria doesn’t like grammar.', 'Maria isn’t like grammar.'], 1],
]

function EnglishSeventhReviewQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)
  return <div className="seventh-page"><header className="seventh-heading"><p className="eyebrow">English · 7th form</p><h1>Module 1 Review Quiz</h1><p>20 questions · 1 point each · total /20.</p></header><section className="seventh-quiz-box">{questions.map((item,index)=><fieldset className="seventh-question" key={item[0]}><legend>{index+1}. {item[0]}</legend>{item[1].map((option,optionIndex)=><label key={option}><input type="radio" name={`review-${index}`} checked={selected[index]===optionIndex} onChange={()=>{setSelected((current)=>({...current,[index]:optionIndex}));setSubmitted(false)}} />{option}</label>)}</fieldset>)}<button className="seventh-button" type="button" onClick={()=>setSubmitted(true)}>✅ Correct quiz</button>{submitted&&<div className="seventh-score"><strong>Your mark: {score}/20</strong><span>{score>=16?'Excellent!':score>=10?'Good work, keep practising!':'Review Module 1 and try again.'}</span></div>}</section><Link className="seventh-quiz-link" to="/courses/7eme">Back to 7th form →</Link></div>
}

export default EnglishSeventhReviewQuiz
