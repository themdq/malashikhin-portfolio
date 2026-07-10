import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const pages = [
  {
    path: 'index.html',
    text: ['Dmitrii', 'Malashikhin', 'Selected', 'filed by utility', 'Background', 'Experience', 'Master in Information Systems', 'Start a conversation', 'malashikh.in'],
  },
];

const rendered = pages.map((page) => {
  const htmlPath = new URL(page.path, dist);
  if (!existsSync(htmlPath)) throw new Error(`dist/${page.path} is missing. Run pnpm build first.`);
  const html = readFileSync(htmlPath, 'utf8');
  if (!html.includes('id="main"') || !html.includes('id="top"')) throw new Error(`Missing shell landmarks: ${page.path}`);
  for (const text of page.text) {
    if (!html.includes(text)) throw new Error(`Missing rendered content in ${page.path}: ${text}`);
  }
  return html;
});

const html = rendered.join('\n');

const localAssets = [...html.matchAll(/(?:href|src)="(\/[^"]+)"/g)]
  .map((match) => match[1].split('#')[0])
  .filter((path) => path !== '/');

for (const asset of localAssets) {
  if (!existsSync(join(dist.pathname, asset))) throw new Error(`Missing local asset: ${asset}`);
}

for (const file of ['_headers', '_redirects', 'Dmitrii_Malashikhin_Data_Engineer_Resume.pdf', 'og.png']) {
  if (!existsSync(new URL(file, dist))) throw new Error(`Missing deployment artifact: ${file}`);
}

console.log(`Validated the single-page build and ${localAssets.length} local asset references.`);
