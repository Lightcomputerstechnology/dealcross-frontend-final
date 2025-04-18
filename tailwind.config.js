/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <<== This line is critical for theme toggling
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e7f5ff',
          100: '#cae9ff',
          200: '#9bd1ff',
          300: '#5ab4ff',
          400: '#2699ff',
          500: '#007bff',
          600: '#0069e6',
          700: '#0052b3',
          800: '#003a80',
          900: '#00264d',
        },
        accent: {
          50: '#fff8e6',
          100: '#ffedc1',
          200: '#ffe096',
          300: '#ffd262',
          400: '#ffc73d',
          500: '#ffbb17',
          600: '#e6a603',
          700: '#b38302',
          800: '#806001',
          900: '#4d3a00',
        },
        surface: '#0f172a',
      },
    },
  },
  plugins: [],
};
