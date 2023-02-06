/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        'body': '#191919'
      },
      fontFamily: {
        'poppins' : ["'Poppins'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
