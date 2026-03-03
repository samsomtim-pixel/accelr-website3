import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import AiHighlights from "@/components/AiHighlights";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "deScan.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: ["/images/og-accelr.png"],
      url: "https://accelr.nl/de-scan",
    },
  };
}

export default async function DeScanPage() {
  const t = await getTranslations("deScan");

  const dimensionItems = t.raw("dimensies.items") as Array<{
    num: number;
    name: string;
    question: string;
  }>;
  const deliverableItems = t.raw("deliverables.items") as string[];
  const week1Items = t.raw("tijdlijn.week1.items") as string[];
  const week2Items = t.raw("tijdlijn.week2.items") as string[];
  const faqItems = t.raw("faq.items") as Array<{ q: string; a: string }>;
  const aiItems = t.raw("aiHighlights.items") as Array<{ title: string; desc: string }>;

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ─── Hero ─── */}
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">{t("hero.label")}</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  {t("hero.title")}{" "}
                  <span className="gradient-text">{t("hero.titleHighlight")}</span>
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                  {t("hero.subtitle")}
                </p>

                <div className="mt-6 flex items-center justify-center gap-3 text-sm">
                  <span className="font-display text-2xl font-bold text-accent-teal-dark">
                    {t("hero.price")}
                  </span>
                  <span className="text-text-dark-muted">{t("hero.priceNote")}</span>
                </div>

                <Link href="/contact" className="btn-primary mt-8 inline-flex">
                  <span className="btn-label">{t("hero.cta")}</span>
                  <span className="btn-arrow">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
            <div className="h-[500px] w-[800px] rounded-full bg-accent-teal/5 blur-3xl" />
          </div>
        </section>

        {/* ─── Probleemstelling ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl">
                <p className="section-label-dark">{t("probleem.label")}</p>
                <h2 className="mt-4 font-display text-2xl font-bold text-text-dark sm:text-3xl">
                  {t("probleem.title")}{" "}
                  <span className="gradient-text">{t("probleem.titleHighlight")}</span>
                </h2>
                <div className="mt-6 space-y-4 text-text-dark-secondary">
                  <p>{t("probleem.desc1")}</p>
                  <p className="font-semibold text-text-dark">
                    {t("probleem.desc2")}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── 10 dimensies ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">{t("dimensies.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("dimensies.title")}
                </h2>
                <p className="mt-4 text-text-dark-secondary">
                  {t("dimensies.subtitle")}
                </p>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {dimensionItems.map((d, i) => (
                <FadeIn key={d.num} delay={i * 0.05}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border-light-mode bg-bg-light p-4 transition-all duration-300 hover:shadow-md hover:shadow-black/5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-teal/10 font-display text-sm font-bold text-accent-teal">
                      {d.num}
                    </span>
                    <div>
                      <p className="font-display font-semibold text-text-dark">{d.name}</p>
                      <p className="text-sm text-text-dark-secondary">{d.question}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Wat je krijgt ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl">
                <p className="section-label-dark">{t("deliverables.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("deliverables.title")}
                </h2>

                <ul className="mt-10 space-y-3">
                  {deliverableItems.map((item, i) => (
                    <FadeIn key={item} delay={i * 0.05}>
                      <li className="flex items-start gap-3 text-text-dark-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal-dark" />
                        {item}
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── AI HIGHLIGHTS ─── */}
        <AiHighlights
          label={t("aiHighlights.label")}
          title={t("aiHighlights.title")}
          items={aiItems}
        />

        {/* ─── Hoe het werkt (tijdlijn) ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <p className="section-label-dark">{t("tijdlijn.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("tijdlijn.title")}
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-2xl grid gap-8 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="card-light h-full">
                  <p className="section-label-dark">{t("tijdlijn.week1.label")}</p>
                  <ul className="mt-6 space-y-3">
                    {week1Items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-dark-secondary"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-teal-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="card-light h-full">
                  <p className="section-label-dark">{t("tijdlijn.week2.label")}</p>
                  <ul className="mt-6 space-y-3">
                    {week2Items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-dark-secondary"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-teal-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── Garantie ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <ShieldCheck size={48} className="mx-auto text-accent-teal-dark" />
                <h3 className="mt-6 font-display text-2xl font-bold text-text-dark">
                  {t("garantie.title")}
                </h3>
                <p className="mt-4 text-xl font-semibold text-text-dark">
                  {t("garantie.headline")}
                </p>
                <p className="mt-4 text-text-dark-secondary">
                  {t("garantie.desc")}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Waarom betaald? ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl">
                <p className="section-label-dark">{t("waaromBetaald.label")}</p>
                <h2 className="mt-4 font-display text-2xl font-bold text-text-dark sm:text-3xl">
                  {t("waaromBetaald.title")}
                </h2>
                <p className="mt-4 text-text-dark-secondary">
                  {t("waaromBetaald.desc")}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl">
              <FadeIn>
                <p className="section-label-dark">{t("faq.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("faq.title")}
                </h2>
              </FadeIn>

              <div className="mt-12 space-y-4">
                {faqItems.map((faq, i) => (
                  <FadeIn key={faq.q} delay={i * 0.1}>
                    <details className="group rounded-xl border border-border-light-mode bg-white px-6 py-5 cursor-pointer transition-all hover:shadow-sm">
                      <summary className="flex items-center justify-between gap-4 font-display text-base font-semibold text-text-dark [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <ChevronDown
                          size={18}
                          className="shrink-0 text-text-dark-muted transition-transform duration-300 group-open:rotate-180"
                        />
                      </summary>
                      <p className="mt-4 text-sm text-text-dark-secondary">{faq.a}</p>
                    </details>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <Link href="/contact" className="btn-primary">
                  <span className="btn-label">{t("cta.cta")}</span>
                  <span className="btn-arrow">
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <p className="mt-4 text-sm text-text-dark-muted">
                  {t("cta.ctaSubtext")}{" "}
                  <a
                    href="mailto:tim@accelr.nl"
                    className="text-accent-teal-dark hover:underline"
                  >
                    tim@accelr.nl
                  </a>
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
