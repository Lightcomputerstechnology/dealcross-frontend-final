/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-50":  "#eef7f8",
        "primary-100": "#cde6ea",
        "primary-200": "#9acdd6",
        "primary-400": "#1f7aa2",   // teal‑blue in the mock‑ups
        "primary-500": "#0e5f87",
        "primary-600": "#094b6b",
        "accent-gold": "#d88d17",
      },
    },
  },
  plugins: [],
};
