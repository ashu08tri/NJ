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
        'headerTextOpacity': 'rgba(236, 160, 152, 0.9)',
        'headerTextOpa': 'rgba(236, 160, 152, 0.4)',
        'navHover': 'rgba(38, 33, 64, .7)',
        'navHoverIcon': 'rgba(38, 33, 64, .1)',
        'navBorder': 'rgba(230, 148, 140, .5)',
        'brown9': 'rgb(204, 123, 114)',
        'brown9Fade': 'rgba(204, 123, 114, 0.1)',
        'brown9Hover': 'rgba(204, 123, 114, 0.2)',
        'brown9HoverBox': 'rgba(204, 123, 114, 0.5)',
        'second':'rgb(228, 206, 204)',
        'secondText': 'rgb(54, 47, 90)',
        'brown7': '#dbbebb',
        'brown15Text': 'rgb(153, 92, 86)',
        'purpleBlur': 'rgba(38, 33, 64, .5)',
        'purpleNoBlur': 'rgba(38, 33, 64, .7)',
        'purpleBlurDark': 'rgba(54, 47, 90, .7)',
        'purpleNoBlurDark': 'rgba(54, 47, 90, .9)',
        'solutionsGradientTop': 'rgba(25, 21, 48, 0.3)',
        'solutionsGradientBottom': 'rgba(25, 21, 48, 0.7)'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #1e1a33, rgba(15, 13, 26, 0) 60%), linear-gradient(to bottom, #1e1a33, rgba(11, 31, 102, .2))',
      }
    },
  },
  plugins: [],
}