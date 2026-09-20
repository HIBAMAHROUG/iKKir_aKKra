import I18nProvider from './i18n/I18nProvider';
import AuthProvider from './auth/AuthProvider';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './lessons-fix.css';
import './theme3d.css'
import { initTilt } from './tilt3d'
import './animations.css'
import { initAnimations } from './animations'
import './i18n/i18n.css'

initAnimations()

initTilt()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nProvider><AuthProvider><App /></AuthProvider></I18nProvider>
  </StrictMode>,
)
