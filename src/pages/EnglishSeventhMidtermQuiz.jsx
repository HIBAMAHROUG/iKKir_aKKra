import { useState } from 'react'
import { Link } from 'react-router-dom'
import './EnglishSeventh.css'

const questions = [
  ['Sam is thirteen years...', ['old', 'years', 'young'], 0],
  ['William and Elizabeth are Sam’s...', ['friends', 'parents', 'grandparents'], 2],
  ['I have ___ a sister and a brother.', ['is', 'got', 'are'], 1],
  ['He always ___ to school early.', ['go', 'goes', 'going'], 1],
  ['Jane always ___ to music.', ['listen', 'listens', 'listening'], 1],
  ['Jack ___ reading.', ['like', 'likes', 'liking'], 1],
  ['“Hi! How are you?” is a...', ['greeting', 'closing', 'thank'], 0],
  ['“Thanks” expresses...', ['age', 'thanking', 'a hobby'], 1],
  ['“This is my new friend Paul” is...', ['introducing others', 'taking leave', 'asking about number'], 0],
  ['“I like playing football” expresses...', ['a like', 'a nationality', 'a time'], 0],
  ['Choose the correct sentence.', ['How many pupils are there?', 'How many are pupils there?', 'Pupils how many are there?'], 0],
  ['The correct form is...', ['Mary sometimes goes by bus.', 'Mary sometimes go by bus.', 'Mary going sometimes bus.'], 0],
  ['The opposite of “early” is...', ['late', 'young', 'old'], 0],
  ['We ___ breakfast in the forest.', ['has', 'have', 'having'], 1],
  ['Andrew’s favourite pastime is...', ['drawing', 'draws', 'draw'], 0],
  ['“These are my friends” uses these for...', ['one thing far', 'several things near', 'one thing near'], 1],
  ['The number 40 is written...', ['fourteen', 'forty', 'four'], 1],
  ['“My father is a teacher.” The underlined function is...', ['introducing oneself', 'describing a person', 'taking leave'], 1],
  ['Which sentence is correct?', ['They likes watching TV.', 'They like watching TV.', 'They liking watch TV.'], 1],
  ['A hobby is...', ['an activity we enjoy', 'a family member', 'a school time'], 0],
]

function EnglishSeventhMidtermQuiz() { const [selected, setSelected] = useState({}); const [submitted, setSubmitted] = useState(false); const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0); return <div className="seventh-page"><header className="seventh-heading"><p className="eyebrow">English · 7th form</p><h1>Mid-Term Test 1 · Revision Quiz</h1><p>20 questions · total /20.</p></header><section className="seventh-quiz-box">{questions.map((item, index) => <fieldset className="seventh-question" key={item[0]}><legend>{index + 1}. {item[0]}</legend>{item[1].map((option, optionIndex) => <label key={option}><input type="radio" name={`midterm-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}</fieldset>)}<button className="seventh-button" type="button" onClick={() => setSubmitted(true)}>Correct my quiz</button>{submitted && <div className="seventh-score" role="status"><strong>Your mark: {score}/20</strong><span>{score >= 16 ? 'Excellent work!' : score >= 10 ? 'Good work, keep practising!' : 'Review the test versions and try again.'}</span></div>}</section><Link className="seventh-quiz-link" to="/courses/7eme">Back to 7th form →</Link></div> }

export default EnglishSeventhMidtermQuiz