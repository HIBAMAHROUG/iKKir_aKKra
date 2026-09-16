import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './EnglishSeventh.css'

const questions = [
  ['What is the hobby in the first dialogue?', ['Shopping', 'Reading', 'Swimming'], 0],
  ['How often does the person go shopping?', ['Every day', 'Once a week', 'Once a year'], 1],
  ['Who goes shopping with her?', ['Her father', 'Her mum and sister Rosa', 'Her teacher'], 1],
  ['Leo’s favourite activity is...', ['playing the guitar', 'watching TV', 'cooking'], 0],
  ['Musical means...', ['رياضي', 'موسيقي', 'ممل'], 1],
  ['A difficult activity is...', ['easy', 'not easy', 'delicious'], 1],
  ['Norma ___ books.', ['read', 'reads', 'reading'], 1],
  ['Asian countries ___ Andy.', ['fascinate', 'fascinates', 'fascinating'], 0],
  ['Delicious means...', ['لذيذ', 'غامض', 'مفضل'], 0],
  ['With Alex: He ___ football every day.', ['play', 'plays', 'playing'], 1],
  ['The opposite of like is...', ['love', 'dislike', 'enjoy'], 1],
  ['The correct spelling is...', ['usually', 'ujully', 'usully'], 0],
  ['The correct spelling is...', ['friend', 'freind', 'frend'], 0],
  ['The negative of “I like reading” is...', ['I don’t like reading.', 'I doesn’t like reading.', 'I am not like reading.'], 0],
  ['The negative of “She loves music” is...', ['She don’t love music.', 'She doesn’t love music.', 'She isn’t love music.'], 1],
  ['“Hobby” means...', ['هواية', 'عائلة', 'مدرسة'], 0],
  ['Mattias’s favourite activity is...', ['riding his bike', 'playing football', 'shopping'], 0],
  ['Mattias rides his bike in...', ['the library', 'the park', 'the school'], 1],
  ['Mattias sometimes does races with...', ['his friends', 'his parents', 'his teacher'], 0],
  ['He wants to participate in...', ['the Tour de France', 'the Olympics', 'a music show'], 0],
]

function EnglishHobbiesQuiz() {
  const { level = '6eme' } = useParams()
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)
  return <div className="seventh-page"><header className="seventh-heading"><p className="eyebrow">English · hobbies</p><h1>🎯 Entertaining Myself Quiz</h1><p>20 questions · 1 point each · total /20.</p></header><section className="seventh-quiz-box">{questions.map((item,index)=><fieldset className="seventh-question" key={item[0]}><legend>{index+1}. {item[0]}</legend>{item[1].map((option,optionIndex)=><label key={option}><input type="radio" name={`hobbies-${index}`} checked={selected[index]===optionIndex} onChange={()=>{setSelected((current)=>({...current,[index]:optionIndex}));setSubmitted(false)}} />{option}</label>)}</fieldset>)}<button className="seventh-button" type="button" onClick={()=>setSubmitted(true)}>✅ Correct quiz</button>{submitted&&<div className="seventh-score"><strong>Your mark: {score}/20</strong><span>{score>=16?'Excellent!':score>=10?'Good work, keep practising!':'Review the lesson and try again.'}</span></div>}</section><Link className="seventh-quiz-link" to={`/courses/${level}`}>Back to form →</Link></div>
}

export default EnglishHobbiesQuiz
