/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require('@iconify/tailwind');


export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./error.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui'),
    addDynamicIconSelectors(),
  ]
}