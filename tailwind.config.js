/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#56AD93',
        'black': {
          100: '#0E0F0E',
          200: '#181818',
          300: '#202221',
        },
        'gray': {
          100: '#303232',
          200: '#676767',
          300: '#B0B4B2',
        },
        'white': '#CCCCCC',
      },
      fontFamily: {
        'rubik': 'Rubik',
        'rock': 'Rock Salt'
      },
      keyframes: {
        Move: {
          '0% - 100%': { transform: 'translateY(-13px)' },
        }
      },
      animation: {
        pawnMove: 'Move 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
