/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"white" : "#f4f4f4",
				"black": "#1a1a1a",
				"slate": "#31343B",
				"slate-dark": "#292B30",
				"blue": "#95C0D1",
				"red": "#FF4853",
				"purple": "#491DE9",
			},
			
		},
	},
	plugins: [],
}
