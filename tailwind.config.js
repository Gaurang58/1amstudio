/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#050507',
      },
      boxShadow: {
        'neon': '0 0 36px rgba(255,255,255,0.06)',
      }
    },
  },
  plugins: [],
}
