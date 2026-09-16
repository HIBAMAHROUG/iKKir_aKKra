import { useState } from 'react'
import { Link } from 'react-router-dom'
import './EnglishReading.css'

const quizQuestions = [
  { question: 'How old is Sami?', options: ['Ten', 'Eleven', 'Twelve'], answer: 1 },
  { question: 'Where does Sami live?', options: ['Tunis', 'Sfax', 'London'], answer: 1 },
  { question: 'How does Sami go to school?', options: ['By bus', 'By bike', 'On foot'], answer: 0 },
  { question: 'What are Sami’s favourite subjects?', options: ['Maths and Art', 'English and Science', 'French and History'], answer: 1 },
  { question: 'What does Sami do after school?', options: ['He plays football.', 'He goes to sleep.', 'He watches a film.'], answer: 0 },
  { question: 'What does Sami’s mother cook?', options: ['Rice and fish', 'Eggs and bread', 'Soup and cake'], answer: 1 },
  { question: 'School starts at...', options: ['six o’clock', 'seven o’clock', 'eight o’clock'], answer: 2 },
  { question: 'Sami plays football with...', options: ['his cousins', 'his friends', 'his brother'], answer: 1 },
  { question: 'What does Sami read in the evening?', options: ['Books', 'Newspapers', 'Magazines'], answer: 0 },
  { question: 'Sami is a...', options: ['happy child', 'doctor', 'university student'], answer: 0 },
]

function AnswerField({ label, lines = 1 }) {
  return lines > 1 ? <label className="reading-answer">{label}<textarea rows={lines} /></label> : <label className="reading-answer">{label}<input type="text" /></label>
}

function EnglishReading() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = quizQuestions.reduce((total, item, index) => total + (selected[index] === item.answer ? 2 : 0), 0)

  return (
    <div className="reading-page">
      <header className="reading-heading">
        <p className="eyebrow">English · 6th form</p>
        <h1>Unit 3: My Daily Life</h1>
        <p>Reading comprehension · Text A · Questions and assessment</p>
      </header>

      <section className="reading-section">
        <h2>Part Two — Reading Comprehension</h2>
        <h3>Text A</h3>
        <div className="reading-story">
          <p>My name is Sami. I am eleven years old. I live in Sfax with my family. I have a sister and a brother. My sister’s name is Nour. She is a doctor. My brother’s name is Karim. He is a student at university.</p>
          <p>Every morning, I wake up at six o’clock. I wash my face, brush my teeth and have breakfast with my family. My mother always cooks eggs and bread. After breakfast, I go to school by bus. School starts at eight o’clock. I love my school.</p>
          <p>My favourite subjects are English and Science. After school, I play football with my friends in the park near my house. In the evening, I do my homework and read books before I sleep. I am a happy child and I love my life in Sfax!</p>
        </div>
      </section>

      <section className="reading-section">
        <h2>A) Answer the questions</h2>
        <AnswerField label="1. Where does Sami live?" />
        <AnswerField label="2. How does Sami go to school?" />
        <AnswerField label="3. What are Sami’s favourite subjects?" />
        <AnswerField label="4. What does Sami do after school?" />
        <details className="reading-correction"><summary>Show correction</summary><ol><li>He lives in Sfax.</li><li>He goes to school by bus.</li><li>His favourite subjects are English and Science.</li><li>He plays football with his friends in the park.</li></ol></details>
      </section>

      <section className="reading-section">
        <h2>B) Complete with two words from the text</h2>
        <AnswerField label="1. Sami is ___ years old and he lives in ___." />
        <AnswerField label="2. His mother always cooks ___ and ___ for breakfast." />
        <AnswerField label="3. School starts at ___ o’clock." />
        <AnswerField label="4. In the evening, Sami does his ___ and reads ___." />
        <details className="reading-correction"><summary>Show correction</summary><ol><li>eleven / Sfax</li><li>eggs / bread</li><li>eight</li><li>homework / books</li></ol></details>
      </section>

      <section className="reading-section vocabulary-review">
        <h2>Vocabulary review</h2>
        <div><span>wake up</span><span>se réveiller</span><span>have breakfast</span><span>prendre le petit-déjeuner</span><span>go to school</span><span>aller à l’école</span><span>favourite subjects</span><span>matières préférées</span><span>do homework</span><span>faire les devoirs</span></div>
      </section>

      <section className="reading-quiz">
        <p className="eyebrow">Assessment</p>
        <h2>Quiz — Text A /20</h2>
        <p>10 questions × 2 points. Choose one answer for each question.</p>
        {quizQuestions.map((item, index) => (
          <fieldset className="reading-question" key={item.question}>
            <legend>{index + 1}. {item.question}</legend>
            {item.options.map((option, optionIndex) => <label key={option}><input type="radio" name={`reading-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}
          </fieldset>
        ))}
        <button className="reading-button" type="button" onClick={() => setSubmitted(true)}>Correct my quiz</button>
        {submitted && <div className="reading-score"><strong>Your mark: {score}/20</strong><span>{score >= 16 ? 'Excellent reading!' : score >= 10 ? 'Good work, keep reading!' : 'Read Text A again and try once more.'}</span></div>}
      </section>
      <Link className="button-link" to="/courses/6eme">Back to 6th form</Link>
    </div>
  )
}

export default EnglishReading
