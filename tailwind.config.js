/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111', // noir velours
        secondary: '#B91C1C', // rouge rideau
        accent: '#D4AF37', // or scène
        background: '#0B0B0B',
        text: '#F5F5F5',
        surface: '#111111',
        muted: '#BDBDBD',
        border: 'rgba(245,245,245,0.14)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Cinzel', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Crimson Text', 'Georgia', 'serif'],
      },
      fontSize: {
        hero: ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.2' }],
        'h1': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.2' }],
        'h2': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.3' }],
        'h3': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.3' }],
      },
      letterSpacing: {
        theatre: '0.08em',
        'theatre-wide': '0.12em',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(212,175,55,0.12), 0 16px 48px rgba(0,0,0,0.55)',
        'glow-sm': '0 0 0 1px rgba(245,245,245,0.10), 0 10px 28px rgba(0,0,0,0.45)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
