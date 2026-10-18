'use client';

import { usePathname } from 'next/navigation';
import { AppDownloadCTA } from '@/components/app-download-cta';

/**
 * Renders the download CTA on every page EXCEPT the home page.
 *
 * The home page closes with its own bottom CTA, which makes the pricing
 * argument — one token per bird, no subscription — and carries the Play
 * badge itself. Two full-width green CTA blocks stacked on top of each
 * other read as a mistake and halve the weight of both, so the global
 * one stands down there.
 *
 * A client component purely to read the path. The CTA itself is static,
 * and the only cost is that this block hydrates; it carries no content
 * search needs to index.
 */
export function GlobalDownloadCTA() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return <AppDownloadCTA />;
}
