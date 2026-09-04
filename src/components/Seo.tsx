import { Helmet } from 'react-helmet-async'

/* ------------------------------------------------------------------ */
/*  Single source of truth for SEO (canonical, hreflang, meta, JSON-LD)*/
/* ------------------------------------------------------------------ */

export const SITE_URL = 'https://mantenimentslizana.com'

export const LANGS = ['ca', 'es', 'en'] as const
export type Lang = (typeof LANGS)[number]
export const DEFAULT_LANG: Lang = 'ca'

/* NAP + business data — MUST stay consistent with Google Business Profile */
export const BUSINESS_NAP = {
  name: 'Manteniments Lizana',
  telephone: '+34677218303',
  email: 'mantenimentlizana@gmail.com',
  locality: 'Maçanet de la Selva',
  postalCode: '17412',
  region: 'Girona',
  country: 'ES',
  // Town-centre coordinates of Maçanet de la Selva (41°46′46″N 2°44′0″E)
  geo: { latitude: 41.7794, longitude: 2.7333 },
} as const

const BUSINESS_DESCRIPTION: Record<Lang, string> = {
  ca: 'Servei professional de manteniment general, piscines, jardineria i instal·lacions a Girona, la Selva, la Costa Brava i el Maresme.',
  es: 'Servicio profesional de mantenimiento general, piscinas, jardinería e instalaciones en Girona, la Selva, la Costa Brava y el Maresme.',
  en: 'Professional general maintenance, pool, gardening and installation services in Girona, La Selva, Costa Brava and Maresme.',
}

const SERVICE_AREAS: Array<{ name: string; type?: 'City' | 'Place' }> = [
  { name: 'Girona', type: 'City' },
  { name: 'La Selva', type: 'City' },
  { name: 'Costa Brava' },
  { name: 'Baix Empordà', type: 'City' },
  { name: 'Gironès', type: 'City' },
  { name: 'Maresme' },
]

const OPENING_HOURS = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '19:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday'],
    opens: '09:00',
    closes: '13:00',
  },
]

const OG_LOCALE: Record<Lang, string> = {
  ca: 'ca_ES',
  es: 'es_ES',
  en: 'en_US',
}

/** Replaces the language segment of a canonical path (e.g. /ca/serveis/x -> /es/serveis/x). */
export function localizePath(path: string, lang: Lang): string {
  const segments = path.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)
  if (segments.length > 0 && (LANGS as readonly string[]).includes(segments[0])) {
    segments[0] = lang
  } else {
    segments.unshift(lang)
  }
  return `/${segments.join('/')}`
}

export function hreflangUrls(path: string): Record<Lang | 'x-default', string> {
  return {
    ca: `${SITE_URL}${localizePath(path, 'ca')}`,
    es: `${SITE_URL}${localizePath(path, 'es')}`,
    en: `${SITE_URL}${localizePath(path, 'en')}`,
    'x-default': `${SITE_URL}${localizePath(path, 'ca')}`,
  }
}

export interface SeoProps {
  lang: Lang
  /** Canonical path of THIS page (no trailing slash), e.g. '/ca/serveis/piscines' */
  path: string
  title: string
  description: string
  /** Path or absolute URL of the social image (defaults to /hero.webp) */
  image?: string
  /** Optional per-page hreflang overrides (needed when slugs differ per language, e.g. privacy pages) */
  alternates?: Partial<Record<Lang | 'x-default', string>>
}

export default function Seo({ lang, path, title, description, image, alternates }: SeoProps) {
  const url = `${SITE_URL}${path}`
  const imageAbs = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/hero.webp`

  // When explicit alternates are provided (e.g. privacy: CA/ES slugs differ and
  // there is no real EN page) they fully control the list; otherwise we derive
  // the ca/es/en/x-default set from the canonical path.
  const allAlternates = alternates ? { ...alternates } : hreflangUrls(path)

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BUSINESS_NAP.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-lizana.webp`,
    image: [`${SITE_URL}/logo-lizana.webp`, `${SITE_URL}/hero.webp`],
    description: BUSINESS_DESCRIPTION[lang],
    telephone: BUSINESS_NAP.telephone,
    email: BUSINESS_NAP.email,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS_NAP.locality,
      postalCode: BUSINESS_NAP.postalCode,
      addressRegion: BUSINESS_NAP.region,
      addressCountry: BUSINESS_NAP.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_NAP.geo.latitude,
      longitude: BUSINESS_NAP.geo.longitude,
    },
    openingHoursSpecification: OPENING_HOURS,
    areaServed: SERVICE_AREAS.map((a) => ({ '@type': a.type ?? 'Place', name: a.name })),
  }

  // Keep the inline JSON safe inside an HTML <script> element.
  const jsonLd = JSON.stringify(localBusiness)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {(Object.keys(allAlternates) as Array<Lang | 'x-default'>).map((h) => (
        <link key={h} rel="alternate" hrefLang={h} href={allAlternates[h]} />
      ))}

      <meta property="og:locale" content={OG_LOCALE[lang]} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BUSINESS_NAP.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageAbs} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageAbs} />

      <script type="application/ld+json">{jsonLd}</script>
    </Helmet>
  )
}
