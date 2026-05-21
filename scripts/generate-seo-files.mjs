/**
 * Writes sitemap.xml and robots.txt using the deploy URL.
 * Set VITE_SITE_URL in Vercel env vars for custom domains.
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const siteUrl = (
  process.env.VITE_SITE_URL || 'https://nexx-kabianga.vercel.app'
).replace(/\/$/, '');

const today = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

const robots = `# Nexx Kabianga Web Prototype — Kabianga SEO Demo Environment
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');

console.log(`SEO files generated for: ${siteUrl}`);
