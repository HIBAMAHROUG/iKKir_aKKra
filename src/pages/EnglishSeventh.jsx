import { Link } from 'react-router-dom'
import './EnglishSeventh.css'

function Answer({ label, lines = 1 }) {
  return lines > 1 ? <label className="seventh-answer">{label}<textarea rows={lines} /></label> : <label className="seventh-answer">{label}<input type="text" /></label>
}

function Correction({ children }) {
  return <details className="seventh-correction"><summary>Show correction</summary>{children}</details>
}

function EnglishSeventh() {
  return (
    <div className="seventh-page">
      <header className="seventh-heading">
        <p className="eyebrow">English · 7th form</p>
        <h1>Unit 1 — Introducing Others and Families</h1>
        <p>Reading, greetings, pronouns, possessives, family, hobbies and writing.</p>
        <Link className="seventh-quiz-link" to="/courses/7eme/english/quiz">Open separate quiz /20 →</Link>
      </header>

      <section className="seventh-section">
        <h2>1. Reading: Two families</h2>
        <div className="seventh-reading"><p>Hi, my name is Mark and this is a picture of my family. We are American and live in Washington DC, the capital of the USA. Our surname is Mills. My parents are Allan and Mary. Mary is a policewoman and Allan is an office secretary. My brothers are Dave and Sid. They are both twenty-three years old.</p><p>This is the Solano family from Lima in Peru. Their family is very big. The parents are Nolberto and Copac. They have three daughters and one son. The baby is called Diego. Diego’s father is Christobel.</p></div>
        <Answer label="a) What is the Mills family nationality?" /><Answer label="b) Where does Mark’s mum work?" /><Answer label="c) What are Mark’s brothers called and how old are they?" lines={2} /><Answer label="d) What city do the Mills family live in?" />
        <h3>True or false</h3><Answer label="1. There are six people in the Mills family. 2. The Solano family has three daughters. 3. Mark’s dad is a policeman. 4. The Mills family are Australian." lines={3} />
        <Correction><p>a) They are American. b) She works as a policewoman. c) Dave and Sid; they are twenty-three. d) They live in Washington DC. True/False: 1 True, 2 True, 3 False, 4 False.</p></Correction>
      </section>

      <section className="seventh-section">
        <h2>2. Introducing yourself and others</h2>
        <div className="seventh-reading"><p>Jennifer Mathieu is thirteen years old. She is French and lives in Lyon. Her mother Stella is a secretary and her father Alain is a teacher. Jennifer is an only child. She is a pupil in the 7th grade and her favourite hobby is playing the piano.</p></div>
        <Answer label="Complete: Name ___ · Surname ___ · Country ___ · Nationality ___ · Father’s job ___ · Mother’s job ___ · Hobby ___" lines={2} />
        <h3>Choose the best expression</h3><Answer label="1. Hi, it’s Peter / Hi, I’m Peter. 2. Who are you? / How are you? 3. Where are you? / Where are you from? 4. You are nice / Nice to meet you." lines={3} />
        <Correction><p>Jennifer · Mathieu · France · French · teacher · secretary · playing the piano. Best expressions: Hi, I’m Peter. How are you? Where are you from? Nice to meet you.</p></Correction>
      </section>

      <section className="seventh-section">
        <h2>3. Personal pronouns and possessive adjectives</h2>
        <div className="seventh-table"><span>I → my</span><span>you → your</span><span>he → his</span><span>she → her</span><span>it → its</span><span>we → our</span><span>they → their</span></div>
        <Answer label="Complete: ___ name is Chrissy. ___ am from Utah. Let me introduce ___ husband. ___ is American. ___ name is John. We have two children. ___ are lovely. Luna likes music and ___ favourite singer is Selena Gomez." lines={3} />
        <Correction><p>My · I · my · He · His · They · her.</p></Correction>
      </section>

      <section className="seventh-section">
        <h2>4. This, that, these and those</h2>
        <p><strong>This</strong> = one thing near. <strong>That</strong> = one thing far. <strong>These</strong> = several things near. <strong>Those</strong> = several things far.</p>
        <Answer label="a) ___ is my bedroom. b) Look there! ___ is my teacher. c) ___ rabbits are cute! d) ___ are my friends outside. e) ___ your book over there?" lines={3} />
        <Correction><p>a) This b) That’s c) These d) Those e) Is that.</p></Correction>
      </section>

      <section className="seventh-section">
        <h2>5. Have got and hobbies</h2>
        <p><strong>I/You/We/They have got.</strong> <strong>He/She/It has got.</strong> Use <strong>like, enjoy, love + verb-ing</strong>: I enjoy watching cartoons.</p>
        <Answer label="Complete: Bechir is the ___ and Khadija is the ___. They have got one ___. Their ___ are Aly, Slim, Ahmed and Imene." />
        <Answer label="Complete: Football is my ___ sport. I usually ___ football. I ___ watching matches. My favourite ___ is ___ to music." />
        <Answer label="Rewrite with -ing: I like video games (play). I enjoy cartoons (watch). I love music (listen)." lines={3} />
        <Correction><p>Vocabulary: husband, wife, son, children. Hobbies: favourite, play, enjoy, pastime, listening. I like playing video games. I enjoy watching cartoons. I love listening to music.</p></Correction>
      </section>

      <section className="seventh-section">
        <h2>6. Writing</h2>
        <p>Write two short paragraphs about John and Jane. Include their ages and hobbies. Then write 4–5 sentences about your own family.</p>
        <Answer label="My writing" lines={10} />
        <Correction><p>Example: John is thirteen. He likes playing football, playing video games and watching cartoons. Jane is twelve. She enjoys listening to music, dancing and singing.</p></Correction>
      </section>
      <Link className="seventh-quiz-link" to="/courses/7eme/english/quiz">Open separate quiz /20 →</Link>
    </div>
  )
}

export default EnglishSeventh
