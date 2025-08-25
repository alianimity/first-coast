# Wireframe: Home

## Above the Fold (Hero)
- Full-bleed media (short loop video or ambient WebGL); subtle grain overlay
- Headline: Coastal-quality cosmetic remodels, delivered end-to-end
- Subcopy: Planning • Sourcing • Hands‑On • Logistics — First Coast, FL
- Primary CTA: Get a Quote (sticky on scroll)
- Secondary CTA: View Projects
- Trust badges: Licensing/Insurance, Local (St. Johns), Google Reviews

Layout (desktop):
- Left: headline + subcopy + CTAs
- Right: media container (16:10)

Mobile:
- Media top → headline → CTAs → badges

Notes:
- Motion: fadeUp on text, parallax on media; respect prefers-reduced-motion

## Services Preview
- 2×3 grid (desktop), cards with icon, title, 1‑line value, arrow
  - Cosmetic Remodeling & Repair
  - Project Planning & Consulting
  - Material Sourcing & Bundling
  - Trade & Barter Facilitation
  - Logistics & Project Management
  - View all services → Services index

Mobile:
- Single column list with sticky section heading

## Process Snapshot
- 5-step timeline with compact descriptors: Discover → Plan → Source → Build → Handoff
- Each step: short line + micro‑icon; CTA to Process page

## Featured Projects (Carousel)
- 3–5 case cards with before/after slider
- Meta: city, service types, duration
- CTA: Explore all projects + filters

## Reviews / Social Proof
- Pull top Google reviews; 4–5 carousel items
- Aggregate rating; link to GMB

## Service Areas Map
- Map (St. Johns + nearby) with pins (St. Augustine, Ponte Vedra, Jacksonville South)
- CTA: See city pages

## Blog/Insights Teaser
- 3 latest posts with tags (coastal materials, storm prep, historic compliance)

## Sticky CTA Bar (on scroll)
- "Get a Quote" + phone icon; subtle shadow

## Footer
- NAP; service list; cities; legal (terms, privacy); licenses/insurance badges

---

## Layout Notes
- Grid: 12‑col desktop, 4‑col tablet, 1‑col mobile; max‑width 1280px
- Spacing: 24–64px vertical rhythm
- Surfaces: dark background; primary `#F69800` accents; support `#3F2314` for subtle sections/dividers

## Content Requirements (Home)
- 1 hero headline + 2 sentence subcopy
- 1‑2 line summaries for 5 services
- 3 featured projects (photos before/after, 1 paragraph each)
- 4 reviews (name, city, rating, 1‑2 sentences)
- 3 blog post summaries (title, 1‑2 lines, hero image)
- Map coverage text + city blurbs (80–120 chars each)

## Accessibility
- Color contrast ≥ 4.5:1; focus-visible on CTAs; alt text for all media
- Keyboard navigable carousel; pause/stop for any motion media

## Performance
- LCP target: hero text (server rendered), media lazy‑loaded
- Use next/image; preconnect to fonts; compress media
