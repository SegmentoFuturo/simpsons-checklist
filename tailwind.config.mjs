/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  serif: ['SimpsonsFont', ...defaultTheme.fontFamily.sans],
			  second: ['SimpsonsSecondaryFont', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				darkBlue: '#024975',
				lightBlue: '#24cbeb',
				yellow: '#fed81f',
				orange: '#e9ae21',
				white: '#ffffff',
				black: '#000000'
			}
			
		  },
	},
	plugins: [],
}
