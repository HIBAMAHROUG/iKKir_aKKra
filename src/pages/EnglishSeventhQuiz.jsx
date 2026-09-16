import { useState } from 'react'
import { Link } from 'react-router-dom'
import './EnglishSeventh.css'

const questions = [
  ['The Mills family are...', ['American', 'Australian', 'Peruvian'], 0],
  ['Mark lives in...', ['Lima', 'Washington DC', 'Lyon'], 1],
  ['Mary is a...', ['teacher', 'secretary', 'policewoman'], 2],
  ['Dave and Sid are...', ['twenty-three', 'thirteen', 'thirty-two'], 0],
  ['Jennifer is...', ['English', 'French', 'German'], 1],
  ['I ___ a pupil.', ['am', 'is', 'are'], 0],
  ['She likes ___ teacher.', ['his', 'her', 'their'], 1],
  ['___ are my friends over there.', ['This', 'That', 'Those'], 2],
  ['He ___ got a brother.', ['have', 'has', 'having'], 1],
  ['We ___ got two children.', ['has', 'have', 'having'], 1],
  ['I enjoy ___ to music.', ['listen', 'listening', 'listens'], 1],
  ['Nice to ___ you.', ['meet', 'meets', 'meeting'], 0],
  ['My mother’s job is...', ['secretary', 'French', 'surname'], 0],
  ['A person from France is...', ['France', 'French', 'Francais'], 1],
  ['This is used for one thing near us:', ['this', 'those', 'these'], 0],
  ['These is used for...', ['one thing far', 'several things near', 'one thing near'], 1],
  ['Our surname means...', ['our family name', 'our hobby', 'our country'], 0],
  ['A son is...', ['a daughter', 'a male child', 'a parent'], 1],
  ['The correct sentence is...', ['I love play music.', 'I love playing music.', 'I loving music.'], 1],
  ['The correct greeting is...', ['Nice to meet you.', 'Where are you?', 'You are nice.'], 0],
]

function EnglishSeventhQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)

  return (
    <div className="seventh-page seventh-quiz-page">
      <header className="seventh-heading"><p className="eyebrow">English · 7th form</p><h1>Unit 1 Assessment</h1><p>20 questions · 1 point each · total /20.</p></header>
      <section className="seventh-quiz-box">
        {questions.map((item, index) => <fieldset className="seventh-question" key={item[0]}><legend>{index + 1}. {item[0]}</legend>{item[1].map((option, optionIndex) => <label key={option}><input type="radio" name={`seventh-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}</fieldset>)}
        <button className="seventh-button" type="button" onClick={() => setSubmitted(true)}>Correct quiz</button>
        {submitted && <div className="seventh-score"><strong>Your mark: {score}/20</strong><span>{score >= 16 ? 'Excellent!' : score >= 10 ? 'Good work, keep practising!' : 'Review Unit 1 and try again.'}</span></div>}
      </section>
      <Link className="seventh-quiz-link" to="/courses/7eme">Back to 7th form →</Link>
    </div>
  )
}

export default EnglishSeventhQuiz
