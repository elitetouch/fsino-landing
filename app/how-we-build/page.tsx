import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Check, Cpu, HandshakeIcon, MapPin, ShieldCheck,
  Sparkles, Users2, Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How we build',
  description:
    'A workshop tour, sourcing standards, quality checks, and the farmers we build for. Every PENKEEP is hand-assembled in our Ogun workshop and field-tested before it ships.',
};

/**
 * /how-we-build — the workshop deep-dive.
 *
 * The home page has a 2-video "Built here, tested there" section that
 * tells the story in one screen. This page is for the visitor who
 * wants the long version: workshop tour, sourcing decisions, quality
 * checks, and the farms we build for. Investors and grant funders
 * spend the most time here.
 *
 * Everything on this page is real. No stock photography, no
 * placeholder testimonials — if a claim can't be supported today,
 * it doesn't appear.
 */

const STAGES = [
  {
    step: '1',
    title: 'Board bring-up',
    body: 'Every PCB arrives from our supplier, gets bench-tested for continuity and power rails, then flashed with the latest PENKEEP firmware. Boards that don\'t pass go back — we don\'t ship anything we wouldn\'t install on our own farm.',
    icon: Cpu,
  },
  {
    step: '2',
    title: 'Sensor calibration',
    body: 'Temperature, humidity, ammonia and CO₂ probes are calibrated against a reference instrument before installation into the enclosure. ±0.5°C on temperature, ±3% RH on humidity — meets HACCP and Aviagen management-guide requirements.',
    icon: Wrench,
  },
  {
    step: '3',
    title: 'Enclosure assembly',
    body: 'Boards mount into a poultry-grade splash-resistant enclosure. Cabling routed, strain-relieved and heat-shrunk. Every unit is inspected by a second person before final closure — nobody signs off on their own work.',
    icon: HandshakeIcon,
  },
  {
    step: '4',
    title: 'Burn-in test',
    body: 'Every completed unit runs a 24-hour burn-in against a reference environment. Readings must stay within ±0.5°C of the calibration and network connectivity must hold across three router reboots.',
    icon: ShieldCheck,
  },
  {
    step: '5',
    title: 'Field install',
    body: 'Once a PENKEEP passes burn-in it ships to a farm. Our install team mounts it, wires the heater / fan / aerator loads and walks the farmer through the first-week readings. Every install documented with photos.',
    icon: MapPin,
  },
  {
    step: '6',
    title: 'Continuous feedback',
    body: 'Every reading from every deployed PENKEEP feeds back into how the next batch is tuned. Firmware improvements, sensor placements, enclosure tweaks — the fleet gets better every quarter because we can see how it\'s actually behaving.',
    icon: Sparkles,
  },
];

const SOURCING = [
  {
    label: 'Sensors',
    body: 'DHT22 for temperature/humidity, MQ-137 for ammonia, MG-811 for CO₂ — proven parts with published tolerances, not the cheapest cost-down alternative.',
  },
  {
    label: 'MCU',
    body: 'Industrial-grade microcontroller with hardware watchdog. Reboots itself if the firmware ever locks up so a farm never wakes to a silent device.',
  },
  {
    label: 'Enclosure',
    body: 'IP54-rated polycarbonate housing — dust-tight, splash-resistant. Rated for pen conditions where wash-down and ammonia are daily.',
  },
  {
    label: 'Battery',
    body: 'LiFePO₄ pack for battery backup — safer chemistry than Li-ion, longer cycle life, no thermal-runaway risk in a hot pen.',
  },
];

const VERTICALS_SERVED = [
  { name: 'Poultry farms', href: '/products/poultry' },
  { name: 'Greenhouses', href: '/products/greenhouse' },
  { name: 'Smart irrigation', href: '/products/irrigation' },
  { name: 'Cold chain', href: '/products/cold-chain' },
  { name: 'Aquaculture', href: '/products/aquaculture' },
];

export default function HowWeBuildPage() {
  const tenantUrl =
    process.env.NEXT_PUBLIC_TENANT_APP_URL ?? 'https://web.fsinnovation.net';

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
            How we build
          </p>
          <h1 className="mt-3 max-w-3xl text-[36px] font-bold leading-[1.08] tracking-tight text-[var(--color-brand-fg)] sm:text-[48px]">
            A hardware company with a workshop, not a slide deck.
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-[var(--color-brand-fg-soft)] sm:text-[17px]">
            Every PENKEEP is hand-assembled in our Ogun workshop, calibrated against reference instruments, burn-in tested for 24 hours, and installed on a real farm by a person who can call the farmer by name. This is what that looks like end-to-end.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[400px] bg-gradient-to-b from-[var(--color-brand-accent)]/50 to-white"
        />
      </section>

      {/* Videos */}
      <section className="border-t border-[var(--color-brand-border)] bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <VideoCard
              src="/penkeep-workshop.mp4"
              poster="/penkeep-workshop-poster.jpg"
              tag="In our workshop"
              title="Where every PENKEEP is made"
              body="Hand-assembled in Ogun. The same team takes every unit end-to-end so nothing ships that we wouldn't install on our own farm."
            />
            <VideoCard
              src="/penkeep-workshop-2.mp4"
              poster="/farm-view.jpeg"
              tag="On the farm"
              title="Installed and running"
              body="Once a PENKEEP leaves the workshop it goes to a real pen or greenhouse. Every install is documented; every reading tunes the next batch."
            />
          </div>
        </div>
      </section>

      {/* 6-stage manufacturing walk-through */}
      <section className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
              Six stages, one signed-off unit
            </p>
            <h2 className="mt-2 text-[28px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[32px]">
              From bare board to farm-installed
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-brand-fg-soft)]">
              Every PENKEEP goes through the same six stages, and no unit skips any of them. Nobody signs off on their own work.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {STAGES.map((s) => (
              <li key={s.step} className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]">
                    <s.icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary-deep)]">
                      Step {s.step}
                    </p>
                    <h3 className="mt-0.5 text-[15px] font-bold tracking-tight text-[var(--color-brand-fg)]">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-[12.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sourcing */}
      <section className="border-t border-[var(--color-brand-border)] bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,480px)] md:items-start">
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
                Sourcing standards
              </p>
              <h2 className="mt-2 text-[28px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[32px]">
                Chosen for reliability, not cost
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                A PENKEEP has to work for years in a hot, humid, ammonia-heavy pen or a sun-drenched greenhouse. The parts we pick reflect that operating environment — not the cheapest catalog listing.
              </p>
              <div className="mt-6 space-y-3">
                {SOURCING.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-brand-primary-deep)]" strokeWidth={2.5} />
                    <div>
                      <p className="text-[13.5px] font-bold text-[var(--color-brand-fg)]">{item.label}</p>
                      <p className="mt-0.5 text-[12.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]">
              <Image
                src="/penkeep-installed.jpeg"
                alt="A PENKEEP unit installed and running on a working farm"
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The farms we build for */}
      <section className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,480px)] md:items-start">
            <div className="order-2 md:order-1 overflow-hidden rounded-2xl border border-[var(--color-brand-border)] bg-white">
              <Image
                src="/farm-view.jpeg"
                alt="A view of one of the farms we serve"
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
                Who this is for
              </p>
              <h2 className="mt-2 text-[28px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[32px]">
                Smallholder and mid-scale, not just industrial
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                The commercial tools built for 100,000-bird operations don&apos;t serve the family compound in Enugu or the co-op in Kaduna. That&apos;s who we build for. Our pricing, hardware footprint and installation approach are all sized to work at 500 birds as well as they work at 20,000.
              </p>
              <div className="mt-5 flex items-start gap-3">
                <Users2 className="mt-1 h-4 w-4 shrink-0 text-[var(--color-brand-primary-deep)]" strokeWidth={2.5} />
                <p className="text-[13.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                  <strong className="text-[var(--color-brand-fg)]">Same platform, five verticals.</strong>{' '}
                  The same PENKEEP and FS Manager serve everyone below:
                </p>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {VERTICALS_SERVED.map((v) => (
                  <li key={v.href}>
                    <Link
                      href={v.href}
                      className="inline-flex items-center gap-1 rounded-full border border-[var(--color-brand-border)] bg-white px-3 py-1.5 text-[12px] font-semibold text-[var(--color-brand-primary-deep)] transition-colors hover:bg-[var(--color-brand-accent)]"
                    >
                      {v.name} <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[var(--color-brand-border)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-primary-deep)] p-8 text-white sm:p-12">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                  <Sparkles className="h-3 w-3" /> Ready when you are
                </div>
                <h2 className="mt-3 text-[26px] font-bold leading-tight tracking-tight sm:text-[32px]">
                  Tour the workshop, in person or on a call
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/90">
                  Farmer visiting Lagos or Ogun? Come see the workshop. Investor or grant funder doing diligence? We&apos;ll walk you through end-to-end on a call. Either way — this isn&apos;t a slide deck.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[14px] font-bold text-[var(--color-brand-primary-deep)] hover:bg-white/90"
                >
                  Book a tour <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`${tenantUrl}/register`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-transparent px-6 py-3.5 text-[14px] font-bold text-white hover:bg-white/10"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function VideoCard({
  src, poster, tag, title, body,
}: {
  src: string; poster: string; tag: string; title: string; body: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-brand-border)] bg-white">
      <video
        className="aspect-video w-full bg-black object-cover"
        src={src}
        poster={poster}
        controls
        muted
        playsInline
        preload="metadata"
      />
      <div className="p-6">
        <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary-deep)]">
          {tag}
        </p>
        <h3 className="mt-1 text-[16px] font-bold tracking-tight text-[var(--color-brand-fg)]">
          {title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-brand-fg-soft)]">
          {body}
        </p>
      </div>
    </div>
  );
}
