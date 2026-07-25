import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { SiteNavbar } from '@/components/site-navbar';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Farm Support Innovation — An operating system for African farmers',
    template: '%s · Farm Support Innovation',
  },
  description:
    'Farm Support Innovation builds hardware + software for African smallholder and mid-scale farms. Poultry, greenhouse, smart irrigation, cold chain and aquaculture — priced for the 99%, not just the 1%.',
  metadataBase: new URL('https://www.fsinnovation.net'),
  openGraph: {
    title: 'Farm Support Innovation',
    description:
      'An operating system for African farmers — poultry, greenhouse, smart irrigation, cold chain and aquaculture.',
    url: 'https://www.fsinnovation.net',
    siteName: 'Farm Support Innovation',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-[var(--color-brand-fg)] antialiased">
        <SiteNavbar />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
