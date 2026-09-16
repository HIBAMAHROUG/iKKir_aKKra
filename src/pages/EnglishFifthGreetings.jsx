import { Link } from 'react-router-dom'
import './EnglishFifth.css'

function Answer({ label, lines = 1 }) {
  return lines > 1 ? <label className="fifth-answer">{label}<textarea rows={lines} /></label> : <label className="fifth-answer">{label}<input type="text" /></label>
}

function Correction({ children }) {
  return <details className="fifth-correction"><summary>✅ Show correction</summary>{children}</details>
}

const arabicWords = [
  ['Hi / Hello', 'مرحبًا'], ['Bye / Goodbye', 'إلى اللقاء'], ['Good morning', 'صباح الخير'], ['Good afternoon', 'مساء الخير'], ['Good evening', 'مساء الخير'], ['Good night', 'تصبح على خير'], ['name', 'الاسم'], ['age', 'العمر'], ['years old', 'سنة من العمر'], ['Nice to meet you', 'سعيد بلقائك'], ['How are you?', 'كيف حالك؟'], ['I’m fine', 'أنا بخير'],
]

function EnglishFifthGreetings() {
  return (
    <div className="fifth-page">
      <header className="fifth-heading">
        <p className="eyebrow">English · 5th form · Level A1</p>
        <h1>👋 Hello! Let’s Speak English</h1>
        <p>Greetings, introductions, age and numbers from 0 to 10.</p>
        <Link className="fifth-quiz-link" to="/courses/5eme/english/greetings/quiz">🎯 Open separate quiz /20 →</Link>
      </header>

      <section className="fifth-section">
        <h2>🌞 1. Greetings at different times</h2>
        <div className="time-cards"><span>🌅 <strong>Good morning</strong><small>in the morning</small></span><span>☀️ <strong>Good afternoon</strong><small>in the afternoon</small></span><span>🌇 <strong>Good evening</strong><small>in the evening</small></span><span>🌙 <strong>Good night</strong><small>at night</small></span></div>
        <p>Match: A. Good morning · B. Good afternoon · C. Good evening · D. Good night</p>
        <Answer label="Answers: A ___ · B ___ · C ___ · D ___" />
        <Correction><p>A = 2 · B = 4 · C = 3 · D = 1.</p></Correction>
      </section>

      <section className="fifth-section">
        <h2>💬 2. Fill in the dialogue</h2>
        <p>Words: <strong>name · Hi · years old · How · I’m · fine</strong></p>
        <div className="dialogue"><p>Tom: ______! My ______ is Tom.</p><p>Lily: Hello Tom! ______ Lily. Nice to meet you.</p><p>Tom: ______ old are you?</p><p>Lily: I am 14 ______. And you?</p><p>Tom: I’m 15. ______, thank you!</p></div>
        <Correction><p>Tom: <strong>Hi</strong>! My <strong>name</strong> is Tom. Lily: <strong>I’m</strong> Lily. Tom: <strong>How</strong> old are you? Lily: 14 <strong>years old</strong>. Tom: I’m 15. <strong>Fine</strong>, thank you!</p></Correction>
      </section>

      <section className="fifth-section">
        <h2>🎯 3. Choose the correct answer</h2>
        <ol><li>At 8 AM: Good night / <strong>Good morning</strong> / Good evening.</li><li>“What’s your name?” → I’m fine / I’m 12 / <strong>My name is Sara.</strong></li><li>“How old are you?” → I am Tom / <strong>I am 10 years old.</strong> / Good afternoon.</li><li>Say goodbye: Hello / <strong>Bye</strong> / Nice.</li><li>7 in words: six / <strong>seven</strong> / nine.</li></ol>
        <Correction><p>1. Good morning · 2. My name is Sara · 3. I am 10 years old · 4. Bye · 5. seven.</p></Correction>
      </section>

      <section className="fifth-section">
        <h2>✅ 4. True or False</h2>
        <Answer label="1. Good night is used in the morning. ___ 2. Hi and Hello are greetings. ___ 3. “I’m 15 years old” gives an age. ___ 4. Good afternoon is used at night. ___ 5. “My name is...” introduces yourself. ___" lines={3} />
        <Correction><p>1. False · 2. True · 3. True · 4. False · 5. True.</p></Correction>
      </section>

      <section className="fifth-section">
        <h2>🔤 5. Unscramble the words</h2>
        <Answer label="OLLHE → ___ · EYB → ___ · OODG GNMIONR → ___ · MEAN → ___ · GEA → ___" />
        <Correction><p>HELLO · BYE · GOOD MORNING · NAME · AGE.</p></Correction>
      </section>

      <section className="fifth-section">
        <h2>🔢 6. Numbers 0–10</h2>
        <div className="number-strip"><span>0 zero</span><span>1 one</span><span>2 two</span><span>3 three</span><span>4 four</span><span>5 five</span><span>6 six</span><span>7 seven</span><span>8 eight</span><span>9 nine</span><span>10 ten</span></div>
        <Answer label="Write your age in words: I am __________________ years old." />
        <Correction><p>0 zero · 1 one · 2 two · 3 three · 4 four · 5 five · 6 six · 7 seven · 8 eight · 9 nine · 10 ten.</p></Correction>
      </section>

      <section className="fifth-section">
        <h2>🧩 7. Odd one out</h2>
        <ol><li>Hi — Hello — Apple — Hey</li><li>Good morning — Good night — Good evening — Good friend</li><li>One — Two — Blue — Three</li><li>Name — Age — Chair — Hello</li></ol>
        <Correction><p>1. Apple · 2. Good friend · 3. Blue · 4. Chair.</p></Correction>
      </section>

      <section className="fifth-section">
        <h2>🔀 8. Put the dialogue in order</h2>
        <div className="dialogue"><p>___ I’m 13 years old. Nice to meet you!</p><p>___ Hello! My name is Adam.</p><p>___ How old are you?</p><p>___ Hi Adam! I’m Nour.</p><p>___ Nice to meet you too, Nour!</p></div>
        <Correction><p>1. Hello! My name is Adam. 2. Hi Adam! I’m Nour. 3. How old are you? 4. I’m 13 years old. Nice to meet you! 5. Nice to meet you too, Nour!</p></Correction>
      </section>

      <section className="fifth-section">
        <h2>✍️ 9. Writing — My profile</h2>
        <Answer label="Hello! My name is... I’m ... years old. I say ... in the morning. I say ... when I leave school." lines={5} />
        <Correction><p>Example: Hello! My name is Sara. I’m 11 years old. I say “Good morning” in the morning. I say “Goodbye” when I leave school.</p></Correction>
      </section>

      <section className="fifth-section">
        <h2>🎭 10. Speak — Role play</h2>
        <div className="dialogue"><p>A: Hello! What’s your name?</p><p>B: Hi! My name is ___. And you?</p><p>A: I’m ___. How old are you?</p><p>B: I am ___ years old. And you?</p></div>
        <Answer label="Write your own dialogue with a partner." lines={6} />
      </section>

      <section className="fifth-section arabic-box">
        <h2>🌍 Useful words in Arabic</h2>
        <div className="arabic-grid">{arabicWords.map(([english, arabic]) => <span key={english}><strong>{english}</strong><small>{arabic}</small></span>)}</div>
      </section>
      <Link className="fifth-quiz-link" to="/courses/5eme/english/greetings/quiz">🎯 Open separate quiz /20 →</Link>
    </div>
  )
}

export default EnglishFifthGreetings
