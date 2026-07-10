import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const serverDirectory = fileURLToPath(new URL('../dist/server/', import.meta.url));
const workerPath = fileURLToPath(new URL('../dist/server/index.js', import.meta.url));

mkdirSync(serverDirectory, { recursive: true });
writeFileSync(
  workerPath,
  `export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
`,
);
