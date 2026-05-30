import base from './astro.config.mjs';
base.vite = { ...(base.vite || {}), cacheDir: '/tmp/vitecache' };
base.outDir = '/tmp/hvdist';
export default base;
