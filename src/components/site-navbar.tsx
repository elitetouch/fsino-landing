'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Site-wide top navigation.
 *
 * Sticky at top, brand-primary word-mark on the left, product /
 * pricing / about / contact links center-right, and a prominent
 * "Log in" + "Get started" pair on the right. Mobile: hamburger →
 * inline drawer.
 *
 * Design goal: farmer visitors see one clear "Get started" CTA on
 * every page, and never wonder where the login is.
 */
const LINKS = [
  { href: '/products', label: 'Products' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/how-we-build', label: 'How we build' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const tenantUrl =
    process.env.NEXT_PUBLIC_TENANT_APP_URL ?? 'https://web.fsinnovation.net';

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-brand-border)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Farm Support Innovation home"
          className="flex items-center gap-2.5 text-[15px] font-bold tracking-tight text-[var(--color-brand-primary-deep)]"
        >
          <Image
            src="/fsi-logo.svg"
            alt=""
            width={40}
            height={40}
            priority
            className="h-9 w-9"
          />
          <span className="hidden sm:inline">Farm Support Innovation</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href || pathname?.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  'rounded-md px-3 py-2 text-[13.5px] font-semibold transition-colors ' +
                  (active
                    ? 'text-[var(--color-brand-primary-deep)]'
                    : 'text-[var(--color-brand-fg-soft)] hover:text-[var(--color-brand-primary-deep)]')
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={tenantUrl}
            className="rounded-md px-3 py-2 text-[13.5px] font-semibold text-[var(--color-brand-fg-soft)] hover:text-[var(--color-brand-primary-deep)]"
          >
            Log in
          </a>
          <a
            href={`${tenantUrl}/register`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-brand-primary)] px-4 py-2 text-[13.5px] font-bold text-white transition-colors hover:bg-[var(--color-brand-primary-deep)]"
          >
            Get started →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--color-brand-fg-soft)] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer — inline, not a portal, so it inherits the
          navbar's stacking context and closes reliably on route
          changes. */}
      {open && (
        <div className="border-t border-[var(--color-brand-border)] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 p-4 sm:px-6">
            {LINKS.map((link) => {
              const active = pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    'rounded-md px-3 py-2.5 text-[14px] font-semibold ' +
                    (active
                      ? 'bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]'
                      : 'text-[var(--color-brand-fg-soft)]')
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 flex flex-col gap-2 border-t border-[var(--color-brand-border)] pt-3">
              <a
                href={tenantUrl}
                className="rounded-md px-3 py-2.5 text-[14px] font-semibold text-[var(--color-brand-fg-soft)]"
              >
                Log in
              </a>
              <a
                href={`${tenantUrl}/register`}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[var(--color-brand-primary)] px-4 py-2.5 text-[14px] font-bold text-white"
              >
                Get started →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

