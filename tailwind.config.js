const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: 'tw-',
  theme: {
    colors: {
      transparent: 'transparent',

      white: '#fff',
      black: '#000',

      gray: {
        100: '#f6f6f6',
        200: '#cbcbca',
        300: '#939392',
        400: '#696868',
        500: '#1d1d1d',
      },
      red: {
        100: '#981915',
        200: '#6d0a18',
      },
      blue: {
        100: '#00649b',
        200: '#034970',
      }
    },
    fontFamily: {
      sans: ['"NotoSans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontSize: {
        '4xl': '2.125rem',
        '2xl': '1.375rem',
      }
    },
  },
  variants: {},
  plugins: []
}
