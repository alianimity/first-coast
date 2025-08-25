# High‑Fidelity Mockup Spec: Home

## Hero
- Background: cinematic loop (6–10s), dark overlay at 24–32% opacity
- Headline (display): “Remodel. Repair. Renew.” with subtle tracking; gradient underline using #F69800 → #3F2314
- Subcopy: Two short lines with coastal context
- CTAs: Primary “Get a Quote” (bg #F69800 on dark), Secondary “View Projects” (ghost, support border)
- Micro‑interactions: text fadeUp 350ms; CTA hover lift + shadow‑sm; prefers‑reduced‑motion disables video and uses poster image

## Services Grid
- 2×3 cards (xl), 2×2 (md), 1×N (sm)
- Card: icon (lucide), title, 1‑line value; hover: bg elevates, border accent #F69800, arrow slide‑in
- Link to Services index

## Process Timeline
- 5 steps with pill connectors; scroll‑into‑view reveals (stagger 60ms)
- CTA to Process page

## Featured Projects
- Carousel with 3–5 case cards; each card has before/after slider (drag + tap)
- Metadata chips: City, Services, Duration
- CTA: Explore all projects

## Reviews
- 4 review cards (Google import style), overall rating chip; link to GMB

## Service Areas
- Map (static vector) + city list; hover highlights; CTA to city pages

## Insights
- 3 blog cards with cover, title, 1–2 line preview

## Sticky CTA Bar
- Appears after 600px scroll; primary CTA + phone icon; shadow‑xs

## Footer
- NAP, services, cities, legal; license/insurance badges

---

## Components
- Section:Hero, Card:Service, Timeline:Process, Carousel:Projects, Slider:BeforeAfter, Card:Review, Map:Areas, Card:Post, Bar:StickyCTA

## Type & Color
- Display: Clash Display/Sora; Body: Inter
- Dark background with primary #F69800 highlights; support #3F2314 for dividers/overlays

## Breakpoints
- sm 640, md 768, lg 1024, xl 1280, 2xl 1536; container max 1280

## Accessibility
- All interactive elements focus‑visible; motion reduced when requested; images alt text required

## Performance
- LCP: hero text (SSR); video deferred; next/image across media; font preconnect
