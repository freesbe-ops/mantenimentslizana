import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
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