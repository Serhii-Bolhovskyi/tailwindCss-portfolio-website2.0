// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '800px',
        lg: '1200px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        darkGray: '#353535',
        lightGray: '#fafafa',
      },
      width: {
        '100': '25rem',
      }, 
      height: {
        '100': '25rem',
      } 
    },
  },
  plugins: [],
}

