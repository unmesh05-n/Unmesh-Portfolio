/**
 * Theme configuration — single source of truth for colors, fonts, spacing.
 * Edit here; everything else inherits automatically via CSS variables + Tailwind.
 */

export const theme = {
  colors: {
    // Base surfaces
    bg:          '#09090b',   // near black
    bgElevated:  '#111116',   // card/elevated surface
    bgSubtle:    '#18181f',   // subtle surface, hover states

    // Borders
    border:      '#1f1f2b',
    borderMuted: '#161620',

    // Typography
    textPrimary:  '#f0ede8',  // warm white
    textSecondary:'#9b9aa3',  // muted
    textTertiary: '#5a5965',  // very muted / labels

    // Accent — warm gold
    accent:       '#c9a96e',
    accentLight:  '#e8c97e',
    accentMuted:  '#c9a96e26', // ~15% opacity

    // Semantic
    success:      '#4ade80',
    error:        '#f87171',
  },

  fonts: {
    display: "'Cormorant Garamond', Georgia, serif",
    ui:      "'Outfit', system-ui, sans-serif",
    mono:    "'JetBrains Mono', 'Fira Code', monospace",
  },

  // Breakpoints match Tailwind defaults — listed for reference
  screens: {
    sm:  '640px',
    md:  '768px',
    lg:  '1024px',
    xl:  '1280px',
    '2xl': '1536px',
  },
};

export default theme;
