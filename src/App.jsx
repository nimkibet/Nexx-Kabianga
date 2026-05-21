import { Helmet } from 'react-helmet-async';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import MetricsBanner from './components/MetricsBanner.jsx';
import StudentPortal from './components/StudentPortal.jsx';
import Footer from './components/Footer.jsx';
import { SEO, SITE_NAME, SITE_URL } from './config/seo.js';

/**
 * Single-page university landing layout.
 * Semantic structure: header > main (sections) > footer
 */
export default function App() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: [
      'Kabianga SEO Demo Environment',
      'Project Seekon Kabianga Web Vitals',
    ],
    description: SEO.description,
    url: SITE_URL,
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'Nexx Kabianga Web Prototype',
    },
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        <meta name="author" content="Nexx Kabianga" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SEO.canonical} />

        {/* Open Graph — social sharing & rich results */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:url" content={SEO.canonical} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={`${SITE_URL}/images/hero-campus.webp`} />
        <meta property="og:locale" content="en_KE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={`${SITE_URL}/images/hero-campus.webp`} />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <MetricsBanner />
        <StudentPortal />
      </main>

      <Footer />
    </>
  );
}
