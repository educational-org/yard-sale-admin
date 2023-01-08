/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors'); //llamamos colors de tailwindcss
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    colors:{ //los aplicamos a nuestro tema
      ...colors,
    },
  },
  plugins:[
    require('@tailwindcss/forms')
  ]
};
