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

## NAP (LOCKED — 2026-08-25 relocation)

**ONE storefront, ONE number, sitewide:**

- **Address:** 803 Greenwich St, New York, NY 10014 (West Village) — the ONLY address on the site and in schema.
- **Phone:** (347) 851-8615 (Dori 24/7 AI reception) — the ONLY number on the site, matching the storefront sign and GBP.
- **Email:** office@downtowndoorsandsecurity.com.
- **Hours:** Open 24/7 (single story sitewide).

The prior Brooklyn office pages (170 Hicks St, 232 Leonard St) are removed and
308 to /locations/west-village-803-greenwich-st. Their GBP listings are managed
by Ori directly — the site asserts only 803 Greenwich. Source of truth:
`src/lib/site.ts` + `src/lib/locations.ts`.
