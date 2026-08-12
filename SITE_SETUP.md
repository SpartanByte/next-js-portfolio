# Site Setup Guide

This repository is a personal portfolio site built with Next.js, React, and Tailwind CSS. The app is structured as a static-exported frontend and is designed to be deployed as a pre-rendered site with no server-side app runtime.

## 1. Prerequisites

Before running the project locally, install:

- Node.js 18+ (recommended 20 LTS)
- npm or pnpm/yarn
- Git

Check your environment:

```bash
node -v
npm -v
```

## 2. Local setup

From the project root:

```bash
npm install
npm run dev
```

Then open the local app in the browser:

```text
http://localhost:3000
```

If you want a production build:

```bash
npm run build
npm run start
```

## 3. Project structure

Key files and folders in this repo:

```text
next-js-portfolio/
├── package.json               # Scripts and dependencies
├── next.config.ts             # Next.js config
├── postcss.config.mjs         # PostCSS/Tailwind processing
├── eslint.config.mjs          # ESLint config
├── tsconfig.json              # TypeScript config
├── public/                    # Static assets and SEO files
│   ├── robots.txt
│   ├── sitemap.xml
│   └── drafts/
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles + Tailwind entry
│   │   ├── layout.jsx         # Root layout, fonts, metadata, GA scripts
│   │   ├── page.jsx           # Homepage composition
│   │   └── robots.ts          # Robots metadata config
│   ├── assets/
│   │   └── index.jsx          # Image asset exports
│   └── components/
│       ├── About.jsx
│       ├── Experience.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── Navbar.jsx
│       ├── Projects.jsx
│       ├── Skills.jsx
│       └── sub/
│           ├── AnimatedNavLink.jsx
│           ├── Load.jsx
│           ├── PortfolioProject.jsx
│           ├── SectionHeading.tsx
│           ├── Toggle.jsx
├── Dockerfile                 # Container build support
├── README.md                  # Existing project overview
├── SITE_SETUP.md              # This setup guide
└── public/icons, images, video
```

## 4. Core app flow

The homepage is assembled in:

- src/app/page.jsx

The app root layout is in:

- src/app/layout.jsx

That layout handles:

- global font setup using next/font/google
- the site metadata
- the background hero styling
- the Google Analytics script injection

The site content is composed from reusable sections:

- Hero
- Skills
- Experience
- Projects
- About
- Footer
- Navbar

Each section is in src/components and contributes to the portfolio page.

## 5. Styling and assets

This site uses:

- Next.js app router
- Tailwind CSS for utility styling
- global CSS in src/app/globals.css
- local image assets under public/ and src/assets

The design is a single-page portfolio with animated sections and a custom theme. The app uses framer-motion and a few icon libraries for interaction and polish.

## 6. Important Next.js caveats for this project

### Static export is enabled

The app is configured in next.config.ts with:

```ts
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

This means:

- the app is built as a static website
- it is not meant to rely on server-side rendering or server functions
- API routes and server-only code will not work in the usual Next.js server runtime
- deployment targets should be static hosting or CDN-friendly hosts

### No server-side data layer

Because it is exported as static HTML, do not expect features that require:

- API routes under /api
- Prisma or database-backed dynamic server logic
- server actions
- server-only environment variables used during request time

If you need dynamic content, it should be fetched at build time, loaded from client-side data, or moved to a separate backend service.

### Images are unoptimized

This repo explicitly disables image optimization:

```ts
images: {
  unoptimized: true,
}
```

That is common for static exports, but it has trade-offs:

- image optimization from Next.js is disabled
- you need to manage asset size and compression manually
- use static assets from public/ or pre-optimized local files when possible

### App Router only

The project uses the modern App Router structure under src/app, with:

- src/app/layout.jsx
- src/app/page.jsx
- metadata and root-level global layout behavior

This means the app relies on the Next.js app router conventions rather than the older pages router.

### Google Analytics in the layout

The metadata layout includes Google Tag Manager and gtag script injection. If you reuse or deploy this site, update the GA ID in src/app/layout.jsx:

```jsx
src="https://www.googletagmanager.com/gtag/js?id=G-[TrackingCode]"
```

and:

```jsx
gtag('config', 'G-[TrackingCode]');
```

### SEO files are static

The site includes generated metadata and static files in public/:

- robots.txt
- sitemap.xml

If the site is deployed under a different domain, update those files and any canonical URLs in the page metadata.

## 7. Deployment notes

This project is best suited for:

- GitHub Pages
- Netlify
- Cloudflare Pages
- any static hosting provider that can serve the exported Next.js output

If you use a static host, make sure it supports the generated output and that the app's absolute URLs are correct for the production domain.

## 8. Common development notes

- Keep the structure under src/app and src/components for app routing and UI composition.
- When adding new sections, import them into src/app/page.jsx.
- For new images, prefer optimized static files placed in public/ or exported through src/assets.
- If you add APIs or server-only behavior, this project will need a non-static deployment approach.

## 9. Quick commands

Install dependencies:

```bash
npm install
```

Run local dev server:

```bash
npm run dev
```

Build production static output:

```bash
npm run build
```

Start built app locally:

```bash
npm run start
```

## 10. Summary

This portfolio is a static Next.js app that prioritizes design, SEO, and fast front-end performance. The biggest caveat is the static export setup in next.config.ts, which means the project should not be treated like a dynamic server app. If you keep the app static and keep asset URLs and metadata aligned with the deployment domain, it will work well as a lightweight portfolio site.
