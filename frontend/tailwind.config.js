/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-grey': '#171A1F',
        'conver-violet': '#878CED'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}