#!/usr/bin/env node
/**
 * Generates /sitemap.xml (build-time) with every real, indexable page:
 *   - language homepages  (/ca, /es, /en)
 *   - service pages       (/<lang>/serveis/{piscines,jardineria,manteniment,instalacions})
 *   - privacy pages       (/ca/politica-de-privacitat, /es/politica-de-privacidad)
 *
 * Each URL includes <lastmod>, <changefreq>, <priority> and <xhtml:link
 * rel="alternate" hreflang> pointing to every language variant.
 *
 * Run BEFORE `vite build`: it writes into public/ so Vite copies it to dist/.
 *   pnpm run build  →  node scripts/generate-sitemap.mjs && vite build
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const DOMAIN = 'https://mantenimentslizana.com'
const LANGUAGES = ['ca', 'es', 'en']
const SERVICES = ['piscines', 'jardineria', 'manteniment', 'instalacions']
// Privacy has real content only in CA and ES (the ES slug differs).
const PRIVACY = [
  { path: '/ca/politica-de-privacitat', langs: ['ca'] },
  { path: '/es/politica-de-privacidad', langs: ['es'] },
]

const xml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const abs = (path) => `${DOMAIN}${path}`
// Regenerated on every build so <lastmod> always reflects the deploy date.
const LAST_MOD = new Date().toISOString().slice(0, 10)

/** Build the entry list with alternates (hreflang) per canonical URL. */
function buildEntries() {
  const entries = []

  // Language homepages
  for (const lang of LANGUAGES) {
    const path = `/${lang}`
    entries.push({
      path,
      lastmod: LAST_MOD,
      changefreq: 'weekly',
      priority: '1.0',
      alternates: Object.fromEntries(LANGUAGES.map((l) => [l, abs(`/${l}`)])),
    })
  }

  // Service pages (same slug in every language)
  for (const service of SERVICES) {
    for (const lang of LANGUAGES) {
      const path = `/${lang}/serveis/${service}`
      entries.push({
        path,
        lastmod: LAST_MOD,
        changefreq: 'monthly',
        priority: '0.9',
        alternates: Object.fromEntries(
          LANGUAGES.map((l) => [l, abs(`/${l}/serveis/${service}`)]),
        ),
      })
    }
  }

  // Privacy pages (only CA + ES, own slugs)
  for (const { path } of PRIVACY) {
    entries.push({
      path,
      lastmod: LAST_MOD,
      changefreq: 'yearly',
      priority: '0.3',
      alternates: {
        ca: abs('/ca/politica-de-privacitat'),
        es: abs('/es/politica-de-privacidad'),
      },
    })
  }

  return entries
}

function urlElement(e) {
  const alternates = Object.entries({ 'x-default': e.alternates.ca ?? e.alternates.es, ...e.alternates })
    .map(
      ([hreflang, href]) =>
        `    <xhtml:link rel="alternate" hreflang="${xml(hreflang)}" href="${xml(href)}" />`,
    )
    .join('\n')

  return [
    '  <url>',
    `    <loc>${xml(abs(e.path))}</loc>`,
    `    <lastmod>${e.lastmod}</lastmod>`,
    `    <changefreq>${e.changefreq}</changefreq>`,
    `    <priority>${e.priority}</priority>`,
    alternates,
    '  </url>',
  ].join('\n')
}

const entries = buildEntries()
const output = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  entries.map(urlElement).join('\n'),
  '</urlset>',
  '',
].join('\n')

const target = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'sitemap.xml')
mkdirSync(dirname(target), { recursive: true })
writeFileSync(target, output)

console.log(`✓ sitemap.xml generat a ${target} (${entries.length} URLs)`)
