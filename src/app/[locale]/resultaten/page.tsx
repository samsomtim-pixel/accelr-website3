import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "resultaten.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [{ url: "https://www.accelr.nl/images/og-default.png", width: 1200, height: 630, alt: "Accelr" }],
      url: "https://www.accelr.nl/resultaten",
    },
  };
}

export default async function ResultatenPage() {
  const t = await getTranslations("resultaten");
  const tc = await getTranslations("common");

  const highlightIcons = [TrendingUp, Zap, Users];

  const caseStudies = [
    {
      key: "caseStudyA" as const,
      href: "/resultaten/bedrijf-a" as const,
      delay: 0.1,
    },
    {
      key: "caseStudyB" as const,
      href: "/resultaten/bedrijf-b" as const,
      delay: 0.2,
    },
    {
      key: "caseStudyC" as const,
      href: "/resultaten/bedrijf-c" as const,
      delay: 0.3,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-bg-light">
        {/* Hero Section */}
        <section className="container-wide pt-32 pb-20">
          <FadeIn>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-text-dark mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-text-dark-secondary max-w-3xl">
              {t("hero.subtitle")}
            </p>
          </FadeIn>
        </section>

        {/* Case Studies Grid */}
        <section className="container-wide pb-24">
          <div className="space-y-8">
            {caseStudies.map((cs) => {
              const highlights = t.raw(`${cs.key}.highlights`) as string[];
              return (
                <FadeIn key={cs.key} delay={cs.delay}>
                  <Link href={cs.href} className="block group">
                    <div className="card-light p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                        <div className="flex-1">
                          <div className="inline-block px-3 py-1 bg-accent-teal-dark/10 text-accent-teal-dark text-sm font-medium rounded-full mb-4">
                            {t(`${cs.key}.badge`)}
                          </div>
                          <h2 className="font-display text-3xl md:text-4xl text-text-dark mb-4">
                            {t(`${cs.key}.name`)}
                          </h2>
                          <div className="text-2xl md:text-3xl font-display text-accent-teal-dark mb-6">
                            {t(`${cs.key}.headline`)}
                          </div>
                          <ul className="space-y-3 mb-6">
                            {highlights.map((highlight, i) => {
                              const Icon = highlightIcons[i] || TrendingUp;
                              return (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-text-dark-secondary"
                                >
                                  <Icon className="w-5 h-5 text-accent-teal-dark flex-shrink-0 mt-1" />
                                  <span>{highlight}</span>
                                </li>
                              );
                            })}
                          </ul>
                          <blockquote className="border-l-4 border-accent-teal-dark pl-6 py-2 italic text-text-dark-secondary">
                            &ldquo;{t(`${cs.key}.quote`)}&rdquo;
                          </blockquote>
                        </div>
                        <div className="flex items-center text-accent-teal-dark group-hover:translate-x-2 transition-transform">
                          <span className="font-medium mr-2">
                            {tc("leescasestudy")}
                          </span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container-wide pb-24">
          <FadeIn>
            <div className="bg-white rounded-2xl p-12 md:p-16 text-center shadow-lg">
              <h2 className="font-display text-3xl md:text-4xl text-text-dark mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-xl text-text-dark-secondary mb-8 max-w-2xl mx-auto">
                {t("cta.desc")}
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                {t("cta.cta")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
