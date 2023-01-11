/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors'); //llamamos colors de tailwindcss
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    colors:{ //los aplicamos a nuestro tema
      ...colors,
    },
    height: {
			"10v": "10vh",
			"20v": "20vh",
			"30v": "30vh",
			"40v": "40vh",
			"50v": "50vh",
			"60v": "60vh",
			"70v": "70vh",
			"80v": "80vh",
			"90v": "90vh",
			"100v": "100vh",
		},
  },
  plugins:[
    require('@tailwindcss/forms')
  ]
};
