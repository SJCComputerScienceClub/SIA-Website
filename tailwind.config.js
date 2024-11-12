/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          red: '#FFB5B5',
          orange: '#FFD6BA',
          yellow: '#FFF3B5',
          green: '#B5E6B5',
          blue: '#B5D8FF',
          purple: '#E2B5FF',
          pink: '#FFB5E6'
        }
      }
    },
  },
  plugins: [],
};