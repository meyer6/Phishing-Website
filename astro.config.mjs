// @ts-check
import svelteIntegration from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
	svelteIntegration()
  ]
});
