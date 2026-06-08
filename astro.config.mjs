import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://malashikh.in',
  output: 'static',
  build: {
    format: 'directory',
  },
});
