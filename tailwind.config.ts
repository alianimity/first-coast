import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['src/**/*.{ts,tsx}'],
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
        sm: '6px',
        md: '12px',
        lg: '16px',
        xl: '28px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0,0,0,0.15)',
        sm: '0 2px 8px rgba(0,0,0,0.18)',
        md: '0 8px 24px rgba(0,0,0,0.22)',
        lg: '0 16px 48px rgba(0,0,0,0.25)',
      },
    },
  },
}

export default config


