import type { Metadata } from 'next';
import { Cpu, LineChart } from 'lucide-react';
import { ProductDetailLayout } from '@/components/product-detail-layout';

export const metadata: Metadata = {
  title: 'Greenhouses',
  description:
    'PENKEEP climate stations + FS Manager records for greenhouses. Temperature, humidity and ventilation control for tomatoes, peppers and leafy greens.',
};

export default function GreenhousePage() {
  return (
    <ProductDetailLayout
      eyebrow="For greenhouses"
      title="Greenhouses"
      tagline="A hot afternoon doesn't have to cost you a harvest."
      intro="The same PENKEEP hardware, tuned for horticulture. Watches temperature, humidity and CO₂ inside the tunnel and switches fans, foggers and shade automatically. FS Manager logs plantings, feedings, sprays and harvests so a season's-worth of yield decisions is one PDF away."
      heroImage="/products-hero-composite.png"
      heroImageAlt="PENKEEP greenhouse climate station with solar panel and Patented badge, alongside FS Manager reports on mobile, desktop and tablet"
      hardware={{
        device: 'PENKEEP greenhouse controller',
        body: 'Same PENKEEP board, tuned firmware. Reports canopy temperature, humidity and CO₂ every 30 seconds. Controls exhaust fans, foggers and shade nets autonomously. Multiple stations per tunnel for zoned control.',
        icon: Cpu,
      }}
      software={{
        body: 'Log plantings, feed schedule, spray records, staff hours and harvests per bed or per row. Compare cycle-over-cycle yield, cost per kg and margin. Export bank-ready reports for grower loans and buyer certifications.',
        icon: LineChart,
      }}
      features={[
        {
          title: 'Zoned climate control',
          body: 'Run one PENKEEP per tunnel — or multiple per tunnel for zoned control on longer houses. Fans switch by zone, not by whole-house average.',
        },
        {
          title: 'Real-time heat / humidity alerts',
          body: 'When the tunnel drifts outside the crop\'s comfort band, an alert fires the same minute. Catch problems before wilt, blossom-end rot or fungal outbreaks.',
        },
        {
          title: 'Per-bed / per-row records',
          body: 'Track plantings, sprays, feed rate and harvest by the physical unit of your greenhouse. Compare which beds outperformed at end of season.',
        },
        {
          title: 'Spray + input register',
          body: 'Every fertigation, foliar spray and pesticide application logged with rate, timing and staff. Export for GAP certification or buyer audits.',
        },
        {
          title: 'Yield vs cost per kg',
          body: 'FS Manager rolls up every input cost against harvest weight so you know which crop, which bed and which season paid off.',
        },
        {
          title: 'Multi-tunnel, multi-staff',
          body: 'One farm, many tunnels, many crops. Grant staff role-scoped access so field workers log without seeing pricing.',
        },
      ]}
      howItWorks={[
        {
          step: '1',
          title: 'Map your tunnels',
          body: 'Add each tunnel, mark its beds or rows, and pick the crop. FS Manager scales pricing to the number of active beds.',
        },
        {
          step: '2',
          title: 'Install PENKEEP',
          body: 'One PENKEEP per tunnel for basic monitoring; multiple for zoned control on long houses. Our team handles the install for you.',
        },
        {
          step: '3',
          title: 'Log and optimise',
          body: 'Record plantings, sprays and harvests. Compare cycle-over-cycle to see which bed and which recipe put more naira in your pocket.',
        },
      ]}
      metrics={[
        { label: 'Temp band', value: '18 – 28°C', hint: 'Tomato / pepper comfort' },
        { label: 'Humidity', value: '60 – 80%', hint: 'Prevents fungal outbreaks' },
        { label: 'CO₂', value: '400 – 1200 ppm', hint: 'Photosynthesis-optimal' },
        { label: 'Alerts', value: 'Real-time', hint: 'Heat / humidity spikes' },
      ]}
      faq={[
        {
          q: 'Which crops does the greenhouse setup cover?',
          a: 'The hardware and software are crop-agnostic — tomatoes, peppers, cucumbers, leafy greens and strawberries are all supported by the current comfort-band presets. Contact us if you\'re growing something we haven\'t seeded yet and we\'ll add the presets.',
        },
        {
          q: 'Do I need one PENKEEP per tunnel or can one cover several?',
          a: 'One per tunnel is the minimum for reliable readings — greenhouse microclimates vary too much across a shade net or between tunnels to share sensors. Long tunnels (30m+) benefit from two or three PENKEEPs for zoned fan control.',
        },
        {
          q: 'Can PENKEEP switch my existing fans and foggers?',
          a: 'Yes. PENKEEP ships with three switched outputs rated for standard 240V single-phase equipment (fans, foggers, shade motors). Larger loads route through a contactor our install team supplies.',
        },
        {
          q: 'What happens if power drops?',
          a: 'PENKEEP has a small battery that keeps sensor readings streaming for a few hours during a brief outage. It doesn\'t run the fans — those need mains — but you get an "offline" alert the moment power dies so you can react.',
        },
      ]}
    />
  );
}
