import { Link, useParams } from 'react-router-dom'
import { getQuizResult } from '../utils/progress'
import './Courses.css'

const levelNames = { '5eme': '5th form', '6eme': '6th form', '7eme': '7th form' }

function ModuleSide({ path }) {
  const result = getQuizResult(`${path}/quiz`)
  return <span className="module-side">{result && <span className="module-score" title={`Meilleur score : ${result.best}/${result.total} · ${result.attempts} essai(s)`}><span className="visually-hidden">Meilleur score : </span>{result.best}/{result.total}</span>}<span className="module-arrow" aria-hidden="true">→</span></span>
}

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
            { title: 'Modules 1 & 2 : environnement et vivre ensemble', detail: 'Lectures, exercices corrigés, mots-clés en arabe et quiz /20.', path: '/courses/5eme/francais/modules-1-2', active: true },
          ]
        : isSixth
        ? [
            { title: 'Module 1 : Le travail et les métiers', detail: 'Fiche, corrections et évaluation sur 20 points.', path: '/courses/6eme/module-1', active: true },
          { title: 'Révision : Modules 1 & 2', detail: 'Groupe nominal, impératif, temps, verbes et quiz /20.', path: '/courses/6eme/francais/revision', active: true },
            { title: 'Cahier : présent de l’indicatif', detail: 'Conjugaison, exercices corrigés et quiz /20.', path: '/courses/6eme/francais/conjugaison-present', active: true },
            { title: 'Module 3 : Accepter les autres', detail: 'Respect, solidarité, grammaire, conjugaison et quiz /20.', path: '/courses/6eme/francais/accepter-les-autres', active: true },
          ]
        : [
            { title: 'Cahier : présent de l’indicatif', detail: 'Conjugaison, exercices corrigés et quiz /20.', path: '/courses/7eme/francais/conjugaison-present', active: true },
          { title: 'Cahier : passé composé et verbes pronominaux', detail: 'Cours, exercices corrigés et quiz /20.', path: '/courses/7eme/francais/passe-compose', active: true },
              { title: 'Rédaction : En famille', detail: 'Récit, exercices guidés et productions corrigées.', path: '/courses/7eme/francais/en-famille', active: true },
              { title: 'Devoir de contrôle n°1', detail: 'Compréhension, langue et évaluation interactive /20.', path: '/courses/7eme/francais/devoir-controle-1', active: true },
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
            ...(isSixth ? [{ title: 'Revision Worksheet : Simple Present', detail: 'Grammar, adverbs, WH-questions, suggestions and reading quiz /20.', path: '/courses/6eme/english/revision', active: true }] : []),
            ...((isSixth || isSeventh) ? [{ title: 'Unit 1 : Entertaining Myself — Free Time', detail: 'Activities, adverbs of frequency, prepositions and quiz /20.', path: `/courses/${level}/english/free-time`, active: true }] : []),
            ...(isSeventh ? [{ title: 'Unit 1 : Introducing Others and Families', detail: 'Reading, family, hobbies, pronouns and quiz /20.', path: '/courses/7eme/english', active: true }] : []),
            ...(isSeventh ? [{ title: 'Unit 2 : Communication and Travel', detail: 'Friendly letters, present progressive, airport dialogue and quiz /20.', path: '/courses/7eme/english/unit-2', active: true }] : []),
            ...(isSeventh ? [{ title: 'Mid-Term Test 1 : 4 versions', detail: 'Language, spelling and interactive revision quiz /20.', path: '/courses/7eme/english/midterm-1', active: true }] : []),
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
                  <span><strong>{module.title}</strong><small>{module.detail}</small></span><ModuleSide path={module.path} />
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
