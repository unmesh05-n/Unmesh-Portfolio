/** @type {import('tailwindcss').Config} */
const { theme: t } = require('./lib/theme');

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:           t.colors.bg,
        'bg-elevated': t.colors.bgElevated,
        'bg-subtle':   t.colors.bgSubtle,
        border:       t.colors.border,
        'border-muted': t.colors.borderMuted,
        text:         t.colors.textPrimary,
        muted:        t.colors.textSecondary,
        tertiary:     t.colors.textTertiary,
        accent:       t.colors.accent,
        'accent-light': t.colors.accentLight,
        'accent-muted': t.colors.accentMuted,
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        ui:      ['Outfit', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '8xl': ['6rem',   { lineHeight: '1' }],
        '9xl': ['8rem',   { lineHeight: '1' }],
        '10xl':['10rem',  { lineHeight: '1' }],
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'pulse-slow':'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-subtle': `
          linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-64': '64px 64px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};
