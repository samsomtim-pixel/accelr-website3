import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import RelatedArticles from "@/components/RelatedArticles";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "blogSignalBased.metadata",
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
  const t = await getTranslations("blogSignalBased");

  const triggerSignals = t.raw("signalTypes.triggers") as Array<{
    signal: string;
    source: string;
  }>;
  const intentSignals = t.raw("signalTypes.intent") as Array<{
    signal: string;
    source: string;
  }>;
  const engagementSignals = t.raw("signalTypes.engagement") as Array<{
    signal: string;
    source: string;
  }>;
  const practiceSteps = t.raw("practice.steps") as Array<{
    step: string;
    desc: string;
  }>;
  const stackTools = t.raw("stack.tools") as Array<{
    name: string;
    function: string;
    price: string;
  }>;
  const pitfalls = t.raw("pitfalls.items") as Array<{
    title: string;
    desc: string;
  }>;
  const timelineItems = t.raw("howToStart.timeline") as Array<{
    period: string;
    desc: string;
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

                <p className="mt-6 text-lg text-text-dark-secondary leading-relaxed">
                  {t("hero.subtitle")}
                </p>

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
                    {t("intro.p1")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("intro.p2")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("intro.p3")}
                  </p>

                  {/* Waarom traditionele outbound slechter werkt */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("traditional.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("traditional.p1")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("traditional.p2")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("traditional.p3")}
                  </p>

                  {/* Wat is signal-based outbound? */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("whatIs.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whatIs.p1")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whatIs.p2")}
                  </p>

                  {/* Comparison box */}
                  <div className="mt-8 rounded-2xl bg-white p-6 border border-gray-100">
                    <p className="text-lg font-semibold text-text-dark">
                      {t("whatIs.compareTitle")}
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="flex gap-3 items-start">
                        <span className="shrink-0 mt-1 text-red-400 font-bold text-sm">
                          COLD
                        </span>
                        <p className="text-text-dark-secondary italic">
                          {t("whatIs.coldExample")}
                        </p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <span className="shrink-0 mt-1 text-accent-teal-dark font-bold text-sm">
                          SIGNAL
                        </span>
                        <p className="text-text-dark-secondary italic">
                          {t("whatIs.signalExample")}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-text-dark-secondary">
                      {t("whatIs.compareConclusion")}
                    </p>
                  </div>

                  {/* De drie typen koopsignalen */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("signalTypes.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("signalTypes.intro")}
                  </p>

                  {/* Trigger signals */}
                  <h3 className="mt-8 font-display text-xl font-semibold text-text-dark">
                    {t("signalTypes.triggersTitle")}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-text-dark-secondary">
                    {t("signalTypes.triggersDesc")}
                  </p>
                  <div className="mt-4 space-y-2">
                    {triggerSignals.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-teal-dark mt-0.5" />
                        <p className="text-text-dark-secondary">
                          <strong>{item.signal}</strong> ({item.source})
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Intent signals */}
                  <h3 className="mt-8 font-display text-xl font-semibold text-text-dark">
                    {t("signalTypes.intentTitle")}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-text-dark-secondary">
                    {t("signalTypes.intentDesc")}
                  </p>
                  <div className="mt-4 space-y-2">
                    {intentSignals.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-teal-dark mt-0.5" />
                        <p className="text-text-dark-secondary">
                          <strong>{item.signal}</strong> ({item.source})
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Engagement signals */}
                  <h3 className="mt-8 font-display text-xl font-semibold text-text-dark">
                    {t("signalTypes.engagementTitle")}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-text-dark-secondary">
                    {t("signalTypes.engagementDesc")}
                  </p>
                  <div className="mt-4 space-y-2">
                    {engagementSignals.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-teal-dark mt-0.5" />
                        <p className="text-text-dark-secondary">
                          <strong>{item.signal}</strong> ({item.source})
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Hoe het eruitziet in de praktijk */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("practice.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("practice.intro")}
                  </p>
                  <div className="mt-8 space-y-4">
                    {practiceSteps.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-white p-5 border-l-4 border-accent-teal-dark"
                      >
                        <h4 className="font-display text-lg font-semibold text-text-dark">
                          {item.step}
                        </h4>
                        <p className="mt-2 text-text-dark-secondary">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("stack.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("stack.intro")}
                  </p>

                  <div className="mt-8 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 pr-4 font-display font-semibold text-text-dark">
                            Tool
                          </th>
                          <th className="py-3 pr-4 font-display font-semibold text-text-dark">
                            {t("stack.colFunction")}
                          </th>
                          <th className="py-3 font-display font-semibold text-text-dark">
                            {t("stack.colPrice")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {stackTools.map((tool, i) => (
                          <tr
                            key={i}
                            className="border-b border-gray-100"
                          >
                            <td className="py-3 pr-4 font-medium text-text-dark">
                              {tool.name}
                            </td>
                            <td className="py-3 pr-4 text-text-dark-secondary">
                              {tool.function}
                            </td>
                            <td className="py-3 text-text-dark-secondary">
                              {tool.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("stack.conclusion")}
                  </p>

                  {/* Waarom nu relevant */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("whyNow.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whyNow.p1")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whyNow.p2")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whyNow.p3")}
                  </p>

                  {/* Valkuilen */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("pitfalls.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("pitfalls.intro")}
                  </p>
                  <div className="mt-6 space-y-4">
                    {pitfalls.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
                        <div>
                          <p className="font-semibold text-text-dark">
                            {item.title}
                          </p>
                          <p className="mt-1 text-text-dark-secondary">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hoe begin je */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("howToStart.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("howToStart.intro")}
                  </p>
                  <div className="mt-8 space-y-4">
                    {timelineItems.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-white p-5 border border-gray-100"
                      >
                        <p className="font-display font-semibold text-accent-teal-dark">
                          {item.period}
                        </p>
                        <p className="mt-2 text-text-dark-secondary">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* De kern */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("core.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("core.p1")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("core.p2")}
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
                        href="/outbound-leadgeneratie"
                        className="btn-primary"
                      >
                        {t("inlineCta.ctaPrimary")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link href="/de-scan" className="btn-secondary-dark">
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
