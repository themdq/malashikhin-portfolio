import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const htmlPath = new URL('index.html', dist);

if (!existsSync(htmlPath)) {
  throw new Error('dist/index.html is missing. Run pnpm build first.');
}

const html = readFileSync(htmlPath, 'utf8');
const requiredIds = ['main', 'top', 'about', 'work', 'experience', 'contact'];
const requiredText = [
  'Dmitrii Malashikhin',
  'Selected work',
  'Experience',
  'Capabilities',
  'hello@malashikh.in',
];

for (const id of requiredIds) {
  if (!html.includes(`id="${id}"`)) throw new Error(`Missing section id: ${id}`);
}

for (const text of requiredText) {
  if (!html.includes(text)) throw new Error(`Missing rendered content: ${text}`);
}

const localAssets = [...html.matchAll(/(?:href|src)="(\/[^"]+)"/g)]
  .map((match) => match[1].split('#')[0])
  .filter((path) => path !== '/');

for (const asset of localAssets) {
  if (!existsSync(join(dist.pathname, asset))) throw new Error(`Missing local asset: ${asset}`);
}

for (const file of ['_headers', '_redirects', 'Dmitrii_Malashikhin_Data_Engineer_Resume.pdf']) {
  if (!existsSync(new URL(file, dist))) throw new Error(`Missing deployment artifact: ${file}`);
}

console.log(`Validated ${requiredIds.length} sections and ${localAssets.length} local asset references.`);
