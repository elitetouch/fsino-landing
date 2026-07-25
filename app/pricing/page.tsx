import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Bird, Check, Cpu, Sparkles, ShoppingCart, ShieldCheck,
} from 'lucide-react';
import { fetchTokenPrices, fetchDeviceOffers, type TokenPrice } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'One token, one bird, one cycle. Transparent per-bird pricing, transparent hardware fees. No hidden monthly cost.',
};

/**
 * Pricing page — server component so the prices in the marketing
 * material always match what a farmer sees after signup. Fetches
 * live from the same /billing/prices + /billing/device-prices
 * endpoints the tenant portal uses.
 *
 * Falls back to a "contact us" state when the backend is
 * unreachable — never a hard-coded number that might be stale.
 */
export default async function PricingPage() {
  const [prices, offers] = await Promise.all([
    fetchTokenPrices(),
    fetchDeviceOffers(),
  ]);
  const tenantUrl =
    process.env.NEXT_PUBLIC_TENANT_APP_URL ?? 'https://web.fsinnovation.net';

  const basic = prices.filter((p) => p.tier === 'basic');
  const premium = prices.filter((p) => p.tier === 'premium');

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-[var(--color-brand-border)] bg-gradient-to-b from-[var(--color-brand-accent)]/40 to-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
            Pricing
          </p>
          <h1 className="mt-3 max-w-3xl text-[32px] font-bold leading-tight tracking-tight text-[var(--color-brand-fg)] sm:text-[44px]">
            One token, one bird, one cycle.
          </h1>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
            No monthly subscription. No per-record charge. You pay per
            bird when you place a flock, and the token covers the full
            production cycle. Bulk buys don&apos;t expire on the shelf.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <PlanCard
            tier="basic"
            title="Basic"
            eyebrow="For daily record-keeping"
            summary="Everything a farmer needs to run a cycle without paper — daily logging, breed-standard benchmarks, and a bank-ready PDF at harvest."
            features={BASIC_FEATURES}
            prices={basic}
            tenantUrl={tenantUrl}
          />
          <PlanCard
            tier="premium"
            title="Premium"
            eyebrow="Full pen intelligence"
            summary="Everything Basic includes, plus the PENKEEP device streaming pen climate 24/7 into breed-standard verdicts, alerts, and cost / harvest projections."
            features={PREMIUM_FEATURES}
            prices={premium}
            tenantUrl={tenantUrl}
            highlighted
          />
        </div>
      </section>

      {/* Hardware offers */}
      {offers.length > 0 && (
        <section className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
                Hardware
              </p>
              <h2 className="mt-2 text-[24px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[28px]">
                PENKEEP subscription + install
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                Only needed if you&apos;re on Premium. Priced per cycle
                (billed with your token top-up) plus a one-off
                installation fee that covers site visit + calibration.
                Prices here are for Nigeria — talk to us for other
                markets.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {offers.map((offer) => (
                <div
                  key={offer.deviceType}
                  className="grid gap-4 rounded-2xl border border-[var(--color-brand-border)] bg-white p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]">
                    <Cpu className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand-primary-deep)]">
                      Hardware · pricing for {offer.country}
                    </p>
                    <h3 className="mt-0.5 text-[16px] font-bold tracking-tight text-[var(--color-brand-fg)]">
                      {offer.label}
                    </h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]/50 px-3 py-2">
                        <p className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--color-brand-muted)]">
                          Subscription
                        </p>
                        <p className="mt-0.5 text-[15px] font-bold tabular-nums text-[var(--color-brand-fg)]">
                          {fmt(offer.subscription.price, offer.subscription.currency)}
                        </p>
                        <p className="text-[10.5px] text-[var(--color-brand-muted)]">
                          per {offer.subscription.cycleWeeks}-week cycle
                        </p>
                      </div>
                      <div className="rounded-lg border border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]/50 px-3 py-2">
                        <p className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--color-brand-muted)]">
                          Installation
                        </p>
                        {offer.installation ? (
                          <>
                            <p className="mt-0.5 text-[15px] font-bold tabular-nums text-[var(--color-brand-fg)]">
                              {fmt(offer.installation.fee, offer.installation.currency)}
                            </p>
                            <p className="text-[10.5px] text-[var(--color-brand-muted)]">
                              one-off ·{' '}
                              {offer.installation.scope === 'state' && offer.installation.stateName
                                ? `${offer.installation.stateName} rate`
                                : `${offer.country} default`}
                            </p>
                          </>
                        ) : (
                          <p className="mt-0.5 text-[12.5px] italic text-[var(--color-brand-muted)]">
                            Contact support for a quote
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-[var(--color-brand-border)] bg-white px-4 py-2.5 text-[13px] font-semibold text-[var(--color-brand-primary-deep)] hover:bg-[var(--color-brand-surface-soft)]"
                  >
                    Talk to support to order →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Backend unreachable fallback */}
      {prices.length === 0 && (
        <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-[14px] text-amber-900">
            We couldn&apos;t load live pricing right now. Please{' '}
            <Link href="/contact" className="font-bold underline">
              talk to us
            </Link>{' '}
            for a per-bird quote — we&apos;ll get back to you the same day.
          </div>
        </section>
      )}

      {/* Rules */}
      <section className="border-t border-[var(--color-brand-border)] bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-brand-primary)] text-white">
                <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
                  How this works
                </p>
                <h2 className="mt-1 text-[22px] font-bold tracking-tight text-[var(--color-brand-fg)]">
                  One token, one bird, one tracked cycle
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <RuleCard
                title="At placement"
                body="The moment you place a flock, one token per bird is debited. If your wallet runs short, the placement is blocked — top up and try again."
              />
              <RuleCard
                title="Type + tier must match"
                body="Broiler tokens can't cover a layer cycle. Basic tokens can't cover a Premium placement. Each debit pulls from its exact bucket."
              />
              <RuleCard
                title="No per-record charge"
                body="Once the placement debit lands, every daily record, weight sample, vaccination log and PDF export for that cycle is free."
              />
              <RuleCard
                title="Cycle ends automatically"
                body="7 weeks for broilers, 18 months for layers. The pen is freed for the next placement; the data stays on file."
              />
              <RuleCard
                title="Unused tokens don't expire"
                body="Buy in bulk if you're planning several cycles. They wait in your wallet until you place a flock — no shelf life."
              />
              <RuleCard
                title="One wallet per farm"
                body="Every staff member with billing permission tops up the same wallet. Balances and purchase history are visible on the Wallet page."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlanCard({
  tier,
  title,
  eyebrow,
  summary,
  features,
  prices,
  tenantUrl,
  highlighted,
}: {
  tier: 'basic' | 'premium';
  title: string;
  eyebrow: string;
  summary: string;
  features: readonly string[];
  prices: TokenPrice[];
  tenantUrl: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={
        'flex flex-col overflow-hidden rounded-2xl border bg-white ' +
        (highlighted
          ? 'border-[var(--color-brand-primary)] shadow-lg shadow-[var(--color-brand-primary)]/10'
          : 'border-[var(--color-brand-border)]')
      }
    >
      {highlighted && (
        <div className="bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-primary-deep)] px-5 py-2 text-center">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-white">
            Most complete
          </p>
        </div>
      )}
      <div className="p-6 sm:p-7">
        <div className="flex items-start gap-3">
          <span
            className={
              'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ' +
              (highlighted
                ? 'bg-[var(--color-brand-primary)] text-white'
                : 'bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]')
            }
          >
            <Sparkles className="h-4 w-4" strokeWidth={2.2} />
          </span>
          <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary-deep)]">
              {eyebrow}
            </p>
            <h3 className="mt-0.5 text-[20px] font-bold tracking-tight text-[var(--color-brand-fg)]">
              {title}
            </h3>
          </div>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-brand-fg-soft)]">
          {summary}
        </p>

        <div className="mt-5 space-y-2">
          {prices.length === 0 ? (
            <div className="rounded-lg border border-dashed border-[var(--color-brand-border)] p-3 text-[12.5px] text-[var(--color-brand-muted)]">
              Live pricing unavailable — talk to support for a quote.
            </div>
          ) : (
            prices.map((p) => <PriceRow key={`${p.tokenType}-${p.tier}`} price={p} />)
          )}
        </div>

        <ul className="mt-5 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[13px] leading-relaxed text-[var(--color-brand-fg-soft)]">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-brand-primary-deep)]" strokeWidth={2.5} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]/40 p-5">
        <a
          href={`${tenantUrl}/register`}
          className={
            'inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[14px] font-bold ' +
            (highlighted
              ? 'bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary-deep)]'
              : 'border border-[var(--color-brand-border)] bg-white text-[var(--color-brand-primary-deep)] hover:bg-[var(--color-brand-surface-soft)]')
          }
        >
          <ShoppingCart className="h-4 w-4" /> Start with {tier === 'premium' ? 'Premium' : 'Basic'}
        </a>
      </div>
    </div>
  );
}

function PriceRow({ price }: { price: TokenPrice }) {
  const label = price.tokenType === 'broiler' ? 'Broiler' : 'Layer';
  return (
    <div className="flex items-center justify-between rounded-lg border border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]/50 px-3.5 py-2.5">
      <div className="flex items-center gap-2">
        <Bird className="h-3.5 w-3.5 text-[var(--color-brand-muted)]" />
        <span className="text-[12.5px] font-semibold text-[var(--color-brand-fg)]">{label}</span>
      </div>
      <div className="text-right">
        <p className="text-[15px] font-bold tabular-nums text-[var(--color-brand-fg)]">
          {fmt(price.unitPriceMinor / 100, price.currency)}
        </p>
        <p className="text-[10.5px] text-[var(--color-brand-muted)]">per bird per cycle</p>
      </div>
    </div>
  );
}

function RuleCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-5">
      <p className="text-[13.5px] font-bold text-[var(--color-brand-fg)]">{title}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-brand-fg-soft)]">
        {body}
      </p>
    </div>
  );
}

function fmt(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${currency} ${Math.round(amount).toLocaleString()}`;
  }
}

const BASIC_FEATURES = [
  'Daily record wizard — feed, water, mortality, vaccines, weight, sales',
  'Breed-standard benchmarks (Ross 308, Cobb 500, Hy-Line, Lohmann, ISA)',
  'Cycle report as bank-ready PDF and CSV',
  'Vaccination schedule built from your breed\'s protocol',
  'Expenses ledger and per-cycle finance view',
  'Unlimited pens, unlimited past cycles, unlimited staff',
] as const;

const PREMIUM_FEATURES = [
  'Everything in Basic, plus:',
  'PENKEEP pen climate station streaming to your dashboard 24/7',
  'Age-based temperature comfort verdict per day',
  'Real-time alerts — feed drop, mortality spike, climate stress',
  'Cost projection and harvest-day forecast',
  'Peer benchmarking across your own past cycles',
] as const;
