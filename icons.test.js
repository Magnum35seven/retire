const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest'), 'utf8'));
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
const required = [
  ['icons/icon-192.png', '192x192', 'any'],
  ['icons/icon-512.png', '512x512', 'any'],
  ['icons/icon-192-maskable.png', '192x192', 'maskable'],
  ['icons/icon-512-maskable.png', '512x512', 'maskable']
];
for (const [src, size, purpose] of required) {
  const entry = manifest.icons.find(icon => icon.src === src && icon.sizes === size && icon.purpose === purpose);
  if (!entry) throw new Error(`Manifest missing ${src} (${purpose})`);
  if (!fs.existsSync(path.join(root, src))) throw new Error(`Missing icon file ${src}`);
}
for (const file of ['favicon.ico', 'icons/favicon-32.png', 'icons/favicon-48.png', 'icons/apple-touch-icon.png', 'icons/icon-256.png', 'icons/icon-1024.png']) {
  if (!fs.existsSync(path.join(root, file))) throw new Error(`Missing ${file}`);
}
if (!html.includes('rel="apple-touch-icon"') || !html.includes('href="favicon.ico"')) throw new Error('HTML icon metadata missing');
if (!sw.includes("retirement-compass-v1.1.0") || !sw.includes("'./icons/icon-512.png'")) throw new Error('Service worker cache version/icon precache missing');
if (!html.includes("const APP_VERSION='1.1.0'")) throw new Error('App version not updated');
console.log('App icon checks passed.');
