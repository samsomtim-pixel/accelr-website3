import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://accelr.nl";

  const pages = [
    { path: "/", priority: 1.0 },
    { path: "/methode", priority: 0.9 },
    { path: "/de-scan", priority: 0.9 },
    { path: "/over-tim", priority: 0.7 },
    { path: "/score", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
