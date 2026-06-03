import type { MetadataRoute } from "next";
import { BLOG_SLUGS, pageUrl } from "@/lib/seo";

/**
 * Sitemap that emits one <url> entry per locale (NL and EN) for every page,
 * with hreflang alternates linking nl-NL, en-US, and x-default (the NL URL).
 *
 * The double-entry pattern is the format Google recommends for international
 * sites: each language version is its own canonical entry, all pointing at
 * the same alternate set.
 */
type PageConfig = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const STATIC_PAGES: PageConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/methode", priority: 0.9, changeFrequency: "monthly" },
  { path: "/over-tim", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resultaten", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resultaten/bedrijf-a", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resultaten/bedrijf-b", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resultaten/bedrijf-c", priority: 0.7, changeFrequency: "monthly" },
  { path: "/de-scan", priority: 0.9, changeFrequency: "weekly" },
  { path: "/de-bouw", priority: 0.9, changeFrequency: "weekly" },
  { path: "/de-motor", priority: 0.9, changeFrequency: "weekly" },
  { path: "/sales-strategie", priority: 0.8, changeFrequency: "monthly" },
  { path: "/crm-implementatie", priority: 0.8, changeFrequency: "monthly" },
  { path: "/outbound-leadgeneratie", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sales-enablement", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai-automation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/score", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

const BLOG_PAGES: PageConfig[] = BLOG_SLUGS.map((slug) => ({
  path: `/blog/${slug}`,
  priority: 0.6,
  changeFrequency: "monthly" as const,
}));

const ALL_PAGES: PageConfig[] = [...STATIC_PAGES, ...BLOG_PAGES];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const page of ALL_PAGES) {
    const nlHref = pageUrl(page.path, "nl");
    const enHref = pageUrl(page.path, "en");

    const languages = {
      "nl-NL": nlHref,
      "en-US": enHref,
      "x-default": nlHref,
    };

    // One entry for each language version, each pointing to the same
    // hreflang set. This is the Google-recommended sitemap pattern for
    // multilingual sites.
    entries.push({
      url: nlHref,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages },
    });
    entries.push({
      url: enHref,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages },
    });
  }

  return entries;
}
