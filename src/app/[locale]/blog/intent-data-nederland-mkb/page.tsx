import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import RelatedArticles from "@/components/RelatedArticles";
import { ArrowRight, XCircle, CheckCircle2 } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "blogIntentData.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [{ url: "https://accelr.nl/images/og-default.png", width: 1200, height: 630, alt: "Accelr" }],
    },
  };
}

export default async function BlogPost() {
  const t = await getTranslations("blogIntentData");

  const doesntWork = t.raw("doesntWork.items") as Array<{
    name: string;
    desc: string;
    problem: string;
  }>;
  const doesWork = t.raw("doesWork.items") as Array<{
    name: string;
    desc: string;
    why: string;
  }>;
  const startSteps = t.raw("startSteps") as string[];
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

                  {/* Wat is intent data */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("whatIs.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whatIs.p1")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whatIs.p2")}
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-white p-5 border border-gray-100">
                      <p className="font-semibold text-text-dark">
                        {t("whatIs.firstPartyTitle")}
                      </p>
                      <p className="mt-2 text-sm text-text-dark-secondary">
                        {t("whatIs.firstPartyDesc")}
                      </p>
                    </div>
                    <div className="rounded-xl bg-white p-5 border border-gray-100">
                      <p className="font-semibold text-text-dark">
                        {t("whatIs.thirdPartyTitle")}
                      </p>
                      <p className="mt-2 text-sm text-text-dark-secondary">
                        {t("whatIs.thirdPartyDesc")}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whatIs.p3")}
                  </p>

                  {/* Wat NIET werkt */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("doesntWork.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("doesntWork.intro")}
                  </p>

                  <div className="mt-8 space-y-6">
                    {doesntWork.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-white p-6 border border-red-100"
                      >
                        <div className="flex items-start gap-3">
                          <XCircle className="h-6 w-6 shrink-0 text-red-500 mt-0.5" />
                          <div>
                            <h3 className="font-display text-xl font-semibold text-text-dark">
                              {item.name}
                            </h3>
                            <p className="mt-2 text-text-dark-secondary">
                              {item.desc}
                            </p>
                            <p className="mt-2 text-sm text-red-600 font-medium">
                              {item.problem}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Wat WEL werkt */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("doesWork.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("doesWork.intro")}
                  </p>

                  <div className="mt-8 space-y-6">
                    {doesWork.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-white p-6 border border-green-100"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark mt-0.5" />
                          <div>
                            <h3 className="font-display text-xl font-semibold text-text-dark">
                              {item.name}
                            </h3>
                            <p className="mt-2 text-text-dark-secondary">
                              {item.desc}
                            </p>
                            <p className="mt-2 text-sm text-accent-teal-dark font-medium">
                              {item.why}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* De eerlijke waarheid */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("truth.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("truth.p1")}
                  </p>
                  <p
                    className="mt-4 text-lg leading-relaxed text-text-dark-secondary font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: t("truth.highlight").replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("truth.p2")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("truth.p3")}
                  </p>

                  {/* Begin met wat je hebt */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("startWith.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("startWith.intro")}
                  </p>
                  <ol className="mt-4 space-y-3 ml-5 list-decimal">
                    {startSteps.map((step, i) => (
                      <li
                        key={i}
                        className="text-lg text-text-dark-secondary"
                        dangerouslySetInnerHTML={{
                          __html: step.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>"
                          ),
                        }}
                      />
                    ))}
                  </ol>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("startWith.conclusion")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("startWith.closing")}
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
                        href="/blog/signal-based-outbound"
                        className="btn-primary"
                      >
                        {t("inlineCta.ctaPrimary")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        href="/blog/tools-signal-based-outbound"
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
