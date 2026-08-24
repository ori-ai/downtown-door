# Downtown Door Repair & Security — website

Custom marketing site for a Brooklyn/Manhattan door repair, locksmith, and
security company, replacing an outdated WordPress site. Built for two distinct
buyer paths:

- **Path A — Residential & commercial** (transactional): fast quotes,
  click-to-call, emergency intent.
- **Path B — Government & institutional** (credential-driven): capability
  statement, bid inquiries, licensing/insurance/compliance — no "call now"
  urgency.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (brand theme in `src/app/globals.css`)
- **Resend** (form email) · **Cloudflare Turnstile** (spam) · **Zod** (validation)
- **schema-dts** JSON-LD · **Vercel Analytics + Speed Insights**
- Self-hosted fonts via `next/font` (Sora + Inter)

## Getting started

```bash
pnpm install
cp .env.example .env.local   # fill in — see docs/human-todo.md
pnpm dev                     # http://localhost:3000
pnpm build                   # production build (42 routes)
```

## Project shape

```
src/
  app/                       # routes (App Router)
    services/[slug]/         # Path A service pages (data-driven)
    service-areas/[hub]/[city]/   # Phase 1 boroughs now; Phase 2 counties reserved
    government-contracting/  # Path B (overview, capability-statement, case-studies)
    contact/                 # two separated forms (quote / bid)
    api/{quote,bid}/         # form handlers -> Resend, distinct subjects
    sitemap.ts · robots.ts
  lib/
    site.ts                  # * SINGLE SOURCE OF TRUTH for NAP + business facts
    services.ts              # Path A service content
    service-areas.ts         # areas (published Phase 1 + reserved Phase 2)
    government.ts            # Path B content (placeholders until real data)
    schema.ts                # JSON-LD builders (LocalBusiness/Service/FAQ/Breadcrumb)
    reviews.ts               # live Google reviews (never hardcoded)
    redirects.ts             # 301 map from the old WordPress URLs
  components/                # layout, sections, ui, forms
docs/
  human-todo.md              # * everything a human must do (accounts, data, launch)
  migration-inventory.md     # old->new URL map + NAP discrepancy
```

## Design & content principles enforced

- **Single-source NAP** — header, footer, schema, sitemap, and forms all read
  `src/lib/site.ts`. No independently-hardcoded phone/address anywhere.
- **Nothing fabricated** — reviews, ratings, certifications, bonding, insurance
  limits, hours, past projects, and pricing are clearly-marked placeholders
  pulled from config until real data is supplied. Photos use labeled
  `ImageSlot` placeholders.
- **Two funnels never blended** — quote vs. bid forms route to distinct inboxes
  with distinct subject lines.
- **SEO/GEO** — answer-first opening paragraph on every service/area/gov page,
  `FAQPage` schema, `BreadcrumbList` sitewide, `LocalBusiness` on every page,
  unique per-page titles/descriptions, sitemap excludes noindex Phase-2 hubs.
- **Phase 2 ready** — `/service-areas/[hub]/[city]` already handles future
  counties; reserved hubs render "coming soon" + noindex until published.

## Before launch

See **[docs/human-todo.md](docs/human-todo.md)** — domain, API keys, real
content, NAP/phone confirmation, and the Search Console launch steps.

## Phone number mapping (LOCKED — 2026-08-24 remediation)

One brand number globally; each office's direct line appears ONLY on its own
location page and in its own schema node. Never show three numbers on one page.

**⚠️ REVERIFICATION MODE ACTIVE (2026-08-24):** while the GBP listings are under
review, the Dori line is HIDDEN sitewide (`siteConfig.doriLine`, parked). Global
surfaces show the Williamsburg main-office line; hero/footer/contact show both
office lines labeled. Queens/Bronx/SI hubs are noindex; counties removed from
schema areaServed. Restore checklist post-reinstatement: swap `siteConfig.phone`
back to `doriLine`, restore INDEXED_HUBS to all five, re-add counties, re-tie
contact map to the GBP place id.

| Number | Role | Where it appears (normal mode) |
|---|---|---|
| (347) 851-8615 | Brand line (Dori AI reception, 24/7) | Global header, footer, CTAs, forms, Organization schema |
| (347) 514-8770 | 170 Hicks St — Brooklyn Heights office (original; matches that GBP) | `/locations/brooklyn-heights-170-hicks-st` + its `Locksmith` schema node only |
| (347) 519-4918 | 232 Leonard St — Williamsburg main office (matches that GBP) | `/locations/williamsburg-232-leonard-st` + its `Locksmith` schema node only |

Source of truth: `src/lib/site.ts` (brand) + `src/lib/locations.ts` (offices).
Email: `office@downtowndoorsandsecurity.com` everywhere — the old
`info@downtowndoorrepairnyc.com` is retired sitewide.
Hours (confirmed by Ori 2026-08-24): **Open 24/7** — the single story for site,
location pages, and all schema.
