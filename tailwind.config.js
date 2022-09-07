/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E82223',
        secondary: '#BBC3CF',
        tertiary: '#0078E3',
        active: '#0DAFC0',
        danger: '#F44336'
      },
      dropShadow: {
        image: '0px 10px 15px #C8C9CD'
      },
      fontFamily: {
        mono: ['Nunito Mono', ...fontFamily.mono],
        sans: ['Nunito Sans', ...fontFamily.sans]
      }
    }
  },
  plugins: []
}
