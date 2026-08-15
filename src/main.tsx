import React, { Suspense, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './App'
import Piscines from './pages/Piscines'
import './i18n'
import './index.css'

// Redirigeix des del 404 redirect de GitHub Pages
if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect
  delete sessionStorage.redirect
  // Reemplaça l'históric per no deixar /index.html a la navegació
  window.history.replaceState(null, '', redirect)
}

function ScrollManager() {
  const location = useLocation()

  // Quan canvia la ruta (sense hash), torna al top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Quan hi ha hash a la URL (navegació SPA), fa scroll a l'element
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location.hash])

  return null
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollManager />
        <Suspense fallback={<div>Carregant...</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:lang" element={<App />} />
            <Route path="/:lang/serveis/piscines" element={<Piscines />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)