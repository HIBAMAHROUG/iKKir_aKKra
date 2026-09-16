import { Link, useParams } from 'react-router-dom'
import './Courses.css'

const levelNames = { '5eme': '5th form', '6eme': '6th form', '7eme': '7th form' }

function LevelCourses() {
  const { level = '6eme' } = useParams()
  const label = levelNames[level] || '6th form'
  const isSixth = level === '6eme'
  const isSeventh = level === '7eme'
  const isFifth = level === '5eme'

  const subjects = [
    {
      title: 'Français',
      subtitle: 'Lecture, grammaire, conjugaison, orthographe et production.',
      accent: 'subject-french',
      modules: isFifth
        ? [
            { title: 'Remédiation : verbes et grammaire', detail: 'Exercices corrigés et quiz séparé sur 20 points.', path: '/courses/5eme/francais', active: true },
            { title: 'Cahier : présent de l’indicatif', detail: 'Conjugaison, exercices corrigés et quiz /20.', path: '/courses/5eme/francais/conjugaison-present', active: true },
            { title: 'Une idée géniale : environnement', detail: 'Lecture, vocabulaire, grammaire et quiz /20.', path: '/courses/5eme/francais/environnement', active: true },
          ]
        : isSixth
        ? [
            { title: 'Module 1 : Le travail et les métiers', detail: 'Fiche, corrections et évaluation sur 20 points.', path: '/courses/6eme/module-1', active: true },
            { title: 'Cahier : présent de l’indicatif', detail: 'Conjugaison, exercices corrigés et quiz /20.', path: '/courses/6eme/francais/conjugaison-present', active: true },
            { title: 'Module 2', detail: 'Bientôt disponible.', path: '#', active: false },
          ]
        : [
            { title: 'Cahier : présent de l’indicatif', detail: 'Conjugaison, exercices corrigés et quiz /20.', path: '/courses/7eme/francais/conjugaison-present', active: true },
          { title: 'Cahier : passé composé et verbes pronominaux', detail: 'Cours, exercices corrigés et quiz /20.', path: '/courses/7eme/francais/passe-compose', active: true },
            { title: 'Module 2', detail: 'Bientôt disponible.', path: '#', active: false },
          ],
    },
    {
      title: 'English',
      subtitle: 'Vocabulary, grammar, reading, spelling and writing.',
      accent: 'subject-english',
      modules: isFifth
        ? [
            { title: 'Unit 1 : Greetings and Introductions', detail: 'Greetings, names, ages, numbers and Arabic meanings.', path: '/courses/5eme/english/greetings', active: true },
            { title: 'Units 2–3 : I’m from / I like', detail: 'Countries, likes, food, colours and Arabic meanings.', path: '/courses/5eme/english/units-2-3', active: true },
            { title: 'Review Unit : Daily routine and adjectives', detail: 'Greetings, numbers, routines, adjectives and quiz /20.', path: '/courses/5eme/english/review', active: true },
          ]
        : isSixth || isSeventh
        ? [
            ...(isSixth ? [{ title: 'Unit 1 : Introducing Others', detail: 'Family, to be, to have, can and quiz.', path: '/courses/6eme/english-unit-1', active: true }] : []),
            { title: 'Unit 2 : Simple Present vs Progressive', detail: 'Lessons, exercises and assessment on 20 points.', path: '/courses/english-tenses', active: true },
            ...(isSixth ? [{ title: 'Unit 3 : My Daily Life', detail: 'Reading comprehension: Sami’s daily routine and quiz.', path: '/courses/6eme/english-reading', active: true }] : []),
            ...(isSeventh ? [{ title: 'Unit 1 : Introducing Others and Families', detail: 'Reading, family, hobbies, pronouns and quiz /20.', path: '/courses/7eme/english', active: true }] : []),
            ...((isSixth || isSeventh) ? [{ title: 'Unit : Entertaining Myself', detail: 'Hobbies, likes, shopping, sports and quiz /20.', path: `/courses/${level}/english/hobbies`, active: true }] : []),
            ...(isSeventh ? [{ title: 'Module 1 Review', detail: '22 exercises: grammar, vocabulary, writing and quiz /20.', path: '/courses/7eme/english/module-1-review', active: true }] : []),
          ]
        : [{ title: 'Unit 1', detail: 'Bientôt disponible.', path: '#', active: false }],
    },
  ]

  return (
    <div className="courses-page">
      <header className="courses-heading">
        <p className="eyebrow">Learning path</p>
        <h1>{label}</h1>
        <p>Choose a subject, then open one of its lessons.</p>
      </header>
      <div className="subject-grid">
        {subjects.map((subject) => (
          <section className={`subject-card ${subject.accent}`} key={subject.title}>
            <div className="subject-title">
              <span className="subject-number">{subject.title === 'Français' ? '01' : '02'}</span>
              <div><h2>{subject.title}</h2><p>{subject.subtitle}</p></div>
            </div>
            <div className="module-list">
              {subject.modules.map((module) => module.active ? (
                <Link className="module-link" to={module.path} key={module.title}>
                  <span><strong>{module.title}</strong><small>{module.detail}</small></span><span className="module-arrow">→</span>
                </Link>
              ) : (
                <div className="module-link module-disabled" key={module.title}>
                  <span><strong>{module.title}</strong><small>{module.detail}</small></span><span className="module-badge">Soon</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      {!isSixth && <p className="level-note">Les prochaines fiches de {isFifth ? '5th form' : '7th form'} seront ajoutées ici.</p>}
    </div>
  )
}

export default LevelCourses
