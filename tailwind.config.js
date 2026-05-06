/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        bg: '#0f0f0f',
        surface: '#181818',
        card: '#202020',
        border: '#303030',
        accent: '#ff0000',
        'accent-hot': '#cc0000',
        'accent-warm': '#ff8f00',
        muted: '#aaaaaa',
        subtle: '#737373',
        light: '#f1f1f1',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,0,0,0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(255,0,0,0.35)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease forwards',
        shimmer: 'shimmer 1.4s infinite linear',
        pulse2: 'pulse2 1.6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        slideIn: 'slideIn 0.3s ease forwards',
      },
    },
  },
  plugins: [],
}
