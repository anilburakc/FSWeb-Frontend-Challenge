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
          surface: '#25262B',
          text: '#AEBCCF',
          border: '#383838',
        },
        light: {
          bg: '#FFFFFF',
          surface: '#F8F9FA',
          text: '#1A1B1E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
} 