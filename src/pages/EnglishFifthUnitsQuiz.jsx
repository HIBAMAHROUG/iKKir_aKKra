import { useState } from 'react'
import { Link } from 'react-router-dom'
import './EnglishFifth.css'

const questions = [
  ['Where ___ you from?', ['What', 'Where', 'Who'], 1],
  ['I ___ from Tunisia.', ['am', 'is', 'are'], 0],
  ['He ___ from France.', ['am', 'is', 'are'], 1],
  ['They ___ from Italy.', ['am', 'is', 'are'], 2],
  ['Nice to meet you! —', ['Goodbye.', 'Nice to meet you, too.', 'Thank you.'], 1],
  ['The English word for تونس is...', ['France', 'Tunisia', 'Canada'], 1],
  ['“Where are you from?” means...', ['ماذا تحب؟', 'من أين أنت؟', 'كيف حالك؟'], 1],
  ['___ you like pizza?', ['Do', 'Are', 'Is'], 0],
  ['Yes, I ___.', ['am', 'do', 'is'], 1],
  ['I ___ like carrots.', ['don’t', 'doesn’t', 'am not'], 0],
  ['“What do you like?” means...', ['ماذا تحب؟', 'أين أنت؟', 'ما اسمك؟'], 0],
  ['The correct sentence is...', ['I like pizza.', 'Like I pizza.', 'I pizza like?'], 0],
  ['The correct question is...', ['Do you like milk?', 'You do like milk?', 'Like you milk?'], 0],
  ['Favourite means...', ['المفضل', 'البلد', 'اللقاء'], 0],
  ['Colour means...', ['الطعام', 'اللون', 'الجزر'], 1],
  ['“No, I don’t” means...', ['نعم أحب', 'لا، لا أحب', 'أنا من'], 1],
  ['France → nationality:', ['French', 'Francean', 'Francish'], 0],
  ['Canada → nationality:', ['Canadian', 'Canadish', 'Canada'], 0],
  ['The opposite of like is...', ['meet', 'don’t like', 'from'], 1],
  ['Complete: My favourite ___ is blue.', ['food', 'colour', 'country'], 1],
]

function EnglishFifthUnitsQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)
  return <div className="fifth-page"><header className="fifth-heading"><p className="eyebrow">English · 5th form</p><h1>🎯 Units 2–3 Quiz</h1><p>20 questions · 1 point each · total /20.</p></header><section className="fifth-quiz-box">{questions.map((item,index)=><fieldset className="fifth-question" key={item[0]}><legend>{index+1}. {item[0]}</legend>{item[1].map((option,optionIndex)=><label key={option}><input type="radio" name={`units-${index}`} checked={selected[index]===optionIndex} onChange={()=>{setSelected((current)=>({...current,[index]:optionIndex}));setSubmitted(false)}} />{option}</label>)}</fieldset>)}<button className="fifth-button" type="button" onClick={()=>setSubmitted(true)}>✅ Correct quiz</button>{submitted&&<div className="fifth-score"><strong>Your mark: {score}/20</strong><span>{score>=16?'Excellent!':score>=10?'Good work, keep practising!':'Review Units 2–3 and try again.'}</span></div>}</section><Link className="fifth-quiz-link" to="/courses/5eme">Back to 5th form →</Link></div>
}

export default EnglishFifthUnitsQuiz
