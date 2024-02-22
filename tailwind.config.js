/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-font': '#6F6F6F',
        'theme-red': '#D93535',

        'DONE': '#00FF00',
        'PROGRESS': '#FFFF00',
        'TODO': '#FF0000',
      },

      backgroundColor: {
        'DONE': 'rgba(0, 255, 0, 0.5)',
        'PROGRESS': 'rgba(255, 255, 0, 0.5)',
        'TODO': 'rgba(255, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

