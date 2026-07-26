import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Check, ShieldCheck, Sparkles, ChevronRight,
} from 'lucide-react';

/**
 * Shared layout for /products/[vertical] deep-dive pages.
 *
 * Same shape across all five verticals so a farmer clicking between
 * Poultry, Greenhouse, Irrigation, Cold Chain and Aquaculture always
 * knows where to find price / features / how-it-works / next step.
 *
 * Content is passed in as props — each product page is a short data
 * file that renders through this component. Zero styling drift, zero
 * copy-paste rot.
 */

export interface ProductFeature {
  title: string;
  body: string;
}

export interface ProductStep {
  step: string;
  title: string;
  body: string;
}

export interface ProductFaq {
  q: string;
  a: string;
}

export interface ProductDetailProps {
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  hardware: {
    device: string;
    body: string;
    icon: React.ElementType;
  };
  software: {
    body: string;
    icon: React.ElementType;
  };
  features: ProductFeature[];
  howItWorks: ProductStep[];
  faq: ProductFaq[];
  metrics: Array<{ label: string; value: string; hint: string }>;
}

export function ProductDetailLayout(props: ProductDetailProps) {
  const {
    eyebrow, title, tagline, intro, heroImage, heroImageAlt,
    hardware, software, features, howItWorks, faq, metrics,
  } = props;

  const tenantUrl =
    process.env.NEXT_PUBLIC_TENANT_APP_URL ?? 'https://web.fsinnovation.net';

  return (
    <div>
      {/* Breadcrumb */}
      <section className="border-b border-[var(--color-brand-border)]/60 bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center gap-2 px-4 py-3 text-[12px] text-[var(--color-brand-muted)] sm:px-6 lg:px-8">
          <Link href="/products" className="hover:text-[var(--color-brand-primary-deep)]">
            Products
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <span className="text-[var(--color-brand-fg)]">{title}</span>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-center lg:gap-12 lg:px-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
              {eyebrow}
            </p>
            <h1 className="mt-3 max-w-3xl text-[34px] font-bold leading-[1.1] tracking-tight text-[var(--color-brand-fg)] sm:text-[44px]">
              {title}
            </h1>
            <p className="mt-3 text-[15px] font-semibold text-[var(--color-brand-primary-deep)]">
              {tagline}
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--color-brand-fg-soft)] sm:text-[16px]">
              {intro}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`${tenantUrl}/register`}
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-brand-primary)] px-5 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[var(--color-brand-primary-deep)]"
              >
                Get started <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-brand-border)] bg-white px-5 py-3 text-[14px] font-bold text-[var(--color-brand-primary-deep)] hover:bg-[var(--color-brand-surface-soft)]"
              >
                See pricing
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              width={480}
              height={520}
              priority
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-gradient-to-b from-[var(--color-brand-accent)]/40 to-white"
        />
      </section>

      {/* Hardware + software */}
      <section className="border-t border-[var(--color-brand-border)] bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-6 sm:p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]">
                <hardware.icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <p className="mt-4 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary-deep)]">
                Hardware
              </p>
              <h3 className="mt-1 text-[18px] font-bold tracking-tight text-[var(--color-brand-fg)]">
                {hardware.device}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                {hardware.body}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-6 sm:p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]">
                <software.icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <p className="mt-4 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary-deep)]">
                Software
              </p>
              <h3 className="mt-1 text-[18px] font-bold tracking-tight text-[var(--color-brand-fg)]">
                FS Manager
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                {software.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you can do */}
      <section className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
              What you can do
            </p>
            <h2 className="mt-2 text-[26px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[30px]">
              Every feature we ship for {title.toLowerCase()}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-5"
              >
                <div className="flex items-start gap-2.5">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-brand-primary-deep)]" strokeWidth={2.5} />
                  <div>
                    <p className="text-[14px] font-bold text-[var(--color-brand-fg)]">{f.title}</p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                      {f.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-[var(--color-brand-border)] bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
              How it works
            </p>
            <h2 className="mt-2 text-[26px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[30px]">
              From signup to first insight
            </h2>
          </div>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {howItWorks.map((s) => (
              <li key={s.step} className="rounded-2xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]/40 p-5">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary-deep)]">
                  Step {s.step}
                </p>
                <p className="mt-1 text-[15px] font-bold text-[var(--color-brand-fg)]">{s.title}</p>
                <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Metrics we track */}
      {metrics.length > 0 && (
        <section className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]">
          <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
                Metrics we track
              </p>
              <h2 className="mt-2 text-[24px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[28px]">
                The numbers that matter for this vertical
              </h2>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-5">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand-primary-deep)]">
                    {m.label}
                  </p>
                  <p className="mt-1 text-[20px] font-bold tracking-tight text-[var(--color-brand-fg)]">
                    {m.value}
                  </p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-[var(--color-brand-muted)]">
                    {m.hint}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="border-t border-[var(--color-brand-border)] bg-white">
          <div className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
                Common questions
              </p>
              <h2 className="mt-2 text-[26px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[30px]">
                Before you buy
              </h2>
            </div>
            <dl className="mt-8 divide-y divide-[var(--color-brand-border)] rounded-2xl border border-[var(--color-brand-border)] bg-white">
              {faq.map((f) => (
                <details key={f.q} className="group p-5 sm:p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <dt className="text-[14px] font-bold text-[var(--color-brand-fg)]">{f.q}</dt>
                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[var(--color-brand-primary-deep)] transition-transform group-open:rotate-90" />
                  </summary>
                  <dd className="mt-3 text-[13.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                    {f.a}
                  </dd>
                </details>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Trust strip */}
      <section className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]">
        <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-[12.5px] text-[var(--color-brand-fg-soft)]">
            <ShieldCheck className="h-4 w-4 text-[var(--color-brand-primary-deep)]" />
            <span>
              Every PENKEEP is hand-assembled in our Ogun workshop and field-tested before it ships.{' '}
              <Link href="/how-we-build" className="font-semibold text-[var(--color-brand-primary-deep)] hover:underline">
                See how we build →
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-brand-border)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-primary-deep)] p-8 text-white sm:p-12">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                  <Sparkles className="h-3 w-3" /> Ready when you are
                </div>
                <h2 className="mt-3 text-[26px] font-bold leading-tight tracking-tight sm:text-[32px]">
                  Start on {title} today
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/90">
                  Pay only for what you use — no subscription, no lock-in.
                  Add PENKEEP hardware when you&apos;re ready for
                  real-time monitoring.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
                <a
                  href={`${tenantUrl}/register`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[14px] font-bold text-[var(--color-brand-primary-deep)] hover:bg-white/90"
                >
                  Get started <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-transparent px-6 py-3.5 text-[14px] font-bold text-white hover:bg-white/10"
                >
                  Talk to sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
