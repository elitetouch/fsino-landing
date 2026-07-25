import type { Metadata } from 'next';
import { ExternalLink, Mail, MessageCircle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach us by phone, WhatsApp or email. Support responds within a working day.',
};

/**
 * Contact page for the marketing site.
 *
 * Mirrors the tenant portal's Contact page so a visitor gets the same
 * channels here that they'll see after logging in — phone, WhatsApp
 * DM, community group, and support email. Written-message flow (the
 * support-thread system) is only inside the authenticated app because
 * it needs a user account.
 */
export default function ContactPage() {
  const phone = process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? '';
  const hours = process.env.NEXT_PUBLIC_SUPPORT_HOURS ?? 'Weekdays 9am to 6pm WAT';
  const whatsappGroup = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL ?? '';

  const phoneReady = /^\+?\d{6,20}$/.test(phone.replace(/\s/g, ''));
  const waGroupReady =
    whatsappGroup.startsWith('https://chat.whatsapp.com/') &&
    !whatsappGroup.includes('replace-with-real-invite-code');
  const waDm = phoneReady ? `https://wa.me/${phone.replace(/[^\d]/g, '')}` : null;

  return (
    <div>
      <section className="border-b border-[var(--color-brand-border)] bg-gradient-to-b from-[var(--color-brand-accent)]/40 to-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary-deep)]">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl text-[32px] font-bold leading-tight tracking-tight text-[var(--color-brand-fg)] sm:text-[44px]">
            How can we help?
          </h1>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
            Reach us the way that fits the moment — phone, WhatsApp,
            or an email the team picks up in order.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <ChannelCard
            icon={Phone}
            title="Call us"
            body={hours}
            cta={phoneReady ? `Call ${phone}` : 'Phone line coming soon'}
            href={phoneReady ? `tel:${phone}` : undefined}
            tone="brand"
          />
          <ChannelCard
            icon={MessageCircle}
            title="WhatsApp us directly"
            body="1-on-1 chat with the support team. Fastest for anything you can describe in a couple of lines."
            cta={waDm ? 'Open WhatsApp' : 'Phone number coming soon'}
            href={waDm ?? undefined}
            external
            tone="whatsapp"
          />
          <ChannelCard
            icon={Mail}
            title="Email"
            body="For anything non-urgent — feature ideas, billing questions, partnership enquiries."
            cta="hello@fsinnovation.net"
            href="mailto:hello@fsinnovation.net"
            tone="brand"
          />
          {waGroupReady && (
            <ChannelCard
              icon={MessageCircle}
              title="WhatsApp community"
              body="Join hundreds of African poultry farmers using FS Innovation. Our team is in the chat too."
              cta="Request to join"
              href={whatsappGroup}
              external
              tone="whatsapp"
            />
          )}
        </div>
      </section>
    </div>
  );
}

function ChannelCard({
  icon: Icon,
  title,
  body,
  cta,
  href,
  external,
  tone,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
  cta: string;
  href?: string;
  external?: boolean;
  tone: 'brand' | 'whatsapp';
}) {
  const disabled = !href;
  const iconCls =
    tone === 'whatsapp'
      ? 'bg-[#25D366] text-white'
      : 'bg-[var(--color-brand-accent)] text-[var(--color-brand-primary-deep)]';
  const ctaCls =
    tone === 'whatsapp'
      ? 'bg-[#25D366] text-white hover:bg-[#1DA851]'
      : 'bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary-deep)]';

  return (
    <div className="rounded-2xl border border-[var(--color-brand-border)] bg-white p-6">
      <div className="flex items-start gap-3">
        <span
          className={
            'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ' + iconCls
          }
        >
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <div className="flex-1">
          <h3 className="text-[15px] font-bold tracking-tight text-[var(--color-brand-fg)]">
            {title}
          </h3>
          <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--color-brand-fg-soft)]">
            {body}
          </p>
        </div>
      </div>
      <div className="mt-4">
        {disabled ? (
          <span className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--color-brand-surface-soft)] px-4 text-[13px] text-[var(--color-brand-muted)]">
            {cta}
          </span>
        ) : (
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className={
              'inline-flex h-10 items-center justify-center gap-1.5 rounded-lg px-4 text-[13px] font-bold ' +
              ctaCls
            }
          >
            {cta}
            {external && <ExternalLink className="h-3.5 w-3.5 opacity-80" />}
          </a>
        )}
      </div>
    </div>
  );
}
