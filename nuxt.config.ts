// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		// "baseURL": "/admin",
		head: {
			link: [
				{ rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-touch-icon.png' },
				{ rel: 'icon', sizes: '32x32', href: 'favicon/favicon-32x32.png' },
				{ rel: 'icon', sizes: '16x16', href: 'favicon/favicon-16x16.png' },
				{ rel: 'manifest', href: 'favicon/site.webmanifest' },
				{ rel: 'mask-icon', color: '#0056b3', href: 'favicon/safari-pinned-tab.svg' }
			],
		}
	},
	css: [
		'~/assets/css/main.css',
		'~/assets/css/page.css'
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
