# High‑Fidelity Mockup Spec: Services

## Index
- Hero: concise headline + subcopy; supporting ambient texture
- Grid: 5 service cards with consistent height; hover accent with #F69800 border and arrow
- Pricing band: 3 columns (Basic/Standard/Premium) with ranges and footnotes; collapsible details
- Inclusions/Exclusions: two columns with icons
- FAQ: accordion with chevrons; deep‑linkable ids
- CTA panel: primary + schedule consult

## Detail Template
- Hero: service title, value prop, supporting media (image/video)
- Sections:
  1) Problem → Approach → Outcome (3 columns on desktop)
  2) What’s Included (bulleted) + link to Process
  3) Pricing Examples (cards with range, timeline, assumptions)
  4) Gallery (before/after slider + grid)
  5) Testimonials (relevant quotes)
  6) Related Services (3 cards)
  7) CTA (multi‑step quote form entry)

## Interactions
- Smooth section anchor nav; sticky in-page nav on desktop
- Lazy‑load galleries; skeletons for images

## Visual system
- Tokens per docs/designTokens.md; dark UI with warm accent
- Icons: lucide‑react; micro‑motion 200–300ms; elevation on hover

## A11y & Perf
- Accordion semantics, labels on sliders, keyboardable carousels
- next/image everywhere, avoid layout shift, prefetch critical routes
