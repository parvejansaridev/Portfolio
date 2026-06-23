function withOpacity(variableName, defaultOpacity = '1') {
  return ({ opacityValue }) => {
    const opacity = opacityValue !== undefined ? opacityValue : defaultOpacity;
    return `rgba(var(${variableName}), ${opacity})`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core surfaces
        base: withOpacity('--color-base'),
        surface: withOpacity('--color-surface'),
        surface2: withOpacity('--color-surface2'),
        border: withOpacity('--color-border', '0.08'),
        ink: withOpacity('--color-ink'),
        muted: withOpacity('--color-muted'),
        // Signature accents — #0a66c2 blue + request-amber
        teal: {
          50: '#E6F2FC',
          200: '#92C6F8',
          400: '#2E90F4',
          500: '#0A66C2',
          600: '#0854A0',
          700: '#064380',
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
          'radial-gradient(circle at 50% 0%, rgba(10,102,194,0.18), transparent 60%)',
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
          '0%': { boxShadow: '0 0 0 0 rgba(10,102,194,0.45)' },
          '70%': { boxShadow: '0 0 0 12px rgba(10,102,194,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(10,102,194,0)' },
        },
      },
    },
  },
  plugins: [],
}
