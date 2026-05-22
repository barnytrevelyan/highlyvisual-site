import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// @astrojs/sitemap 3.7.2 crashes on this Astro version with "Cannot read
// properties of undefined (reading 'reduce')" at sitemap/dist/index.js:85
// and no sitemap file is emitted. Replaced with hand-maintained
// public/sitemap.xml (19 URLs); robots.txt points to that file.
export default defineConfig({
  site: 'https://www.highlyvisual.com',
  trailingSlash: 'always',
  integrations: [mdx()],
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
