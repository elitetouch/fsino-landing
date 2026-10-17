import { PLAY_STORE_URL } from '@/lib/links';

/**
 * "Get it on Google Play" badge.
 *
 * Drawn in SVG rather than shipped as Google's PNG so it stays crisp at
 * any density and inherits our pill geometry. Note that Google's brand
 * guidelines do ask for the official artwork — worth swapping to the
 * supplied asset if the listing is ever reviewed for badge compliance.
 *
 * Two sizes: `sm` for the footer, where it sits among body text and
 * must not shout, and `md` for hero and end-of-page CTAs.
 */
export function PlayStoreBadge({
  size = 'md',
  className = '',
}: {
  size?: 'sm' | 'md';
  className?: string;
}) {
  const sm = size === 'sm';

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get FSI Farm Manager on Google Play"
      className={[
        'group inline-flex items-center gap-2.5 rounded-full bg-[var(--color-brand-fg,#111)] text-white',
        'transition-all duration-200 hover:bg-black active:scale-[0.98]',
        sm ? 'h-11 px-4' : 'h-14 px-6',
        className,
      ].join(' ')}
    >
      <PlayMark size={sm ? 18 : 22} />
      <span className="flex flex-col items-start leading-tight">
        <span
          className={[
            'font-medium uppercase tracking-wider text-white/70',
            sm ? 'text-[9px]' : 'text-[10px]',
          ].join(' ')}
        >
          Get it on
        </span>
        <span className={['font-semibold tracking-tight', sm ? 'text-[13px]' : 'text-[16px]'].join(' ')}>
          Google Play
        </span>
      </span>
    </a>
  );
}

function PlayMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={(size / 22) * 24}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="transition-transform group-hover:scale-105"
    >
      <path d="M0.5 1.2 L0.5 22.8 L11.3 12 Z" fill="#34A853" />
      <path d="M0.5 1.2 L15.5 9.6 L11.3 12 Z" fill="#FBBC04" />
      <path d="M0.5 22.8 L15.5 14.4 L11.3 12 Z" fill="#EA4335" />
      <path d="M15.5 9.6 L20.5 12 L15.5 14.4 L11.3 12 Z" fill="#4285F4" />
    </svg>
  );
}
