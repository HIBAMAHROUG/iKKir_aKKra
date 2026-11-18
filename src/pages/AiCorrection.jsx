import { useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import './AiCorrection.css'

const emptyResult = { correctedText: '', score: null, strengths: [], corrections: [], advice: '' }

function AiCorrection() {
  const [type, setType] = useState('production')
  const [level, setLevel] = useState('6e année')
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState(emptyResult)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function submit(event) {
    event.preventDefault()
    setError('')
    setResult(emptyResult)
    setLoading(true)
    try {
      const response = await api('/ai/correct', {
        method: 'POST',
        body: JSON.stringify({ type, level, text: prompt }),
      })
      setResult(response.result)
    } catch (requestError) {
      setError(requestError.message || 'La correction est momentanément indisponible.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="ai-correction">
      <header className="ai-correction__hero">
        <p className="eyebrow">Assistant pédagogique</p>
        <h1>🤖 Mon correcteur de français</h1>
        <p>Un retour bienveillant pour progresser, sans remplacer le professeur.</p>
      </header>

      <form className="ai-correction__form" onSubmit={submit}>
        <div className="ai-correction__fields">
          <label>Type de travail
            <select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="production">Production écrite</option>
              <option value="answers">Réponses aux questions</option>
            </select>
          </label>
          <label>Niveau
            <select value={level} onChange={(event) => setLevel(event.target.value)}>
              <option>5e année</option>
              <option>6e année</option>
              <option>7e année</option>
            </select>
          </label>
        </div>
        <label>Texte de l’élève
          <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} rows="12" maxLength="6000" required placeholder="Colle ici la production ou les réponses de l’élève..." />
        </label>
        <p className="ai-correction__privacy">Ne partage pas le nom complet, l’adresse ou une information personnelle de l’élève.</p>
        <button className="button-link" type="submit" disabled={loading}>{loading ? 'Correction en cours…' : 'Corriger le travail'}</button>
      </form>

      {error && <p className="ai-correction__error" role="alert">{error}</p>}
      {result.score !== null && (
        <section className="ai-correction__result" aria-live="polite">
          <div className="ai-correction__score"><strong>{result.score}/20</strong><span>Appréciation indicative</span></div>
          <ResultList title="Points réussis" items={result.strengths} />
          <ResultList title="Corrections à revoir" items={result.corrections} />
          <div className="ai-correction__text"><h2>Version corrigée</h2><p>{result.correctedText}</p></div>
          <div className="ai-correction__advice"><h2>Conseil pour progresser</h2><p>{result.advice}</p></div>
        </section>
      )}
      <Link className="button-link" to="/courses">← Retour aux cours</Link>
    </div>
  )
}

function ResultList({ title, items }) {
  return <div className="ai-correction__list"><h2>{title}</h2>{items.length ? <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul> : <p>Aucun élément signalé.</p>}</div>
}

export default AiCorrection
