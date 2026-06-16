import { defineConfig } from 'astro/config';
import { existsSync, realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const nodeModulesPath = fileURLToPath(new URL('./node_modules', import.meta.url));
const viteFsAllow = [projectRoot];

if (existsSync(nodeModulesPath)) {
  viteFsAllow.push(realpathSync(nodeModulesPath));
}

export default defineConfig({
  site: 'https://malashikh.in',
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'directory',
  },
  vite: {
    server: {
      fs: {
        allow: viteFsAllow,
      },
    },
  },
});
