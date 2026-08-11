import type { Metadata } from 'next';
import { BreadcrumbJsonLd, ProductJsonLd } from '@/components/seo/json-ld';
import { Fish, LineChart } from 'lucide-react';
import { ProductDetailLayout } from '@/components/product-detail-layout';

export const metadata: Metadata = {
  title: 'Smart Aquaculture IoT · Water Quality Monitoring for Fish Farms',
  description:
    'Smart aquaculture IoT for catfish ponds and RAS systems across Africa. PENKEEP monitors dissolved oxygen, water temperature and pH continuously. FS Manager records feed cycles, mortality and harvest projections.',
  keywords: [
    'smart aquaculture IoT',
    'catfish pond water quality monitoring',
    'aquaculture management software Nigeria',
    'RAS water quality sensor',
    'dissolved oxygen sensor pond',
    'fish farm IoT Africa',
    'fish feed cycle software',
    'PENKEEP',
    'FS Manager',
  ],
  alternates: { canonical: 'https://www.fsinnovation.net/products/aquaculture' },
  openGraph: {
    title: 'Smart Aquaculture IoT — Water Quality for African Fish Farms',
    description:
      'PENKEEP water quality monitoring for catfish ponds and RAS. FS Manager records feed cycles, mortality and harvest projections.',
    url: 'https://www.fsinnovation.net/products/aquaculture',
    images: ['/irrigation-hero.png'],
    type: 'website',
  },
};

export default function AquaculturePage() {
  return (
    <>
      <ProductJsonLd
        name="PENKEEP + FS Manager for Aquaculture"
        description="Smart aquaculture IoT: PENKEEP dissolved-oxygen, temperature and pH sensors for catfish ponds and RAS systems. FS Manager records feed cycles, mortality and harvest projections."
        image="/irrigation-hero.png"
        slug="aquaculture"
        category="Smart Aquaculture IoT"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Aquaculture', url: '/products/aquaculture' },
        ]}
      />
    <ProductDetailLayout
      eyebrow="For catfish ponds + RAS systems"
      title="Aquaculture"
      tagline="Catch problems in the pond before they cost you a harvest."
      intro="Catfish die fast when water goes bad. PENKEEP watches dissolved oxygen, temperature, pH and ammonia around the clock, alerts you at the first drift, and controls aerators automatically. FS Manager logs feedings, mortalities and sales so you know per-pond FCR and margin at harvest — not just at your buyer\'s scale."
      heroImage="/irrigation-hero.png"
      heroImageAlt="PENKEEP station with solar panel and Patented badge, alongside FS Manager pond water-quality reports on mobile, desktop and tablet"
      hardware={{
        device: 'PENKEEP aqua controller',
        body: 'Waterproof multi-parameter probe suspended in the pond. Reports dissolved oxygen, temperature, pH and ammonia every 30 seconds. Switches paddle-wheel aerators or air pumps autonomously when DO drops.',
        icon: Fish,
      }}
      software={{
        body: 'Log stocking, daily feeding, mortality and harvest per pond. Compute FCR against actual harvest weight. Reports include water-quality timeline alongside feed and mortality so an off-cycle can be traced back to the day it started.',
        icon: LineChart,
      }}
      features={[
        {
          title: 'Continuous DO monitoring',
          body: 'Dissolved oxygen is the number one cause of fish kills. PENKEEP reads DO every 30 seconds and switches aerators automatically before you lose stock.',
        },
        {
          title: 'Per-pond FCR at harvest',
          body: 'Log stocking count, daily feed, and final harvest weight. FS Manager rolls up FCR against real numbers — not the feed-bag ratio your buyer estimates.',
        },
        {
          title: 'Water-quality timeline alongside mortality',
          body: 'When a bad week happens, cross-reference DO, pH, ammonia and temperature against mortality events on the same chart. Trace the cause back to the exact day.',
        },
        {
          title: 'Multi-pond, multi-species',
          body: 'Catfish, tilapia and giant African snail supported. Each pond has its own water-quality band, feeding schedule and reporting.',
        },
        {
          title: 'Autonomous aerator control',
          body: 'PENKEEP switches paddle-wheels and air pumps directly when DO drops below the safe threshold. Works offline over local wifi so a power flicker at the router doesn\'t leave the fish gasping.',
        },
        {
          title: 'Harvest-ready pond report',
          body: 'A per-pond PDF showing stocking, feed, mortality, water quality and harvest — the exact evidence a fingerling supplier or buyer needs to see.',
        },
      ]}
      howItWorks={[
        {
          step: '1',
          title: 'We survey the pond',
          body: 'Site visit to identify aerator mount points, probe positions and network coverage. Free scoping visit anywhere in Lagos, Ogun and Oyo; discounted quote for remote states.',
        },
        {
          step: '2',
          title: 'Install probes + controller',
          body: 'Multi-parameter probe suspended in each pond, controller wall-mounted with cabling to aerators. Typically one day per pond depending on the aerator setup.',
        },
        {
          step: '3',
          title: 'Stock and forget',
          body: 'Add stocking counts and daily feeding via FS Manager. PENKEEP handles water quality automatically; you get alerts if a probe or aerator stops responding.',
        },
      ]}
      metrics={[
        { label: 'DO safe', value: '≥ 4 mg/L', hint: 'Catfish minimum' },
        { label: 'pH range', value: '6.5 – 8.5', hint: 'Standard tolerance' },
        { label: 'Sample rate', value: '30 sec', hint: 'Catches fast DO drops' },
        { label: 'Aerator control', value: 'Auto', hint: 'On/off by DO threshold' },
      ]}
      faq={[
        {
          q: 'Which species does the aquaculture setup cover?',
          a: 'Catfish (Clarias) is the primary vertical — presets for DO, pH, ammonia and temperature are seeded. Tilapia is supported with its own water-quality band. Giant African snail farming (heliciculture) has a humidity + temperature preset. Contact us for anything else and we\'ll seed the presets.',
        },
        {
          q: 'How many probes do I need per pond?',
          a: 'One multi-parameter probe per pond up to 500 m². Larger ponds benefit from a second probe on the opposite side because water quality can stratify across a big pond. Our survey visit sets the exact count.',
        },
        {
          q: 'Can PENKEEP switch my existing aerators?',
          a: 'Yes for standard single-phase paddle-wheels and air pumps up to a few kW. Larger aerators route through a contactor our install team supplies. If you\'re on three-phase we recommend a small starter panel added to the install.',
        },
        {
          q: 'What if I lose internet at the pond?',
          a: 'PENKEEP runs the aeration schedule autonomously over local wifi — no internet needed to keep the fish alive. You lose real-time alerts during the outage but the water stays oxygenated. Readings sync when the connection returns.',
        },
      ]}
    />
    </>
  );
}
