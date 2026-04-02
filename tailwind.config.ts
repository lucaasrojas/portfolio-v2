import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        // Base
        sage: {
          50:  '#f0f4ee',
          100: '#e3ebe0',
          200: '#c8d9c4',
          300: '#a5c09f',
          400: '#7da376',
          500: '#5e8a57',
          600: '#4a6e44',
          700: '#3d5240',  // forest mid
          800: '#2d3e2f',
          900: '#1c2b1e',  // forest dark
        },
        // Accents
        butter: {
          300: '#f5e09a',
          400: '#e8c86b',  // main accent
          500: '#d4a843',  // amber
          600: '#b8892e',
        },
        coral: {
          400: '#f2775a',
          500: '#e05c40',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
        'fade-in': 'fade-in 0.4s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
