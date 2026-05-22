import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.highlyvisual.com',
  trailingSlash: 'always',
  integrations: [sitemap(), mdx()],
  build: {
    // Inline small CSS into <head> to avoid render-blocking external stylesheets
    // (closes the Nova audit's render-blocking-resources strength baseline).
    inlineStylesheets: 'auto',
    format: 'directory',
  },
  image: {
    // Use Astro's built-in image service (sharp). Resizes locally at build time.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  vite: {
    // No client-side JS by default — Astro components are static unless explicitly hydrated.
  },
});
