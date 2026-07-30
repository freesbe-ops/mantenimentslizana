import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Serveis', href: '#serveis', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> },
  { label: 'Sobre nosaltres', href: '#sobre', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/></svg> },
]

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Reparacions a la Llar',
    description: 'Llàmpades, endolls, interruptors, ventiladors, aixetes, cisternes, penjar quadres i prestatgeries, fusteria, pintura, muntatge de mobles i molt més.',
    image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&h=400&fit=crop&auto=format',
    tag: 'Ràpid i eficient',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
      </svg>
    ),
    title: 'Manteniment de Piscines',
    description: 'Neteja del vas i filtre, control químic de l\'aigua, revisió d\'equips, tractaments preventius i posada a punt per a la temporada.',
    image: 'https://images.unsplash.com/photo-1562016600-ece13e8ba570?w=600&h=400&fit=crop&auto=format',
    tag: 'Aigua sempre neta',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 6v6l3 3" /><path d="M20 2v6h-6" />
      </svg>
    ),
    title: 'Jardineria',
    description: 'Tall de gespa, poda d\'arbustos i arbres, desbrossament, neteja de jardins, plantació i manteniment, i posada a punt per a l\'estiu.',
    image: 'https://images.unsplash.com/photo-1668120089662-42642838cfef?w=600&h=400&fit=crop&auto=format',
    tag: 'Jardins sans i bonics',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Manteniment General',
    description: 'Fontaneria bàsica, electricitat, pintura, petites reformes i fusteria. Mantenim la teva llar en perfecte estat tot l\'any.',
    image: 'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=600&h=400&fit=crop&auto=format',
    tag: 'Tot en un servei',
  },
]

const FOR_WHOM = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    title: 'Particulars',
    desc: 'Solucions ràpides per a la llar. T\'atenem amb rapidesa i cura, sense complicacions.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: 'Immobiliàries i Turisme',
    desc: 'Pisos de lloguer, allotjaments i apartaments turístics sempre a punt per als hostes.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Comunitats de Veïns',
    desc: 'Manteniment preventiu i correctiu de zones comunes, jardins, piscines i instal·lacions.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Segones Residències',
    desc: 'Obrim, tanquem i mantenim la teva casa de vacances perquè sempre estigui llesta quan arribes.',
  },
]

const TESTIMONIALS = [
  { name: 'Maria G.', location: 'Girona', text: 'Molt professionals i ràpids. Vaig trucar al matí i a la tarda ja tenien l\'aixeta arreglada. Totalment recomanables.' },
  { name: 'Ekaterina V.', location: 'Platja d\'Aro', text: 'Porten la meva piscina des de fa tres anys i sempre és perfecta. Tracte excel·lent i molt puntuals.' },
  { name: 'Anna M.', location: 'Palamós', text: 'Van fer la poda del jardí i va quedar impecable. A més, el pressupost va ser molt ajustat.' },
  { name: 'Francesc R.', location: 'Santa Cristina d\'Aro', text: 'Ens gestionen el manteniment de la comunitat des de fa anys. Molt satisfets amb el servei.' },
  { name: 'Núria V.', location: 'Llagostera', text: 'Excel·lents professionals. Van muntar tots els mobles del pis nou en un sol dia i sense cap problema.' },
  { name: 'Pere T.', location: 'Castell-Platja d\'Aro', text: 'La meva segona residència sempre la trobo a punt gràcies a ells. Un servei de confiança al 100%.' },
]

const WHY_US = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Professionals qualificats',
    desc: 'Equip amb formació i experiència en tots els oficis. Treballem amb garantia i seguretat.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    title: 'Servei ràpid i puntual',
    desc: 'Responem en poques hores i complim els horaris acordats. El teu temps és el nostre temps.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Pressupost sense compromís',
    desc: 'T\'expliquem el preu abans de començar. Sense sorpreses ni costos amagats.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,6 9,17 4,12"/>
      </svg>
    ),
    title: 'Garantia en els treballs',
    desc: 'Tots els treballs porten garantia. Si qualsevol cosa no funciona, tornem a solucionar-ho.',
  },
]

function CarouselBar() {
  const items = ['PUNTUALS SEMPRE', 'SENSE COMPROMÍS', '5★ REVIEWS VERIFICADES', 'PRESSUPOST RÀPID']
  const all = [...items, ...items, ...items]
  const text = all.join(' &nbsp;&nbsp;&nbsp;&mdash;&nbsp;&nbsp;&nbsp; ')

  return (
    <div style={{ borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5', backgroundColor: '#F5F5F5', padding: '20px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'scrollCarousel 30s linear infinite' }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#1A1714', letterSpacing: '0.12em', paddingRight: 0 }} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <style>{`
        @keyframes scrollCarousel {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

export default function App() {
  const [formData, setFormData] = useState({ nom: '', telefon: '', email: '', servei: '', missatge: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const params = new URLSearchParams()
      params.append('nom', formData.nom)
      params.append('telefon', formData.telefon)
      params.append('email', formData.email)
      params.append('servei', formData.servei)
      params.append('missatge', formData.missatge)
      await fetch('https://script.google.com/macros/s/AKfycbwupXElgqK9zuPYYziUOBulax-Slj1HGSYypSE66ftUEje4cCAIbiwbEhEfQEP04CDg/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      })
    } catch (_) {
      // silently ignore
    }
    setSent(true)
  }

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", backgroundColor: '#F5F5F5', color: '#1A1714' }}>

      {/* HEADER */}
      <header style={{ position: 'sticky', top: 20, zIndex: 50, padding: '0 24px' }}>
        <div style={{ width: 'fit-content', margin: '0 auto', backgroundColor: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: 100, padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, height: 60, boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)', border: '1px solid rgba(255,255,255,0.3)' }}>
          {/* Logo */}
          <a href="#inici" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="/src/imports/logo-lizana.png" alt="Manteniments Lizana" style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover' }} />
              <div className="logo-text">
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15, color: '#1A1714', lineHeight: 1.1 }}>Manteniments</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: 12, color: '#7A6F65', letterSpacing: '0.08em' }}>LIZANA</div>
              </div>
            </div>
          </a>

          {/* Desktop Nav - Icons with labels */}
          <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="hidden-mobile">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} title={l.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1, padding: '4px 10px', borderRadius: 40, color: '#7A6F65', textDecoration: 'none', transition: 'color 0.2s, background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#1A1714'; e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#7A6F65'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                {l.icon}
                <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>{l.label}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Nav - 4 items with icon + text, iOS style */}
          <nav className="show-mobile" style={{ display: 'none', gap: 2, alignItems: 'center', justifyContent: 'center', padding: '4px 0' }}>
            <a href="#serveis" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1, padding: '4px 8px', borderRadius: 40, color: '#7A6F65', textDecoration: 'none', transition: 'color 0.2s, background 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1A1714'; e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#7A6F65'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>Serveis</span>
            </a>
            <a href="#sobre" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1, padding: '4px 8px', borderRadius: 40, color: '#7A6F65', textDecoration: 'none', transition: 'color 0.2s, background 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1A1714'; e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#7A6F65'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
              <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>Sobre nosaltres</span>
            </a>
            <a href="#contacte" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1, padding: '4px 8px', borderRadius: 40, color: '#7A6F65', textDecoration: 'none', transition: 'color 0.2s, background 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1A1714'; e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#7A6F65'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" fill="#25D366"/>
                <path d="M12.051 1.999C5.496 1.999.16 7.334.157 13.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 1.999z" fill="#25D366"/>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" fill="#FFFFFF"/>
              </svg>
              <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.02em', whiteSpace: 'nowrap', color: '#25D366' }}>Contacta'ns</span>
            </a>
            <a href="#contacte" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1, padding: '4px 8px', borderRadius: 40, color: '#7A6F65', textDecoration: 'none', transition: 'color 0.2s, background 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1A1714'; e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#7A6F65'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
              <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.02em', whiteSpace: 'nowrap', color: '#00326B' }}>Pressupost</span>
            </a>
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="https://wa.me/34677218303?utm_source=web&utm_medium=whatsapp&utm_campaign=contacte" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 14px', border: '1px solid #25D366', borderRadius: 40, textDecoration: 'none', color: '#25D366', fontSize: 13, fontWeight: 500 }}
              className="hidden-mobile">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              677 218 303
            </a>
            <a href="#contacte" style={{ padding: '8px 18px', backgroundColor: '#00326B', color: '#FFFFFF', borderRadius: 40, textDecoration: 'none', fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap' }} className="hidden-mobile">
              Sol·licita pressupost
            </a>
          </div>
        </div>
      </header>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .logo-text { display: none !important; }
          header > div { gap: 0 !important; width: 100% !important; justify-content: space-between !important; padding: 0 16px !important; }
          nav.show-mobile { flex: 1; justify-content: center !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .logo-text { display: block !important; }
        }
      `}</style>

      {/* HERO - Full width background */}
      <section id="inici" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'flex-start', marginTop: '-60px', paddingTop: '60px' }}>
        {/* Background image - full width */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/src/imports/hero.jpg"
            alt="Manteniments Lizana"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
          {/* Dark overlay for readability */}
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
          <div style={{ maxWidth: 600 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 28, fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', color: '#B0C4DE', textTransform: 'uppercase' }}>
              <span style={{ width: 20, height: 1, backgroundColor: '#FFFFFF', display: 'inline-block' }} />
              Girona i Maresme · 10 anys d'experiència
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 8, color: '#FFFFFF' }}>
              Mans expertes.
            </h1>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, fontStyle: 'italic', lineHeight: 1.1, marginBottom: 28, color: '#FFFFFF' }}>
              Resultats reals.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: '#E0E0E0', maxWidth: 440, marginBottom: 40 }}>
              Reparacions, manteniment, jardineria i piscines a Girona i comarques. Un equip proper, puntual i professional que deixa la teva llar en perfecte estat.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center', marginBottom: 48 }}>
              <a href="#contacte" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', backgroundColor: '#FFFFFF', color: '#1A1714', borderRadius: 40, textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#E5E5E5')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#FFFFFF')}>
                Sol·licita pressupost gratuït
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
              </a>
              <a href="#serveis" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '13px 24px', borderRadius: 40, border: '1px solid rgba(255,255,255,0.4)', color: '#FFFFFF', textDecoration: 'none', fontSize: 14, fontWeight: 400, backgroundColor: 'transparent' }}>
                Veure serveis
              </a>
            </div>
            {/* Stars */}
            <a href="https://share.google/MP6A0EmNCzBuHSuTd" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <span style={{ fontSize: 13, color: '#E0E0E0' }}><strong style={{ color: '#FFFFFF' }}>4.9 / 5</strong> · Més de 120 clients satisfets</span>
            </a>
          </div>
        </div>

        {/* Floating badge */}
        <div style={{ position: 'absolute', bottom: 40, right: 40, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.95)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: 12, padding: '14px 18px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }} className="hero-badge">
          <div style={{ fontSize: 11, color: '#7A6F65', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Resposta garantida</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#1A1714' }}>En menys de 2h</div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-badge { display: none !important; }
        }
      `}</style>

      {/* TRUST BAR - Auto carousel */}
      <CarouselBar />

      {/* SERVICES */}
      <section id="serveis" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 20 }}>SERVEIS</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'end' }} className="section-header-grid">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.15, color: '#1A1714', margin: 0 }}>
              Tot el que la teva llar<br />
              <em style={{ color: '#00326B', fontStyle: 'italic' }}>necessita.</em>
            </h2>
            <p style={{ fontSize: 16, color: '#7A6F65', lineHeight: 1.65, margin: 0 }}>
              Un servei integral que cobreix totes les necessitats de manteniment. Si no és a la llista, pregunta'ns igualment — molt probablement t'ho podem resoldre.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="services-grid">
          {SERVICES.map(s => (
            <div key={s.title} style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #E5E5E5', backgroundColor: '#FAFAFA', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
              <div style={{ aspectRatio: '16/7', overflow: 'hidden', backgroundColor: '#E5E5E5' }}>
                <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.04)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')} />
              </div>
              <div style={{ padding: '28px 28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#00326B' }}>
                    {s.icon}
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, margin: 0, color: '#1A1714' }}>{s.title}</h3>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', padding: '4px 10px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', borderRadius: 40, color: '#7A6F65', whiteSpace: 'nowrap' }}>{s.tag}</span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#5A5148', margin: 0 }}>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .section-header-grid { grid-template-columns: 1fr 1fr; }
        .services-grid { grid-template-columns: repeat(2, 1fr); }
        @media (max-width: 768px) {
          .section-header-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* FOR WHOM */}
      <section style={{ backgroundColor: '#F5F5F5', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 60, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'end' }} className="section-header-grid">
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 20 }}>PER A QUI TREBALLEM</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.15, color: '#1A1714', margin: 0 }}>
                Per a tothom que<br />
                <em style={{ color: '#00326B', fontStyle: 'italic' }}>confia en nosaltres.</em>
              </h2>
            </div>
            <p style={{ fontSize: 16, color: '#7A6F65', lineHeight: 1.65, margin: 0 }}>
              Treballem amb particulars, empreses i comunitats a tota la província de Girona. Qualsevol necessitat de manteniment, la resolem.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="forwhom-grid">
            {FOR_WHOM.map(f => (
              <div key={f.title} style={{ padding: '32px 24px', borderRadius: 14, border: '1px solid #E5E5E5', backgroundColor: '#FFFFFF', transition: 'border-color 0.2s, background 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#00326B'; (e.currentTarget as HTMLElement).style.backgroundColor = '#FAFAFA'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E5E5E5'; (e.currentTarget as HTMLElement).style.backgroundColor = '#FFFFFF'; }}>
                <div style={{ color: '#00326B', marginBottom: 18 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#1A1714', marginBottom: 10, lineHeight: 1.2 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: '#7A6F65', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .forwhom-grid { grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 900px) { .forwhom-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px) { .forwhom-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      {/* SOBRE NOSALTRES */}
      <section id="sobre" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">
        <div style={{ position: 'relative' }}>
          <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/5', backgroundColor: '#E5E5E5' }}>
            <img
              src="https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=700&h=900&fit=crop&auto=format"
              alt="Equip de Manteniments Lizana"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ position: 'absolute', top: 32, right: -32, backgroundColor: '#00326B', borderRadius: 12, padding: '20px 24px' }} className="about-badge">
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#FFFFFF', lineHeight: 1 }}>+15</div>
            <div style={{ fontSize: 12, color: '#B0C4DE', marginTop: 4, lineHeight: 1.4 }}>anys<br />d'experiència</div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 20 }}>SOBRE NOSALTRES</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, lineHeight: 1.2, color: '#1A1714', marginBottom: 20 }}>
            Hola, som<br /><em style={{ color: '#00326B', fontStyle: 'italic' }}>Manteniments Lizana.</em>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5A5148', marginBottom: 20 }}>
            Som un equip local de Girona amb més de 15 anys resolent tot el que la teva llar necessita. Hem crescut gràcies a la confiança dels nostres clients i als treballs ben fets.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5A5148', marginBottom: 36 }}>
            Treballem un servei alhora, sempre amb cura. Quan diem que hi serem a l'hora, hi som. Quan diem que ho deixarem net, ho deixem net. Sense excuses ni complicacions.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 40 }}>
            {[{ num: '+500', label: 'Llars ateses' }, { num: '+120', label: 'Clients fidels' }, { num: '4.9★', label: 'Valoració' }].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#00326B' }}>{s.num}</div>
                <div style={{ fontSize: 12, color: '#7A6F65', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <a href="#contacte" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', backgroundColor: '#00326B', color: '#FFFFFF', borderRadius: 40, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
            Contacta'ns avui
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
          </a>
        </div>
      </section>

      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr; }
        .about-badge { display: block; }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-badge { display: none !important; }
        }
      `}</style>

      {/* WHY US */}
      <section style={{ backgroundColor: '#F5F5F5', padding: '100px 24px', borderTop: '1px solid #E5E5E5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 16 }}>PER QUÈ NOSALTRES</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 700, color: '#1A1714', lineHeight: 1.2, margin: '0 auto', maxWidth: 540 }}>
              Per què confiar en <em style={{ color: '#00326B', fontStyle: 'italic' }}>Manteniments Lizana</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }} className="whyus-grid">
            {WHY_US.map(w => (
              <div key={w.title}>
                <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00326B', marginBottom: 20 }}>
                  {w.icon}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: '#1A1714', marginBottom: 10, lineHeight: 1.2 }}>{w.title}</h3>
                <p style={{ fontSize: 14, color: '#7A6F65', lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .whyus-grid { grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 900px) { .whyus-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px) { .whyus-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      {/* TESTIMONIALS */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px' }}>
        <div style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 16 }}>TESTIMONIS</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 700, color: '#1A1714', lineHeight: 1.2, maxWidth: 540 }}>
            El que diuen els<br /><em style={{ color: '#00326B', fontStyle: 'italic' }}>nostres clients.</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="testimonials-grid">
          {TESTIMONIALS.map(t => (
            <div key={t.name} style={{ padding: '28px 28px 32px', borderRadius: 14, border: '1px solid #E5E5E5', backgroundColor: '#FAFAFA' }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#00326B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#3A3530', margin: '0 0 20px', fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#00326B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#FFFFFF' }}>{t.name[0]}</span>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#1A1714' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#7A6F65' }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .testimonials-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 900px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      {/* CONTACT */}
      <section id="contacte" style={{ backgroundColor: '#F5F5F5', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }} className="contact-grid">

            {/* Left */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 20 }}>CONTACTE</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, lineHeight: 1.2, color: '#1A1714', marginBottom: 20 }}>
                Explica'ns la feina —{' '}
                <em style={{ color: '#00326B', fontStyle: 'italic' }}>t'hi responem de pressa.</em>
              </h2>
              <p style={{ fontSize: 15, color: '#7A6F65', lineHeight: 1.7, marginBottom: 48 }}>
                Truca'ns, escriu-nos un WhatsApp o omple el formulari. Et donarem resposta en menys de dues hores en horari laboral.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { icon: '💬', label: 'WhatsApp', val: '677 218 303', sub: '7:30h – 19:00h, de dilluns a divendres', href: 'https://wa.me/34677218303?utm_source=web&utm_medium=whatsapp&utm_campaign=contacte' },
                  { icon: '✉️', label: 'Email', val: 'mantenimentlizana@gmail.com', sub: 'Resposta en poques hores', href: 'mailto:mantenimentlizana@gmail.com' },
                ].map(c => (
                  <a key={c.label} href={c.href} style={{ textDecoration: 'none', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: '#E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, color: '#7A6F65', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{c.label}</div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: '#1A1714', marginBottom: 2 }}>{c.val}</div>
                      <div style={{ fontSize: 12, color: '#7A6F65' }}>{c.sub}</div>
                    </div>
                  </a>
                ))}

                <div style={{ marginTop: 8 }}>
                  <div style={{ fontSize: 11, color: '#7A6F65', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Zona de cobertura</div>
                  <div style={{ fontSize: 14, color: '#5A5148', lineHeight: 1.6 }}>Girona, Costa Brava, Baix Empordà, Gironès i comarques.</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: '40px 36px', border: '1px solid #E5E5E5' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#1A1714', marginBottom: 12 }}>Missatge enviat!</h3>
                  <p style={{ fontSize: 15, color: '#7A6F65' }}>Et contactarem en menys de 2 hores. Gràcies per confiar en nosaltres.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#1A1714', marginBottom: 28 }}>Sol·licita pressupost gratuït</h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 6 }}>Nom</label>
                      <input value={formData.nom} onChange={e => setFormData({ ...formData, nom: e.target.value })} placeholder="El teu nom" required
                        style={{ width: '100%', padding: '11px 14px', border: '1px solid #E5E5E5', borderRadius: 8, fontSize: 14, backgroundColor: '#fff', color: '#1A1714', outline: 'none', fontFamily: 'inherit' }}
                        onFocus={e => (e.currentTarget.style.borderColor = '#00326B')}
                        onBlur={e => (e.currentTarget.style.borderColor = '#E5E5E5')} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 6 }}>Telèfon</label>
                      <input value={formData.telefon} onChange={e => setFormData({ ...formData, telefon: e.target.value })} placeholder="6XX XXX XXX" type="tel"
                        style={{ width: '100%', padding: '11px 14px', border: '1px solid #E5E5E5', borderRadius: 8, fontSize: 14, backgroundColor: '#fff', color: '#1A1714', outline: 'none', fontFamily: 'inherit' }}
                        onFocus={e => (e.currentTarget.style.borderColor = '#00326B')}
                        onBlur={e => (e.currentTarget.style.borderColor = '#E5E5E5')} />
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 6 }}>Email</label>
                    <input value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="correu@exemple.com" type="email" required
                      style={{ width: '100%', padding: '11px 14px', border: '1px solid #E5E5E5', borderRadius: 8, fontSize: 14, backgroundColor: '#fff', color: '#1A1714', outline: 'none', fontFamily: 'inherit' }}
                      onFocus={e => (e.currentTarget.style.borderColor = '#00326B')}
                      onBlur={e => (e.currentTarget.style.borderColor = '#E5E5E5')} />
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 6 }}>Tipus de servei</label>
                    <select value={formData.servei} onChange={e => setFormData({ ...formData, servei: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', border: '1px solid #E5E5E5', borderRadius: 8, fontSize: 14, backgroundColor: '#fff', color: formData.servei ? '#1A1714' : '#9A8F86', outline: 'none', fontFamily: 'inherit', appearance: 'none' }}
                      onFocus={e => (e.currentTarget.style.borderColor = '#00326B')}
                      onBlur={e => (e.currentTarget.style.borderColor = '#E5E5E5')}>
                      <option value="">Selecciona un servei...</option>
                      <option>Reparacions a la llar</option>
                      <option>Manteniment de piscines</option>
                      <option>Jardineria</option>
                      <option>Manteniment general</option>
                      <option>Altres</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 6 }}>Explica'ns la feina</label>
                    <textarea value={formData.missatge} onChange={e => setFormData({ ...formData, missatge: e.target.value })} rows={4}
                      placeholder="Descriu breument el que necessites. Pots enviar-nos fotos per WhatsApp si ho prefereixes."
                      style={{ width: '100%', padding: '11px 14px', border: '1px solid #E5E5E5', borderRadius: 8, fontSize: 14, backgroundColor: '#fff', color: '#1A1714', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
                      onFocus={e => (e.currentTarget.style.borderColor = '#00326B')}
                      onBlur={e => (e.currentTarget.style.borderColor = '#E5E5E5')} />
                  </div>

                  <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#00326B', color: '#FFFFFF', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#00244D')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00326B')}>
                    Enviar sol·licitud
                  </button>
                  <p style={{ fontSize: 12, color: '#9A8F86', textAlign: 'center', marginTop: 12, lineHeight: 1.5 }}>
                    Resposta garantida en menys de 2 hores en horari laboral.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid { grid-template-columns: 1fr 1.4fr; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      {/* FOOTER - Floating pill style */}
      <footer style={{ padding: '60px 24px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', backgroundColor: '#FFFFFF', borderRadius: 28, padding: '48px 48px 28px', boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)', border: '1px solid #EEEEEE' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 40 }} className="footer-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <img src="/src/imports/logo-lizana.png" alt="Manteniments Lizana" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, color: '#1A1714', lineHeight: 1.1 }}>Manteniments Lizana</div>
                  <div style={{ fontSize: 11, color: '#7A6F65', letterSpacing: '0.08em' }}>GIRONA I MARESME · 10 ANYS D'EXPERIÈNCIA</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: '#7A6F65', lineHeight: 1.7, maxWidth: 280 }}>
                Servei integral de manteniment, reparacions, jardineria i piscines a Girona i comarques. Professionals de confiança, servei proper.
              </p>
              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                <a href="https://www.facebook.com/p/Manteniments-Lizana-61590819927805/" target="_blank" rel="noopener noreferrer" style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1877F2', fontSize: 14, textDecoration: 'none' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://wa.me/34677218303" target="_blank" rel="noopener noreferrer" style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', fontSize: 14, textDecoration: 'none' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 20 }}>Serveis</div>
              {['Reparacions a la llar', 'Manteniment de piscines', 'Jardineria', 'Manteniment general'].map(s => (
                <a key={s} href="#serveis" style={{ display: 'block', fontSize: 13, color: '#7A6F65', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00326B')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#7A6F65')}>{s}</a>
              ))}
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 20 }}>Empresa</div>
              {['Inici', 'Sobre nosaltres', 'Testimonis', 'Contacte'].map(s => (
                <a key={s} href={`#${s.toLowerCase().replace(' ', '')}`} style={{ display: 'block', fontSize: 13, color: '#7A6F65', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00326B')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#7A6F65')}>{s}</a>
              ))}
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: '#7A6F65', textTransform: 'uppercase', marginBottom: 20 }}>Contacte</div>
              <div style={{ fontSize: 13, color: '#7A6F65', lineHeight: 1.8 }}>
                <div>💬 <a href="https://wa.me/34677218303?utm_source=web&utm_medium=whatsapp&utm_campaign=contacte" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 500 }}>677 218 303</a></div>
                <div>✉️ <a href="mailto:mantenimentlizana@gmail.com" style={{ color: '#00326B', textDecoration: 'none', fontWeight: 500 }}>mantenimentlizana@gmail.com</a></div>
                <div style={{ marginTop: 8 }}>Girona i comarques</div>
                <div style={{ fontSize: 12, color: '#9A8F86', marginTop: 4 }}>Dl–Dv: 7:30 – 19:00h</div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #E5E5E5', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <a href="https://www.sprintops.es" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: '#9A8F86', textDecoration: 'none' }}>2026 SprintOps. Tots els drets reservats</a>
            <div style={{ display: 'flex', gap: 24 }}>
              <a href="#" style={{ fontSize: 12, color: '#9A8F86', textDecoration: 'none' }}>Avís legal</a>
              <a href="#" style={{ fontSize: 12, color: '#9A8F86', textDecoration: 'none' }}>Política de privacitat</a>
              <a href="#" style={{ fontSize: 12, color: '#9A8F86', textDecoration: 'none' }}>Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>

    </div>
  )
}