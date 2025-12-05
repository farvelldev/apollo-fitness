/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#FF0033',
        'light': '#FFFFFF',
        'dark': '#121212',
        'text': '#cccccc'
      },
      fontFamily: {
        'heading': ['Oswald', 'sans-serif'], 
        'body': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: []
};