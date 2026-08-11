import type { Metadata } from 'next';
import { BreadcrumbJsonLd, ProductJsonLd } from '@/components/seo/json-ld';
import { Snowflake, LineChart } from 'lucide-react';
import { ProductDetailLayout } from '@/components/product-detail-layout';

export const metadata: Metadata = {
  title: 'Smart Cold Chain IoT · Temperature Monitoring for Cold Rooms & Reefers',
  description:
    'Smart cold chain IoT for cold rooms, reefer trucks and pharma storage across Africa. PENKEEP continuous temperature monitoring, breach alerts, and audit-grade compliance reports for insurance, food safety and pharmaceutical certification.',
  keywords: [
    'smart cold chain IoT',
    'cold room temperature monitoring',
    'reefer truck monitoring Africa',
    'cold chain compliance report',
    'pharma cold chain monitoring',
    'food safety temperature logger',
    'HACCP compliance sensor',
    'vaccine cold chain Africa',
    'PENKEEP',
    'FS Manager',
  ],
  alternates: { canonical: 'https://www.fsinnovation.net/products/cold-chain' },
  openGraph: {
    title: 'Smart Cold Chain IoT — Temperature Monitoring for Africa',
    description:
      'PENKEEP continuous temperature monitoring for cold rooms, reefer trucks and pharma storage. Breach alerts + audit-grade compliance reports.',
    url: 'https://www.fsinnovation.net/products/cold-chain',
    images: ['/products-hero-composite.png'],
    type: 'website',
  },
};

export default function ColdChainPage() {
  return (
    <>
      <ProductJsonLd
        name="PENKEEP + FS Manager for Cold Chain"
        description="Smart cold chain IoT: PENKEEP continuous temperature monitoring for cold rooms, reefer trucks and pharma storage. Breach alerts + audit-grade compliance reports for insurance, food safety and pharmaceutical certification."
        image="/products-hero-composite.png"
        slug="cold-chain"
        category="Smart Cold Chain IoT"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Cold chain', url: '/products/cold-chain' },
        ]}
      />
    <ProductDetailLayout
      eyebrow="For cold storage + reefer transport"
      title="Cold chain"
      tagline="Fewer spoiled shipments. Every breach recorded."
      intro="Post-harvest loss is where African smallholder profit disappears. PENKEEP watches every cold room and reefer truck around the clock, alerts you the moment temperature drifts, and hands you a bank-ready breach report at the end of the month — the exact evidence an insurance claim or a buyer audit needs."
      heroImage="/products-hero-composite.png"
      heroImageAlt="PENKEEP cold-chain station with solar panel and Patented badge, alongside FS Manager reports on mobile, desktop and tablet"
      hardware={{
        device: 'PENKEEP cold-chain station',
        body: 'Waterproof probe inside the cold room or reefer body, controller mounted on the exterior wall. Reports temperature every 30 seconds. Battery + solar so a power cut doesn\'t take monitoring offline with the compressor.',
        icon: Snowflake,
      }}
      software={{
        body: 'Set the safe band per room (freezer, chill, ambient). Every out-of-band reading logged with duration and rendered as "hours in breach" on the monthly report. Alerts fire in real time; PDF breach reports export for insurance and audit.',
        icon: LineChart,
      }}
      features={[
        {
          title: 'Multi-room, multi-truck',
          body: 'One farm can run several PENKEEP stations — one per cold room and per reefer body. Each has its own safe band and its own alert routing.',
        },
        {
          title: 'Real-time breach alerts',
          body: 'The moment temperature crosses the safe band, alerts fire via the tenant app + a WhatsApp message to the on-call staff. Catch a failing compressor before the shipment is lost.',
        },
        {
          title: 'Bank-grade breach reports',
          body: 'Monthly PDF: total hours in breach per room, longest single breach, timing of every event. The evidence an insurance claim or buyer audit needs, ready to send.',
        },
        {
          title: 'Reefer truck coverage',
          body: 'Same station, mounted on a reefer body. GPS-tagged readings so you can prove the truck stayed cold during the whole journey to the market.',
        },
        {
          title: 'Battery-backed continuity',
          body: 'Grid power cut? Compressor is off; PENKEEP stays on for hours on battery so you see the temp climb in real time and can respond before the shipment goes bad.',
        },
        {
          title: 'Buyer / regulator export',
          body: 'CSV + PDF export for GAP audits, HACCP compliance, buyer requirements. One click; no spreadsheet reformatting.',
        },
      ]}
      howItWorks={[
        {
          step: '1',
          title: 'We survey your facility',
          body: 'Walk-through to identify rooms, mount points, sensor positions and network connectivity. Free scoping visit anywhere in Lagos and Ogun; discounted quote for reefer trucks.',
        },
        {
          step: '2',
          title: 'Install and calibrate',
          body: 'One PENKEEP per room / per truck. Probe calibrated against a reference thermometer at install. Typically one day per facility.',
        },
        {
          step: '3',
          title: 'Set bands, get alerts, keep records',
          body: 'Pick the safe band per room, add on-call staff to the alert list. Monthly PDF breach reports auto-generate at month-end.',
        },
      ]}
      metrics={[
        { label: 'Freezer band', value: '-25 to -18°C', hint: 'Meat / fish long-storage' },
        { label: 'Chill band', value: '0 to 4°C', hint: 'Dairy / vegetables' },
        { label: 'Sample rate', value: '30 sec', hint: 'Precise breach timing' },
        { label: 'Alert path', value: 'App + WhatsApp', hint: 'On-call reach' },
      ]}
      faq={[
        {
          q: 'What safe band should I set for my product?',
          a: 'Meat and fish: -25°C to -18°C freezer, 0°C to 4°C chill. Dairy: 2°C to 6°C. Fresh vegetables and fruits: 4°C to 10°C depending on species. Our team helps you pick the right band per room during the survey visit.',
        },
        {
          q: 'Do I need internet at the cold facility?',
          a: 'For real-time alerts, yes. If you\'re offline, PENKEEP stores every reading locally on onboard flash and syncs when a connection returns — you don\'t lose the breach record, you just lose the real-time alert during the outage.',
        },
        {
          q: 'How accurate is the temperature probe?',
          a: '±0.5°C between -40°C and +80°C, calibrated at install against a reference thermometer. Meets or exceeds HACCP monitoring requirements for meat, dairy and fresh produce cold chain.',
        },
        {
          q: 'Can I get a breach report for a specific shipment?',
          a: 'Yes. If PENKEEP is mounted on a reefer body, every reading is GPS-tagged, so you can pull a "breach report for this trip" bounded by departure and arrival. Standard PDF export includes the full temperature timeline and any breach events with their duration.',
        },
      ]}
    />
    </>
  );
}
