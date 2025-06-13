import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths'
import {resolve} from 'path';

export default defineConfig({
	plugins: [tsconfigPaths(), sveltekit() ],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	// server: {
    //     proxy: {
    //         '/dashboard': 'http://localhost:8080/user/login',
    //     },
    // },
});