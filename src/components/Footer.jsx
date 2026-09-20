import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/logo.png.png" alt="Ikkir Akkra" />
        <div><strong>Ikkir Akkra</strong><span>Apprendre ensemble, progresser chaque jour.</span></div>
      </div>
      <p>&copy; {new Date().getFullYear()} Ikkir Akkra</p>
    </footer>
  )
}

export default Footer
