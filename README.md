# TiltShield — B2B Landing Page

Premium one-page marketing site for TiltShield, the stretch-fit cover for 1–2.5 yard
tilt trucks. Built with React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion,
using a shadcn-style structure (`src/components/ui`, `src/lib/utils.ts`).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Project structure

```
public/
  tiltshield/
    tiltshield-logo.jpg            # original raster logo (reference)
    tiltshield-product.jpg         # hero/product image  ← REPLACE with hi-res render
    tiltshield-flyer-reference.jpg # original flyer (internal reference only)
  logos/partners/
    penn-medicine.svg              # PLACEHOLDER — replace with approved official mark
    nebraska-medicine.svg          # PLACEHOLDER — replace with approved official mark
    atrium-health.svg              # PLACEHOLDER — replace with approved official mark
src/
  lib/utils.ts                     # cn() helper (clsx + tailwind-merge)
  components/
    motion.tsx                     # FadeUp / stagger scroll-reveal helpers
    ui/
      button.tsx                   # shadcn-style button (cva + radix Slot)
      input.tsx
      infinite-slider.tsx          # marquee engine (duration/durationOnHover props)
      logo-cloud.tsx               # institutional logo cards + typographic badge
    sections/
      logo.tsx  header.tsx  hero.tsx  benefit-strip.tsx  problem.tsx
      solution.tsx  how-it-works.tsx  savings.tsx  before-after.tsx
      product-options.tsx  institutional-experience.tsx  industries.tsx
      final-cta.tsx  contact.tsx  footer.tsx
  App.tsx  main.tsx  index.css     # brand tokens, hazard-divider, spec-label utilities
```

## Where to replace assets

1. **Product image** — drop a high-resolution product render at
   `public/tiltshield/tiltshield-product.jpg` (same filename; used in Hero and
   Solution). The current file is a crop from the reference flyer.
2. **Partner logos** — the three SVGs in `public/logos/partners/` are the
   *placeholder* marks shipped in the partner slider pack. Replace each with an
   approved official logo at the same filename **only after logo-usage
   permission is confirmed** with each institution.
3. **Wordmark** — the header/footer wordmark is rendered in
   `src/components/sections/logo.tsx`. Swap for an official SVG when available.

## Compliance notes (important)

The "Institutional Experience" section intentionally uses the legally-safe
framing from the slider pack (`SECTION_COPY_AND_COMPLIANCE_NOTES.md`):
*informed by / shaped by / problem discovery* — never "trusted by," "partners,"
"used by," "tested by," or "endorsed by." A disclaimer is rendered under the
slider. Keep this wording unless those relationships are formally verified.
The "20+ Clinical Environments" badge should only ship if that figure is
internally verified.

## Wiring the form

`src/components/sections/contact.tsx` currently shows a success state on
submit. Replace the `handleSubmit` TODO with a POST to your CRM/email endpoint.

## Brand tokens

Colors, fonts (Archivo Variable display / Instrument Sans body / IBM Plex Mono
spec labels), shadows, and the hazard-stripe divider utilities live in
`tailwind.config.js` and `src/index.css`.
