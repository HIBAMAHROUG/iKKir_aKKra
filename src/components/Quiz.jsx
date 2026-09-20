import { useId, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getQuizResult, saveQuizResult } from '../utils/progress'
import { quizThemes } from './quizThemes'
import './Quiz.css'

const TEXT = {
  fr: {
    mark: (score, total) => `Ta note : ${score}/${total}`, high: 'Excellent travail !', mid: 'Bon travail, continue tes efforts.', low: 'Relis la leçon et réessaie.', check: 'Corriger le quiz', checkAnyway: 'Corriger quand même', retry: 'Recommencer', unanswered: (n) => (n === 1 ? 'Il reste 1 question sans réponse.' : `Il reste ${n} questions sans réponse.`), unansweredHint: 'Réponds-y, ou corrige quand même.', right: 'Bonne réponse', wrong: (answer) => `Bonne réponse : ${answer}`, none: (answer) => `Pas de réponse. Bonne réponse : ${answer}`, best: (best, total, attempts) => `Meilleur score : ${best}/${total} · ${attempts} essai${attempts > 1 ? 's' : ''}`,
  },
  en: {
    mark: (score, total) => `Your mark: ${score}/${total}`, high: 'Excellent!', mid: 'Good work, keep practising!', low: 'Review the lesson and try again.', check: 'Correct my quiz', checkAnyway: 'Correct anyway', retry: 'Try again', unanswered: (n) => (n === 1 ? '1 question is still unanswered.' : `${n} questions are still unanswered.`), unansweredHint: 'Answer it, or correct anyway.', right: 'Correct', wrong: (answer) => `Correct answer: ${answer}`, none: (answer) => `Not answered. Correct answer: ${answer}`, best: (best, total, attempts) => `Best mark: ${best}/${total} · ${attempts} attempt${attempts > 1 ? 's' : ''}`,
  },
}

function normalize(item) {
  return Array.isArray(item) ? { q: item[0], options: item[1], answer: item[2] } : { q: item.q, options: item.options, answer: item.answer }
}

function scrollTo(element) {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  element?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' })
}

function QuizInner({ theme, eyebrow, title, subtitle, questions, points = 1, backTo, backLabel, lang = 'fr', buttonLabel, highMessage, midMessage, lowMessage }) {
  const t = TEXT[lang]
  const classes = quizThemes[theme]
  const { pathname } = useLocation()
  const uid = useId()
  const items = useMemo(() => questions.map(normalize), [questions])
  const total = items.length * points
  const [selected, setSelected] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [warned, setWarned] = useState(false)
  const [stats, setStats] = useState(() => getQuizResult(pathname))
  const headingRef = useRef(null)
  const resultRef = useRef(null)
  const unanswered = items.filter((_, index) => selected[index] === undefined).length
  const score = items.reduce((sum, item, index) => sum + (selected[index] === item.answer ? points : 0), 0)
  const showWarning = warned && !submitted && unanswered > 0

  function check() {
    if (unanswered > 0 && !warned) {
      setWarned(true)
      const first = items.findIndex((_, index) => selected[index] === undefined)
      scrollTo(document.getElementById(`${uid}-q${first}`))
      return
    }
    setStats(saveQuizResult(pathname, score, total))
    setSubmitted(true)
    requestAnimationFrame(() => {
      resultRef.current?.focus({ preventScroll: true })
      scrollTo(resultRef.current)
    })
  }

  function reset() {
    setSelected({})
    setSubmitted(false)
    setWarned(false)
    headingRef.current?.focus({ preventScroll: true })
    headingRef.current?.scrollIntoView({ block: 'start' })
  }

  const message = score >= total * 0.8 ? highMessage ?? t.high : score >= total * 0.5 ? midMessage ?? t.mid : lowMessage ?? t.low

  return (
    <div className={classes.page}>
      <header className={classes.heading} ref={headingRef} tabIndex={-1}>
        <p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}
      </header>
      <section className={classes.box}>
        {items.map((item, index) => {
          const chosen = selected[index]
          const isRight = chosen === item.answer
          return <fieldset id={`${uid}-q${index}`} className={`${classes.question}${submitted ? ' qz-locked' : ''}`} key={index}>
            <legend>{index + 1}. {item.q}</legend>
            {item.options.map((option, optionIndex) => {
              const state = submitted ? optionIndex === item.answer ? ' qz-option--right' : optionIndex === chosen ? ' qz-option--wrong' : '' : ''
              return <label key={optionIndex} className={`qz-option${state}`}><input type="radio" name={`${uid}-${index}`} checked={chosen === optionIndex} onChange={() => { if (!submitted) setSelected((current) => ({ ...current, [index]: optionIndex })) }} />{option}</label>
            })}
            {submitted && <p className={`qz-feedback ${isRight ? 'qz-feedback--ok' : 'qz-feedback--ko'}`}><span aria-hidden="true">{isRight ? '✓' : '✗'}</span>{' '}{isRight ? t.right : chosen === undefined ? t.none(item.options[item.answer]) : t.wrong(item.options[item.answer])}</p>}
          </fieldset>
        })}
        {showWarning && <p className="qz-warning" role="alert">{t.unanswered(unanswered)} {t.unansweredHint}</p>}
        <div className="qz-actions">{submitted ? <button className={`${classes.button} qz-ghost`} type="button" onClick={reset}>{t.retry}</button> : <button className={classes.button} type="button" onClick={check}>{showWarning ? t.checkAnyway : buttonLabel ?? t.check}</button>}</div>
        {submitted && <div className={classes.score} role="status" ref={resultRef} tabIndex={-1}><strong>{t.mark(score, total)}</strong><span>{message}</span>{stats && <span className="qz-best">{t.best(stats.best, stats.total, stats.attempts)}</span>}</div>}
      </section>
      <Link className={classes.link} to={backTo}>{backLabel}</Link>
    </div>
  )
}

export default function Quiz(props) {
  const { pathname } = useLocation()
  return <QuizInner key={pathname} {...props} />
}
