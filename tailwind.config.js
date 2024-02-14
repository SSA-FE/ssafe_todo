/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'theme-font': '#6F6F6F',
        'theme-red': '#D93535',
      },

      backgroundColor: {
        'DONE': '#00FF00',
        'PROGRESS': '#FFFF00',
        'TODO': '#FF0000',
      }
    },
  },
  plugins: [],
}

