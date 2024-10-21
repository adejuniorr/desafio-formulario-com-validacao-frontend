/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fusion-dark-blue": "var(--fusion-black)",
        "fusion-cyan": "var(--fusion-cyan)"
      }
    },
  },
  plugins: [],
}