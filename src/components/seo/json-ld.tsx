/**
 * JSON-LD helpers.
 *
 * Every schema below emits a `<script type="application/ld+json">` tag
 * inline. Rendered on the SERVER during Next's RSC pass so bots see the
 * markup on the initial HTML — no hydration required for search
 * indexing.
 *
 * Reference: https://schema.org/docs/full.html
 * Google's supported types: https://developers.google.com/search/docs/appearance/structured-data/search-gallery
 *
 * When adding a new schema:
 *  - Prefer `@type` names Google explicitly documents as supported.
 *  - Never inline unescaped user data; JSON.stringify handles it.
 *  - Only ONE JSON-LD block per page is a fine rule of thumb, but
 *    Google explicitly allows multiple — Organization + Product +
 *    BreadcrumbList together is normal for a product page.
 */

const SITE_URL = 'https://www.fsinnovation.net';
const LOGO_URL = `${SITE_URL}/fsi-logo.svg`;

function JsonLd({ data }: { data: Record<string, unknown> }) {
  // dangerouslySetInnerHTML is the only way to emit RAW JSON without
  // React escaping the outer braces. JSON.stringify handles internal
  // escaping so injection isn't possible via string content.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Organization schema — company profile that seeds the Knowledge Panel
 * on Google. `sameAs` is the single most impactful field: it tells
 * Google which social profiles ARE us, so brand-search results show a
 * clean brand card with the correct handles.
 */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}#organization`,
        name: 'Farm Support Innovation',
        legalName: 'Farm Support Innovation Ltd',
        alternateName: ['FSI', 'Farmspeak Technology'],
        url: SITE_URL,
        logo: LOGO_URL,
        description:
          'Smart farm IoT hardware and AI-powered farm management software for African farms — poultry, greenhouse, smart irrigation, cold chain and aquaculture.',
        foundingDate: '2020',
        founders: [{ '@type': 'Person', name: 'Farm Support Innovation founders' }],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'NG',
          addressRegion: 'Ogun',
          addressLocality: 'Ogun State',
        },
        areaServed: [
          { '@type': 'Country', name: 'Nigeria' },
          { '@type': 'Country', name: 'Ghana' },
          { '@type': 'Country', name: 'Cameroon' },
          { '@type': 'Place', name: 'West Africa' },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'hello@fsinnovation.net',
            areaServed: ['NG', 'GH', 'CM'],
            availableLanguage: ['en'],
          },
        ],
        sameAs: [
          'https://www.instagram.com/fsinnovation',
          'https://www.linkedin.com/company/fsinnovation',
          'https://x.com/fsinnovation',
          'https://www.youtube.com/@fsinnovation',
          'https://www.farmspeak.net',
        ],
        knowsAbout: [
          'Smart poultry farm management',
          'IoT poultry monitoring',
          'AI in poultry farming',
          'Smart greenhouse IoT',
          'Smart irrigation IoT',
          'Smart cold chain IoT',
          'Aquaculture IoT',
          'Remote sensing agriculture',
          'Precision agriculture Africa',
        ],
      }}
    />
  );
}

/**
 * WebSite schema — anchors the site in Google's Knowledge Graph and
 * enables sitelinks. `potentialAction.SearchAction` reserves a
 * SearchBox that MAY appear on brand queries.
 */
export function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        url: SITE_URL,
        name: 'Farm Support Innovation',
        alternateName: 'FSI',
        publisher: { '@id': `${SITE_URL}#organization` },
        inLanguage: 'en',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      }}
    />
  );
}

/**
 * Product schema for the five verticals.
 *
 * NOTE ON `offers` — deliberately omitted.
 *
 * The first version shipped an `AggregateOffer` with no `lowPrice`,
 * which Google's Rich Results Test flags as a CRITICAL error
 * ("Missing field lowPrice") and which makes the whole Product item
 * ineligible for rich results.
 *
 * We can't fix it by hardcoding a price: /pricing fetches token and
 * device prices LIVE from the billing API at request time, so any
 * number baked into static JSON-LD would (a) be invented and (b) drift
 * out of sync the moment ops changes pricing. Publishing a price in
 * structured data that doesn't match the page is a structured-data
 * spam signal, which is worse than having no price at all.
 *
 * Dropping `offers` costs us the price/availability rich result — an
 * e-commerce feature that was never a good fit for a B2B page selling
 * per-bird tokens plus installed hardware. Breadcrumbs (CTR lift) and
 * Organization (Knowledge Panel) still validate and carry the real SEO
 * value here.
 *
 * To restore it later: make the product pages server components that
 * await fetchTokenPrices(), then pass a real `lowPrice` + `highPrice`
 * through to this component. Guard the build against API downtime
 * before doing that.
 */
export function ProductJsonLd({
  name,
  description,
  image,
  slug,
  category,
}: {
  name: string;
  description: string;
  image: string;
  slug: string;
  category: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        image: `${SITE_URL}${image}`,
        brand: { '@type': 'Brand', name: 'Farm Support Innovation' },
        manufacturer: { '@id': `${SITE_URL}#organization` },
        category,
        url: `${SITE_URL}/products/${slug}`,
      }}
    />
  );
}

/**
 * BreadcrumbList — Google shows breadcrumb pills instead of a raw URL
 * on SERP when this is present, which measurably lifts CTR.
 * `items` is an ordered list from root to the current page.
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: it.name,
          item: it.url.startsWith('http') ? it.url : `${SITE_URL}${it.url}`,
        })),
      }}
    />
  );
}

/**
 * FAQPage — triggers the rich "People also ask" style dropdown right
 * under the SERP result. Every Q/A pair must be a plain string; no
 * hyperlinks inside, no HTML formatting beyond bold/italic.
 */
export function FaqJsonLd({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((it) => ({
          '@type': 'Question',
          name: it.question,
          acceptedAnswer: { '@type': 'Answer', text: it.answer },
        })),
      }}
    />
  );
}
