/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'electric-violet': {
          50: '#f3f1ff',
          100: '#ece5ff',
          200: '#d9ceff',
          300: '#bea7ff',
          400: '#a076ff',
          500: '#843eff',
          600: '#7918ff',
          700: '#6b04fb',
          800: '#5b04d3',
          900: '#4c06ac',
          950: '#2c0075',
        },
      },
    },
  },
  plugins: [],
};
