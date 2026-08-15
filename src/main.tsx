import React, { Suspense, lazy, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './App'
import './i18n'
import './index.css'

const Piscines = lazy(() => import('./pages/Piscines'))
const Jardineria = lazy(() => import('./pages/Jardineria'))
const Manteniment = lazy(() => import('./pages/Manteniment'))
const Instalacions = lazy(() => import('./pages/Instalacions'))

// Redirigeix des del 404 redirect de GitHub Pages
if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect
  delete sessionStorage.redirect
  // Reemplaça l'históric per no deixar /index.html a la navegació
  window.history.replaceState(null, '', redirect)
}

function ScrollManager() {
  const location = useLocation()
  const prevPathname = useRef(location.pathname)

  // Scroll a l'element amb hash.
  // ORDRE IMPORTANT: aquest effect ha d'anar ABANS del de pathname, perquè
  // necessita llegir prevPathname abans que s'actualitzi a l'altre effect.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const element = document.getElementById(id)
      if (element) {
        // Si venim d'una altra pàgina (ex: de /ca/serveis/piscines a /ca#sobre),
        // esperem que el component es munti abans de fer scroll.
        // Si és la mateixa pàgina amb un hash nou, actuem immediatament.
        const isNewPage = prevPathname.current !== location.pathname
        const delay = isNewPage ? 250 : 0
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, delay)
      }
    }
  }, [location.hash, location.pathname])

  // Quan canvia la ruta, actualitza el ref i torna a top si no hi ha hash.
  useEffect(() => {
    if (location.pathname !== prevPathname.current) {
      prevPathname.current = location.pathname
      if (!location.hash) {
        window.scrollTo(0, 0)
      }
    }
  }, [location.pathname, location.hash])

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
            <Route path="/:lang/serveis/jardineria" element={<Jardineria />} />
            <Route path="/:lang/serveis/manteniment" element={<Manteniment />} />
            <Route path="/:lang/serveis/instalacions" element={<Instalacions />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)