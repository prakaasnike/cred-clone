/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      fontWeight: {
        light: 100,
        thin: 200,
        normal: 300,
        medium: 400,
        semibold: 500,
        bold: 600,
        extrabold: 700,
        heavy: 800,
        black: 900,
      },
      deliciousHamburgers: {
        size: '30px', // must be in px.
        color: '#f8f8f8',
        colorLight: '#fff8f4',
        padding: '0px', // must be in px.
        animationSpeed: 1,
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-hamburgers'),
  ],
};
