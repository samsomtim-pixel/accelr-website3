import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://accelr.nl";

  const pages = [
    { path: "/", priority: 1.0 },
    { path: "/methode", priority: 0.9 },
    { path: "/over-tim", priority: 0.7 },
    { path: "/resultaten", priority: 0.8 },
    { path: "/resultaten/bedrijf-a", priority: 0.7 },
    { path: "/resultaten/bedrijf-b", priority: 0.7 },
    { path: "/resultaten/bedrijf-c", priority: 0.7 },
    { path: "/de-scan", priority: 0.9 },
    { path: "/sales-strategie", priority: 0.8 },
    { path: "/crm-implementatie", priority: 0.8 },
    { path: "/outbound-leadgeneratie", priority: 0.8 },
    { path: "/sales-enablement", priority: 0.8 },
    { path: "/ai-sales-automation", priority: 0.8 },
    { path: "/expertise/fractional-head-of-sales", priority: 0.9 },
    { path: "/blog/waarom-eerste-sales-hire-mislukt", priority: 0.6 },
    { path: "/blog/fractional-head-of-sales-nederland", priority: 0.6 },
    { path: "/score", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    { path: "/blog", priority: 0.5 },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
