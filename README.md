# Nexx Kabianga Web Prototype

High-performance, mobile-first university landing page built with **React**, **Vite**, **Tailwind CSS**, and **react-helmet-async**. Designed for **100/100 Google PageSpeed Insights** and strong on-page technical SEO.

Also known as:

- **Kabianga SEO Demo Environment**
- **Project Seekon: Kabianga Web Vitals**

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploy

1. Copy `.env.example` to `.env` and set `VITE_SITE_URL` to your live domain.
2. Update `public/sitemap.xml` and `public/robots.txt` `<loc>` / `Sitemap` URLs to match.
3. Deploy the `dist/` folder to Vercel, Netlify, Cloudflare Pages, or any static host.

## SEO checklist

- [x] Single `<h1>` per page
- [x] Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`)
- [x] `react-helmet-async`: title, description, canonical, keywords, Open Graph
- [x] JSON-LD `WebSite` structured data
- [x] `sitemap.xml` + `robots.txt`
- [x] Hero image: `loading="eager"`, `fetchpriority="high"`, preloaded in `index.html`
- [x] Portal images: `loading="lazy"` with `width` / `height` for CLS
- [x] System fonts only (no Google Fonts latency)

## Presentation tip

Tell the panel: *"Google **Nexx Kabianga Web Prototype**"* — the unique brand string is embedded in metadata, sitemap, and on-page copy for distinct indexing.
