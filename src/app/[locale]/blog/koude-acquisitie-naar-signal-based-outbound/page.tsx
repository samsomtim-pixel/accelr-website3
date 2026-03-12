import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import RelatedArticles from "@/components/RelatedArticles";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "blogKoudeAcquisitie.metadata",
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
  const t = await getTranslations("blogKoudeAcquisitie");

  const step1Items = t.raw("step1.items") as string[];
  const step2Signals = t.raw("step2.signals") as Array<{
    category: string;
    items: string[];
  }>;
  const step4Examples = t.raw("step4.examples") as Array<{
    signal: string;
    timing: string;
    channel: string;
    opening: string;
    cadence: string;
  }>;
  const step5Metrics = t.raw("step5.metrics") as string[];
  const step5Discoveries = t.raw("step5.discoveries") as string[];
  const step5Optimize = t.raw("step5.optimize") as string[];
  const conclusionSteps = t.raw("conclusion.steps") as string[];
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

                  {/* Waarom koude acquisitie slechter werkt */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("whyWorse.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whyWorse.p1")}
                  </p>
                  <p
                    className="mt-4 text-lg leading-relaxed text-text-dark-secondary"
                    dangerouslySetInnerHTML={{
                      __html: t("whyWorse.p2").replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                  <p
                    className="mt-4 text-lg leading-relaxed text-text-dark-secondary"
                    dangerouslySetInnerHTML={{
                      __html: t("whyWorse.p3").replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                  <p
                    className="mt-4 text-lg leading-relaxed text-text-dark-secondary"
                    dangerouslySetInnerHTML={{
                      __html: t("whyWorse.p4").replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whyWorse.p5")}
                  </p>

                  {/* Wat is signal-based outbound */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("whatIs.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whatIs.p1")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whatIs.p2")}
                  </p>

                  {/* Stap 1 */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("step1.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step1.intro")}
                  </p>
                  <p
                    className="mt-4 text-lg leading-relaxed text-text-dark-secondary"
                    dangerouslySetInnerHTML={{
                      __html: t("step1.firmographic").replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                  <p
                    className="mt-4 text-lg leading-relaxed text-text-dark-secondary"
                    dangerouslySetInnerHTML={{
                      __html: t("step1.behavioral").replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                  <div className="mt-6 space-y-2">
                    {step1Items.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-teal-dark mt-0.5" />
                        <p
                          className="text-text-dark-secondary"
                          dangerouslySetInnerHTML={{
                            __html: item.replace(
                              /\*\*(.*?)\*\*/g,
                              "<strong>$1</strong>"
                            ),
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step1.tip")}
                  </p>
                  <div className="mt-4 rounded-2xl bg-white p-6 border border-gray-100">
                    <p className="text-text-dark-secondary italic">
                      {t("step1.example")}
                    </p>
                  </div>

                  {/* Stap 2 */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("step2.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step2.intro")}
                  </p>
                  {step2Signals.map((cat, i) => (
                    <div key={i} className="mt-6">
                      <p
                        className="font-semibold text-text-dark"
                        dangerouslySetInnerHTML={{
                          __html: cat.category.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>"
                          ),
                        }}
                      />
                      <ul className="mt-2 space-y-1 ml-5 list-disc">
                        {cat.items.map((item, j) => (
                          <li
                            key={j}
                            className="text-text-dark-secondary"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step2.tip")}
                  </p>

                  {/* Stap 3 */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("step3.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step3.intro")}
                  </p>
                  <p
                    className="mt-4 text-lg leading-relaxed text-text-dark-secondary"
                    dangerouslySetInnerHTML={{
                      __html: t("step3.layer1").replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step3.layer1Desc")}
                  </p>
                  <p
                    className="mt-4 text-lg leading-relaxed text-text-dark-secondary"
                    dangerouslySetInnerHTML={{
                      __html: t("step3.layer2").replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step3.layer2Desc")}
                  </p>
                  <p
                    className="mt-4 text-lg leading-relaxed text-text-dark-secondary"
                    dangerouslySetInnerHTML={{
                      __html: t("step3.layer3").replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step3.layer3Desc")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step3.conclusion")}
                  </p>

                  {/* Stap 4 */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("step4.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step4.intro")}
                  </p>
                  <div className="mt-8 space-y-6">
                    {step4Examples.map((ex, i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-white p-6 border-l-4 border-accent-teal-dark"
                      >
                        <h4 className="font-display text-lg font-semibold text-text-dark">
                          {ex.signal}
                        </h4>
                        <div className="mt-3 space-y-1 text-sm text-text-dark-secondary">
                          <p>
                            <strong>Timing:</strong> {ex.timing}
                          </p>
                          <p>
                            <strong>Kanaal:</strong> {ex.channel}
                          </p>
                          <p>
                            <strong>Opening:</strong>{" "}
                            <em>&ldquo;{ex.opening}&rdquo;</em>
                          </p>
                          <p>
                            <strong>Cadans:</strong> {ex.cadence}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step4.tip")}
                  </p>

                  {/* Stap 5 */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("step5.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step5.intro")}
                  </p>
                  <p className="mt-4 font-semibold text-text-dark">
                    {t("step5.metricsLabel")}
                  </p>
                  <ul className="mt-2 space-y-1 ml-5 list-disc">
                    {step5Metrics.map((m, i) => (
                      <li key={i} className="text-text-dark-secondary">
                        {m}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-semibold text-text-dark">
                    {t("step5.discoveriesLabel")}
                  </p>
                  <ul className="mt-2 space-y-1 ml-5 list-disc">
                    {step5Discoveries.map((d, i) => (
                      <li key={i} className="text-text-dark-secondary">
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-semibold text-text-dark">
                    {t("step5.optimizeLabel")}
                  </p>
                  <ol className="mt-2 space-y-1 ml-5 list-decimal">
                    {step5Optimize.map((o, i) => (
                      <li
                        key={i}
                        className="text-text-dark-secondary"
                        dangerouslySetInnerHTML={{
                          __html: o.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>"
                          ),
                        }}
                      />
                    ))}
                  </ol>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step5.reviewTip")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("step5.compareTip")}
                  </p>

                  {/* Conclusie */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("conclusion.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("conclusion.intro")}
                  </p>
                  <ol className="mt-4 space-y-2 ml-5 list-decimal">
                    {conclusionSteps.map((s, i) => (
                      <li
                        key={i}
                        className="text-lg text-text-dark-secondary"
                        dangerouslySetInnerHTML={{
                          __html: s.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>"
                          ),
                        }}
                      />
                    ))}
                  </ol>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("conclusion.closing")}
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
