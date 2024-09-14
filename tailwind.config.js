/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'headerText': 'rgb(236, 160, 152)',
        'headerTextOpacity': 'rgba(236, 160, 152, 0.6)',
        'headerTextOpa': 'rgba(236, 160, 152, 0.4)',
        'navHover': 'rgba(38, 33, 64, .7)',
        'navBorder': 'rgba(230, 148, 140, .5)',
        'brown9': 'rgb(204, 123, 114)',
        'brown9Fade': 'rgba(204, 123, 114, 0.1)',
        'brown9Hover': 'rgba(204, 123, 114, 0.2)',
      }
    },
  },
  plugins: [],
}