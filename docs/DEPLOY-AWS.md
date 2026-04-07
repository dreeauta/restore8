# Deploy to AWS (S3 + CloudFront)

This site is a **Vue SPA with history mode**. Plain S3 website hosting cannot rewrite unknown paths to `index.html`, so direct visits or refresh on `/about` would 404. This setup uses **CloudFront** in front of a **private** S3 bucket and maps **403/404 → `index.html`** so client-side routing works.

## Prerequisites

- [AWS CLI v2](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) installed and configured (`aws configure`)
- Permissions to create S3, CloudFront, and IAM-related resources for the stack

## 1. Create the bucket + CloudFront (one time)

Pick a **globally unique** bucket name (lowercase), e.g. `european-remodeling-site-yourname`.

From the repo root:

```bash
aws cloudformation deploy \
  --template-file deploy/aws/cloudformation.yaml \
  --stack-name european-remodeling-site \
  --parameter-overrides BucketName=european-remodeling-site-yourname
```

Note the **Outputs** (or run):

```bash
aws cloudformation describe-stacks \
  --stack-name european-remodeling-site \
  --query 'Stacks[0].Outputs' \
  --output table
```

You need:

| Output            | Use for                                      |
|-------------------|----------------------------------------------|
| `CloudFrontURL`   | Live site URL; paste into portfolio env      |
| `DistributionId`  | `CLOUDFRONT_DISTRIBUTION_ID` when deploying   |
| `BucketName`      | `S3_BUCKET` when deploying                    |

Wait until **CloudFront** status is **Deployed** (can take several minutes).

## 2. Deploy new builds

```bash
export S3_BUCKET=european-remodeling-site-yourname
export CLOUDFRONT_DISTRIBUTION_ID=E1234567890ABC   # from Outputs

npm run deploy:s3
```

This runs `npm run build`, syncs `dist/` to the bucket (`--delete` removes stale assets), and invalidates CloudFront so users see updates.

## 3. Optional: `.env` for convenience

Copy `.env.example` to `.env` and fill values. Load before deploy, e.g.:

```bash
set -a && source .env && set +a && npm run deploy:s3
```

(On Windows PowerShell, set `$env:S3_BUCKET` / `$env:CLOUDFRONT_DISTRIBUTION_ID` instead.)

## 4. Portfolio link

In `~/web-dev/2026-portfolio`, set `VITE_EUROPEAN_REMODELING_URL` to whichever URL users will open:

- **Temporary:** `https://dxxxxxxxxxx.cloudfront.net` (from stack Outputs)
- **Custom subdomain (recommended):** `https://european-remodeling.andreeauta.com` (after you complete [Custom domain](#custom-domain-subdomain-european-remodelingandreeautacom) below)

Rebuild the portfolio after changing env.

## Custom domain: `european-remodeling.andreeauta.com`

Your portfolio can stay on **andreeauta.com** while the remodeling app uses a **subdomain** on the same domain.

1. **ACM (Certificate Manager)** — Region **us-east-1** (required for CloudFront):
   - Request a public certificate for **`european-remodeling.andreeauta.com`** (or **`*.andreeauta.com`**).
   - Add the **DNS validation** records ACM shows you at wherever **andreeauta.com** DNS is hosted.

2. **CloudFront** — Edit the distribution created by the stack:
   - **Alternate domain name (CNAME):** `european-remodeling.andreeauta.com`
   - **Custom SSL certificate:** select the ACM certificate from step 1.

3. **DNS** (same provider as andreeauta.com):
   - Create a **CNAME** record:
     - **Name / host:** `european-remodeling`
     - **Value / target:** your CloudFront domain (e.g. `dxxxxxxxxxx.cloudfront.net`)

4. Wait for the certificate to issue and DNS to propagate, then open **`https://european-remodeling.andreeauta.com`**.

5. Set the portfolio env to that URL:

   ```bash
   VITE_EUROPEAN_REMODELING_URL=https://european-remodeling.andreeauta.com
   ```
