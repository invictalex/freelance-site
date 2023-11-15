/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"off-white" : "#f4f4f4",
				"black": "#1a1a1a",
				"slate": "#31343B",
				"dark-slate": "#212225",
				"blue": "#5F6D8A",
				"blue-lt": "#94A1B8",
				"blue-dk": "#505E79",
				"yellow": "#F7AE3B",
				"orange": "#E05421",
				"orange-dk": "#B84725",
				"white": "#F2F2F2",


			},
			
		},
	},
	plugins: [],
}
