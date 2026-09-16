import { Link } from 'react-router-dom'

function SimplePage({ title, text }) {
  return (
    <section className="simple-page">
      <p className="eyebrow">Ikkir Akkra</p>
      <h1>{title}</h1>
      <p>{text}</p>
      <Link className="button-link" to="/">Retour à l'accueil</Link>
    </section>
  )
}

export default SimplePage
