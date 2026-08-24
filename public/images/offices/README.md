# Office photos — REAL IMAGES ONLY

Ori: drop the real office photos here, then tell Claude to wire them up.

- `170-hicks/` — Brooklyn Heights office: interior shots + exterior/signage + storefront
- `232-leonard/` — Williamsburg office: interior shots + exterior/signage + storefront

Rules (locked in the remediation master prompt, 2026-08-24):
- NO stock imagery anywhere on location pages — ever.
- Keep original files (EXIF preserved). Descriptive filenames help
  (e.g. `170-hicks-interior-counter.jpg`, `232-leonard-storefront-signage.jpg`).
- Videos welcome too — they'll be used on the location pages and GBP.

Wiring lives in `src/lib/locations.ts` (`photos` array per office, with real
alt text). The location pages render the gallery only when photos exist —
they never fake it.
