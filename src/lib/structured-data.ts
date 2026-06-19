/**
 * Centralized builders for JSON-LD structured data.
 *
 * Schema choices follow schema.org and Google's structured data
 * guidelines. Entity IDs reference the site-wide schemas declared
 * in src/app/[locale]/layout.tsx (Organization, LocalBusiness, WebSite).
 */
import {
  SITE_URL,
  pageUrl,
  type Locale,
  type BlogSlug,
} from "@/lib/seo";

const ORG_ID = `${SITE_URL}/#organization`;
const PERSON_TIM_ID = `${SITE_URL}/over-tim#tim-samsom`;

/**
 * Publish + last-modified dates per blog post.
 * Dates are based on when each post was first committed to the repo
 * and last meaningfully updated.
 */
export const BLOG_POST_DATES: Record<
  BlogSlug,
  { datePublished: string; dateModified: string }
> = {
  "signal-based-outbound": {
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
  },
  "koude-acquisitie-naar-signal-based-outbound": {
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
  },
  "koopsignalen-b2b-outbound": {
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
  },
  "tools-signal-based-outbound": {
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
  },
  "intent-data-nederland-mkb": {
    datePublished: "2026-03-03",
    dateModified: "2026-03-03",
  },
  "waarom-eerste-sales-hire-mislukt": {
    datePublished: "2026-02-27",
    dateModified: "2026-02-27",
  },
  "salesproces-opzetten-founder": {
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
  },
  "sales-uitbesteden-of-zelf-doen": {
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
  },
  "hubspot-vs-pipedrive-mkb": {
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
  },
  "zes-claude-prompts-systemen": {
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
  },
  "fractional-head-of-sales-nederland": {
    datePublished: "2026-02-27",
    dateModified: "2026-02-27",
  },
};

export function personSchemaTim() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_TIM_ID,
    name: "Tim Samsom",
    givenName: "Tim",
    familyName: "Samsom",
    jobTitle: "Founder & Fractional Head of Sales",
    description:
      "Founder van Accelr. 8+ jaar B2B sales in adtech/tech, ex Country Manager NL bij ShowHeroes. Helpt tech-founders een schaalbaar salesfundament bouwen.",
    url: pageUrl("/over-tim", "nl"),
    image: `${SITE_URL}/images/og-accelr.png`,
    email: "tim@accelr.nl",
    worksFor: { "@id": ORG_ID },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Nyenrode Business University",
    },
    knowsAbout: [
      "B2B Sales",
      "Sales Infrastructuur",
      "Outbound Lead Generation",
      "Sales Operations",
      "AI-driven Sales Automation",
      "Revenue Operations",
    ],
    sameAs: ["https://linkedin.com/in/timsam"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Haarlem",
      addressCountry: "NL",
    },
  };
}

type ServiceInput = {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  /** EUR price for an Offer node. Omit for "price on application" services. */
  priceEur?: number;
};

export function serviceSchema(input: ServiceInput) {
  const url = pageUrl(input.path, "nl");
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "Country",
      name: "Netherlands",
    },
    serviceType: input.serviceType ?? input.name,
  };
  if (typeof input.priceEur === "number") {
    schema.offers = {
      "@type": "Offer",
      price: input.priceEur.toFixed(2),
      priceCurrency: "EUR",
      url,
      availability: "https://schema.org/InStock",
    };
  }
  return schema;
}

type BlogPostingInput = {
  slug: BlogSlug;
  headline: string;
  description: string;
  locale: Locale;
  image?: string;
};

export function blogPostingSchema(input: BlogPostingInput) {
  const url = pageUrl(`/blog/${input.slug}`, input.locale);
  const dates = BLOG_POST_DATES[input.slug];
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    image: input.image ?? `${SITE_URL}/images/og-default.png`,
    datePublished: dates.datePublished,
    dateModified: dates.dateModified,
    inLanguage: input.locale === "en" ? "en-US" : "nl-NL",
    author: { "@id": PERSON_TIM_ID, "@type": "Person", name: "Tim Samsom" },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}

type FaqItem = { q: string; a: string };

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}

type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: pageUrl(it.path, locale),
    })),
  };
}
