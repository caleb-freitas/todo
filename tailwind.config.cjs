/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        1000: '#F2F2F2',
        2000: '#D9D9D9',
        3000: '#808080',
        4000: '#333333',
        5000: '#262626',
        6000: '#1A1A1A',
        7000: '#0D0D0D',
      },
      red: {
        3000: '#E25858',
      },
      purple: {
        3000: '#8284FA',
        6000: '#5E60CE',
      },
      blue: {
        3000: '#4EA8DE',
        6000: '#1E6F9F',
      },
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
}
