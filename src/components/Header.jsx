import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#metrics', label: 'Performance' },
  { href: '#portal', label: 'Student Portal' },
  { href: '#footer', label: 'Contact' },
];

/**
 * Sticky responsive header with mobile hamburger navigation.
 * Touch targets meet 44px minimum height for accessibility.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#hero"
          className="flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-lg px-2 py-2 text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
          aria-label="Nexx Kabianga Web Prototype — home"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-800 text-sm font-bold text-white"
            aria-hidden="true"
          >
            NK
          </span>
          <span className="hidden text-sm font-semibold sm:inline">
            Nexx Kabianga
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-100 hover:text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-4 text-brand-900 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close' : 'Open'} navigation</span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation panel */}
      <nav
        id="mobile-nav"
        className={`border-t border-brand-100 bg-white md:hidden ${menuOpen ? 'block' : 'hidden'}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-4 py-2">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block min-h-[44px] rounded-lg px-4 py-4 text-base font-medium text-slate-700 hover:bg-brand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
