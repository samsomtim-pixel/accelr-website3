import { BLOG_SLUGS, pageUrl } from "@/lib/seo";
import { BLOG_POST_DATES } from "@/lib/structured-data";

// Force dynamic rendering so Vercel serves this from a live function instead of
// its static prerender layer. The static layer injects a `Content-Disposition:
// inline` header on prerendered `.xml` responses, which makes Chrome treat the
// response as a downloadable file and skip its built-in XML pretty-print viewer
// (rendering the sitemap as a raw "wall of text"). Serving dynamically gives us
// full control of the response headers, with no Content-Disposition.
export const dynamic = "force-dynamic";

/**
 * Sitemap served via a custom route handler instead of Next.js's built-in
 * `sitemap.ts` metadata route.
 *
 * Why: the metadata route attaches a `Content-Disposition: inline` response
 * header. Chrome treats any response carrying a Content-Disposition header as
 * a "file" and skips its built-in XML pretty-print viewer, so the sitemap
 * rendered as a raw wall of text. By emitting the XML ourselves we control the
 * exact header set (no Content-Disposition), matching how other sites get the
 * formatted, collapsible XML tree in the browser.
 *
 * Each <url> entry carries <loc>, <changefreq>, <priority> and — when a
 * trustworthy date is known — <lastmod>.
 * Priorities are derived from each page's internal inbound-link prominence
 * (header nav, footer, homepage CTAs): the more a page is linked, the higher
 * its priority.
 *
 * lastmod must never be generated at request time. A timestamp of "now" makes
 * every URL look freshly modified on every crawl, and Google stops trusting the
 * signal entirely once it proves unreliable. Dates come from two fixed sources:
 * blog posts read their real dateModified from BLOG_POST_DATES, and static
 * pages carry an explicit hand-maintained date below. Where no reliable date
 * exists, lastModified is left undefined and the <lastmod> tag is omitted for
 * that URL — a missing lastmod is better than a wrong one.
 */

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type PageConfig = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  /**
   * ISO date (YYYY-MM-DD) of the last meaningful change to this page.
   * Omit entirely when no reliable date is known: a URL without <lastmod> is
   * preferable to one carrying a date we cannot stand behind.
   */
  lastModified?: string;
};

// Priority reflects internal inbound-link prominence:
//   /contact            -> 5 links (header CTA + footer + 3 homepage CTAs)
//   /                   -> homepage / root (convention: highest)
//   /de-scan            -> 4 links (footer + 3 homepage CTAs)
//   /methode, /over-tim -> 3 links each (header + footer + homepage)
//   /de-bouw, /de-motor,
//   /blog               -> 2 links each (header/footer + homepage)
//   /privacy            -> 1 link (footer only)
//
// lastModified is maintained BY HAND. Each value below was seeded from the last
// git commit touching that page's own file. Note that most page copy lives in
// messages/{nl,en}.json rather than in the page component, so a copy-only edit
// will not move the page file's git date — update the date here when you change
// a page's content, in either place.
const STATIC_PAGES: PageConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-06-03" },
  { path: "/contact", priority: 1.0, changeFrequency: "monthly", lastModified: "2026-06-03" },
  { path: "/de-scan", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-06-03" },
  { path: "/methode", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-06-03" },
  { path: "/over-tim", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-06-03" },
  { path: "/de-bouw", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-06-03" },
  { path: "/de-motor", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-06-03" },
  { path: "/sales-strategie", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-03" },
  { path: "/crm-implementatie", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-03" },
  { path: "/outbound-leadgeneratie", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-03" },
  { path: "/sales-enablement", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-03" },
  { path: "/ai-automation", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-06-03" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-06-20" },
  { path: "/resultaten", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-07-30" },
  { path: "/resultaten/bedrijf-a", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-07-30" },
  { path: "/resultaten/bedrijf-b", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-07-30" },
  { path: "/resultaten/bedrijf-c", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-07-30" },
  { path: "/score", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-06-03" },
  { path: "/privacy", priority: 0.7, changeFrequency: "yearly", lastModified: "2026-06-03" },
];

// Blog posts carry a real per-post date. BLOG_POST_DATES is the same map that
// feeds the Article structured data, so sitemap and JSON-LD cannot drift apart.
// It is typed Record<BlogSlug, ...>, so every slug in BLOG_SLUGS is covered.
const BLOG_PAGES: PageConfig[] = BLOG_SLUGS.map((slug) => ({
  path: `/blog/${slug}`,
  priority: 0.6,
  changeFrequency: "monthly" as const,
  lastModified: BLOG_POST_DATES[slug].dateModified,
}));

const ALL_PAGES: PageConfig[] = [...STATIC_PAGES, ...BLOG_PAGES];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemap(): string {
  const urls: string[] = [];

  for (const page of ALL_PAGES) {
    // One flat <url> entry per language version (NL and EN). <lastmod> is
    // emitted only when the page config carries a date; pages without one are
    // published with no <lastmod> at all rather than a fabricated timestamp.
    const lastmodTag = page.lastModified
      ? `<lastmod>${escapeXml(page.lastModified)}</lastmod>\n`
      : "";

    for (const loc of [pageUrl(page.path, "nl"), pageUrl(page.path, "en")]) {
      urls.push(
        `<url>\n` +
          `<loc>${escapeXml(loc)}</loc>\n` +
          lastmodTag +
          `<changefreq>${page.changeFrequency}</changefreq>\n` +
          `<priority>${page.priority}</priority>\n` +
          `</url>`,
      );
    }
  }

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.join("\n") +
    `\n</urlset>\n`
  );
}

export function GET(): Response {
  return new Response(buildSitemap(), {
    headers: {
      "Content-Type": "application/xml",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
