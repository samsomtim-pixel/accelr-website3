import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, ChevronDown } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("aiAutomation");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      images: [{ url: "https://www.accelr.nl/images/og-default.png", width: 1200, height: 630, alt: "Accelr" }],
      url: "https://www.accelr.nl/ai-automation",
    },
  };
}

export default async function AiAutomationPage() {
  const t = await getTranslations("aiAutomation");
  const tc = await getTranslations("common");

  const deliverables = t.raw("deliverables.items") as Array<{
    num: string;
    title: string;
    desc: string;
  }>;
  const aiChangeCards = t.raw("aiChange.cards") as Array<{
    title: string;
    desc: string;
  }>;
  const steps = t.raw("steps.items") as Array<{
    num: string;
    title: string;
    desc: string;
  }>;
  const voorJouItems = t.raw("voorJou") as string[];
  const faqItems = t.raw("faq") as Array<{ q: string; a: string }>;

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ─── SECTIE 1: HERO ─── */}
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn direction="none">
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">{t("hero.label")}</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  {t("hero.title")}
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                  {t("hero.subtitle")}
                </p>

                <div className="mt-10">
                  <Link href="/de-scan" className="btn-primary">
                    <span className="btn-label">{t("hero.cta")}</span>
                    <span className="btn-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
            <div className="h-[500px] w-[800px] rounded-full bg-accent-teal/5 blur-3xl" />
          </div>
        </section>

        {/* ─── SECTIE 2: HET PROBLEEM ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl">
                <h2 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("probleem.title")}
                </h2>

                <div className="mt-8 space-y-4 text-lg text-text-dark-secondary leading-relaxed">
                  {(
                    t.raw("probleem.paragraphs") as string[]
                  ).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── SECTIE 3: WAT JE KRIJGT ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("deliverables.title")}
              </h3>
            </FadeIn>

            <div className="mt-12 space-y-0">
              {deliverables.map((item, i) => (
                <FadeIn key={item.num} delay={i * 0.1}>
                  <div
                    className={`grid items-start gap-6 py-10 lg:grid-cols-[80px_1fr] ${
                      i < deliverables.length - 1
                        ? "border-b border-border-light-mode"
                        : ""
                    }`}
                  >
                    <span className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="font-display text-xl font-bold text-text-dark sm:text-2xl">
                        {item.title}
                      </h4>
                      <p className="mt-3 max-w-2xl text-text-dark-secondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTIE 4: WAT AI VERANDERT ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("aiChange.label")}</p>
              <h3 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("aiChange.title")}
              </h3>
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {aiChangeCards.map((card, i) => (
                <FadeIn key={card.title} delay={i * 0.1}>
                  <div className="card-light h-full flex flex-col">
                    <h4 className="font-display text-lg font-bold text-text-dark">
                      {card.title}
                    </h4>
                    <p className="mt-3 flex-1 text-sm text-text-dark-secondary leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTIE 5: HOE HET WERKT ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("steps.title")}
              </h3>
            </FadeIn>

            <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.1}>
                  <div className="card-light h-full">
                    <span className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                      {step.num}
                    </span>
                    <h4 className="mt-3 font-display text-lg font-bold text-text-dark">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm text-text-dark-secondary">
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTIE 6: VOOR WIE ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {tc("ditIsVoorJouAls")}
              </h3>
            </FadeIn>

            <div className="mt-8 space-y-3">
              {voorJouItems.map((item, i) => (
                <FadeIn key={item} delay={i * 0.08}>
                  <div className="flex items-start gap-3 rounded-xl border border-accent-teal/20 bg-accent-teal/5 px-5 py-4">
                    <span className="mt-0.5 text-accent-teal font-bold">&#10003;</span>
                    <p className="text-text-dark-secondary">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTIE 7: FAQ ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl">
              <FadeIn>
                <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {tc("veelgesteldeVragen")}
                </h3>
              </FadeIn>

              <div className="mt-12 space-y-3">
                {faqItems.map((faq, i) => (
                  <FadeIn key={faq.q} delay={i * 0.08}>
                    <details className="group rounded-xl border border-border-light-mode bg-bg-light px-6 py-5 cursor-pointer transition-all hover:shadow-sm">
                      <summary className="flex items-center justify-between gap-4 font-display text-base font-semibold text-text-dark [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <ChevronDown
                          size={18}
                          className="shrink-0 text-text-dark-muted transition-transform duration-300 group-open:rotate-180"
                        />
                      </summary>
                      <p className="mt-4 text-sm text-text-dark-secondary leading-relaxed">
                        {faq.a}
                      </p>
                    </details>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTIE 8: CTA ─── */}
        <section className="bg-bg-light py-24 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("cta.title")}
                </h2>
                <p className="mt-6 text-lg text-text-dark-secondary">
                  {t("cta.desc")}
                </p>

                <div className="mt-10">
                  <Link href="/de-scan" className="btn-primary">
                    <span className="btn-label">
                      {t("cta.ctaLabel")}
                    </span>
                    <span className="btn-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>

                <p className="mt-4 text-sm text-text-dark-muted">
                  {t("cta.subtitle")}
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
