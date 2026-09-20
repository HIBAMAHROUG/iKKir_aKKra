import { useState } from 'react'
import { Link } from 'react-router-dom'
import './EnglishSeventh.css'

const questions = [
  ['Which expression is a greeting?', ['You’re welcome.', 'Hi! How are you?', 'Goodbye.'], 1],
  ['Which expression is used for thanking?', ['Thanks a lot.', 'See you soon.', 'How about...?'], 0],
  ['A friendly letter begins with...', ['Best wishes,', 'Dear + first name,', 'Yours,'], 1],
  ['Choose: I ___ writing a letter now.', ['am', 'is', 'are'], 0],
  ['Choose: She ___ watching TV.', ['am', 'is', 'are'], 1],
  ['Choose the negative form.', ['They isn’t playing.', 'They aren’t playing.', 'They don’t playing.'], 1],
  ['Choose the question.', ['Are they cycling?', 'They are cycling?', 'Do they are cycling?'], 0],
  ['The -ing form of “write” is...', ['writeing', 'writing', 'writting'], 1],
  ['The -ing form of “swim” is...', ['swiming', 'swimming', 'swimying'], 1],
  ['A passport is...', ['a travel document', 'a luggage cart', 'a suitcase'], 0],
  ['A trolley is used to carry...', ['friends', 'luggage', 'passports only'], 1],
  ['Peter is staying with...', ['a Customs officer', 'his Tunisian friend and his family', 'his teacher'], 1],
  ['What is the correct answer to “Can I see your passport?”', ['Yes, of course. Here you are.', 'I am twelve.', 'See you at school.'], 0],
  ['In the reading text, Aly’s mother is...', ['washing the car', 'cooking couscous', 'playing with the dog'], 1],
  ['Where is the family going later?', ['to the beach', 'to the airport', 'to the mountains'], 0],
  ['Peter finds Tunisian people...', ['unfriendly', 'friendly and welcoming', 'angry'], 1],
  ['The synonym of “delicious” in the text is...', ['tasty', 'quiet', 'busy'], 0],
  ['Which is a closing in a letter?', ['Dear Lisa,', 'Warm wishes,', 'Hello!'], 1],
  ['Which linker shows the final step?', ['First', 'Also', 'Finally'], 2],
  ['“Would you like to come?” is...', ['an invitation', 'a greeting', 'a goodbye'], 0],
]

function EnglishSeventhUnitTwoQuiz() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item[2] ? 1 : 0), 0)
  return <div className="seventh-page seventh-quiz-page"><header className="seventh-heading"><p className="eyebrow">English · 7th form</p><h1>Unit 2 Quiz</h1><p>20 questions · 1 point per correct answer · total /20.</p></header><section className="seventh-quiz-box">{questions.map((item, index) => <fieldset className="seventh-question" key={item[0]}><legend>{index + 1}. {item[0]}</legend>{item[1].map((option, optionIndex) => <label key={option}><input type="radio" name={`unit-two-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}</fieldset>)}<button className="seventh-button" type="button" onClick={() => setSubmitted(true)}>Correct my quiz</button>{submitted && <div className="seventh-score" role="status"><strong>Your mark: {score}/20</strong><span>{score >= 16 ? 'Excellent work!' : score >= 10 ? 'Good work, keep practising!' : 'Review Unit 2 and try again.'}</span></div>}</section><Link className="seventh-quiz-link" to="/courses/7eme">Back to 7th form →</Link></div>
}

export default EnglishSeventhUnitTwoQuiz