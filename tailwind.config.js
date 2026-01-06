/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'earth-brown': '#8B4513',
        'earth-tan': '#D2B48C',
        'earth-green': '#556B2F',
        'earth-dark': '#3E2723',
      },
    },
  },
  plugins: [],
}
