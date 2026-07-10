# Human-only checklist — Downtown Door Repair & Security

Claude Code built the site but **cannot** do the items below (accounts, secrets,
domains, real business data). Work top-down; ⛔ items block launch.

## ⛔ Confirm before launch (data integrity)

1. **NAP vs. Google Business Profile.** The build uses the brief's NAP —
   **170 Hicks St, Brooklyn, NY 11201** and **(917) 540-3962**. The *old* site
   used different values (232 Leonard St; 347-519-4918 / 347-514-8770). Confirm
   the new NAP matches the GBP listing **exactly** (name, address, phone). Edit
   once in [`src/lib/site.ts`](../src/lib/site.ts) if anything differs.
2. **Phone number sanity check.** (917) 540-3962 also appears in the owner's own
   config as the *ClearOps public reception line*. Confirm it's the correct
   client CTA number before it goes live (cross-contaminated CTA numbers are a
   known risk). Change in `src/lib/site.ts` → `PHONE_DIGITS`.
3. **Business hours.** Placeholder hours (Mon–Fri 8–6, Sat 9–4, emergency on
   call) are shown on /contact. Confirm real hours + whether 24/7 emergency is
   accurate. Set in `siteConfig.hours` and flip `hoursConfirmed: true` to emit
   opening-hours schema.

## ⛔ Accounts / secrets (I can't create these)

Copy `.env.example` → `.env.local` and fill in:

4. **Domain** — register it, then set `NEXT_PUBLIC_SITE_URL` to the real origin.
   This drives every canonical URL, sitemap, JSON-LD, and the public email host.
5. **Email forwarding** — `info@<domain>` → ori@clearmarketingdigital.com (at
   the domain/email provider).
6. **Resend** (transactional email for the forms) — create account, verify the
   sending domain, set `RESEND_API_KEY` + `EMAIL_FROM`. Until set, form
   submissions are accepted and logged server-side but **not emailed** (fail-safe).
   Set `LEAD_INBOX_QUOTE` / `LEAD_INBOX_BID` for where leads land.
7. **Cloudflare Turnstile** (spam protection) — create a widget, set
   `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY`. Until set, forms
   work and server-side verification is skipped.
8. **Vercel** — create the project, connect the repo, add the env vars above,
   deploy. Analytics + Speed Insights are already wired in code and light up on
   Vercel automatically.

## Real content (I used clearly-marked placeholders — never fabricated)

9. **Photos** — every `ImageSlot` names exactly what belongs there (hero,
   before/after gallery, team/shopfront, install shots). Replace with
   `next/image` + real files once supplied.
10. **Google reviews** — set `NEXT_PUBLIC_GOOGLE_PLACE_ID` + `GOOGLE_PLACES_API_KEY`,
    then implement the fetch in [`src/lib/reviews.ts`](../src/lib/reviews.ts).
    The /reviews page and homepage rating show a neutral state until then (no
    fabricated rating — the old site's inline "5.0" was intentionally dropped).
11. **Credentials** (Path B) — license #, insurance limits, bonding capacity,
    M/WBE/DBE/SBE certs. Fill `siteConfig.credentials` in `src/lib/site.ts`.
    They render as "Provided on request" until set.
12. **Capability statement PDF** — drop the real PDF at
    `public/downloads/capability-statement.pdf` and flip
    `capabilityStatement.available = true` in `src/lib/government.ts`.
13. **Case studies / references** — add real projects to `caseStudies` in
    `src/lib/government.ts` (empty by design — no invented projects/dollar amounts).
14. **Procurement portals** — confirm actual PASSPort / SCA / DASNY registration
    status in `src/lib/government.ts` (`procurementPortals`).
15. **Pricing** — service pages show *illustrative* ranges ("$ (confirm)") with a
    visible disclaimer. Replace with real numbers in `src/lib/services.ts`.
16. **Blog** — 26 old posts currently 301 → /blog. Migrate them into
    `src/lib/blog.ts` (or an MDX pipeline) and retarget each old URL to
    `/blog/<slug>` in `src/lib/redirects.ts` to preserve individual link equity.

## Do NOT do in code (owner action)

17. Register on **NYC PASSPort / SCA / DASNY** vendor portals — business owner only.

## Launch sequence

18. Deploy to Vercel with the real domain.
19. Verify redirects: spot-check old URLs (e.g. `/tribeca`, `/door-repair`,
    `/about-us`) return 308 → a live 200 page. Full map in
    [`migration-inventory.md`](./migration-inventory.md).
20. Submit `sitemap.xml` in Google Search Console; use **Change of Address** if
    the domain differs from the old one. Keep the old site live until redirects
    are confirmed indexed.
