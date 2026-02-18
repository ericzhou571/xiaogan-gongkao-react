/** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            navy: { 900: '#0F172A', 800: '#1E293B' },
            gold: { 500: '#B45309', 600: '#92400E' },
        },
        backdropBlur: { xs: '2px' }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Noto Serif SC', 'serif'],
      },
    },
    plugins: [],
  }