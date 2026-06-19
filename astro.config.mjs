// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://penaltyshooters2.co.uk',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
