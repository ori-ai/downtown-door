# Migration inventory — downtowndoorrepairnyc.com → new build

Crawled from the old WordPress sitemaps on 2026-07-10. This is the source for
the 301 redirect map (implemented in `next.config.ts`, task #10).

## ⚠️ NAP discrepancy (must resolve before launch)

| Field | Old WordPress site | New brief (this build) |
|---|---|---|
| Phone | (347) 519-4918 / (347) 514-8770 | **(917) 540-3962** |
| Address | 232 Leonard St, Brooklyn, NY 11211 | **170 Hicks St, Brooklyn, NY 11201** |
| Email | info@downtowndoorrepairnyc.com | info@[new domain] |

The build uses the **brief's** NAP as the single source of truth (`src/lib/site.ts`).
Before launch, confirm the new NAP **matches the Google Business Profile exactly**
(name, address, phone). Also confirm the (917) number is correct for this client
(it appears elsewhere as the owner's ClearOps reception line). See `docs/human-todo.md`.

## Redirect map (old path → new path)

### Core pages
| Old | New |
|---|---|
| `/` | `/` |
| `/about-us/` | `/about` |
| `/contact/` | `/contact` |
| `/services/` · `/doors-services/` | `/services` |
| `/service-areas/` | `/service-areas` |
| `/blog/` | `/blog` |
| `/privacy-policy/` | `/privacy-policy` (create) |
| `/terms-and-conditions/` | `/terms` (create) |

### Service / product pages → nearest new service
| Old | New |
|---|---|
| `/door-repair/` | `/services/door-repair` |
| `/emergency-door-repair/` | `/services/emergency-door-repair` |
| `/residential-door-installation-repair/` · `/automatic-door-installation/` · `/door-installation-nyc/` | `/services/door-installation` |
| `/commercial-door-installation-repair/` | `/services/commercial-storefront-doors` |
| `/lock-repair/` · `/residential-locksmith/` · `/commercial-locksmith/` · `/locksmith-in-nyc/` · `/master-key-systems/` | `/services/locksmith-door-hardware` |
| `/door-hardware/` · `/door-hardware-2/` · `/door-closers/` · `/hinges/` · `/locks/` · `/smart-locks/` · `/panic-bars/` | `/services/locksmith-door-hardware` |
| `/security-system-installation/` · `/security-camera-system-installation/` · `/cctv/` · `/intercom-system-installation/` · `/access-control/` · `/access-control-systems/` · `/cloud-based-access-control-systems/` · `/electric-strike-buzzer-systems/` · `/magnetic-locks/` · `/magnetic-locks-hardware/` | `/services/security-systems-access-control` |

### Location pages → new service-area pages
| Old | New |
|---|---|
| `/brooklyn/` | `/service-areas/brooklyn` |
| `/brooklyn/brooklyn-heights/` · `/locksmith-brooklyn-heights/` | `/service-areas/brooklyn/brooklyn-heights` |
| `/brooklyn/park-slope/` · `/locksmith-park-slope/` | `/service-areas/brooklyn/park-slope` |
| `/brooklyn/williamsburg/` · `/locksmith-williamsburg/` | `/service-areas/brooklyn/williamsburg` |
| `/brooklyn/dumbo/` · `/locksmith-dumbo/` | `/service-areas/brooklyn/dumbo` |
| `/brooklyn/bushwick/` | `/service-areas/brooklyn/bushwick` |
| Other `/brooklyn/<hood>/` (cypress-hills, stuyvesant-heights, bay-ridge, crown-heights, gowanus, boerum-hill, prospect-lefferts-gardens, downtown-brooklyn, fort-greene, bedford-stuyvesant, greenpoint, carroll-gardens, cobble-hill) | `/service-areas/brooklyn` (hub, until Phase-1 neighborhood pages expand) |
| `/manhattan/` · `/civic-center/` | `/service-areas/manhattan` |
| `/tribeca/` | `/service-areas/manhattan/tribeca` |
| `/chelsea/` | `/service-areas/manhattan/chelsea` |
| `/financial-district-fidi/` | `/service-areas/manhattan/financial-district` |
| Other Manhattan hoods (two-bridges, chinatown, gramercy-park, hudson-square-seaport-district, noho-flatiron-district, battery-park-city, greenwich-village-west-village, soho) | `/service-areas/manhattan` (hub) |

### Blog posts (26)
Until posts are migrated into the new MDX blog, redirect each old post URL to
`/blog`. Once a post is recreated, change its redirect target to `/blog/<slug>`
to preserve its individual link equity. Old post slugs:

```
/door-repair-panic-bar-installation/
/emergency-storefront-door-repair-nyc-why-business-security-starts-at-the-entry-point/
/fire-rated-door-replacement-in-soho-protecting-businesses-communities/
/panic-bar-installation-in-les-keeping-nyc-businesses-safe/
/emergency-door-repair-in-tribeca-fast-secure-reliable/
/late-summer-door-repair-security-tips-for-nyc-businesses/
/trusted-door-repair-access-control-in-tribeca-williamsburg/
/panic-bar-installation-for-nyc-businesses-why-its-essential/
/how-to-spot-a-failing-door-closer-before-it-becomes-a-safety-risk/
/emergency-door-repair-panic-bar-install-in-tribeca/
/emergency-door-repair-in-tribeca-commercial-storefront-secured-fast/
/how-to-know-when-your-business-needs-emergency-door-service-in-nyc/
/how-to-tell-if-you-need-a-commercial-door-frame-repair/
/summer-security-prep-why-now-is-the-time-to-upgrade-your-storefront-doors-in-nyc/
/why-tribeca-and-the-financial-district-rely-on-expert-emergency-door-repair/
/enhancing-building-security-in-lower-manhattan/
/how-regular-door-maintenance-can-save-you-money/
/how-to-extend-the-lifespan-of-your-doors-with-routine-maintenance/
/6-modern-door-design-trends-to-elevate-your-home/
/why-professional-door-installation-is-worth-the-investment/
/the-benefits-of-sliding-doors-for-your-home/
/when-to-call-a-locksmith-vs-attempting-diy-locksmith-services/
/top-7-door-security-upgrades-to-protect-your-home/
/a-step-by-step-guide-to-professional-door-installation/
/common-door-repair-mistakes-and-how-to-avoid-them/
/choosing-the-right-type-of-door/
```

## Launch steps (post-deploy)
1. Verify each redirect returns 308/301 to a live 200 page (no redirect chains).
2. Submit the new `sitemap.xml` in Google Search Console; use "Change of Address"
   if the domain differs.
3. Keep the old site reachable until redirects are confirmed indexed.
