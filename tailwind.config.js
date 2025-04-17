/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#ecf2ff',
          100: '#cfe0ff',
          200: '#a7c4ff',
          300: '#7ea8ff',
          400: '#4d86ff',
          500: '#0a63ff',   // ← main brand blue
          600: '#0048e2',
          700: '#0036b2',
          800: '#002580',
          900: '#00154f',
        },
        panel: {
          DEFAULT:     '#06242b',   // dark teal background
          dark:        '#03171c',
        }
      }
    },
  },
  plugins: [],
};
