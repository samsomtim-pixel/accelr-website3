import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import RelatedArticles from "@/components/RelatedArticles";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "blogTools.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [{ url: "https://www.accelr.nl/images/og-default.png", width: 1200, height: 630, alt: "Accelr" }],
    },
  };
}

export default async function BlogPost() {
  const t = await getTranslations("blogTools");

  const tools = t.raw("tools") as Array<{
    category: string;
    categoryDesc: string;
    entries: Array<{
      name: string;
      what: string;
      pricing: string[];
      forWho: string;
      tip: string;
      pitfall: string;
    }>;
  }>;
  const minimalStack = t.raw("minimalStack.rows") as Array<{
    tool: string;
    function: string;
    cost: string;
  }>;
  const premiumStack = t.raw("premiumStack.rows") as Array<{
    tool: string;
    function: string;
    cost: string;
  }>;
  const related = t.raw("related") as Array<{
    href: string;
    title: string;
    excerpt: string;
    tag: string;
    readTime: string;
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

                  {/* Categories intro */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("categoriesTitle")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("categoriesIntro")}
                  </p>

                  {/* Tool categories */}
                  {tools.map((cat, catIdx) => (
                    <div key={catIdx}>
                      <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                        {cat.category}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                        {cat.categoryDesc}
                      </p>

                      {cat.entries.map((entry, entryIdx) => (
                        <div
                          key={entryIdx}
                          className="mt-8 rounded-2xl bg-white p-6 border border-gray-100"
                        >
                          <h3 className="font-display text-xl font-semibold text-text-dark">
                            {entry.name}
                          </h3>

                          <p className="mt-3 text-text-dark-secondary">
                            {entry.what}
                          </p>

                          <div className="mt-4">
                            <p className="text-sm font-semibold text-accent-teal-dark uppercase tracking-wide">
                              Prijsindicatie
                            </p>
                            <ul className="mt-2 space-y-1">
                              {entry.pricing.map((p, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-text-dark-secondary"
                                >
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <p className="mt-4 text-text-dark-secondary">
                            <strong>Voor wie:</strong> {entry.forWho}
                          </p>

                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-lg bg-green-50 p-3">
                              <p className="text-xs font-semibold text-green-700 uppercase">
                                Tip
                              </p>
                              <p className="mt-1 text-sm text-green-800">
                                {entry.tip}
                              </p>
                            </div>
                            <div className="rounded-lg bg-amber-50 p-3">
                              <p className="text-xs font-semibold text-amber-700 uppercase">
                                Valkuil
                              </p>
                              <p className="mt-1 text-sm text-amber-800">
                                {entry.pitfall}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}

                  {/* Minimal Stack */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("minimalStack.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("minimalStack.intro")}
                  </p>
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 pr-4 font-display font-semibold text-text-dark">
                            Tool
                          </th>
                          <th className="py-3 pr-4 font-display font-semibold text-text-dark">
                            Functie
                          </th>
                          <th className="py-3 font-display font-semibold text-text-dark">
                            Kosten
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {minimalStack.map((row, i) => (
                          <tr
                            key={i}
                            className={`border-b border-gray-100 ${row.tool === "Totaal" ? "font-bold" : ""}`}
                          >
                            <td className="py-3 pr-4 text-text-dark">
                              {row.tool}
                            </td>
                            <td className="py-3 pr-4 text-text-dark-secondary">
                              {row.function}
                            </td>
                            <td className="py-3 text-text-dark-secondary">
                              {row.cost}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("minimalStack.conclusion")}
                  </p>

                  {/* Premium Stack */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("premiumStack.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("premiumStack.intro")}
                  </p>
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 pr-4 font-display font-semibold text-text-dark">
                            Tool
                          </th>
                          <th className="py-3 pr-4 font-display font-semibold text-text-dark">
                            Functie
                          </th>
                          <th className="py-3 font-display font-semibold text-text-dark">
                            Kosten
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {premiumStack.map((row, i) => (
                          <tr
                            key={i}
                            className={`border-b border-gray-100 ${row.tool === "Totaal" ? "font-bold" : ""}`}
                          >
                            <td className="py-3 pr-4 text-text-dark">
                              {row.tool}
                            </td>
                            <td className="py-3 pr-4 text-text-dark-secondary">
                              {row.function}
                            </td>
                            <td className="py-3 text-text-dark-secondary">
                              {row.cost}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("premiumStack.conclusion")}
                  </p>

                  {/* Begin niet met alles */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("dontStartAll.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("dontStartAll.p1")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("dontStartAll.p2")}
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
                      <Link
                        href="/blog/koopsignalen-b2b-outbound"
                        className="btn-primary"
                      >
                        {t("inlineCta.ctaPrimary")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        href="/blog/signal-based-outbound"
                        className="btn-secondary-dark"
                      >
                        {t("inlineCta.ctaSecondary")}
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <RelatedArticles label={t("relatedLabel")} articles={related} />

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
