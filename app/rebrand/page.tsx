import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Bird, Cpu, Droplets, Fish, Leaf, ShieldCheck, Snowflake, Users,
  Wallet, KeyRound, MoveRight,
} from 'lucide-react';

/**
 * /rebrand — mirrors the content of the legacy farmspeak.net/rebrand
 * page 1:1 so the "Read the story →" CTA in every marketing email now
 * resolves on fsinnovation.net. Uses this site's shared nav + footer
 * (SiteNavbar / SiteFooter wrap this via app/layout.tsx).
 *
 * Source of truth for copy is the rendered SSR of
 * https://farmspeak.net/rebrand — do not paraphrase without checking there.
 */
export const metadata: Metadata = {
  title: 'Farmspeak is now Farm Support Innovation',
  description:
    "We've grown from a poultry-only tool into an operating system for African farmers — poultry, greenhouse, smart irrigation, cold chain and aquaculture. Same team, new home.",
  alternates: { canonical: 'https://www.fsinnovation.net/rebrand' },
  openGraph: {
    title: 'Farmspeak is now Farm Support Innovation',
    description: 'Same team, new home, more products. Visit fsinnovation.net.',
  },
};

export default function RebrandPage() {
  return (
    <div>
      {/* ─────────────────── HERO ─────────────────── */}
      <section className="border-b border-[var(--color-brand-border)] bg-gradient-to-b from-[var(--color-brand-accent)]/50 to-white">
        <div className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-primary-deep)]">
            A new chapter
          </p>
          <h1 className="mt-3 max-w-3xl text-[34px] font-bold leading-[1.08] tracking-tight text-[var(--color-brand-fg)] sm:text-[52px]">
            Farmspeak Technology is now{' '}
            <span className="text-[var(--color-brand-primary-deep)]">Farm Support Innovation</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-[var(--color-brand-fg-soft)] sm:text-[17px]">
            We grew from a poultry-only tool into an operating system for
            African farmers. Poultry, greenhouse, smart irrigation, cold chain,
            aquaculture. The same team you know, running a broader mission
            with a name that fits.
          </p>

          {/* Logo bridge card */}
          <div className="mt-10 rounded-[20px] border border-[#d9e8d5] bg-gradient-to-br from-[#ecf6ea] to-white p-7 shadow-sm sm:p-10">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-12">
              <Image
                src="/farmspeak-logo-tagline.png"
                alt="Farmspeak Technology"
                width={220}
                height={164}
                className="h-auto w-[180px] opacity-70 sm:w-[220px]"
                priority
              />
              <MoveRight
                aria-hidden
                className="h-9 w-9 shrink-0 text-[var(--color-brand-primary)] sm:h-11 sm:w-11"
                strokeWidth={2.3}
              />
              <Image
                src="/fsi-logo.svg"
                alt="Farm Support Innovation"
                width={200}
                height={193}
                className="h-auto w-[160px] sm:w-[200px]"
                priority
              />
            </div>
            <p className="mt-8 text-center text-[12px] font-bold uppercase tracking-[0.28em] text-[var(--color-brand-primary-deep)]">
              We grew up
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="https://www.fsinnovation.net"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-[14px] font-bold text-white shadow-sm transition hover:bg-[var(--color-brand-primary-deep)]"
            >
              Visit our new home
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://web.fsinnovation.net/login"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-border)] bg-white px-6 py-3 text-[14px] font-bold text-[var(--color-brand-fg)] transition hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-deep)]"
            >
              Existing user? Log in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────── WHAT STAYS THE SAME ─────────────────── */}
      <section className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-primary-deep)]">
          You already know us
        </p>
        <h2 className="mt-2 max-w-2xl text-[26px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[32px]">
          What stays the same
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <StaysCard
            icon={ShieldCheck}
            title="Your data"
            body="Every flock, record, PDF and PENKEEP reading you've logged with us moves across untouched."
          />
          <StaysCard
            icon={KeyRound}
            title="Your login"
            body="Same email, same password. Log in at web.fsinnovation.net exactly the way you always did."
          />
          <StaysCard
            icon={Users}
            title="Your team"
            body="Founders, engineers, support and the people who visit your farm, none of that changed. Just the name on the wall."
          />
          <StaysCard
            icon={Wallet}
            title="Your tokens and subscriptions"
            body="Wallet balance, active cycles, PENKEEP subscriptions — all preserved."
          />
        </div>
      </section>

      {/* ─────────────────── WHAT'S NEW ─────────────────── */}
      <section className="border-y border-[var(--color-brand-border)] bg-[var(--color-brand-accent)]/25">
        <div className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-primary-deep)]">
            What&apos;s new
          </p>
          <h2 className="mt-2 max-w-2xl text-[26px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[32px]">
            Five verticals under one roof
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-brand-fg-soft)]">
            The PENKEEP device and FS Manager software you know now serve a
            wider range of African farms:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <VerticalCard
              icon={Bird}
              title="Poultry farms"
              body="PENKEEP climate stations + FS Manager records. Where we started, still where most of our farmers are."
            />
            <VerticalCard
              icon={Leaf}
              title="Greenhouses"
              body="The same PENKEEP hardware, tuned for horticulture. Monitoring and control of humidity, temperature and ventilation for tomatoes, peppers and leafy greens."
            />
            <VerticalCard
              icon={Droplets}
              title="Smart irrigation"
              body="Soil-moisture sensors + scheduled valves. Water the crop when it needs it, not when a clock says to."
            />
            <VerticalCard
              icon={Snowflake}
              title="Cold chain facilities"
              body="Temperature monitoring for storage rooms and reefer trucks. Fewer spoiled shipments; every breach recorded."
            />
            <VerticalCard
              icon={Fish}
              title="Aquaculture"
              body="Water quality, dissolved oxygen and feed cycle records for fish ponds and RAS systems."
            />
          </div>
        </div>
      </section>

      {/* ─────────────────── BOOKMARK CTA ─────────────────── */}
      <section className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-[20px] border border-[#d9e8d5] bg-gradient-to-br from-[#ecf6ea] to-white p-8 sm:p-12">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-primary-deep)]">
            Bookmark our new home
          </p>
          <h2 className="mt-2 text-[28px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[36px]">
            fsinnovation.net
          </h2>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
            Everything you loved about farmspeak.net, plus what we&apos;ve
            built since; pricing, product deep dives for all five verticals,
            and the same support team ready to answer questions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="https://www.fsinnovation.net"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-primary)] px-6 py-3 text-[14px] font-bold text-white shadow-sm transition hover:bg-[var(--color-brand-primary-deep)]"
            >
              Take me there
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-border)] bg-white px-6 py-3 text-[14px] font-bold text-[var(--color-brand-fg)] transition hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-deep)]"
            >
              Talk to support
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────── card helpers ─────────────────── */

function StaysCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]">
          <Icon className="h-4 w-4" strokeWidth={2.3} />
        </span>
        <div>
          <h3 className="text-[15px] font-bold tracking-tight text-[var(--color-brand-fg)]">
            {title}
          </h3>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

function VerticalCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-5 sm:p-6">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]">
        <Icon className="h-5 w-5" strokeWidth={2.3} />
      </span>
      <h3 className="mt-4 text-[16px] font-bold tracking-tight text-[var(--color-brand-fg)]">
        {title}
      </h3>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
        {body}
      </p>
    </div>
  );
}
