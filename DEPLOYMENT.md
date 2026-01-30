# Deployment Guide

## Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aamrindersingh/aamrindersingh)

### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Vercel will automatically detect Next.js and configure everything.

## Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

## Deploy to GitHub Pages (Static Export)

1. Update `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/aamrindersingh',
};

module.exports = nextConfig;
```

2. Add deployment script to `package.json`:
```json
"scripts": {
  "deploy": "next build && touch out/.nojekyll && git add -f out && git commit -m 'Deploy' && git subtree push --prefix out origin gh-pages"
}
```

3. Run: `npm run deploy`

## Environment Variables

If you add a contact form service (Formspree, EmailJS, etc.), create a `.env.local`:

```
NEXT_PUBLIC_FORM_ENDPOINT=your_endpoint_here
```

## Custom Domain

### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify:
1. Go to Site Settings → Domain management
2. Add custom domain
3. Update DNS records

## Updating Content

All content is in `/lib/data.ts`. Edit:
- Personal information
- Skills
- Projects
- Work experience

Then commit and push - your site will auto-deploy!
