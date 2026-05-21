const FOOTER_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#metrics', label: 'Performance' },
  { href: '#portal', label: 'Student Portal' },
  { href: '/sitemap.xml', label: 'Sitemap' },
];

/**
 * Site footer with standard links and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="border-t border-brand-100 bg-brand-900 text-brand-100"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">
              Nexx Kabianga Web Prototype
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-100">
              Kabianga SEO Demo Environment — not affiliated with the official
              University of Kabianga website. Built for technical SEO and Web
              Vitals presentations.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h2>
            <ul className="mt-4 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-2">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm text-brand-100 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-brand-100/80">
          &copy; {year} Nexx Kabianga Web Prototype · Project Seekon: Kabianga
          Web Vitals · All rights reserved.
        </p>
      </div>
    </footer>
  );
}
