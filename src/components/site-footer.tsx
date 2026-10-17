import Link from "next/link";
import Image from "next/image";
import { PlayStoreBadge } from "@/components/play-store-badge";
import {
  LEGAL_DELETE_ACCOUNT_URL,
  LEGAL_PRIVACY_URL,
  LEGAL_TERMS_URL,
  APP_LOGIN_URL,
} from "@/lib/links";

/**
 * Global footer. Four link columns on desktop:
 *   Product · Company · Support · Legal
 *
 * Everything is a link (no dead placeholder text) — visitors expect a
 * footer to be a mini-sitemap.
 *
 * LAYOUT. Six tracks, with the brand block spanning two. At five equal
 * tracks the logo, the tagline and the first column crowded each other:
 * a brand block needs roughly double a link column to breathe, and the
 * column gap has to be visibly wider than the gap between links inside
 * a column or the eye reads the whole thing as one list.
 *
 * TYPE. Links at 14px, headings at 11px. The previous 12.5/10.5 was
 * below the floor where a footer still reads as navigation rather than
 * fine print — and this footer carries the legal routes, which must be
 * legible to a regulator and to Play review, not merely present.
 *
 * The Play badge sits in the brand block rather than in a column: it is
 * the one conversion the footer is asked to drive, and it would be lost
 * among link text.
 *
 * Mirrored by `src/components/marketing/footer.tsx` in fsino-use, which
 * serves the same brand on web.fsinnovation.net. Change one, change the
 * other.
 */
const COLUMNS = [
  {
    heading: "Product",
    links: [
      { href: "/products", label: "All products" },
      { href: "/products/poultry", label: "Poultry farms" },
      { href: "/products/greenhouse", label: "Greenhouses" },
      { href: "/products/irrigation", label: "Smart irrigation" },
      { href: "/products/cold-chain", label: "Cold chain" },
      { href: "/products/aquaculture", label: "Aquaculture" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/how-we-build", label: "How we build" },
      {
        href: "https://www.farmspeak.net/rebrand",
        label: "Our rebrand story",
        external: true,
      },
    ],
  },
  {
    heading: "Support",
    links: [
      { href: "/contact", label: "Contact us" },
      { href: APP_LOGIN_URL, label: "Log in", external: true },
    ],
  },
  // The documents live on the app domain because that is where they are
  // maintained and where Play Console points, so these are external by
  // necessity rather than style. 'Delete account' is required: Google
  // Play expects the deletion route to be readily discoverable, and a
  // visitor who meets the brand site first should not have to find the
  // app to find it.
  {
    heading: "Legal",
    links: [
      { href: LEGAL_TERMS_URL, label: "Terms", external: true },
      { href: LEGAL_PRIVACY_URL, label: "Privacy", external: true },
      { href: LEGAL_DELETE_ACCOUNT_URL, label: "Delete account", external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-x-12">
          {/* Brand block — two tracks wide so it is not mistaken for a
              fifth link column. */}
          <div className="lg:col-span-2">
            <Image
              src="/fsi-logo.svg"
              alt="Farm Support Innovation"
              width={160}
              height={160}
              className="h-auto w-[160px]"
            />
            <p className="mt-4 max-w-[34ch] text-[13.5px] leading-[1.65] text-[var(--color-brand-muted)]">
              An operating system for African farmers. Built in Ogun and Lagos.
              Serving farmers from the Sahel to the Guinea coast.
            </p>
            <p className="mt-2 text-[12px] text-[var(--color-brand-muted)]">
              Formerly Farmspeak Technology.
            </p>
            <div className="mt-6">
              <PlayStoreBadge size="sm" />
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand-primary-deep)]">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] leading-snug text-[var(--color-brand-fg-soft)] transition-colors hover:text-[var(--color-brand-primary-deep)]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[14px] leading-snug text-[var(--color-brand-fg-soft)] transition-colors hover:text-[var(--color-brand-primary-deep)]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-brand-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-[var(--color-brand-muted)]">
            © {new Date().getFullYear()} Farm Support Innovation Ltd. All rights
            reserved.
          </p>
          <p className="text-[12px] text-[var(--color-brand-muted)]">
            Made in Nigeria, for farmers across Africa.
          </p>
        </div>
      </div>
    </footer>
  );
}
