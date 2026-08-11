import type { MetadataRoute } from 'next';

/**
 * robots.txt generator.
 *
 * Next writes /robots.txt at build time from what we return here.
 *
 * Policy:
 *   - Allow every crawler on every path (Google, Bing, DDG, Baidu,
 *     Yandex, GPTBot, PerplexityBot, ClaudeBot, etc.).
 *   - Explicitly point at the sitemap so first-time crawl doesn't have
 *     to discover it via /sitemap.xml probing.
 *
 * If we ever add crawler-hostile bots that scrape without value (e.g.
 * marketing-lead-harvester bots), add a `userAgent + disallow` entry
 * here rather than an .htaccess rule.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://www.fsinnovation.net/sitemap.xml',
    host: 'https://www.fsinnovation.net',
  };
}
