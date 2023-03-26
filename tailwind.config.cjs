/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1920px',
      xxxl: '3000px'
    },
    extend: {
      backgroundImage: 'url("./assets/bg.webp")',

      fontFamily: {
        montserrat: 'Montserrat, sans-serif'
      },
      colors: {
        overlay: 'rgba(0,0,0, .8)'
      }
    }
  },
  plugins: []
}
