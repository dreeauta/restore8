/**
 * Upload Vite `dist/` to S3 and optionally invalidate CloudFront.
 * Requires AWS CLI v2 configured (`aws configure`).
 *
 *   S3_BUCKET=your-bucket npm run deploy:s3
 *   CLOUDFRONT_DISTRIBUTION_ID=E123... npm run deploy:s3
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')

const bucket = process.env.S3_BUCKET?.trim()
const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID?.trim()

if (!bucket) {
  console.error('Missing S3_BUCKET. Example: S3_BUCKET=my-bucket-name npm run deploy:s3')
  process.exit(1)
}

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('dist/index.html not found. Run npm run build first.')
  process.exit(1)
}

function run(cmd) {
  console.log('>', cmd)
  execSync(cmd, { stdio: 'inherit', cwd: root, env: process.env })
}

run(`aws s3 sync "${dist}/" "s3://${bucket}/" --delete`)

if (distributionId) {
  run(
    `aws cloudfront create-invalidation --distribution-id "${distributionId}" --paths "/*"`,
  )
} else {
  console.log(
    '\nTip: set CLOUDFRONT_DISTRIBUTION_ID to invalidate cache after deploy (from stack Outputs).',
  )
}
