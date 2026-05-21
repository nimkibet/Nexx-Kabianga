const PORTAL_LINKS = [
  {
    id: 'admissions',
    title: 'Admissions',
    description: 'Apply online, track application status, and view intake calendars.',
    href: '#admissions',
    image: '/images/admissions.webp',
    alt: 'Students walking on a university campus during admissions season',
    width: 600,
    height: 400,
  },
  {
    id: 'elearning',
    title: 'E-Learning',
    description: 'Access courses, assignments, and virtual classrooms from any device.',
    href: '#elearning',
    image: '/images/elearning.webp',
    alt: 'Laptop displaying an online learning dashboard for university e-learning',
    width: 600,
    height: 400,
  },
  {
    id: 'library',
    title: 'Library',
    description: 'Search digital catalogs, reserve books, and explore research databases.',
    href: '#library',
    image: '/images/library.webp',
    alt: 'University library interior with bookshelves and study areas',
    width: 600,
    height: 400,
  },
];

/**
 * Student portal mockup — responsive grid (1 col mobile, 3 cols desktop).
 */
export default function StudentPortal() {
  return (
    <section
      id="portal"
      className="py-16 sm:py-20"
      aria-labelledby="portal-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="text-center">
          <h2
            id="portal-heading"
            className="text-2xl font-bold text-brand-900 sm:text-3xl"
          >
            Student Portal Quick Links
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Mockup navigation for Kabianga digital campus services — optimized
            for mobile-first discovery and SEO-rich internal linking.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PORTAL_LINKS.map(
            ({ id, title, description, href, image, alt, width, height }) => (
              <li key={id} id={id}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <img
                    src={image}
                    alt={alt}
                    width={width}
                    height={height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-brand-900">
                      {title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>
                    <a
                      href={href}
                      className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-800 px-4 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                    >
                      Open {title}
                    </a>
                  </div>
                </article>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
