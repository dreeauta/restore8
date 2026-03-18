/**
 * Post-build script: copy static assets and demo apps into dist
 * so uploading only the dist folder to S3 is enough.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')
const distIndex = path.join(dist, 'index.html')

// Ensure Vite produced a valid index.html before copying (we must not overwrite it)
if (!fs.existsSync(distIndex)) {
  console.error('Error: dist/index.html not found. Run "npm run build" (Vite) first.')
  process.exit(1)
}
const indexContent = fs.readFileSync(distIndex, 'utf8')
if (!indexContent || indexContent.trim().length < 100) {
  console.error('Error: dist/index.html is empty or invalid. Fix the root index.html and run "npm run build" again.')
  process.exit(1)
}

const folders = ['img', 'video', 'tic-tac-toe', 'blackjack', 'drawingthings-project']

for (const folder of folders) {
  const src = path.join(root, folder)
  if (fs.existsSync(src) && fs.statSync(src).isDirectory()) {
    const dest = path.join(dist, folder)
    fs.cpSync(src, dest, { recursive: true })
    console.log('Copied', folder, '-> dist/')
  } else {
    console.warn('Skip (missing):', folder)
  }
}

// Ensure SPA rewrite files are in dist (for Apache, Netlify, etc.)
const publicDir = path.join(root, 'public')
const rewriteFiles = ['.htaccess', '_redirects']
for (const name of rewriteFiles) {
  const src = path.join(publicDir, name)
  if (fs.existsSync(src)) {
    const dest = path.join(dist, name)
    fs.copyFileSync(src, dest)
    console.log('Copied', name, '-> dist/')
  }
}

console.log('Dist is ready to upload.')
