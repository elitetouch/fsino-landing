/**
 * Marketing-site API helpers.
 *
 * Fetches from the same public billing endpoints the tenant portal
 * uses so the pricing page can't drift out of sync with what a
 * farmer sees after signup.
 *
 * All fetches are Server Components with a 5-minute revalidation
 * window — pricing changes on the admin side land here within
 * minutes without a redeploy, but each request doesn't hit the
 * backend directly.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://api.fsinnovation.net';
const REVALIDATE_SECONDS = 300;

export type TokenPrice = {
  id?: string;
  tokenType: 'broiler' | 'layer';
  tier: 'basic' | 'premium';
  unitPriceMinor: number;
  currency: string;
};

export type DeviceOffer = {
  deviceType: string;
  label: string;
  subscription: {
    price: number;
    currency: string;
    cycleWeeks: number;
  };
  installation: {
    fee: number;
    currency: string;
    scope: 'state' | 'country';
    stateName: string | null;
  } | null;
  country: string;
};

/**
 * Fetch active token prices from the backend. Returns an empty
 * array on any error — the pricing page renders a "contact us"
 * fallback rather than a broken state.
 */
export async function fetchTokenPrices(): Promise<TokenPrice[]> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/billing/prices`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];
    const json = await res.json();
    const prices = json?.data?.prices;
    return Array.isArray(prices) ? prices : [];
  } catch {
    return [];
  }
}

/**
 * Fetch the PENKEEP device offer for the default country. The
 * public endpoint returns Nigeria pricing when no farm context is
 * attached — matches the marketing-site convention where we don't
 * know the visitor's country yet.
 */
export async function fetchDeviceOffers(): Promise<DeviceOffer[]> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/billing/device-prices`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];
    const json = await res.json();
    const offers = json?.data?.offers;
    return Array.isArray(offers) ? offers : [];
  } catch {
    return [];
  }
}
