# European Remodeling & Design

Vue 3 + Vite marketing site.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output: `dist/`

## Deploy to AWS (S3 + CloudFront)

See **[docs/DEPLOY-AWS.md](./docs/DEPLOY-AWS.md)** for:

1. CloudFormation stack (private S3 + CloudFront with SPA routing)
2. `npm run deploy:s3` to upload `dist/` and invalidate CloudFront

You need `S3_BUCKET` and optionally `CLOUDFRONT_DISTRIBUTION_ID` in the environment (see `.env.example`).
