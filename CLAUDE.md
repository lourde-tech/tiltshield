# TiltShield Landing Page — Project Context

One-page B2B marketing site for TiltShield, a stretch-fit cover for 1–2.5 yard
tilt trucks (waste containers). Audience: facility managers at hospitals,
schools, airports, stadiums, and industrial/commercial facilities. Conversion
goals: "Get Pricing Now" and "Schedule a Demo" — both point to `#contact`.

## Commands

```bash
npm install        # install deps
npm run dev        # dev server at http://localhost:5173
npm run build      # tsc -b + vite build → /dist
npm run preview    # preview production build
```

## Stack & structure

- React 19 + TypeScript + Vite, Tailwind CSS 3.4, Framer Motion, lucide-react
- shadcn-style layout: primitives in `src/components/ui/`, `cn()` in
  `src/lib/utils.ts`, path alias `@/*` → `src/*`
- Page sections in `src/components/sections/`, assembled in `src/App.tsx`
- Scroll-reveal helpers (`FadeUp`, `StaggerGrid`, `StaggerItem`) in
  `src/components/motion.tsx` — use these instead of ad-hoc motion wrappers
- `src/components/ui/infinite-slider.tsx` uses `duration` / `durationOnHover`
  props (NOT `speed` / `speedOnHover`)

## Brand system (do not drift from this)

- Tokens live in `tailwind.config.js`: `navy #07111F`, `ink #05070A`,
  `panel #0B1220`, `graphite #1E293B`, `clinical #2563EB` (primary CTA),
  `electric #0A66FF` (CTA hover), `cyan #38BDF8` (glow accents),
  `shield #0B3A75`, `mist #F8FAFC`, `warning #DC2626`, `compliance #16A34A`,
  `gold #D6A84F` (very sparingly)
- Red (`warning`) is used ONLY in problem/risk contexts; green (`compliance`)
  only for savings/success
- Fonts (self-hosted via @fontsource): Archivo Variable = `font-display`
  (headings, buttons), Instrument Sans Variable = `font-sans` (body),
  IBM Plex Mono = `font-mono` (spec labels via `.spec-label` utility)
- Signature elements in `src/index.css`: `.hazard-divider` (safety-tape stripe),
  `.spec-label`, `.dark-grid-bg`. Reuse these; don't invent parallel utilities
- Tone: industrial but premium, compliance-focused, no playful copy, no clutter
- Motion: restrained; respect `prefers-reduced-motion` (already handled in
  motion.tsx and index.css — keep it that way)

## Compliance rules (IMPORTANT — do not change without explicit approval)

The "Institutional Experience" section
(`src/components/sections/institutional-experience.tsx`) deliberately uses
legally safe framing per the partner slider pack's compliance notes:

- ALLOWED wording: "informed by", "shaped by", "institutional experience",
  "problem discovery", "care environments", "operational exposure"
- FORBIDDEN wording until formally verified: "trusted by", "partners",
  "our partners", "used by", "clients", "customers include", "tested by",
  "approved by", "endorsed by", "in partnership with"
- The disclaimer paragraph under the logo slider must stay
- The "20+ Clinical Environments" badge ships only if that figure is
  internally verified
- Never invent certifications, client logos, case studies, or guarantees

## Assets & placeholders

- `public/logos/partners/*.svg` — PLACEHOLDER marks from the slider pack.
  Replace with approved official logos at the same filenames only after
  logo-usage permission is confirmed with each institution
- `public/tiltshield/tiltshield-product.jpg` — cropped from the reference
  flyer; replace with a high-res product render at the same path (used in
  Hero and Solution sections, marked with REPLACE-ME comments)
- `public/tiltshield/tiltshield-flyer-reference.jpg` — internal reference
  only; never render it on the page
- Wordmark is code-rendered in `src/components/sections/logo.tsx`; swap for
  an official SVG when available
- Logos always use `object-contain`, preserved aspect ratio, white/near-white
  cards, subtle grayscale → full color on hover

## Known TODOs

- `src/components/sections/contact.tsx`: `handleSubmit` shows a success state
  only — wire it to a real CRM/email endpoint (POST)
- Social links in the footer are `#` placeholders
- Privacy Policy / Terms links are placeholders

## Facts that must stay accurate

- Contact: (800) 765-9008 · info@tiltshieldusa.com · www.tiltshieldusa.com
- Fit claim: 1–2.5 yard tilt trucks
- Sizes: two — Medium (72.25 × 33.5 × 43.75 in) and Large (80.5 × 43 × 49.5 in);
  each color is available in both sizes. Do NOT describe the cover as "one size"
  or "universal" — it comes in two sizes (per the boss's pricing sheet)
- Time claims: "under 10 seconds", "cuts waste-handling time by up to 30%"
  (from the source flyer — don't escalate these numbers)
- Tagline: "Cover. Secure. Comply."
