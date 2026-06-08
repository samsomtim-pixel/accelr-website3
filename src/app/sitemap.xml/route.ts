import { BLOG_SLUGS, pageUrl } from "@/lib/seo";

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
 * Each <url> entry carries only <loc>, <lastmod>, <changefreq> and <priority>.
 * Priorities are derived from each page's internal inbound-link prominence
 * (header nav, footer, homepage CTAs): the more a page is linked, the higher
 * its priority.
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
};

// Priority reflects internal inbound-link prominence:
//   /contact            -> 5 links (header CTA + footer + 3 homepage CTAs)
//   /                   -> homepage / root (convention: highest)
//   /de-scan            -> 4 links (footer + 3 homepage CTAs)
//   /methode, /over-tim -> 3 links each (header + footer + homepage)
//   expertise pages,
//   /de-bouw, /de-motor,
//   /blog               -> 2 links each (header/footer + homepage)
//   /privacy            -> 1 link (footer only)
const STATIC_PAGES: PageConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/contact", priority: 1.0, changeFrequency: "monthly" },
  { path: "/de-scan", priority: 0.9, changeFrequency: "weekly" },
  { path: "/methode", priority: 0.9, changeFrequency: "monthly" },
  { path: "/over-tim", priority: 0.9, changeFrequency: "monthly" },
  { path: "/de-bouw", priority: 0.8, changeFrequency: "weekly" },
  { path: "/de-motor", priority: 0.8, changeFrequency: "weekly" },
  { path: "/sales-strategie", priority: 0.8, changeFrequency: "monthly" },
  { path: "/crm-implementatie", priority: 0.8, changeFrequency: "monthly" },
  { path: "/outbound-leadgeneratie", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sales-enablement", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai-automation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/resultaten", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resultaten/bedrijf-a", priority: 0.6, changeFrequency: "monthly" },
  { path: "/resultaten/bedrijf-b", priority: 0.6, changeFrequency: "monthly" },
  { path: "/resultaten/bedrijf-c", priority: 0.6, changeFrequency: "monthly" },
  { path: "/score", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.7, changeFrequency: "yearly" },
];

const BLOG_PAGES: PageConfig[] = BLOG_SLUGS.map((slug) => ({
  path: `/blog/${slug}`,
  priority: 0.6,
  changeFrequency: "monthly" as const,
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
  const lastmod = new Date().toISOString();
  const urls: string[] = [];

  for (const page of ALL_PAGES) {
    // One flat <url> entry per language version (NL and EN), each with only
    // loc, lastmod, changefreq and priority.
    for (const loc of [pageUrl(page.path, "nl"), pageUrl(page.path, "en")]) {
      urls.push(
        `<url>\n` +
          `<loc>${escapeXml(loc)}</loc>\n` +
          `<lastmod>${lastmod}</lastmod>\n` +
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
