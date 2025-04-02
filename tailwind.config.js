/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4731D3',
        secondary: '#BAB2E7',
        dark: {
          bg: '#252128',
          text: '#AEBCCF',
          border: '#383838',
        },
        'dark-bg': '#252128',
        'dark-surface': '#25262B',
        'dark-text': '#C1C2C5',
        'light-bg': '#FFFFFF',
        'light-surface': '#F8F9FA',
        'light-text': '#1A1B1E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      clipPath: {
        'half-moon': 'circle(100% at 0% 50%)',
      },
    },
  },
  plugins: [],
} 