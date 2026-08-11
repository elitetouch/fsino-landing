import type { Metadata } from 'next';
import { Droplet, LineChart } from 'lucide-react';
import { ProductDetailLayout } from '@/components/product-detail-layout';

export const metadata: Metadata = {
  title: 'Smart irrigation',
  description:
    'Soil-moisture sensors + scheduled valves. Water when the crop needs it, not when a clock says to. Cuts water bills without cutting yield.',
};

export default function IrrigationPage() {
  return (
    <ProductDetailLayout
      eyebrow="For open-field crops"
      title="Smart irrigation"
      tagline="Water when the crop needs it, not when a clock says to."
      intro="Soil-moisture probes in the root zone, connected to solenoid valves at your header. When soil moisture drops below the crop\'s target, valves open; when it hits field capacity, they close. Field-tested for maize, cassava, tomato, pepper and onion. Cuts water bills 20–40% without cutting yield."
      heroImage="/irrigation-hero.png"
      heroImageAlt="PENKEEP soil-moisture station with solar panel and Patented badge, alongside FS Manager irrigation reports on mobile, desktop and tablet"
      hardware={{
        device: 'PENKEEP irrigation controller',
        body: 'Soil-moisture probes buried at 15 cm and 30 cm in the root zone report every 30 seconds. Controller switches solenoid valves at your header. Solar-powered — no mains needed at the field.',
        icon: Droplet,
      }}
      software={{
        body: 'Set the moisture band per crop and per bed. FS Manager runs the valves automatically and logs every water event with volume, duration and moisture curve. Compare rain-fed vs irrigated blocks, and see cost per hectare per season.',
        icon: LineChart,
      }}
      features={[
        {
          title: 'Root-zone moisture-driven scheduling',
          body: 'No fixed timers. Valves open only when the soil actually needs water, driven by probes buried where the roots live.',
        },
        {
          title: 'Rain awareness',
          body: 'Weather forecast integration means the controller skips its scheduled window when rain is coming in the next 6 hours.',
        },
        {
          title: 'Per-crop moisture bands',
          body: 'Maize wants different moisture at tassel than cassava at bulking. Presets ship for major staples; custom bands per bed for anything else.',
        },
        {
          title: 'Water-use accounting',
          body: 'Every valve-open event logged with duration and estimated volume so a season\'s total water cost is one CSV export away.',
        },
        {
          title: 'Solar-powered field units',
          body: 'PENKEEP irrigation runs on a small solar panel + battery. No mains needed at the field, no monthly grid bill.',
        },
        {
          title: 'Yield-vs-input compare',
          body: 'FS Manager rolls up water + fertilizer + labor against yield per bed so you can compare rain-fed vs drip-fed blocks honestly.',
        },
      ]}
      howItWorks={[
        {
          step: '1',
          title: 'Design the layout with our team',
          body: 'We survey your field, identify header locations, pick probe positions and valve counts. Free scoping visit anywhere in Nigeria.',
        },
        {
          step: '2',
          title: 'We install the hardware',
          body: 'Probes buried, valves plumbed, controller mounted, solar panel angled. Typically one to two days per hectare depending on layout.',
        },
        {
          step: '3',
          title: 'Set your moisture bands and forget',
          body: 'Pick the crop per bed, set the moisture target, and the system runs. You get alerts if a probe or valve stops responding.',
        },
      ]}
      metrics={[
        { label: 'Water savings', value: '20 – 40%', hint: 'Vs fixed-timer irrigation' },
        { label: 'Probe depth', value: '15 / 30 cm', hint: 'Root-zone accuracy' },
        { label: 'Field power', value: 'Solar', hint: 'No mains needed' },
        { label: 'Coverage', value: 'Per bed', hint: 'Zone-level control' },
      ]}
      faq={[
        {
          q: 'How many probes do I need per hectare?',
          a: 'Depends on soil variability. Sandy-uniform blocks: one probe pair per hectare works. Mixed clay/loam: two or three pairs per hectare. Our survey visit sets the exact count before you commit to hardware.',
        },
        {
          q: 'Which crops have moisture-band presets?',
          a: 'Maize, cassava, tomato, pepper, onion, watermelon and soybean today. Presets are stage-aware — the moisture target changes as the crop moves from vegetative to reproductive to bulking. Contact us for anything not on that list and we\'ll seed the presets.',
        },
        {
          q: 'What if my valves are older / different voltage?',
          a: 'PENKEEP\'s valve output is 24V AC (the industry standard). If your existing valves run on something else, our install team spec\'s a small relay board that converts. Adds a day to the install; no code change needed.',
        },
        {
          q: 'Does it work without cell coverage?',
          a: 'The controller runs the schedule autonomously and logs to local storage. When cell coverage returns (or you visit with a hotspot) the readings sync. You lose real-time alerts during the offline period but the crop stays watered.',
        },
      ]}
    />
  );
}
