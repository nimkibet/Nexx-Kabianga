/**
 * Hero section — single page <h1> and LCP-optimized hero image (loading="eager").
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-brand-900"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
        <div className="relative z-10 text-white">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent-500">
            Kabianga SEO Demo Environment
          </p>
          <h1
            id="hero-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            The Future of Digital Campus Experiences
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
            Project Seekon: Kabianga Web Vitals — a performance-first prototype
            engineered for perfect Core Web Vitals, semantic HTML5, and technical
            SEO excellence.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#portal"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-accent-500 px-6 py-4 text-center text-base font-semibold text-brand-900 transition-colors hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Student Portal
            </a>
            <a
              href="#metrics"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white/40 px-6 py-4 text-center text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Performance Metrics
            </a>
          </div>
        </div>

        <figure className="relative z-10">
          <img
            src="/images/hero-campus.webp"
            alt="Modern university campus buildings at golden hour, representing digital campus innovation at Kabianga"
            width={1200}
            height={675}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/20"
          />
          <figcaption className="sr-only">
            Hero image for Nexx Kabianga Web Prototype university landing page
          </figcaption>
        </figure>
      </div>

      {/* Decorative gradient overlay — no extra network requests */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-900/80 via-transparent to-brand-800/40"
        aria-hidden="true"
      />
    </section>
  );
}
