import adapter from '@sveltejs/adapter-static';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*'] // prerender all routes
		},
		csp: {
			mode: 'hash',
			directives: {
				'script-src': ["'self'", 'wasm-unsafe-eval'],
				'object-src': ["'self'"]
			}
		}
	},
	vite: {
		plugins: [tailwindcss(), sveltekit()]
	}
};

export default config;
