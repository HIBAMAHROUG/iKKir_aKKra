import { useState } from 'react'
import { Link } from 'react-router-dom'
import './EnglishTenses.css'

const questions = [
  { q: 'She ___ English every evening.', options: ['study', 'studies', 'is studying'], answer: 1 },
  { q: 'Look! The cat ___ on the sofa.', options: ['sleeps', 'sleep', 'is sleeping'], answer: 2 },
  { q: 'We ___ our grandmother every weekend.', options: ['visit', 'visits', 'are visiting'], answer: 0 },
  { q: 'They ___ football right now.', options: ['play', 'plays', 'are playing'], answer: 2 },
  { q: 'He ___ junk food.', options: ["doesn't eat", "isn't eat", "don't eats"], answer: 0 },
  { q: 'My mother ___ dinner at 6 pm every day.', options: ['cook', 'cooks', 'is cooking'], answer: 1 },
  { q: 'I ___ my homework at the moment.', options: ['do', 'does', 'am doing'], answer: 2 },
  { q: '___ your father work in a hospital?', options: ['Do', 'Does', 'Is'], answer: 1 },
  { q: 'Birds ___ south in winter.', options: ['fly', 'are flying', 'flies'], answer: 0 },
  { q: 'She ___ to music now.', options: ["doesn't listen", "isn't listening", "don't listen"], answer: 1 },
]

function Answer({ label, lines = 1 }) {
  return lines > 1 ? <label className="tense-answer">{label}<textarea rows={lines} /></label> : <label className="tense-answer">{label}<input type="text" /></label>
}

function EnglishTenses() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((sum, item, index) => sum + (selected[index] === item.answer ? 2 : 0), 0)

  return (
    <div className="tenses-page">
      <header className="tenses-heading">
        <p className="eyebrow">English · 6th and 7th forms</p>
        <h1>Simple Present vs Present Progressive</h1>
        <p>Learn the difference, practise the forms and check your mark out of 20.</p>
      </header>

      <section className="tense-section">
        <h2>Lesson 1 — Simple Present</h2>
        <p>Use the Simple Present for habits, routines, facts and things that are generally true.</p>
        <div className="tense-cards">
          <div><strong>Affirmative</strong><span>Subject + verb (s/es)</span><em>He plays football every day.</em></div>
          <div><strong>Negative</strong><span>Subject + do/does not + base verb</span><em>She does not like coffee.</em></div>
          <div><strong>Question</strong><span>Do/Does + subject + base verb?</span><em>Does he speak English?</em></div>
        </div>
        <p><strong>Spelling:</strong> play → plays, watch → watches, study → studies, have → has, be → is.</p>
        <p><strong>Signal words:</strong> always, usually, often, sometimes, never, every day, on Mondays, once a week.</p>
        <h3>Practice</h3>
        <Answer label="1. The cat ___ (play) with a ball. 2. We ___ (visit) our grandmother every weekend." />
        <Answer label="3. He ___ (study) English every evening. 4. My mother ___ (cook) dinner at 6 pm." />
      </section>

      <section className="tense-section">
        <h2>Lesson 2 — Present Progressive</h2>
        <p>Use the Present Progressive for actions happening now, at this moment or around this time.</p>
        <div className="tense-cards">
          <div><strong>Affirmative</strong><span>am/is/are + verb-ing</span><em>She is reading right now.</em></div>
          <div><strong>Negative</strong><span>am/is/are not + verb-ing</span><em>They are not playing outside.</em></div>
          <div><strong>Question</strong><span>Am/Is/Are + subject + verb-ing?</span><em>Is he talking on the phone?</em></div>
        </div>
        <p><strong>Spelling:</strong> play → playing, write → writing, run → running, sit → sitting.</p>
        <p><strong>Signal words:</strong> now, right now, at the moment, currently, today, this week, look and listen.</p>
        <h3>Practice</h3>
        <Answer label="1. Right now, she ___ (read) a story. 2. Look! The cat ___ (sleep) on the sofa." />
        <Answer label="3. We ___ (watch) a cartoon right now. 4. Listen! He ___ (play) the guitar." />
      </section>

      <section className="tense-section">
        <h2>Lesson 3 — Choose the correct tense</h2>
        <p>Routine or fact = Simple Present. Action happening now = Present Progressive.</p>
        <Answer label="1. (she / drink / tea / every morning) →" />
        <Answer label="2. (they / play / football / right now) →" />
        <Answer label="3. (he / not / eat / meat / never) →" />
        <Answer label="4. (look! / the baby / cry / at the moment) →" lines={2} />
      </section>

      <section className="tense-section">
        <h2>Lesson 4 — Possessive adjectives and place</h2>
        <p><strong>I → my · you → your · he → his · she → her · it → its · we → our · they → their.</strong></p>
        <p>Place words: <strong>next to, between, near, in front of, behind.</strong></p>
        <Answer label="1. I have a new school bag. ___ bag is blue. 2. Ahmed is a good student. ___ grades are excellent." />
        <Answer label="3. The police station is ___ the school. 4. His house is ___ the bakery and the park." />
      </section>

      <section className="tense-section">
        <h2>Reading — My town</h2>
        <p className="reading-box">Hello, my name is John. Manchester is my town. I live there with my grandma. In my town there is a bakery where I buy bread, a butcher shop where I buy meat and a greengrocer’s where we buy vegetables. Next to the school, there is a police station. Miss Kitty is my English teacher. She is kind and helpful. I go to the park with my best friend where I play hopscotch.</p>
        <Answer label="1. The text is about: my grandma’s house / my town / my school." />
        <Answer label="2. John lives with his cousin. TRUE or FALSE?" />
        <Answer label="3. Complete: Miss Kitty is kind and ___. She is John’s ___ teacher." />
      </section>

      <section className="tense-quiz">
        <p className="eyebrow">Assessment</p>
        <h2>Quiz — Simple Present vs Progressive /20</h2>
        <p>10 questions × 2 points. Choose one answer for each question.</p>
        {questions.map((item, index) => (
          <fieldset className="tense-question" key={item.q}>
            <legend>{index + 1}. {item.q}</legend>
            {item.options.map((option, optionIndex) => <label key={option}><input type="radio" name={`tense-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}
          </fieldset>
        ))}
        <button className="tense-button" type="button" onClick={() => setSubmitted(true)}>Correct my quiz</button>
        {submitted && <div className="tense-score"><strong>Your mark: {score}/20</strong><span>{score >= 16 ? 'Excellent work!' : score >= 10 ? 'Good work, keep practising!' : 'Review the lessons and try again.'}</span></div>}
      </section>
      <Link className="button-link" to="/courses">Back to courses</Link>
    </div>
  )
}

export default EnglishTenses
