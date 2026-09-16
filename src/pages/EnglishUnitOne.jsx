import { useState } from 'react'
import { Link } from 'react-router-dom'
import './EnglishUnitOne.css'

const quizQuestions = [
  { question: 'Choose: My name ___ Paul.', options: ['am', 'is', 'are'], answer: 1 },
  { question: 'Choose: My parents ___ happy.', options: ['am', 'is', 'are'], answer: 2 },
  { question: 'The negative of “She is kind” is...', options: ["She isn't kind.", "She aren't kind.", "She am not kind."], answer: 0 },
  { question: 'Choose: He ___ a pet.', options: ['have', 'has', 'haves'], answer: 1 },
  { question: 'My mother’s sister is my...', options: ['uncle', 'cousin', 'aunt'], answer: 2 },
  { question: 'I like pizza ___ pasta.', options: ['but', 'and', 'not'], answer: 1 },
  { question: 'I like fish ___ I do not like meat.', options: ['and', 'but', 'are'], answer: 1 },
  { question: 'A bird can...', options: ['fly', 'has', 'is'], answer: 0 },
  { question: 'Complete: ___ am a student.', options: ['I', 'He', 'They'], answer: 0 },
  { question: 'Choose the correct sentence.', options: ['Milly is wearing a pink T-shirt.', 'Milly wearing is a pink T-shirt.', 'Is Milly a wearing pink T-shirt.'], answer: 0 },
]

const answers = {
  vocabulary: [
    '1. uncle',
    '2. aunt',
    '3. cousin',
    '4. grandmother / grandma',
    '5. grandfather / grandpa',
  ],
  grammar: [
    'My name is Sam. My sister and I are twins. She is friendly.',
    'Milly is wearing a pink T-shirt.',
    "Negative examples: She isn't my mother. We aren't at home. You aren't my friend. It isn't a cat.",
  ],
  reading: [
    'True, False, True, False, True.',
    'I am a student. She is kind. He is tall. They are at home. It is friendly.',
    'Max and Polly are nice and friendly. Max can walk, run and swim. Polly can fly but can’t swim.',
  ],
  spelling: [
    'Family vocabulary: father, mother, brother, sister, grandfather, grandmother, uncle, aunt, cousin.',
    'Remember: am with I, is with he/she/it, are with you/we/they.',
  ],
  writing: [
    'Write 6 to 8 sentences introducing a member of your family.',
    'Use: This is my..., He/She is..., He/She has..., He/She can..., He/She likes...',
  ],
}

function AnswerBox({ label, lines = 1 }) {
  return lines > 1 ? (
    <label className="answer-field">{label}<textarea rows={lines} /></label>
  ) : (
    <label className="answer-field">{label}<input type="text" /></label>
  )
}

function Correction({ children }) {
  return <details className="english-correction"><summary>Show correction</summary>{children}</details>
}

function EnglishUnitOne() {
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = quizQuestions.reduce(
    (total, item, index) => total + (selected[index] === item.answer ? 2 : 0),
    0,
  )

  return (
    <div className="english-page">
      <header className="english-heading">
        <p className="eyebrow">English · 6th year</p>
        <h1>Revision — Unit 1</h1>
        <p>Introducing Others · Vocabulary · Grammar · Conjugation · Spelling · Writing</p>
      </header>

      <section className="english-section">
        <h2>1. Vocabulary: Family</h2>
        <div className="word-grid">
          <span>Family — عائلة</span><span>Father / Dad — أب</span>
          <span>Mother / Mum — أم</span><span>Brother — أخ</span>
          <span>Sister — أخت</span><span>Grandfather / Grandpa — جد</span>
          <span>Grandmother / Grandma — جدة</span><span>Uncle — خال / عم</span>
          <span>Aunt — خالة / عمة</span><span>Cousin — ابن / بنت العم أو الخال</span>
          <span>Son — ابن</span><span>Daughter — ابنة</span>
          <span>Parents — والدان</span><span>Children — أطفال</span><span>Pet — حيوان أليف</span>
        </div>
        <h3>Exercise: Match the family word</h3>
        <AnswerBox label="1. My father's brother =" />
        <AnswerBox label="2. My mother's sister =" />
        <AnswerBox label="3. My aunt's or uncle's child =" />
        <AnswerBox label="4. My father's mother =" />
        <AnswerBox label="5. My father's father =" />
        <Correction><ul>{answers.vocabulary.map((answer) => <li key={answer}>{answer}</li>)}</ul></Correction>
      </section>

      <section className="english-section">
        <h2>2. Grammar: to be, to have, can, and / but</h2>
        <div className="grammar-table">
          <div><strong>Subject</strong><strong>To be</strong><span>I am · He/She/It is · You/We/They are</span></div>
          <div><strong>Negative</strong><strong>Short forms</strong><span>is not → isn’t · are not → aren’t · I am not → I’m not</span></div>
          <div><strong>To have</strong><strong>Examples</strong><span>I/You/We/They have · He/She/It has</span></div>
          <div><strong>Can</strong><strong>Ability</strong><span>can = يستطيع · cannot / can’t = لا يستطيع</span></div>
        </div>
        <p><strong>And</strong> adds similar ideas: I like pizza and pasta. <strong>But</strong> contrasts ideas: I like pizza but I don’t like fish.</p>
        <h3>Exercises: complete and reorder</h3>
        <AnswerBox label="1. My name ___ Sam. My sister and I ___ twins. She ___ friendly." />
        <AnswerBox label="2. pink / is / a / Milly / wearing / T-shirt →" />
        <AnswerBox label="3. I ___ a very kind person. My mother ___ a beautiful woman. They ___ happy." />
        <Correction><ul>{answers.grammar.map((answer) => <li key={answer}>{answer}</li>)}</ul></Correction>
      </section>

      <section className="english-section">
        <h2>3. Reading: Paul’s family</h2>
        <p className="reading-text">Hi! My name is Paul and this is my family. Today, we are in my grandfather’s house. This is my grandmother. She tells us stories all the time. This is my aunt Grace. She is a baker. This is my uncle Simon. He is a teacher. They have two children. They are my cousins. Olivia’s favourite school subject is English. She likes drawing. Oliver enjoys playing with his pet rabbit.</p>
        <h3>True or False?</h3>
        {['Paul is in his grandfather’s house.', 'Paul has three cousins.', 'Grace is a baker.', 'Simon is a doctor.', 'Olivia likes drawing.'].map((statement, index) => <AnswerBox key={statement} label={`${String.fromCharCode(97 + index)}. ${statement} True / False:`} />)}
        <h3>Complete with I, You, He, She, It, We or They</h3>
        <AnswerBox label="My name is Paul. ___ am a student. This is my sister. ___ is kind. This is my brother. ___ is tall. My parents are happy. ___ are at home. This is my dog. ___ is friendly." lines={3} />
        <Correction><ul>{answers.reading.map((answer) => <li key={answer}>{answer}</li>)}</ul></Correction>
      </section>

      <section className="english-section">
        <h2>4. Conjugation and spelling</h2>
        <p>Use <strong>am / is / are</strong> with the correct subject. Use <strong>have</strong> with I, you, we, they and <strong>has</strong> with he, she, it.</p>
        <h3>Write the negative form</h3>
        <AnswerBox label="She ___ my mother. We ___ at home. You ___ my friend. It ___ a cat. I ___ happy today." lines={2} />
        <h3>Circle the correct alternative by writing the answer</h3>
        <AnswerBox label="Max and Polly are nice ___ friendly. Max can ___, run and swim. Polly can fly but ___ swim." />
        <Correction><ul>{answers.spelling.map((answer) => <li key={answer}>{answer}</li>)}</ul></Correction>
      </section>

      <section className="english-section">
        <h2>5. Writing: Introducing a family member</h2>
        <p>Write 6 to 8 sentences about a member of your family. Use the key language: <em>This is my... / He or She is... / He or She has... / He or She can... / He or She likes...</em></p>
        <AnswerBox label="My writing" lines={8} />
        <Correction><ul>{answers.writing.map((answer) => <li key={answer}>{answer}</li>)}</ul></Correction>
      </section>

      <section className="english-quiz">
        <p className="eyebrow">Final assessment</p>
        <h2>Quiz — Unit 1 / 20 points</h2>
        <p>10 questions × 2 points. Answer every question, then click “Correct my quiz”.</p>
        {quizQuestions.map((item, index) => (
          <fieldset className="english-question" key={item.question}>
            <legend>{index + 1}. {item.question}</legend>
            {item.options.map((option, optionIndex) => <label key={option}><input type="radio" name={`english-${index}`} checked={selected[index] === optionIndex} onChange={() => { setSelected((current) => ({ ...current, [index]: optionIndex })); setSubmitted(false) }} />{option}</label>)}
          </fieldset>
        ))}
        <button className="english-button" type="button" onClick={() => setSubmitted(true)}>Correct my quiz</button>
        {submitted && <div className="english-score"><strong>Your mark: {score}/20</strong><span>{score >= 16 ? 'Excellent!' : score >= 10 ? 'Good work. Keep practising!' : 'Review Unit 1 and try again.'}</span></div>}
      </section>
      <Link className="button-link" to="/">Back to home</Link>
    </div>
  )
}

export default EnglishUnitOne
