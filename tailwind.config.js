/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core surfaces
        base: {
          DEFAULT: '#080B11', // deepest background (dark mode)
          light: '#F6F7FA',   // deepest background (light mode)
        },
        surface: {
          DEFAULT: '#10141C',
          light: '#FFFFFF',
        },
        surface2: {
          DEFAULT: '#161B26',
          light: '#EFF1F5',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          light: 'rgba(10,14,20,0.08)',
        },
        ink: {
          DEFAULT: '#E7EAF2',
          light: '#0B0E14',
        },
        muted: {
          DEFAULT: '#8B93A7',
          light: '#5B6273',
        },
        // Signature accents — FastAPI-teal + request-amber
        teal: {
          50: '#E6FBF8',
          200: '#9BEFE2',
          400: '#2DD9C4',
          500: '#14B8A6',
          600: '#0C9488',
          700: '#0A776E',
        },
        amber: {
          400: '#FBBF54',
          500: '#F59E0B',
          600: '#D97F06',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(20,184,166,0.18), transparent 60%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
        marquee: 'marquee 28s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(20,184,166,0.45)' },
          '70%': { boxShadow: '0 0 0 12px rgba(20,184,166,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(20,184,166,0)' },
        },
      },
    },
  },
  plugins: [],
}
