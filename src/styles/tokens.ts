/**
 * @file tokens.ts
 * @project Surokkha AI — Offline-First Emergency Safety Ecosystem
 * @author Mohammed Muntasir Rahman Joy
 * @description Centralized design tokens establishing the monochrome quiet-luxury
 * visual language, typography hierarchies, surface opacities, and spatial elevation radii.
 */

export const tokens = {
  colors: {
    bg: '#000000',
    surface: {
      subtle: 'rgba(255, 255, 255, 0.03)',
      pill: 'rgba(23, 23, 23, 0.90)', // neutral-900/90
      card: 'rgba(10, 10, 10, 0.95)',
      cardHover: 'rgba(20, 20, 20, 0.98)',
      active: 'rgba(255, 255, 255, 0.1)',
    },
    border: {
      hairline: 'rgba(255, 255, 255, 0.08)',
      subtle: 'rgba(255, 255, 255, 0.12)',
      focused: 'rgba(255, 255, 255, 0.35)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.70)',
      muted: 'rgba(255, 255, 255, 0.45)',
      faint: 'rgba(255, 255, 255, 0.25)',
    },
    accents: {
      // Functional, restrained accents used only when conveying state
      active: '#10b981', // subtle emerald indicator
      critical: '#ef4444', // subtle SOS indicator
      caution: '#f59e0b', // subtle warning indicator
    },
  },
  typography: {
    fontFamily: "'Poppins', system-ui, -apple-system, sans-serif",
    fontMono: "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace",
    casing: 'lowercase',
  },
  radii: {
    pill: '9999px',
    card: '1.25rem', // 20px
    badge: '0.5rem',
  },
} as const;

export type DesignTokens = typeof tokens;
