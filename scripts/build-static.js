/**
 * Copies the static site (index.html, assets/, images) into dist/
 * for deployment to GitHub Pages. No Vite or bundling.
 */

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      copyRecursive(path.join(src, name), path.join(dest, name));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

// Clean and create dist
if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true });
fs.mkdirSync(dist, { recursive: true });

// Copy index.html
fs.copyFileSync(path.join(root, 'index.html'), path.join(dist, 'index.html'));

// Copy assets folder
copyRecursive(path.join(root, 'assets'), path.join(dist, 'assets'));

// Copy images (png, jpg)
for (const name of fs.readdirSync(root)) {
  const ext = path.extname(name).toLowerCase();
  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
    fs.copyFileSync(path.join(root, name), path.join(dist, name));
  }
}

// So GitHub Pages doesn't run Jekyll
fs.writeFileSync(path.join(dist, '.nojekyll'), '');

console.log('Static site copied to dist/');
