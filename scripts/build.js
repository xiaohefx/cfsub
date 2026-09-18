import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assets = path.join(root, 'src', 'panel', 'assets');

const dashboardHtml = fs.readFileSync(path.join(assets, 'dashboard.html'), 'utf8');

await build({
  entryPoints: [path.join(root, 'src', 'index.ts')],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2022',
  write: false,
  external: ['cloudflare:sockets'],
  minify: false,
  define: {
    __DASHBOARD_HTML__: JSON.stringify(dashboardHtml),
  },
});

const result = await build({
  entryPoints: [path.join(root, 'src', 'index.ts')],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2022',
  write: false,
  external: ['cloudflare:sockets'],
  minify: true,
  legalComments: 'none',
  define: {
    __DASHBOARD_HTML__: JSON.stringify(dashboardHtml),
  },
});

const out = result.outputFiles[0].text;
const dist = path.join(root, 'dist');
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, '_worker.js'), out, 'utf8');

const sizeKB = (Buffer.byteLength(out, 'utf8') / 1024).toFixed(1);
console.log(`构建完成：dist/_worker.js (${sizeKB} KB)`);
