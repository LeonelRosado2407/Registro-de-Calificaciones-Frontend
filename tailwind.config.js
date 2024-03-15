/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'info' : '#227C9D',
        'success': '#17C3B2',
        'warning': '#FFCB77',
        'danger': '#FE6D73',
        'background': '#FEF9EF',
        'black' : '#293241'
      }
    },
  },
  plugins: [],
})
