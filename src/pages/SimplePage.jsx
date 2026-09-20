import { useI18n } from '../i18n/useI18n'
import { Link } from 'react-router-dom'

function SimplePage({ title, text }) {
  const { t } = useI18n()
  return (
    <section className="simple-page">
      <p className="eyebrow">Ikkir Akkra</p>
      <h1>{title}</h1>
      <p>{text}</p>
      <Link className="button-link" to="/">{t('common.backHome')}</Link>
    </section>
  )
}

export default SimplePage
