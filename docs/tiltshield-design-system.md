# TiltShield Design System — Editorial Redesign (July 2026)

Governs the homepage's visual system after the editorial redesign. The
concept: **an institutional product ledger** — oversized tight-tracked
display type, hairline-ruled index rows, large rounded media canvases, and
flat surfaces in place of card chrome. Inspired by the typographic confidence
and negative space of modern editorial fintech sites; built specifically for
TiltShield. The product truth is always visible: TiltShield is the
stretch-fit **cover**, not the tilt truck.

## Fonts

| Role | Family | Source | Confidence vs. references |
|---|---|---|---|
| Display | Archivo Variable | `@fontsource-variable/archivo` (OFL, self-hosted) | Approximate match — modern grotesk in the Aeonik class; kept over adding Inter Tight because it is already licensed, loaded, and closer to the brand's industrial voice |
| Body / UI | Instrument Sans Variable | `@fontsource-variable/instrument-sans` | Approximate match |
| Spec labels | IBM Plex Mono 400/500 | `@fontsource/ibm-plex-mono` | Site signature, not from references |

The editorial character comes from **weight + tracking**, not family:
display headlines moved from `font-extrabold` (800) to `font-semibold` (600)
with tracking −0.03em to −0.045em and sub-1.0 line-height at display sizes.

## Type scale (`src/index.css` utilities)

- `.display-xl` — clamp(3rem, 6.4vw, 6.25rem), lh 0.94, tracking −0.045em. Hero only.
- `.display-lg` — clamp(2.4rem, 4.6vw, 4.4rem), lh 0.98, tracking −0.04em. Section headlines.
- `.display-md` — clamp(1.8rem, 2.9vw, 2.8rem), lh 1.04, tracking −0.03em. Statements/sub-sections.
- `.spec-label` — IBM Plex Mono 11px uppercase 0.18em. Eyebrows, indices, apparatus.

All display classes use `text-wrap: balance`.

## Color hierarchy

Roughly 50–60% white/mist, 25–35% navy/ink, ~10% clinical blue, <5%
cyan + gold combined. Clinical `#2563EB` is the only action color. Cyan
`#38BDF8` is a text/icon accent — **never a glow system** (all radial glow
orbs were removed). `warning` red only in problem/risk contexts; `compliance`
green only for savings/success. Gold stays reserved.

## Shape & shadow

- `rounded-media` (28px) — large editorial media canvases (`tailwind.config.js`)
- `shadow-media` — single soft large-radius shadow for media canvases
- Cards (20–24px radius + `shadow-card`) only for genuinely bounded units
  (product color options, the contact form, logo tiles). Everything else is
  **flat with hairline rules** (`border-t` in `graphite/60`, `lightBorder`,
  or `navy/15`).

## Composition grammar

Every section must differ from its neighbors. Current rhythm:

1. Hero — full-width display type over twin media canvases, mono spec footer
2. Benefit strip — flat 4-across indexed columns above hazard divider
3. Problem — asymmetric split: display headline left, numbered ledger right
4. Solution — media left / copy right, hairline feature list
5. How it works — ghost numerals 01–03, flat columns, typographic closer
6. Savings — giant 30% stat left, hairline ledger right
7. Before/After — bordered split panel (kept)
8. Product options — white cards (bounded product units) + size chips
9. Institutional Experience — centered, logo slider, disclaimer
10. Industries — oversized typographic index rows
11. Final CTA — centered display statement under hazard divider
12. Contact — dark split with working form

## Motion

Existing primitives only (`src/components/motion.tsx`: FadeUp, StaggerGrid,
StaggerItem). Approved: opacity/28px reveals, ≤1.05 image scale on hover,
small hover translate, mobile-menu enter/exit. **Removed:** continuous
floating loops, gradient-clip headlines, glow orbs. `prefers-reduced-motion`
collapses everything (handled in motion.tsx + index.css).

## Accessibility decisions

- Mobile menu: `aria-expanded`/`aria-controls`, Escape closes and restores
  focus to the trigger (`header.tsx`)
- Skip link in `App.tsx`; `scroll-padding-top: 88px` clears the fixed header
- Focus-visible: 2px cyan outline globally
- Step/index numerals are `aria-hidden` where decorative

## Language restrictions (unchanged, binding)

- "Institutional Experience" heading + "Healthcare environments that shaped
  the problem behind TiltShield." support line are the approved framing.
  **Never** "Trusted by", "partners", "customers", "used by", "approved by".
- Disclaimer paragraph under the logo slider must stay.
- Verified claims only: under 10 seconds, up to 30%, 1–2.5 yd fit, two sizes
  (Medium 72.25×33.5×43.75 in, Large 80.5×43×49.5 in).
- CTA label is "Request Pricing" everywhere; destination `#contact`.

## Final visual system (July 2026 directive)

- **Hero is one cinematic canvas**: full-background rotation video inside a
  30px-radius shell, `min(100%,1500px)` × `clamp(720px,100svh-24px,940px)`,
  nav floating over the top, copy lower left. No split panels, no badges, no
  chips, no spec strip. Headline: "The future of waste handling." in solid
  white (no gradients, no colored fragments).
- **Overlay stack** (required for the white studio video): navy/10 wash +
  left text gradient + top/bottom depth gradient. Never one flat black tint.
- **Microcopy rule**: no decorative eyebrows/overlines/index numerals above
  headlines. Keep only: form labels, nav/footer headings, legal text,
  accessible names, and verified product info (size dimensions, material
  strip, before/after panel labels, how-it-works step numbers).
- **Dash rule**: customer-facing copy contains no hyphens/en/em dashes —
  rewrite naturally ("cover that stretches to fit", "1 to 2.5 yard",
  "20 to 30 lb"). Code, CSS, URLs, filenames, and legal pages keep theirs.
- **CTAs**: primary is a white pill; secondary is a liquid-glass pill
  (border-white/25 + bg-white/10 + backdrop-blur). Label is always
  "Request Pricing" → `#contact`.
- **Banned**: shader packages, mesh gradients, gradient text, neon glow,
  pulsing borders, decorative badges. "Liquid glass" means CSS backdrop-blur
  only.

## Hero video

- Split-canvas hero: navy copy panel + white studio video panel in one
  `rounded-media` shell. Copy never overlays the white video.
- Playback controller: `src/components/media/tiltshield-hero-video.tsx` —
  autoplay muted inline, native loop, no controls, pauses off-screen /
  hidden-tab / reduced-motion, poster fallback on genuine media errors only.
- Assets: `public/videos/tiltshield-hero-1080.mp4` (1920×1198, ~4 MB) and
  `-720.mp4` (1280×800, ~1.9 MB), poster `public/images/tiltshield-hero-poster.jpg`.
  Raw 4K source lives un-served and un-committed at
  `assets-src/tiltshield-hero-source.mp4`. A 380px left-edge trim (empty
  studio space only) removes the source's corner watermark; re-encode any
  replacement source through the same ffmpeg settings (see git history).
- Known source limitations: loop restart is visible (end orientation ≠ start
  orientation) and the video truck's details (red handle, silver wheels,
  peaked gray cover) differ from the static renders. Fix belongs in a
  re-exported source video, not in code.
- The overlay chip says "Studio product view" — do not relabel it "360°"
  unless a true full-rotation source replaces the current one.

## Product-image rules

- Studio renders: `object-contain`, full silhouette, never crop the cover
- The portrait hero (1122×1250) lives in a split canvas — never force it
  into a full-bleed ultra-wide crop
- Same truck, same proportions, same cover construction across all imagery
