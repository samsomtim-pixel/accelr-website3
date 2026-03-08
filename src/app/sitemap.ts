import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://accelr.nl";

  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/methode", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/over-tim", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/resultaten", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/resultaten/bedrijf-a", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/resultaten/bedrijf-b", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/resultaten/bedrijf-c", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/de-scan", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/sales-strategie", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/crm-implementatie", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/outbound-leadgeneratie", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/sales-enablement", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/ai-sales-automation", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/de-motor", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/de-bouw", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/blog/waarom-eerste-sales-hire-mislukt", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/blog/fractional-head-of-sales-nederland", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/score", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: {
      languages: {
        nl: `${baseUrl}${page.path}`,
        en: `${baseUrl}/en${page.path}`,
      },
    },
  }));
}
