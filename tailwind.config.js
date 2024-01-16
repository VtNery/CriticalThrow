/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      spacing:{
        '14': '3.5rem',
        '132px': '132px',
        '250px': '250px',
        '350px': '350px',
        '640px': '640px',
        '1024px': '1024px',
        '1500px': '1500px',
      },
      fontSize: {
        '10px': '10px',
      },
      backgroundImage: theme => ({
        'fundo-theme': "url('../img/fundo.jpg')",
        'fundo-theme-mobile': "url('../img/fundo-mobile.jpg')"
      }),
      screens: {
        '2xl': '1680px',
        '3xl': '1920px',
      },
      colors:{
        'body' : '#f1f1f1',
      },
    },
  },
  plugins: [],
}

