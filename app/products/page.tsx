import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Bird, Leaf, Droplet, Snowflake, Fish, Check, ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'PENKEEP hardware and FS Manager software for five verticals — poultry, greenhouse, smart irrigation, cold chain and aquaculture.',
};

/**
 * Products overview page.
 *
 * Each vertical gets an anchor-linkable section (id) so links from
 * the home grid and footer (e.g. /products#greenhouse) scroll into
 * view. Content is honest about what's LIVE today and what's in
 * pilot — a farmer signing up for cold-chain shouldn't be surprised
 * if it's still smaller than the poultry offering.
 */
const VERTICALS = [
  {
    id: 'poultry',
    status: 'Live',
    icon: Bird,
    title: 'Poultry farms',
    subtitle: 'Broilers, layers, and dual-purpose flocks.',
    intro:
      'This is where we started. Everything below has been running on real farms for years — daily record wizard, vaccination scheduler, breed-standard benchmarks (Ross 308, Cobb 500, Hy-Line Brown, Lohmann, ISA), bank-ready cycle reports.',
    features: [
      'Daily record wizard — feed, water, mortality, vaccines, weight, sales',
      'Breed-standard benchmarks graded to the exact age of your birds',
      'Vaccination scheduler with automatic protocol matching',
      'Cycle report exported as bank-ready PDF and CSV',
      'PENKEEP climate station for pen temperature, humidity, ammonia, CO₂',
      'Real-time alerts — feed drop, mortality spike, climate stress',
    ],
  },
  {
    id: 'greenhouse',
    status: 'Live',
    icon: Leaf,
    title: 'Greenhouses',
    subtitle: 'Tomatoes, peppers, leafy greens.',
    intro:
      'The same PENKEEP hardware, tuned for horticulture. Farmers in Ogun and Plateau use it to catch afternoon heat spikes before they wilt the crop.',
    features: [
      'Air temperature and humidity monitoring per zone',
      'Automated ventilation triggers via PENKEEP relays',
      'Alerts when humidity or temperature drifts from the crop-specific comfort band',
      'Records feed into the same FS Manager dashboard as poultry',
    ],
  },
  {
    id: 'irrigation',
    status: 'Live',
    icon: Droplet,
    title: 'Smart irrigation',
    subtitle: 'Water when the crop needs it.',
    intro:
      'Soil-moisture sensors + scheduled valves. Cuts water bills without cutting yield. Field-tested on maize, cassava, and vegetables.',
    features: [
      'Soil-moisture probes at multiple depths',
      'Scheduled + moisture-triggered valve control',
      'Weekly usage reports so the farmer sees the exact litres per hectare',
      'Works over local wifi so a spotty rural connection doesn\'t stop irrigation',
    ],
  },
  {
    id: 'cold-chain',
    status: 'Pilot',
    icon: Snowflake,
    title: 'Cold chain facilities',
    subtitle: 'Storage rooms, reefer trucks, cold rooms.',
    intro:
      'Temperature monitoring plus breach reporting for insurance and compliance. In pilot with two cold-storage operators in Lagos.',
    features: [
      'Continuous temperature logging every 30 seconds',
      'Breach alerts the moment the room warms past your set threshold',
      'Insurance-grade breach reports (exportable PDF)',
      'Multi-room support from a single dashboard',
    ],
  },
  {
    id: 'aquaculture',
    status: 'Pilot',
    icon: Fish,
    title: 'Aquaculture',
    subtitle: 'Catfish ponds and RAS systems.',
    intro:
      'Water quality, dissolved oxygen and feed-cycle records for freshwater aquaculture. Pilot programme with fish farms in Delta State.',
    features: [
      'Water temperature and dissolved oxygen monitoring',
      'pH tracking with breach alerts',
      'Feed-cycle records tied to the same FS Manager dashboard',
      'Bank-ready cycle report at harvest',
    ],
  },
];

export default function ProductsPage() {
  const tenantUrl =
    process.env.NEXT_PUBLIC_TENANT_APP_URL ?? 'https://web.fsinnovation.net';

  return (
    <div>
      <section className="border-b border-[var(--color-brand-border)] bg-gradient-to-b from-[var(--color-brand-accent)]/40 to-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
            Products
          </p>
          <h1 className="mt-3 max-w-3xl text-[32px] font-bold leading-tight tracking-tight text-[var(--color-brand-fg)] sm:text-[44px]">
            Hardware + software for five kinds of African farm.
          </h1>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
            One PENKEEP sensor family. One FS Manager account. Different
            configurations, honest about what&apos;s shipped today.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] space-y-16 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {VERTICALS.map(({ id, status, icon: Icon, title, subtitle, intro, features }, idx) => (
          <article
            key={id}
            id={id}
            className="scroll-mt-24 rounded-3xl border border-[var(--color-brand-border)] bg-white p-6 sm:p-10"
          >
            <div className="grid gap-8 md:grid-cols-[auto_1fr]">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand-primary)] text-white">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-[24px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[28px]">
                    {title}
                  </h2>
                  <span
                    className={
                      'rounded-full px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider ' +
                      (status === 'Live'
                        ? 'bg-emerald-100 text-emerald-900'
                        : 'bg-amber-100 text-amber-900')
                    }
                  >
                    {status}
                  </span>
                </div>
                <p className="mt-1 text-[13px] font-semibold text-[var(--color-brand-primary-deep)]">
                  {subtitle}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                  {intro}
                </p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--color-brand-primary-deep)]" strokeWidth={3} />
                      <span className="text-[13.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`${tenantUrl}/register`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-brand-primary)] px-4 py-2.5 text-[13.5px] font-bold text-white hover:bg-[var(--color-brand-primary-deep)]"
                  >
                    Get started {status === 'Pilot' ? '(join pilot)' : ''} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-brand-border)] bg-white px-4 py-2.5 text-[13.5px] font-bold text-[var(--color-brand-primary-deep)] hover:bg-[var(--color-brand-surface-soft)]"
                  >
                    See pricing
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
