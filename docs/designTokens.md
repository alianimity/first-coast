# Design Tokens

## Colors
- Primary: `#F69800`
- Support (Deep Brown): `#3F2314`
- Neutrals: `#0B0B0B` (ink), `#121212` (bg), `#1E1E1E` (elevated), `#2A2A2A` (muted bg), `#FFFFFF` (surface), `#F5F5F5` (subtle)
- Semantic: Success `#16A34A`, Warning `#F59E0B`, Error `#DC2626`, Info `#0284C7`

Suggested usage:
- Primary for CTAs, accents, interactive states
- Support for backgrounds, heading accents, dividers

CSS variables (example):
```css
:root {
  --color-primary: #F69800;
  --color-support: #3F2314;
  --color-ink: #0B0B0B;
  --color-bg: #121212;
  --color-bg-elev: #1E1E1E;
  --color-bg-muted: #2A2A2A;
  --color-surface: #FFFFFF;
  --color-surface-muted: #F5F5F5;
}
```

## Typography
- Headline: "Clash Display" or "Sora" for modern geometric display
- Body/UI: "Inter"

Type scale (rem):
- xs 0.75, sm 0.875, base 1, lg 1.125, xl 1.25, 2xl 1.5, 3xl 1.875, 4xl 2.25, 5xl 3, 6xl 3.75

Line-height:
- Headings 1.1–1.2, Body 1.6

## Spacing
- 4‑point system: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80

## Radius
- sm 6px, md 12px, lg 16px, xl 28px, full 9999px

## Shadows
- xs: 0 1px 2px rgba(0,0,0,0.15)
- sm: 0 2px 8px rgba(0,0,0,0.18)
- md: 0 8px 24px rgba(0,0,0,0.22)
- lg: 0 16px 48px rgba(0,0,0,0.25)

## Motion
- Duration: 150ms (ui), 250–400ms (sections)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Reduce motion: respect prefers-reduced-motion

Framer Motion snippet:
```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22,1,0.36,1] } }
};
```

## Tailwind config (tokens)
```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        primary: '#F69800',
        support: '#3F2314',
        ink: '#0B0B0B',
        bg: '#121212',
        'bg-elev': '#1E1E1E',
        'bg-muted': '#2A2A2A',
      },
      borderRadius: {
        sm: '6px', md: '12px', lg: '16px', xl: '28px'
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0,0,0,0.15)',
        sm: '0 2px 8px rgba(0,0,0,0.18)',
        md: '0 8px 24px rgba(0,0,0,0.22)',
        lg: '0 16px 48px rgba(0,0,0,0.25)'
      },
      fontFamily: {
        display: ['Clash Display', 'Sora', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  }
}
```

## Component theming notes
- Buttons: primary bg `#F69800` with dark text; hover darken by ~6%; focus ring `#F69800`/2
- Surfaces: dark UI with warm accent; use support color sparingly for sections/dividers
- Links: underline on hover; subtle motion 150–200ms
