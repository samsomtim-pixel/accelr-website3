import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "blogSalesHire.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function BlogPost() {
  const t = await getTranslations("blogSalesHire");

  const patternItems = t.raw("pattern.items") as Array<{
    bold: string;
    rest: string;
  }>;
  const buildItems = t.raw("whatToBuild.items") as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">{t("hero.tag")}</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  {t("hero.title")}
                </h1>

                <div className="mt-6 flex items-center gap-4 text-sm text-text-dark-secondary">
                  <span>{t("hero.readTime")}</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-bg-light py-16 sm:py-20 lg:py-24">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl">
              <FadeIn delay={0.1}>
                <div className="prose prose-lg max-w-none">
                  {/* Intro */}
                  <p className="text-xl leading-relaxed text-text-dark-secondary">
                    {t("intro")}
                  </p>

                  {/* Section: Het patroon */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("pattern.title")}
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("pattern.p1")}{" "}
                    <em>{t("pattern.p1em")}</em>
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("pattern.p2")}
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("pattern.p3")}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {patternItems.map((item, i) => (
                      <li key={i} className="text-lg text-text-dark-secondary">
                        <strong>{item.bold}</strong>
                        {item.rest}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("pattern.conclusion")}
                  </p>

                  {/* Section: Wat je eerst moet bouwen */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("whatToBuild.title")}
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whatToBuild.intro")}
                  </p>

                  <div className="mt-8 space-y-4">
                    {buildItems.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                        <div>
                          <h3 className="font-display text-lg font-semibold text-text-dark">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-text-dark-secondary">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Section: De oplossing */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("solution.title")}
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("solution.p1")}
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("solution.p2")}
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("solution.p3")}
                  </p>

                  {/* CTA Section */}
                  <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                    <h3 className="font-display text-2xl font-bold text-text-dark">
                      {t("inlineCta.title")}
                    </h3>
                    <p className="mt-4 text-lg text-text-dark-secondary">
                      {t("inlineCta.desc")}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link href="/de-scan" className="btn-primary">
                        {t("inlineCta.ctaScan")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        href="/expertise/fractional-head-of-sales"
                        className="btn-secondary-dark"
                      >
                        {t("inlineCta.ctaFractional")}
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
                  {t("footerCta.title")}
                </h2>
                <p className="mt-6 text-lg leading-8 text-text-dark-secondary">
                  {t("footerCta.desc")}
                </p>
                <div className="mt-10">
                  <Link href="/contact" className="btn-primary text-lg">
                    {t("footerCta.cta")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
