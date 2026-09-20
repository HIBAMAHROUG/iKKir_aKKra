import { useState } from 'react'
import { Link } from 'react-router-dom'
import './EnglishReading.css'

const questions = [
  ['Tom ___ eleven years old.', ['am', 'is', 'are'], 1],
  ['English is Tom’s favourite subject ___ it is interesting.', ['but', 'because', 'and'], 1],
  ['I enjoy ___ football.', ['play', 'playing', 'plays'], 1],
  ['John usually ___ to school by bus.', ['go', 'goes', 'going'], 1],
  ['Vegetarians ___ eat meat.', ['never', 'always', 'usually'], 0],
  ['She likes ___ books.', ['read', 'reading', 'reads'], 1],
  ['___ you like watching films?', ['Do', 'Does', 'Are'], 0],
  ['Carol ___ stay up late.', ['don’t', 'doesn’t', 'isn’t'], 1],
  ['They are twins. ___ names are Paul and Pedro.', ['Their', 'His', 'Our'], 0],
  ['Sue stays up late ___ night.', ['in', 'on', 'at'], 2],
  ['___ are you from?', ['Who', 'Where', 'Why'], 1],
  ['___ brothers have you got?', ['How much', 'How many', 'Which'], 1],
  ['“How about going to the beach?” is...', ['a suggestion', 'a question about age', 'a negative sentence'], 0],
  ['“I like chicken ___ cheese.”', ['but', 'because', 'and'], 2],
  ['Yassine and Abrar are...', ['brother and sister', 'young cousins', 'classmates'], 1],
  ['They want to go to...', ['the zoo', 'the cinema', 'the beach'], 0],
  ['They will take...', ['books and pens', 'sandwiches, juice and fruit', 'cakes and milk'], 1],
  ['They will meet at...', ['8 o’clock', '9 o’clock', '10 o’clock'], 1],
  ['They decide to go by...', ['bike', 'car', 'bus'], 2],
  ['The bus is safer and...', ['more fun together', 'more expensive', 'very slow'], 0],
]

function EnglishSixthReviewQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)
  return <div className="reading-page reading-quiz-page"><header className="reading-heading"><p className="eyebrow">English · 6th form</p><h1>Revision Quiz</h1><p>20 questions · 1 point per correct answer · total /20.</p></header><section className="reading-quiz">{questions.map((item, index) => <fieldset className="reading-question" key={item[0]}><legend>{index + 1}. {item[0]}</legend>{item[1].map((option, optionIndex) => <label key={option}><input type="radio" name={`sixth-english-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}</fieldset>)}<button className="reading-button" type="button" onClick={() => setSubmitted(true)}>Correct my quiz</button>{submitted && <div className="reading-score" role="status"><strong>Your mark: {score}/20</strong><span>{score >= 16 ? 'Excellent work!' : score >= 10 ? 'Good work, keep practising!' : 'Review the worksheet and try again.'}</span></div>}</section><Link className="button-link" to="/courses/6eme">Back to 6th form</Link></div>
}

export default EnglishSixthReviewQuiz