import type { Metadata } from 'next';
import { Bird, Cpu, LineChart } from 'lucide-react';
import { ProductDetailLayout } from '@/components/product-detail-layout';

export const metadata: Metadata = {
  title: 'Poultry farms',
  description:
    'PENKEEP climate stations + FS Manager records for broiler, layer and dual-purpose flocks. Daily logging, breed-standard benchmarks, bank-ready reports.',
};

export default function PoultryPage() {
  return (
    <ProductDetailLayout
      eyebrow="For poultry farms"
      title="Poultry"
      tagline="Where we started; still where most of our farmers are."
      intro="Broilers, layers, dual-purpose. Whether you place 200 birds or 20,000, PENKEEP watches the pen and FS Manager keeps the records. Every metric grades against Ross 308, Cobb 500, Hy-Line Brown, Lohmann or ISA targets for the exact age of your birds."
      heroImage="/mobilescreen.png"
      heroImageAlt="FS Manager cycle dashboard for a Ross 308 broiler flock"
      hardware={{
        device: 'PENKEEP pen climate station',
        body: 'Sits inside the pen and reports temperature, humidity, ammonia and CO₂ every 30 seconds. Three heater zones with autonomous switching so a cold night doesn\'t catch you asleep. Works over local wifi — no internet, still safe.',
        icon: Cpu,
      }}
      software={{
        body: 'Log feed, water, weight, vaccines, mortality and sales in seconds. FCR, mortality trends, vaccination compliance, cost and margin computed continuously. PDF reports export ready for a bank or co-op loan officer.',
        icon: LineChart,
      }}
      features={[
        {
          title: 'Breed-standard benchmarks built in',
          body: 'Every day the dashboard grades your birds against the Aviagen / Cobb / Hy-Line target for that exact age. You know what "good" looks like without guessing.',
        },
        {
          title: 'Vaccination schedule from your breed\'s protocol',
          body: 'The moment you place a flock we materialize the full protocol — Marek\'s, Newcastle, Gumboro, boosters — with hatchery day-1 doses pre-completed based on standards.',
        },
        {
          title: 'Real-time alerts for feed drop, mortality spike, climate stress',
          body: 'Five rule-based alerts run hourly. When your data trips one, the dashboard warns you before it becomes a real problem.',
        },
        {
          title: 'Bank-grade cycle reports',
          body: 'Feed, mortality, FCR, vaccination log, treatment log, cost and margin — all in one PDF a loan officer can read at a glance.',
        },
        {
          title: 'Void with reason, no hard deletes',
          body: 'Wrong entry? Void it with a note. The row stays in the audit trail so a co-op reviewer can trust the ledger.',
        },
        {
          title: 'Multi-flock, multi-pen, multi-staff',
          body: 'One farm can run many pens in parallel. Grant staff role-scoped access so a field worker logs records without seeing billing.',
        },
      ]}
      howItWorks={[
        {
          step: '1',
          title: 'Buy a token per bird',
          body: 'One token per placed bird covers the full production cycle (7 weeks broiler / 18 months layer). No subscription, no per-record fee.',
        },
        {
          step: '2',
          title: 'Place your flock',
          body: 'Pick the breed, enter placement count, and start logging. Vaccination schedule and breed benchmarks activate automatically.',
        },
        {
          step: '3',
          title: 'Add PENKEEP when you\'re ready',
          body: 'Basic works on record-keeping alone. Add a PENKEEP for live climate monitoring, temperature verdicts and welfare alerts.',
        },
      ]}
      metrics={[
        { label: 'FCR', value: '1.5 – 2.0', hint: 'Ross 308 typical broiler cycle' },
        { label: 'Mortality', value: '3 – 5%', hint: 'Healthy commercial range' },
        { label: 'Bird age', value: 'Days', hint: 'Every metric graded on it' },
        { label: 'Alerts', value: 'Hourly', hint: 'Feed, mortality, climate, weight' },
      ]}
      faq={[
        {
          q: 'Which breeds do you support?',
          a: 'Ross 308, Cobb 500 and Arbor Acres Plus for broilers. Hy-Line Brown, Hy-Line W-36, Lohmann Brown Classic, Lohmann LSL Classic, ISA Brown, Bovans Brown, Hisex Brown and Dekalb White for layers. Every breed has its own age-based target curve and vaccination protocol built in.',
        },
        {
          q: 'Do I need PENKEEP hardware to use FS Manager for poultry?',
          a: 'No. Basic runs on record-keeping alone — feed, weight, vaccines, mortality all logged manually. PENKEEP is for farmers who want live climate monitoring and real-time welfare alerts. Add it when you\'re ready.',
        },
        {
          q: 'What if I bought older birds instead of day-old chicks?',
          a: 'The wizard asks for the birds\' actual age at placement (age_when_placed). Every metric — dashboard age, benchmark targets, vaccination scheduling — uses actual bird age, not just days since placement.',
        },
        {
          q: 'Can I log records offline?',
          a: 'The tenant portal is a web app so it needs a connection to write. PENKEEP itself controls heaters and fans autonomously over local wifi without internet — your birds stay safe during outages, records catch up when connection returns.',
        },
      ]}
    />
  );
}
