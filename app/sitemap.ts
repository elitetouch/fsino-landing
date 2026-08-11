import type { MetadataRoute } from 'next';

/**
 * Sitemap generator.
 *
 * Next writes /sitemap.xml at build time from what we return here.
 * Crawlers ping this file every deploy so `lastModified` should be the
 * build timestamp — not the file's git mtime, which is meaningless
 * once the repo is deployed.
 *
 * `priority` and `changeFrequency` are hints, not commands. Google
 * mostly ignores them but Bing / DDG / Yandex still weight them, so
 * they cost nothing to set.
 */
const SITE = 'https://www.fsinnovation.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
    // Home + core hubs — refreshed most often, highest priority.
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' },

    // Vertical product pages — the money pages for the target queries.
    { path: '/products/poultry', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/products/greenhouse', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/products/irrigation', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/products/cold-chain', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/products/aquaculture', priority: 0.9, changeFrequency: 'weekly' },

    // Storytelling surfaces — slower cadence, still linked from every page.
    { path: '/how-we-build', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/rebrand', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  ];

  return staticRoutes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
