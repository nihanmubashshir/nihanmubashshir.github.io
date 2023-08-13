/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'nextjs': ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"],
			'sourceCodePro': ["Source Code Pro", "monospace"],
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {

					"primary": "#d1d5db",

					"secondary": "#e21f4a",



					"accent": "#34d399",



					"neutral": "#331f38",



					"base-100": "#1c1c1c",



					"info": "#80a5e0",



					"success": "#167951",



					"warning": "#fbdb3c",



					"error": "#ec6f88",
				},
			},
		],
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui')
	],
}
