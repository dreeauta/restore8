# Vue Router history mode – production setup

The app uses `createWebHistory()`. For direct URLs (e.g. `/skills`, `/about`, `/projects`) to work in production, the server must serve `index.html` for unknown paths so the client can handle routing.

## What’s included

- **Apache** – `public/.htaccess` is copied to `dist/` on build. Use this when the built site is served by Apache.
- **Netlify** – `public/_redirects` is copied to `dist/`. Netlify will use it when you deploy the `dist` folder (or when the build output includes it).
- **Vercel** – Root `vercel.json` rewrites all routes to `/index.html`. Deploy from the repo root; Vercel serves static files first, then applies the rewrite.

## Other hosts

### Nginx

In your `server` block:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### AWS S3 (fix for direct URLs and refresh)

S3 has no “rewrite” feature. For paths like `/about`, `/projects`, or `/project/some-slug`, S3 looks for an object with that key, doesn’t find it, and returns 404. So typing the URL or refreshing breaks.

**Fix: use the Error document**

1. Open **AWS Console** → your **S3 bucket**.
2. Go to the **Properties** tab.
3. Scroll to **Static website hosting** and click **Edit**.
4. Choose **Enable** and set:
   - **Hosting type**: Host a static website
   - **Index document**: `index.html`
   - **Error document**: `index.html`  ← this is what fixes `/about`, `/projects`, refresh, etc.
5. Save.

When someone requests a path that doesn’t match a file (e.g. `https://yoursite.com/projects`), S3 now serves your **index.html** object instead of the default error page. The Vue app loads and the router shows the correct page. The project already uses `base: '/'` so assets load correctly from any URL.

**If you use CloudFront in front of S3**

- In the distribution: **Error pages** → **Create custom error response**.
- **HTTP error code**: 403 → **Response page path**: `/index.html` → **HTTP response code**: 200.
- Add another: **HTTP error code**: 404 → same response.  
That way SPA routes get a 200 and the correct content.

### AWS Amplify / Firebase Hosting

Configure the app as an SPA (single-page app) in the host’s UI so that all routes fall back to `index.html`.
