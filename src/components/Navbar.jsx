import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/courses', label: 'Cours' },
  { to: '/levels', label: 'Niveaux' },
  { to: '/about', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navigation principale">
        <NavLink className="brand" to="/" end>
          Ikkir <span>Akkra</span>
        </NavLink>
        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
