/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#455174'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}