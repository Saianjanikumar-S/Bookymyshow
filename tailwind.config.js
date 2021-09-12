module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        bhargav:
        {
          50: '#fdfce0',
          100: '#f5f3b9',
          200: '#eeeb90',
          300: '#e7e265',
          400: '#e0da3b',
          500: '#c6c122',
          600: '#F2F5F9',
          700: '#6e6b0f',
          800: '#424005',
          900: '#171500',
        },
        navCol:
        {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#2B3148',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        },
        signIn:
        {
          50: '#ffe3eb',
          100: '#ffb3c2',
          200: '#fb8399',
          300: '#f95370',
          400: '#f62448',
          500: '#dc0d2f',
          600: '#ac0624',
          700: '#7c031a',
          800: '#4c000e',
          900: '#1f0003',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
