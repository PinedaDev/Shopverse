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
        overlay: 'rgba(0,0,0, .9)',
        main: '#222831',
        secondary: '#393E46',
        third: '#EEEEEE',
        accent: '#00ADB5'
      }
    }
  },
  plugins: []
}
