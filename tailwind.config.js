/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
    './templates/**/*.json',
  ],
  theme: {
    extend: {
      // Typography - Rapha-inspired
      fontFamily: {
        display: ['Instrument Serif', 'Georgia', 'serif'],
        body: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // Overline/Label
        'overline': ['0.6875rem', { letterSpacing: '0.15em', fontWeight: '500', lineHeight: '1.4' }], // 11px
        // Body sizes
        'body-sm': ['0.875rem', { lineHeight: '1.6' }], // 14px
        'body': ['1rem', { lineHeight: '1.65' }], // 16px
        'body-lg': ['1.125rem', { lineHeight: '1.65' }], // 18px
        // Headings
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }], // 20px
        'h3': ['1.5rem', { lineHeight: '1.35' }], // 24px
        'h2': ['2.25rem', { lineHeight: '1.2' }], // 36px
        'h1': ['3rem', { lineHeight: '1.15' }], // 48px
        'h1-lg': ['4rem', { lineHeight: '1.1' }], // 64px
        // Hero Display
        'hero': ['4.5rem', { lineHeight: '1.05', fontWeight: '300' }], // 72px
        'hero-lg': ['6rem', { lineHeight: '1.02', fontWeight: '300' }], // 96px
      },
      letterSpacing: {
        'overline': '0.15em',
        'wide': '0.1em',
      },
      // Colors - Qor Labs palette
      colors: {
        // Core
        'qor-black': '#0A0A0A',
        'qor-white': '#FFFFFF',
        'qor-off-white': '#F7F7F5',
        'qor-warm-gray': '#E8E6E1',
        // Text
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6B6B',
        'text-tertiary': '#9B9B9B',
        'text-inverse': '#FFFFFF',
        // Brand Accent (deep laboratory green)
        'accent': '#2D5A3D',
        'accent-light': '#3A7A52',
        'accent-hover': '#1E4530',
        // UI
        'border': '#E0DED9',
        'border-dark': '#C4C2BD',
        'surface': '#FAFAF8',
        'surface-elevated': '#FFFFFF',
        // Feedback
        'success': '#2D5A3D',
        'error': '#C23B22',
        'warning': '#D4A843',
        'info': '#3B6FA0',
      },
      // Spacing - generous Rapha-style
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '26': '6.5rem', // 104px
        '30': '7.5rem', // 120px
        'section-mobile': '3rem', // 48px
        'section-desktop': '6rem', // 96px
      },
      // Max widths
      maxWidth: {
        'container': '80rem', // 1280px
        'wide': '87.5rem', // 1400px
      },
      // Transitions
      transitionDuration: {
        'default': '300ms',
        'slow': '400ms',
        'slower': '600ms',
      },
      // Keyframes for subtle animations
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
