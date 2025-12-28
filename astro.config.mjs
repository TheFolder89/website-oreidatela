// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
  site: process.env.BUILD_DESTINATION === 'hostinger'
    ? 'https://whitesmoke-snail-585456.hostingersite.com'
    : 'https://thefolder89.github.io',
  base: (process.env.GITHUB_ACTIONS && process.env.BUILD_DESTINATION !== 'hostinger')
    ? '/website-oreidatela/'
    : '/',
  output: 'static',
  build: {
    format: 'file'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});