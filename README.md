# fsinnovation-site

Marketing website for **Farm Support Innovation** (formerly Farmspeak Technology). Fresh Next.js 15 + Tailwind stack, matching the tenant portal's design system so the marketing site and product feel like one brand.

## Pages

- `/` — Home (hero + 5-vertical grid + PENKEEP/FS Manager + stats + CTA)
- `/products` — Overview of all five verticals, anchor-linkable per vertical
- `/pricing` — Live prices pulled from the backend billing endpoints (SSR + 5-min revalidation)
- `/about` — Mission + product story + investor pitch (mirrors tenant `/about`)
- `/contact` — Phone, WhatsApp DM, email, community group

## Getting started

```bash
npm install
cp .env.example .env.local
# edit .env.local with the real values
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

All prefixed with `NEXT_PUBLIC_` because Next.js exposes only those to the client bundle.

| Variable | Purpose | Fallback |
|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Backend host for `/billing/prices` + `/billing/device-prices` | `https://api.fsinnovation.net` |
| `NEXT_PUBLIC_TENANT_APP_URL` | Where "Log in" / "Get started" CTAs point | `https://web.fsinnovation.net` |
| `NEXT_PUBLIC_SUPPORT_PHONE` | E.164 phone for `tel:` and `wa.me` links | none — disables the call CTA |
| `NEXT_PUBLIC_SUPPORT_HOURS` | Free text under the phone number | `Weekdays 9am to 6pm WAT` |
| `NEXT_PUBLIC_WHATSAPP_GROUP_URL` | Full `https://chat.whatsapp.com/…` invite link | none — hides the community card |

## Deploy

Vercel. Point the domain to `www.fsinnovation.net` and set all env vars for the `Production` scope.

## Pricing page — how it stays honest

The Pricing page is a Server Component that fetches from the same public billing endpoints the tenant portal uses. Cached for 5 minutes via `next: { revalidate: 300 }`, so a super-admin price change lands on the marketing site within minutes. If the backend is unreachable, the page renders a "talk to support for a quote" fallback rather than a hardcoded number that might be wrong.
