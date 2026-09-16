import { Link } from 'react-router-dom'
import './Courses.css'

const levels = [
  { path: '/courses/5eme', title: '5th form', detail: 'Français et English · modules à venir', number: '01' },
  { path: '/courses/6eme', title: '6th form', detail: 'Français et English · lessons disponibles', number: '02' },
  { path: '/courses/7eme', title: '7th form', detail: 'Français et English · English lessons', number: '03' },
]

function Courses() {
  return (
    <div className="courses-page level-picker">
      <header className="courses-heading">
        <p className="eyebrow">Parcours scolaire</p>
        <h1>Choose your form</h1>
        <p>Click on 5th, 6th or 7th form to find Français and English, then choose a lesson.</p>
      </header>
      <div className="level-picker-grid">
        {levels.map((level) => (
          <Link className="form-card" to={level.path} key={level.path}>
            <span className="subject-number">{level.number}</span>
            <strong>{level.title}</strong>
            <small>{level.detail}</small>
            <span className="module-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Courses
