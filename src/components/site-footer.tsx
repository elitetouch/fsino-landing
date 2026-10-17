import Link from "next/link";
import Image from "next/image";

/**
 * Global footer. Four columns on desktop:
 *   Product · Company · Support · Legal
 *
 * Everything is a link (no dead placeholder text) — visitors expect
 * a footer to be a mini-sitemap.
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
      { href: "https://web.fsinnovation.net", label: "Log in", external: true },
    ],
  },
  // The Legal column the docblock above has always promised, and which
  // was missing: this site published no terms, no privacy policy and no
  // route to account deletion anywhere. The documents live on the app
  // domain because that is where they are maintained and where Play
  // Console points, so these are external by necessity, not by style.
  //
  // 'Delete account' is not optional: Google Play requires the deletion
  // route to be readily discoverable, and a visitor who arrives on the
  // brand site first should not have to find the app to find it.
  {
    heading: "Legal",
    links: [
      {
        href: "https://web.fsinnovation.net/legal/terms",
        label: "Terms",
        external: true,
      },
      {
        href: "https://web.fsinnovation.net/legal/privacy",
        label: "Privacy",
        external: true,
      },
      {
        href: "https://web.fsinnovation.net/legal/delete-account",
        label: "Delete account",
        external: true,
      },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--color-brand-border)] bg-[var(--color-brand-surface-soft)]">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        {/* Five tracks, not four: the logo block plus Product, Company,
            Support and Legal. At lg:grid-cols-4 the new column wrapped
            onto a second row on its own. */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/fsi-logo.svg"
                alt=""
                width={40}
                height={40}
                className="h-40 w-40 rounded-3xl"
              />
              {/* <p className="text-[13px] font-bold tracking-tight text-[var(--color-brand-primary-deep)]">
                Farm Support Innovation
              </p> */}
            </div>
            <p className="mt-3 text-[12.5px] leading-relaxed text-[var(--color-brand-muted)]">
              An operating system for African farmers. Built in Ogun and Lagos.
              Serving farmers from the Sahel to the Guinea coast.
            </p>
            <p className="mt-3 text-[11.5px] text-[var(--color-brand-muted)]">
              Formerly Farmspeak Technology.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary-deep)]">
                {col.heading}
              </p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12.5px] text-[var(--color-brand-fg-soft)] hover:text-[var(--color-brand-primary-deep)]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[12.5px] text-[var(--color-brand-fg-soft)] hover:text-[var(--color-brand-primary-deep)]"
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

        <div className="mt-10 border-t border-[var(--color-brand-border)] pt-6">
          <p className="text-[11px] text-[var(--color-brand-muted)]">
            © {new Date().getFullYear()} Farm Support Innovation Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
