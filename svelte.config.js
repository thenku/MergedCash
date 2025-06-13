import adapter from '@sveltejs/adapter-auto';
import adapternode from '@sveltejs/adapter-node';
import adapterstatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
// export const argv = require('yargs').argv;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors 
	preprocess: [vitePreprocess({
		
	})],

	// kit: {
	// 	// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
	// 	// If your environment is not supported or you settled on a specific environment, switch out the adapter.
	// 	// See https://kit.svelte.dev/docs/adapters for more information about adapters.
	// 	adapter: adapternode(),
	// },
	kit: {
		adapter: adapterstatic({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			// fallback: "200.html",
			precompress: false,
			strict: true,
			paths: {
				relative: false,
				assets: '/assets',
				base: './'
				// base?: '' | `/${string}`,
				// assets
			  },
			  prerender: {
				crawl: false // Prevents prerendering from following links
			},
			// prerender: {
			// 	// Prerender all pages
			// 	all: true,
			// 	trailingSlash: 'always',
			//   },
		})
	}
};

export default config;
