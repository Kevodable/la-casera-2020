// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE_URL } from './src/config.js';

/*
  Anteprima su GitHub Pages: finche' non c'e' un dominio definitivo (brief,
  decisione aperta n. 6), il workflow .github/workflows/deploy.yml builda con
  GITHUB_PAGES=true cosi' il sito gira sotto /la-casera-2020/ invece che alla
  radice del dominio. In produzione (dominio vero) questa variabile non e'
  impostata e site/base tornano quelli definitivi.
*/
const isGithubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGithubPages ? 'https://kevodable.github.io' : SITE_URL,
  base: isGithubPages ? '/la-casera-2020' : '/',
  integrations: [sitemap()],
  build: {
    // Inline i CSS piccoli: meno richieste sul primo caricamento mobile.
    inlineStylesheets: 'auto',
  },
  image: {
    responsiveStyles: true,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
