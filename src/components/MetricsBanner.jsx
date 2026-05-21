const METRICS = [
  {
    id: 'https',
    title: 'Secure HTTPS',
    description: 'End-to-end encrypted connections for every campus resource.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    ),
  },
  {
    id: 'load',
    title: 'Sub-second Load Times',
    description: 'Optimized assets, lazy loading, and minimal JavaScript payload.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    id: 'mobile',
    title: 'Mobile-Optimized',
    description: 'Touch-friendly UI with 44px targets and responsive Tailwind grid.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    ),
  },
];

/**
 * Performance metrics banner — three key stats below the hero.
 */
export default function MetricsBanner() {
  return (
    <section
      id="metrics"
      className="border-y border-brand-100 bg-brand-100/50 py-12"
      aria-labelledby="metrics-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="metrics-heading"
          className="text-center text-2xl font-bold text-brand-900 sm:text-3xl"
        >
          Built for PageSpeed Insights 100/100
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Nexx Kabianga Web Prototype demonstrates production-grade web vitals
          and on-page SEO best practices.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map(({ id, title, description, icon }) => (
            <li
              key={id}
              className="flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800 text-white"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {icon}
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
