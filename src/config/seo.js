/**
 * Central SEO configuration for Nexx Kabianga Web Prototype.
 * Update SITE_URL when deploying to your production domain.
 */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL || 'https://nexx-kabianga.vercel.app';

export const SITE_NAME = 'Nexx Kabianga Web Prototype';

export const SEO = {
  title: `${SITE_NAME} | Kabianga SEO Demo Environment`,
  description:
    'Nexx Kabianga Web Prototype — a mobile-first university landing page built for 100/100 PageSpeed Insights, Core Web Vitals, and perfect on-page technical SEO. Project Seekon: Kabianga Web Vitals demo.',
  canonical: `${SITE_URL}/`,
  keywords: [
    'Nexx Kabianga Web Prototype',
    'Kabianga SEO Demo Environment',
    'Project Seekon Kabianga Web Vitals',
    'University of Kabianga',
    'Kabianga digital campus',
    'university landing page SEO',
    'PageSpeed Insights 100',
    'Core Web Vitals',
    'mobile-first university website',
    'technical SEO prototype',
    'student portal mockup',
    'HTTPS secure campus',
    'sub-second load times',
    'React Vite Tailwind SEO',
    'Seekon web development',
    'Kabianga admissions e-learning library',
  ].join(', '),
};
