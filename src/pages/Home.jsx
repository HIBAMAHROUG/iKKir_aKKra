import { Link } from 'react-router-dom'
import homeHeader from '../assets/home-header.jpg.png'
import './Home.css'

const levels = [
  { path: '/courses/5eme', name: '5th form', detail: 'Français et English' },
  { path: '/courses/6eme', name: '6th form', detail: 'Français et English' },
  { path: '/courses/7eme', name: '7th form', detail: 'Français et English' },
]

function Home() {
  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src={homeHeader}
          alt="Élèves réunis et souriants"
        />
        <div className="hero-content">
          <p className="eyebrow">Ikkir Akkra</p>
          <h1 id="hero-title">Apprendre ensemble, progresser chaque jour.</h1>
          <p>Un espace simple pour retrouver vos cours, réviser et avancer avec confiance.</p>
        </div>
      </section>

      <section className="home-intro" aria-labelledby="levels-title">
        <p className="eyebrow">Ton parcours</p>
        <h2 id="levels-title">Choisis ton niveau</h2>
        <p>Commence par ton année scolaire pour retrouver les ressources adaptées.</p>
        <div className="level-grid">
          {levels.map((level) => (
            <Link className="level-card" to={level.path} key={level.path}>
              <strong>{level.name}</strong>
              <span>{level.detail}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
