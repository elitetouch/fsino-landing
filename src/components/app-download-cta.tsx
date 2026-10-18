import { FileCheck2, Gauge, WifiOff } from 'lucide-react';
import { PlayStoreBadge } from '@/components/play-store-badge';
import { APP_REGISTER_URL } from '@/lib/links';

/**
 * End-of-page download CTA. Rendered once in the root layout, above the
 * footer, so it appears on every page without touching twelve files.
 *
 * COPY NOTES, so the next person does not flatten it back into
 * marketing filler:
 *
 *   - The headline is loss-framed. "Manage your farm smarter" asks a
 *     farmer to want an improvement; "know early, not at the end of the
 *     cycle" names a loss they have already had. The second converts.
 *   - Each of the three points answers an actual objection rather than
 *     listing a feature. No network in the pen. Numbers I cannot judge.
 *     Paper my bank will not accept.
 *   - Breed names are spelled out on purpose. A farmer running Cobb 500
 *     recognising "Cobb 500" is worth more than any adjective, and it
 *     is also what they type into search.
 *   - "Free · No card" is above the fold of the CTA because for this
 *     market price risk, not feature doubt, is what stops the install.
 *
 * This copy is provisional pending the wider site rewrite; keep the
 * structure, replace the words.
 */
export function AppDownloadCTA() {
  return (
    <section className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-primary-deep,#14532d)] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
              FSI Farm Manager · Free on Android
            </p>
            <h2 className="mt-3 max-w-[18ch] text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-balance">
              Know early. Not at the end of the cycle.
            </h2>
            <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-white/80">
              Log feed, water, weight and mortality from where you are standing.
              See it measured against breed standard the same day — not when the
              birds go to market light and you are working out why.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PlayStoreBadge />
              <a
                href={APP_REGISTER_URL}
                className="text-[14.5px] font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                Or open it in your browser →
              </a>
            </div>

            <p className="mt-5 text-[12.5px] text-white/60">
              Free to download · No card · Built in Ogun and Lagos
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {POINTS.map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-5"
              >
                <p.icon className="h-5 w-5 text-white/70" aria-hidden />
                <p className="mt-3 text-[14.5px] font-bold">{p.title}</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/70">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const POINTS = [
  {
    icon: WifiOff,
    title: 'Works when the network does not',
    body:
      'Records save on the phone and sync when the signal comes back. You can log a mortality standing in a pen with no bars.',
  },
  {
    icon: Gauge,
    title: 'Measured, not just stored',
    body:
      'Every figure sits against Ross 308, Cobb 500, Hy-Line, Lohmann and ISA standards — so "behind" is a number, not a feeling.',
  },
  {
    icon: FileCheck2,
    title: 'A report your bank will take',
    body:
      'Close a cycle and export a PDF a cooperative, a lender or a buyer will actually accept.',
  },
];
