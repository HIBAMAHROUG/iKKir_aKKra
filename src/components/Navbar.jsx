import { NavLink } from 'react-router-dom'
import AuthNav from './AuthNav'
import LanguageSwitcher from './LanguageSwitcher'
import { useI18n } from '../i18n/useI18n'
import './Navbar.css'

const links = [
  { to: '/', key: 'nav.home' },
  { to: '/courses', key: 'nav.courses' },
  { to: '/levels', key: 'nav.levels' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
]

function Navbar() {
  const { t } = useI18n()

  return (
    <header className="site-header">
      <nav className="navbar" aria-label={t('nav.aria')}>
        <NavLink className="brand" to="/" end>
          <img src="/logo.png.png" alt="Ikkir Akkra" />
        </NavLink>
        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {t(link.key)}
            </NavLink>
          ))}
        </div>
        <AuthNav />
        <LanguageSwitcher />
      </nav>
    </header>
  )
}

export default Navbar