import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ThemeProvider from "@/components/ThemeProvider";
import CookieBanner from "@/components/CookieBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL("https://www.accelr.nl"),
    title: {
      default: t("siteTitle"),
      template: "%s | Accelr",
    },
    description: t("siteDescription"),
    openGraph: {
      type: "website",
      locale: locale === "nl" ? "nl_NL" : "en_US",
      siteName: "Accelr",
      images: [
        {
          url: "https://www.accelr.nl/images/og-default.png",
          width: 1200,
          height: 630,
          alt: "Accelr - Your Sales Growth Partner",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      languages: {
        nl: "https://www.accelr.nl",
        en: "https://www.accelr.nl/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "nl" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.accelr.nl/#organization",
                  name: "Accelr",
                  url: "https://www.accelr.nl",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.accelr.nl/images/og-accelr.png",
                  },
                  founder: {
                    "@type": "Person",
                    name: "Tim Samsom",
                    jobTitle: "Fractional Head of Sales",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "tim@accelr.nl",
                    contactType: "sales",
                    availableLanguage: ["Dutch", "English"],
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/accelr-nl",
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.accelr.nl/#localbusiness",
                  name: "Accelr",
                  description:
                    locale === "nl"
                      ? "B2B sales consultancy voor tech-founders. Van diagnose tot doorlopend partnerschap. Sales infrastructuur, CRM implementatie, B2B leadgeneratie en AI-gedreven salesprocessen in Nederland."
                      : "B2B sales consultancy for tech founders. From diagnosis to ongoing partnership. Sales infrastructure, CRM implementation, B2B lead generation and AI-driven sales processes in the Netherlands.",
                  url: "https://www.accelr.nl",
                  email: "tim@accelr.nl",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Haarlem",
                    addressCountry: "NL",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Netherlands",
                  },
                  priceRange: "$$",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.accelr.nl/#website",
                  url: "https://www.accelr.nl",
                  name: "Accelr",
                  publisher: {
                    "@id": "https://www.accelr.nl/#organization",
                  },
                  inLanguage: ["nl-NL", "en-US"],
                },
              ],
            }),
          }}
        />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/images/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-text-dark antialiased dark:bg-[#0A0A0A] dark:text-white">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
