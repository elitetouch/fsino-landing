import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, ShieldCheck, Mail, MoveRight, Sparkles, Sprout,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'We are now Farm Support Innovation',
  description:
    'Farmspeak Technology is now Farm Support Innovation. Same team, same product, a name that matches the work. Read the story.',
  openGraph: {
    title: 'We are now Farm Support Innovation (formerly Farmspeak)',
    description:
      'Same team, same product, a name that matches the work. Read the story.',
  },
};

/**
 * /rebrand — the founder story of why we changed the name.
 *
 * Structure:
 *   1. Hero + logo bridge (Farmspeak → FSI, "we grew up")
 *   2. The story (2–3 short paragraphs, first-person)
 *   3. What changes / what stays (side-by-side cards)
 *   4. "You don't need to do anything" callout
 *   5. FAQ (the four questions we actually get)
 *   6. Contact strip
 */
export default function RebrandPage() {
  return (
    <div>
      {/* ─────────────────── HERO ─────────────────── */}
      <section className="border-b border-[var(--color-brand-border)] bg-gradient-to-b from-[var(--color-brand-accent)]/40 to-white">
        <div className="mx-auto max-w-[1000px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
            A note from the founders
          </p>
          <h1 className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-[var(--color-brand-fg)] sm:text-[52px]">
            Same team. <span className="text-[var(--color-brand-primary-deep)]">New name.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
            <strong>Farmspeak Technology</strong> is now{' '}
            <strong>Farm Support Innovation</strong>. Same team, same product,
            a name that finally matches the work.
          </p>

          {/* Logo bridge */}
          <div className="mt-10 rounded-2xl border border-[var(--color-brand-border)] bg-white p-6 shadow-sm sm:p-10">
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
              <div className="flex flex-col items-center">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-muted)]">
                  Before
                </p>
                <div className="opacity-60">
                  <Image
                    src="/farmspeak-logo.svg"
                    alt="Farmspeak Technology"
                    width={140}
                    height={90}
                    className="h-auto w-[140px]"
                    priority
                  />
                </div>
              </div>

              <MoveRight
                aria-hidden
                className="h-8 w-8 shrink-0 text-[var(--color-brand-primary)] sm:h-10 sm:w-10"
                strokeWidth={2.2}
              />

              <div className="flex flex-col items-center">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary-deep)]">
                  Now
                </p>
                <Image
                  src="/fsi-logo.svg"
                  alt="Farm Support Innovation"
                  width={140}
                  height={135}
                  className="h-auto w-[140px]"
                  priority
                />
              </div>
            </div>
            <p className="mt-8 text-center text-[13px] font-bold uppercase tracking-[0.24em] text-[var(--color-brand-primary-deep)]">
              We grew up.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────── STORY ─────────────────── */}
      <section className="mx-auto max-w-[760px] space-y-6 px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-[24px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[28px]">
          Why we changed the name.
        </h2>

        <p className="text-[16px] leading-relaxed text-[var(--color-brand-fg)]">
          When we started as <strong>Farmspeak Technology</strong>, we were
          three people building a temperature sensor for a single poultry
          pen. The name said &ldquo;farm&rdquo; and &ldquo;speak&rdquo;
          because our device literally spoke pen conditions back to the
          farmer&apos;s phone.
        </p>

        <p className="text-[16px] leading-relaxed text-[var(--color-brand-fg)]">
          Six years later, the work has widened. Farmers use us for feed
          conversion, mortality tracking, vaccination reminders, cost
          projection, PDF reports for banks, and pen climate — across
          poultry, greenhouses, irrigation, cold chain and aquaculture. The
          hardware speaks; the software listens; the farmer decides. We
          support the whole farm, end to end.
        </p>

        <p className="text-[16px] leading-relaxed text-[var(--color-brand-fg)]">
          The old name outgrew the work. So we&apos;re now{' '}
          <strong>Farm Support Innovation (FSI)</strong> — a name that
          finally matches what we actually do.
        </p>

        <p className="text-[16px] leading-relaxed text-[var(--color-brand-fg)]">
          Nothing else changes. Same team, same product, same data, same
          people you already talk to. You&apos;ll notice the new logo on
          your dashboard, the new email address on our replies, and the new
          domain on our website. That&apos;s it.
        </p>
      </section>

      {/* ─────────────────── CHANGES / STAYS ─────────────────── */}
      <section className="border-y border-[var(--color-brand-border)] bg-[var(--color-brand-accent)]/30">
        <div className="mx-auto grid max-w-[1000px] gap-4 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-6 sm:p-7">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
              What changes
            </p>
            <ul className="mt-4 space-y-3">
              <ChangeRow label="New name" body="Farmspeak Technology → Farm Support Innovation (FSI)" />
              <ChangeRow label="New logo" body="Fresh mark, same green heritage" />
              <ChangeRow label="New website" body="fsinnovation.net (farmspeak.net redirects here)" />
              <ChangeRow label="New emails" body="Replies come from @fsinnovation.net" />
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--color-brand-primary)]/30 bg-[var(--color-brand-accent)] p-6 sm:p-7">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
              What stays the same
            </p>
            <ul className="mt-4 space-y-3">
              <StayRow label="Your account" body="Login, permissions, everything you already set up" />
              <StayRow label="Your data" body="Every record, cycle, report — untouched" />
              <StayRow label="Your PENKEEP device" body="Works exactly as before, no reflash needed" />
              <StayRow label="The people" body="Same founders, same support team, same phone numbers" />
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────────────── NO ACTION NEEDED ─────────────────── */}
      <section className="mx-auto max-w-[760px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]">
              <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div>
              <h3 className="text-[18px] font-bold tracking-tight text-[var(--color-brand-fg)]">
                You don&apos;t need to do anything.
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                Your login still works. Your farms, flocks, records, reports
                and devices work exactly as before. Old links to{' '}
                <em>farmspeak.net</em> redirect to the new site. If someone
                on your team asks whether Farmspeak is gone — the answer is
                no. We just grew up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── FAQ ─────────────────── */}
      <section className="border-t border-[var(--color-brand-border)] bg-white">
        <div className="mx-auto max-w-[820px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
            Frequently asked
          </p>
          <h2 className="mt-2 text-[24px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[28px]">
            The four questions we get.
          </h2>

          <div className="mt-8 space-y-4">
            <Faq
              q="Do I need to re-register or migrate anything?"
              a="No. Your account, farms, records, cycles, PENKEEP devices and reports work exactly as before. Nothing to migrate, nothing to re-verify."
            />
            <Faq
              q="Are the farmspeak.net links still valid?"
              a="Yes — farmspeak.net now redirects to fsinnovation.net. Every deep link (login page, help articles, blog posts) resolves to the new equivalent. If you have documentation or QR codes with the old URL, they still work."
            />
            <Faq
              q="Is my PENKEEP still supported?"
              a="Yes, fully. The device firmware is untouched by this rebrand. Future OTA firmware updates ship exactly as before. Your device will keep its name as PENKEEP — that hasn't changed."
            />
            <Faq
              q="Who owns the company now?"
              a="The same founders and team. Farm Support Innovation is the same legal entity, same team, same investors — just operating under a new brand. Nothing about ownership, direction or people has changed."
            />
          </div>
        </div>
      </section>

      {/* ─────────────────── CONTACT ─────────────────── */}
      <section className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-accent)]/30">
        <div className="mx-auto max-w-[820px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-6 sm:p-8">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]">
                  <Mail className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="text-[16px] font-bold tracking-tight text-[var(--color-brand-fg)]">
                    Still have questions?
                  </h3>
                  <p className="mt-1 text-[13.5px] text-[var(--color-brand-fg-soft)]">
                    Same inboxes, same people. Just hit reply to any of our
                    emails, or write to us directly.
                  </p>
                </div>
              </div>
              <Link
                href="mailto:hello@fsinnovation.net"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-primary)] px-5 py-2.5 text-[13.5px] font-bold text-white shadow-sm transition hover:bg-[var(--color-brand-primary-deep)]"
              >
                hello@fsinnovation.net
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-center text-[12px] text-[var(--color-brand-muted)]">
            <Sprout className="h-3.5 w-3.5 text-[var(--color-brand-primary-deep)]" />
            Thanks for growing with us.
            <span className="opacity-70">— The FSI team (formerly Farmspeak)</span>
          </p>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────── row helpers ─────────────────── */

function ChangeRow({ label, body }: { label: string; body: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-primary-deep)]" strokeWidth={2.4} />
      <div className="text-[13.5px] leading-relaxed">
        <span className="font-bold text-[var(--color-brand-fg)]">{label}</span>{' '}
        <span className="text-[var(--color-brand-fg-soft)]">— {body}</span>
      </div>
    </li>
  );
}

function StayRow({ label, body }: { label: string; body: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <ShieldCheck
        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-primary-deep)]"
        strokeWidth={2.4}
      />
      <div className="text-[13.5px] leading-relaxed">
        <span className="font-bold text-[var(--color-brand-fg)]">{label}</span>{' '}
        <span className="text-[var(--color-brand-fg-soft)]">— {body}</span>
      </div>
    </li>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border border-[var(--color-brand-border)] bg-white p-5 open:shadow-sm">
      <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-bold text-[var(--color-brand-fg)] [&::-webkit-details-marker]:hidden">
        {q}
        <ArrowRight
          className="h-4 w-4 shrink-0 text-[var(--color-brand-primary-deep)] transition-transform group-open:rotate-90"
          strokeWidth={2.4}
        />
      </summary>
      <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-brand-fg-soft)]">
        {a}
      </p>
    </details>
  );
}
