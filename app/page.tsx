import Link from 'next/link';
import Image from 'next/image';
import {
  Bird, Leaf, Droplet, Snowflake, Fish,
  Cpu, LineChart, ShieldCheck, ArrowRight, Sparkles,
} from 'lucide-react';

/**
 * Home — the front door of Farm Support Innovation.
 *
 * Structure (top → bottom):
 *   1. Hero with the mission line + primary CTA to /register on
 *      the tenant portal.
 *   2. Rebrand strip — "Formerly Farmspeak Technology" so returning
 *      users immediately recognise us.
 *   3. Product grid — the five verticals we serve.
 *   4. What we ship — PENKEEP hardware + FS Manager software.
 *   5. Social proof — a short stat row that mirrors the About page
 *      in the tenant portal.
 *   6. Bottom CTA — a bold "Start a cycle today" card.
 */
const VERTICALS = [
  {
    id: 'poultry',
    icon: Bird,
    title: 'Poultry farms',
    tagline: 'Where we started; still where most of our farmers are.',
    body:
      'PENKEEP climate stations paired with FS Manager records. Broilers, layers, dual-purpose — daily logging, breed-standard benchmarks, bank-ready reports.',
  },
  {
    id: 'greenhouse',
    icon: Leaf,
    title: 'Greenhouses',
    tagline: 'Tomatoes, peppers, leafy greens.',
    body:
      'Same PENKEEP hardware, tuned for horticulture. Humidity, temperature and ventilation control so a hot afternoon doesn\'t cost you a harvest.',
  },
  {
    id: 'irrigation',
    icon: Droplet,
    title: 'Smart irrigation',
    tagline: 'Water when the crop needs it, not when a clock says to.',
    body:
      'Soil-moisture sensors and scheduled valves. Field-tested for maize, cassava, and vegetables. Cuts water bills without cutting yield.',
  },
  {
    id: 'cold-chain',
    icon: Snowflake,
    title: 'Cold chain facilities',
    tagline: 'Fewer spoiled shipments; every breach recorded.',
    body:
      'Temperature monitoring for storage rooms and reefer trucks. Bank-grade breach reports for insurance and compliance.',
  },
  {
    id: 'aquaculture',
    icon: Fish,
    title: 'Aquaculture',
    tagline: 'For catfish ponds and RAS systems.',
    body:
      'Water quality, dissolved oxygen and feed-cycle records. Catch problems in the pond before they cost you a harvest.',
  },
];

export default function HomePage() {
  const tenantUrl =
    process.env.NEXT_PUBLIC_TENANT_APP_URL ?? 'https://web.fsinnovation.net';

  return (
    <div>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:items-center lg:gap-12 lg:px-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
              Farm Support Innovation
            </p>
            <h1 className="mt-4 max-w-3xl text-[36px] font-bold leading-[1.05] tracking-tight text-[var(--color-brand-fg)] sm:text-[52px]">
              An operating system for{' '}
              <span className="text-[var(--color-brand-primary)]">African farmers</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-[var(--color-brand-fg-soft)] sm:text-[17px]">
              Poultry, greenhouse, smart irrigation, cold chain and aquaculture — one
              hardware + software platform, priced for the smallholders and
              mid-scale farms that feed the continent, not just the industrial 1%.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`${tenantUrl}/register`}
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-brand-primary)] px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[var(--color-brand-primary-deep)]"
              >
                Get started — free to try <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-brand-border)] bg-white px-6 py-3.5 text-[15px] font-bold text-[var(--color-brand-primary-deep)] hover:bg-[var(--color-brand-surface-soft)]"
              >
                Explore products
              </Link>
            </div>

            {/* Rebrand strip */}
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-border)] bg-[var(--color-brand-accent)] px-3.5 py-1.5 text-[11.5px] font-semibold text-[var(--color-brand-primary-deep)]">
              <Sparkles className="h-3 w-3" />
              Formerly Farmspeak Technology · rebranded to serve more farmers, more crops.
            </div>
          </div>

          {/* Hero visual — FS Manager on mobile. Priority image so
              it starts fetching immediately for the largest
              contentful paint. */}
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <Image
              src="/mobilescreen.svg"
              alt="FS Manager on a mobile phone — dashboard with feed, mortality and weight cards"
              width={480}
              height={520}
              priority
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Decorative gradient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-[var(--color-brand-accent)]/40 to-white"
        />
      </section>

      {/* ─────────────────────────── PRODUCT GRID ─────────────────────────── */}
      <section className="border-t border-[var(--color-brand-border)] bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
              What we serve
            </p>
            <h2 className="mt-2 text-[28px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[32px]">
              Five verticals, one platform
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-brand-fg-soft)]">
              PENKEEP hardware and FS Manager software adapt to what
              you grow. Same login, same team, same subscription — the
              specifics change per vertical.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VERTICALS.map(({ id, icon: Icon, title, tagline, body }) => (
              <Link
                key={id}
                href={`/products#${id}`}
                className="group rounded-2xl border border-[var(--color-brand-border)] bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-[var(--color-brand-primary)]/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-[16px] font-bold tracking-tight text-[var(--color-brand-fg)]">
                  {title}
                </h3>
                <p className="mt-1 text-[12px] font-semibold text-[var(--color-brand-primary-deep)]">
                  {tagline}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                  {body}
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-bold text-[var(--color-brand-primary-deep)] group-hover:gap-2">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── WHAT WE SHIP ─────────────────────────── */}
      <section className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <FeatureCard
              icon={Cpu}
              tag="Hardware"
              title="PENKEEP"
              body="Our IoT device sits inside the pen, greenhouse or storage room. Reports temperature, humidity, ammonia and CO₂ every 30 seconds. Controls heaters and fans autonomously. Works over local wifi so it keeps your birds — or your crops — safe even when the internet drops."
              image="/smartpenzz.svg"
              imageAlt="PENKEEP pen climate station"
            />
            <FeatureCard
              icon={LineChart}
              tag="Software"
              title="FS Manager"
              body="Turns years of paper record-keeping into structured data that computes feed conversion, mortality trends, vaccination compliance and profit per cycle. Reports export as bank-ready PDFs. Alerts fire when the data drifts from Aviagen, Cobb or Hy-Line standards."
              image="/trackrecord.svg"
              imageAlt="FS Manager tracking daily records"
            />
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[var(--color-brand-border)] bg-white p-5">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-brand-primary)] text-white">
              <ShieldCheck className="h-4 w-4" strokeWidth={2.2} />
            </span>
            <div>
              <p className="text-[13.5px] font-bold text-[var(--color-brand-fg)]">
                The same benchmarks the big farms use
              </p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
                We build in the exact growth and feed targets that the
                world&apos;s big breeders publish for Ross 308, Cobb 500,
                Hy-Line Brown, Lohmann and ISA birds. Every number on
                your dashboard is graded against what a top farm would
                expect for the exact age of your birds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── DASHBOARD PREVIEW ─────────────────────────── */}
      <section className="border-t border-[var(--color-brand-border)] bg-white">
        <div className="mx-auto max-w-[1200px] px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
              See it in action
            </p>
            <h2 className="mt-2 text-[28px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[32px]">
              Everything you need to run a cycle
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-brand-fg-soft)]">
              Feed, water, mortality, weight, vaccines, sales — logged in
              seconds. Reports export as bank-ready PDFs. The dashboard
              adapts to what you grow.
            </p>
          </div>
        </div>

        {/* Auto-scrolling carousel — full-bleed so it feels like a
            continuous filmstrip rather than a boxed component. Pauses
            on hover so a visitor can read a specific frame. */}
        <DashboardMarquee
          images={[
            { src: '/DOne.webp', alt: 'Cycle dashboard with feed conversion, mortality and weight cards' },
            { src: '/DTwo.webp', alt: 'PENKEEP pen climate view — temperature, humidity, ammonia' },
            { src: '/DThree.webp', alt: 'Vaccination schedule with breed-specific protocol' },
            { src: '/DFour.webp', alt: 'Reports with bank-ready PDF export' },
            { src: '/DFive.webp', alt: 'Expenses ledger with per-cycle P&L' },
            { src: '/DSix.webp', alt: 'Peer benchmarks against past cycles' },
          ]}
        />
      </section>

      {/* ─────────────────────────── BUILT HERE, TESTED THERE ─────────────────────────── */}
      <section className="border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
              Built here, tested there
            </p>
            <h2 className="mt-2 text-[28px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[32px]">
              A hardware company with a workshop, not a slide deck
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-brand-fg-soft)]">
              Every PENKEEP is hand-assembled in our Ogun workshop and
              field-tested on real farms before it ships. This is what
              that looks like.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <VideoCard
              src="/penkeep-workshop.mp4"
              poster="/penkeep-installed.jpeg"
              tag="In our workshop"
              title="Where every PENKEEP is made"
              body="Hand-assembled in Ogun. Board bring-up, sensor calibration, firmware flash, packaging — the same three people take every unit end-to-end so nothing ships that we wouldn't install on our own farm."
            />
            <VideoCard
              src="/penkeep-workshop-2.mp4"
              poster="/farm-view.jpeg"
              tag="On the farm"
              title="Installed and running"
              body="Once a PENKEEP leaves the workshop it goes to a real pen or greenhouse. Every install is documented; every reading feeds back into how the next batch is tuned."
            />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <PhotoCard
              src="/penkeep-installed.jpeg"
              alt="PENKEEP installed inside a working pen"
              label="Live install"
              caption="A PENKEEP running on the farm — three heater zones, live climate readings streaming to the dashboard."
            />
            <PhotoCard
              src="/farm-view.jpeg"
              alt="A field view of a farm we serve"
              label="The farms we serve"
              caption="From smallholder pens in Ogun to mid-scale operations across the region — the same platform, priced to fit."
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────── SOCIAL PROOF ─────────────────────────── */}
      <section className="border-t border-[var(--color-brand-border)] bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard label="Farms served" value="5,000+" hint="Across Nigeria, Ghana and Cameroon" />
            <StatCard label="Pens monitored" value="2,800+" hint="Live climate telemetry, 24/7" />
            <StatCard label="Records logged" value="220k+" hint="Feed, mortality, vaccine, sales" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────── BOTTOM CTA ─────────────────────────── */}
      <section className="border-t border-[var(--color-brand-border)]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-primary-deep)] p-8 text-white sm:p-12">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/80">
                  Ready when you are
                </p>
                <h2 className="mt-2 text-[28px] font-bold leading-tight tracking-tight sm:text-[32px]">
                  Start a cycle today. Pay only for the birds you place.
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/90">
                  No subscription. No recurring fee. One token per bird
                  covers the full production cycle. Add PENKEEP hardware
                  when you&apos;re ready for climate monitoring.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
                <a
                  href={`${tenantUrl}/register`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[15px] font-bold text-[var(--color-brand-primary-deep)] transition-colors hover:bg-white/90"
                >
                  Get started free <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-transparent px-6 py-3.5 text-[15px] font-bold text-white hover:bg-white/10"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  tag,
  title,
  body,
  image,
  imageAlt,
}: {
  icon: React.ElementType;
  tag: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-brand-border)] bg-white">
      {image && (
        <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[var(--color-brand-accent)] to-white p-6">
          <Image
            src={image}
            alt={imageAlt ?? ''}
            width={280}
            height={160}
            className="h-full w-auto object-contain"
          />
        </div>
      )}
      <div className="p-6 sm:p-7">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]">
            <Icon className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary-deep)]">
              {tag}
            </p>
            <h3 className="mt-0.5 text-[18px] font-bold tracking-tight text-[var(--color-brand-fg)]">
              {title}
            </h3>
          </div>
        </div>
        <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
          {body}
        </p>
      </div>
    </div>
  );
}

/**
 * DashboardMarquee — full-bleed right-to-left auto-scrolling
 * filmstrip of dashboard screenshots.
 *
 * Design decisions:
 *
 *   - Pure CSS keyframes (no JS timer, no scroll libraries). One
 *     `translateX(-50%)` animation on a track that contains TWO
 *     copies of the image list back-to-back. Because copy 2 starts
 *     exactly where copy 1 began, the loop is seamless — the eye
 *     never catches a jump.
 *
 *   - Pauses on hover so a visitor who wants to read a specific
 *     screenshot can. Also pauses on focus-within for keyboard
 *     users tabbing through.
 *
 *   - Respects prefers-reduced-motion: for users who've asked their
 *     OS not to auto-animate content, the strip goes static
 *     (visible but not moving). WCAG compliance + accessibility
 *     without extra work.
 *
 *   - Full-bleed with a horizontal padding-left gutter on the first
 *     card so the strip aligns visually with the section header
 *     above but still runs off the right edge, signalling "keep
 *     scrolling".
 */
function DashboardMarquee({ images }: { images: Array<{ src: string; alt: string }> }) {
  return (
    <div
      className="marquee-wrap group mt-10 overflow-hidden py-4"
      aria-label="Dashboard screenshots"
      role="region"
    >
      <div className="marquee-track flex w-max gap-4 pl-4 sm:pl-6 lg:pl-8 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {/* Rendered twice — copy 1 for the initial view, copy 2 to
            fill the space vacated as copy 1 slides off screen. The
            animation ends exactly when copy 2 lines up where copy 1
            started, so the loop is invisible. */}
        {[...images, ...images].map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="shrink-0 overflow-hidden rounded-2xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]"
            style={{ width: 'min(420px, 80vw)' }}
            aria-hidden={i >= images.length ? true : undefined}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={640}
              height={400}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>

      {/* Scoped keyframes — matches the doubled-track pattern above.
          40s per full cycle keeps it comfortably slow; anything
          faster and it reads as a jumpy attention-grab rather than
          product proof. */}
      <style>{`
        .marquee-track {
          animation: dashboard-marquee 40s linear infinite;
        }
        @keyframes dashboard-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}

/**
 * VideoCard — non-autoplay inline video with a poster still.
 *
 * Bandwidth-conscious for African users on 3G: `preload="metadata"`
 * fetches just the first frame + duration so the poster shows
 * instantly; the video only streams when the farmer clicks play.
 * Muted by default so a subsequent auto-play (if we ever enable it)
 * doesn't blast audio.
 */
function VideoCard({
  src,
  poster,
  tag,
  title,
  body,
}: {
  src: string;
  poster: string;
  tag: string;
  title: string;
  body: string;
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

function PhotoCard({
  src,
  alt,
  label,
  caption,
}: {
  src: string;
  alt: string;
  label: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-[var(--color-brand-border)] bg-white">
      <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--color-brand-surface-soft)]">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="p-5">
        <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary-deep)]">
          {label}
        </p>
        <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
          {caption}
        </p>
      </figcaption>
    </figure>
  );
}

function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-6 text-center">
      <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary-deep)]">
        {label}
      </p>
      <p className="mt-2 text-[28px] font-bold tracking-tight text-[var(--color-brand-fg)] sm:text-[32px]">
        {value}
      </p>
      <p className="mt-1 text-[12px] text-[var(--color-brand-muted)]">{hint}</p>
    </div>
  );
}
