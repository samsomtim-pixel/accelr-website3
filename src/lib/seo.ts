/**
 * Centralized SEO helpers for canonical URLs and hreflang alternates.
 *
 * Site is bilingual:
 *   - NL on root: https://www.accelr.nl/methode
 *   - EN under /en: https://www.accelr.nl/en/methode
 *
 * Locale routing via next-intl with localePrefix: "as-needed",
 * defaultLocale: "nl".
 */

export const SITE_URL = "https://www.accelr.nl";

export type Locale = "nl" | "en";

/**
 * Build a full absolute URL for a given route and locale.
 * Pass the locale-agnostic path (e.g. "/methode", "/blog/foo", "/").
 */
export function pageUrl(path: string, locale: Locale): string {
  const cleaned = path === "/" ? "" : path;
  if (locale === "en") return `${SITE_URL}/en${cleaned}`;
  return cleaned ? `${SITE_URL}${cleaned}` : SITE_URL;
}

/**
 * Build canonical + hreflang alternates for a route.
 *
 * - canonical: points to the URL of the current locale (self-referencing)
 * - languages: maps nl-NL, en-US, and x-default (which defaults to NL)
 *
 * Usage in a page.tsx generateMetadata:
 *
 *   return {
 *     title: t("title"),
 *     description: t("description"),
 *     alternates: buildAlternates("/methode", locale),
 *     openGraph: { url: pageUrl("/methode", locale), ... },
 *   };
 */
export function buildAlternates(path: string, locale: Locale) {
  const nlUrl = pageUrl(path, "nl");
  const enUrl = pageUrl(path, "en");
  const canonical = locale === "en" ? enUrl : nlUrl;
  return {
    canonical,
    languages: {
      "nl-NL": nlUrl,
      "en-US": enUrl,
      "x-default": nlUrl,
    },
  };
}

/**
 * Convenience: returns the OG locale tag for a given site locale.
 */
export function ogLocale(locale: Locale): "nl_NL" | "en_US" {
  return locale === "en" ? "en_US" : "nl_NL";
}

/**
 * All blog post slugs that exist in src/app/[locale]/blog/<slug>/page.tsx.
 * Used by the sitemap and by structured data helpers so we have one
 * source of truth.
 */
export const BLOG_SLUGS = [
  "signal-based-outbound",
  "koude-acquisitie-naar-signal-based-outbound",
  "koopsignalen-b2b-outbound",
  "tools-signal-based-outbound",
  "intent-data-nederland-mkb",
  "waarom-eerste-sales-hire-mislukt",
  "fractional-head-of-sales-nederland",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];
