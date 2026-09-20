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

initAnimations()

initTilt()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><App /></AuthProvider>
  </StrictMode>,
)
