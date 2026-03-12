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
    namespace: "blogKoopsignalen.metadata",
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
  const t = await getTranslations("blogKoopsignalen");

  const signals = t.raw("signals") as Array<{
    number: string;
    title: string;
    what: string;
    why: string;
    how: string;
    opening: string;
    note?: string;
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

                  {/* Waarom koopsignalen je outbound veranderen */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("why.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("why.p1")}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    {t("why.p2")}
                  </p>

                  {/* 10 Signals */}
                  {signals.map((signal) => (
                    <div key={signal.number} className="mt-12">
                      <h2 className="font-display text-2xl font-bold text-text-dark">
                        {signal.number}. {signal.title}
                      </h2>
                      <div className="mt-6 rounded-xl bg-white p-6 border border-gray-100 space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-accent-teal-dark uppercase tracking-wide">
                            Wat het is
                          </p>
                          <p className="mt-1 text-text-dark-secondary">
                            {signal.what}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-accent-teal-dark uppercase tracking-wide">
                            Waarom het werkt
                          </p>
                          <p className="mt-1 text-text-dark-secondary">
                            {signal.why}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-accent-teal-dark uppercase tracking-wide">
                            Hoe je het detecteert
                          </p>
                          <p className="mt-1 text-text-dark-secondary">
                            {signal.how}
                          </p>
                        </div>
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-sm font-semibold text-text-dark">
                            Openingszin:
                          </p>
                          <p className="mt-1 text-text-dark-secondary italic">
                            &ldquo;{signal.opening}&rdquo;
                          </p>
                        </div>
                        {signal.note && (
                          <p className="text-sm text-text-dark-secondary italic border-t border-gray-100 pt-3">
                            {signal.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Hoe begin je */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    {t("howToStart.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    {t("howToStart.p1")}
                  </p>
                  <p
                    className="mt-4 text-lg leading-relaxed text-text-dark-secondary"
                    dangerouslySetInnerHTML={{
                      __html: t("howToStart.p2").replace(
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
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link
                        href="/blog/koude-acquisitie-naar-signal-based-outbound"
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
