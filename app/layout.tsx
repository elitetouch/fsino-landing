import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SiteNavbar } from '@/components/site-navbar';
import { SiteFooter } from '@/components/site-footer';
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/seo/json-ld';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

/**
 * Global metadata.
 *
 * Priorities for ranking on the target queries:
 *   1. `title.template` binds every child page's title back to the brand
 *      so search cards read "Smart Poultry Farm Management · Farm Support
 *      Innovation" — brand-name-in-title is still a search-CTR lever.
 *   2. `description` is the elevator pitch every crawler shows on SERP
 *      when a page doesn't override — must contain the five vertical
 *      keywords once each so the home page ranks for all of them.
 *   3. `keywords` — Google ignores <meta keywords> for ranking but Bing,
 *      Yandex, DuckDuckGo (via Bing) still use it and some LLM-crawlers
 *      (Perplexity, You.com) read it too. Cheap upside.
 *   4. Open Graph + Twitter card — controls how the site previews on
 *      LinkedIn, WhatsApp, iMessage, X, Slack. Huge conversion lever
 *      once outbound sales starts sharing links.
 *   5. Canonical URL derived from metadataBase + page path automatically.
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.fsinnovation.net'),
  title: {
    default:
      'Farm Support Innovation — Smart Farm IoT & AI for African Farms',
    template: '%s · Farm Support Innovation',
  },
  description:
    'Farm Support Innovation (formerly Farmspeak Technology) builds smart farm hardware and software for African farms. IoT climate stations and AI-powered farm management for poultry, greenhouse, smart irrigation, cold chain and aquaculture. Nigeria-built, priced for the smallholder.',
  keywords: [
    // Poultry
    'smart poultry farm management',
    'IoT poultry farming',
    'AI in poultry farming',
    'poultry farm software Nigeria',
    'poultry monitoring system',
    'broiler farm management app',
    'layer farm software',
    'poultry climate control',
    'poultry cycle report',
    // Greenhouse
    'smart greenhouse IoT',
    'greenhouse climate control Africa',
    'greenhouse monitoring system Nigeria',
    'IoT greenhouse sensors',
    // Irrigation
    'smart irrigation IoT',
    'soil moisture sensor Nigeria',
    'IoT irrigation system Africa',
    'precision irrigation smallholder',
    // Cold chain
    'smart cold chain IoT',
    'cold room temperature monitoring',
    'reefer truck monitoring Africa',
    'cold chain compliance report',
    'pharma cold chain monitoring',
    // Aquaculture
    'smart aquaculture IoT',
    'catfish pond water quality monitoring',
    'aquaculture management software Nigeria',
    'RAS water quality sensor',
    // Cross-cutting
    'remote sensing agriculture Africa',
    'AgTech Nigeria',
    'IoT farm sensors',
    'PENKEEP',
    'FS Manager',
    'farm data platform Africa',
    'Aviagen Cobb Hy-Line benchmarks',
    'formerly Farmspeak Technology',
  ],
  authors: [{ name: 'Farm Support Innovation', url: 'https://www.fsinnovation.net' }],
  creator: 'Farm Support Innovation',
  publisher: 'Farm Support Innovation',
  category: 'AgTech',
  icons: {
    icon: [{ url: '/fsi-logo.svg', type: 'image/svg+xml' }],
    shortcut: '/fsi-logo.svg',
    apple: '/fsi-logo.svg',
  },
  alternates: {
    canonical: 'https://www.fsinnovation.net',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fsinnovation.net',
    siteName: 'Farm Support Innovation',
    title: 'Farm Support Innovation — Smart Farm IoT & AI for African Farms',
    description:
      'PENKEEP IoT climate stations + FS Manager software for poultry, greenhouse, smart irrigation, cold chain and aquaculture across Africa. Formerly Farmspeak Technology.',
    locale: 'en_NG',
    images: [
      {
        url: '/products-hero-composite.png',
        width: 1097,
        height: 1080,
        alt: 'PENKEEP hardware + FS Manager on mobile, desktop and tablet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fsinnovation',
    creator: '@fsinnovation',
    title: 'Farm Support Innovation — Smart Farm IoT for African Farms',
    description:
      'IoT climate stations and AI farm management for poultry, greenhouse, smart irrigation, cold chain and aquaculture. Nigeria-built.',
    images: ['/products-hero-composite.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Optional per-search-engine site-verification codes. Fill in once
  // Google Search Console + Bing Webmaster Tools are wired.
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION ?? '',
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#15a34a',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-[var(--color-brand-fg)] antialiased">
        {/* JSON-LD schemas — Organization + WebSite. Rendered globally so
            every page inherits them; per-page JSON-LD (Product, BreadcrumbList
            etc.) sits inside individual page bodies alongside these. */}
        <OrganizationJsonLd />
        <WebsiteJsonLd />

        <SiteNavbar />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
