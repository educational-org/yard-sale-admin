/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors'); //llamamos colors de tailwindcss
module.exports = {
	content: ['./src/**/*.{html,js,tsx,jsx}'],
	theme: {
		colors: {
			//los aplicamos a nuestro tema
			...colors,
		},
		// height: {
		// 	'90v': '90vh',
		// 	'100v': '100vh',
		// },
	},
	plugins: [require('@tailwindcss/forms')],
};
