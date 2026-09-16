import { useState } from 'react'
import { Link } from 'react-router-dom'
import './EnglishFifth.css'

const questions = [
  ['We say ___ in the morning.', ['Good night', 'Good morning', 'Good evening'], 1],
  ['“What’s your name?” —', ['My name is Sara.', 'I’m fine.', 'I’m 10 years old.'], 0],
  ['“How old are you?” —', ['I am Tom.', 'I am 10 years old.', 'Goodbye.'], 1],
  ['You leave school. You say...', ['Hello', 'Bye', 'Nice'], 1],
  ['7 in words is...', ['six', 'seven', 'nine'], 1],
  ['Hi and Hello are...', ['numbers', 'greetings', 'ages'], 1],
  ['“I’m 15 years old” tells us...', ['a name', 'an age', 'a country'], 1],
  ['The correct spelling is...', ['OLLHE', 'HELLO', 'HOLLE'], 1],
  ['The correct sentence is...', ['My name is Adam.', 'My name Adam.', 'Name my is Adam.'], 0],
  ['Good night is used...', ['at night', 'in the morning', 'at school'], 0],
  ['The odd word is: Hi, Hello, Apple, Hey.', ['Hi', 'Apple', 'Hey'], 1],
  ['“Nice to meet you” is used when...', ['meeting someone', 'sleeping', 'counting'], 0],
  ['0 in words is...', ['one', 'zero', 'ten'], 1],
  ['4 in words is...', ['four', 'five', 'three'], 0],
  ['Good afternoon is used in the...', ['afternoon', 'night', 'morning'], 0],
  ['The opposite of Hello as a leaving word is...', ['Goodbye', 'Name', 'Age'], 0],
  ['Complete: I ___ Lily.', ['am', 'is', 'are'], 0],
  ['Complete: How ___ are you?', ['name', 'old', 'fine'], 1],
  ['Complete: My ___ is Tom.', ['age', 'name', 'bye'], 1],
  ['A good introduction includes your...', ['name and age', 'favourite chair', 'school bag only'], 0],
]

function EnglishFifthQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)

  return (
    <div className="fifth-page fifth-quiz-page">
      <header className="fifth-heading"><p className="eyebrow">English · 5th form · Level A1</p><h1>🎯 Greetings and Introductions Quiz</h1><p>20 questions · 1 point each · total /20.</p></header>
      <section className="fifth-quiz-box">
        {questions.map((item, index) => <fieldset className="fifth-question" key={item[0]}><legend>{index + 1}. {item[0]}</legend>{item[1].map((option, optionIndex) => <label key={option}><input type="radio" name={`fifth-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}</fieldset>)}
        <button className="fifth-button" type="button" onClick={() => setSubmitted(true)}>✅ Correct quiz</button>
        {submitted && <div className="fifth-score"><strong>Your mark: {score}/20</strong><span>{score >= 16 ? 'Excellent!' : score >= 10 ? 'Good work, keep practising!' : 'Review the lesson and try again.'}</span></div>}
      </section>
      <Link className="fifth-quiz-link" to="/courses/5eme">Back to 5th form →</Link>
    </div>
  )
}

export default EnglishFifthQuiz
