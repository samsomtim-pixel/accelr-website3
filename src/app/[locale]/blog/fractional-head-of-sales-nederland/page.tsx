import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "blogFractional.metadata",
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
  const t = await getTranslations("blogFractional");

  const boxItems = t.raw("whatIsIt.boxItems") as string[];
  const costOptions = t.raw("cost.options") as Array<{
    title: string;
    price: string;
    desc: string;
    highlight: boolean;
  }>;
  const whenSmartItems = t.raw("whenSmart.items") as string[];
  const whenNotItems = t.raw("whenNot.items") as string[];
  const phases = t.raw("howAccelr.phases") as Array<{
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

                  {/* Section: Wat is het? */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("whatIsIt.title")}
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whatIsIt.p1")}
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whatIsIt.p2")}
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whatIsIt.p3")}
                  </p>

                  <div className="mt-8 rounded-2xl bg-white p-6 border border-gray-100">
                    <p className="text-lg font-semibold text-text-dark">
                      {t("whatIsIt.boxTitle")}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {boxItems.map((item, i) => (
                        <li key={i} className="text-text-dark-secondary">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section: Wat kost het? */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("cost.title")}
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("cost.intro")}
                  </p>

                  <div className="mt-8 space-y-4">
                    {costOptions.map((option, i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-white p-6 border border-gray-100"
                      >
                        <h3 className="font-display text-xl font-semibold text-text-dark">
                          {option.title}
                        </h3>
                        <p
                          className={`mt-2 text-3xl font-bold ${option.highlight ? "text-accent-teal-dark" : "text-text-dark"}`}
                        >
                          {option.price}
                        </p>
                        <p className="mt-2 text-sm text-text-dark-secondary">
                          {option.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("cost.conclusion")}
                  </p>

                  {/* Section: Wanneer is het slim? */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("whenSmart.title")}
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whenSmart.intro")}
                  </p>

                  <div className="mt-6 space-y-3">
                    {whenSmartItems.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                        <p
                          className="text-lg text-text-dark-secondary"
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(
                                /\*\*(.*?)\*\*/g,
                                "<strong>$1</strong>"
                              ),
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Section: Wanneer niet? */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("whenNot.title")}
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("whenNot.intro")}
                  </p>

                  <div className="mt-6 space-y-3">
                    {whenNotItems.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <XCircle className="h-6 w-6 shrink-0 text-red-500" />
                        <p
                          className="text-lg text-text-dark-secondary"
                          dangerouslySetInnerHTML={{
                            __html: item
                              .replace(
                                /\*\*(.*?)\*\*/g,
                                "<strong>$1</strong>"
                              ),
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Section: Hoe werkt het bij Accelr? */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("howAccelr.title")}
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("howAccelr.intro")}
                  </p>

                  <div className="mt-8 space-y-6">
                    {phases.map((phase, i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-white p-6 border-l-4 border-accent-teal-dark"
                      >
                        <h3 className="font-display text-xl font-semibold text-text-dark">
                          {phase.title}
                        </h3>
                        <p className="mt-2 text-text-dark-secondary">
                          {phase.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p
                    className="mt-6 text-lg leading-relaxed text-text-dark-secondary"
                    dangerouslySetInnerHTML={{
                      __html: t("howAccelr.duration").replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />

                  {/* CTA Section */}
                  <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                    <h3 className="font-display text-2xl font-bold text-text-dark">
                      {t("inlineCta.title")}
                    </h3>
                    <p className="mt-4 text-lg text-text-dark-secondary">
                      {t("inlineCta.desc")}
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/expertise/fractional-head-of-sales"
                        className="btn-primary"
                      >
                        {t("inlineCta.cta")}
                        <ArrowRight className="ml-2 h-4 w-4" />
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
