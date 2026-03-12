import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Check, X as XIcon, ChevronDown } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "deMotor.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [{ url: "https://www.accelr.nl/images/og-default.png", width: 1200, height: 630, alt: "Accelr" }],
      url: "https://www.accelr.nl/de-motor",
    },
  };
}

export default async function DeMotorPage() {
  const t = await getTranslations("deMotor");
  const tc = await getTranslations("common");

  const tiers = t.raw("tiers.cards") as Array<{
    title: string;
    price: string;
    priceSuffix: string;
    hours: string;
    features: string[];
    highlight?: boolean;
  }>;
  const comparisonRows = t.raw("vergelijking.rows") as Array<{
    aspect: string;
    light: string;
    standard: string;
    intensive: string;
  }>;
  const voorWieItems = t.raw("voorWie.voorWieItems") as string[];
  const nietVoorWieItems = t.raw("voorWie.nietVoorWieItems") as string[];
  const faqItems = t.raw("faq.items") as Array<{ q: string; a: string }>;
  const voorwaarden = t.raw("voorwaarden.items") as string[];

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

                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact" className="btn-primary">
                    <span className="btn-label">{t("hero.cta")}</span>
                    <span className="btn-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                  <Link href="/de-scan" className="btn-secondary-dark">
                    {t("hero.ctaSecondary")}
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
            <div className="h-[500px] w-[800px] rounded-full bg-accent-teal/5 blur-3xl" />
          </div>
        </section>

        {/* ─── Het probleem ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl">
                <p className="section-label-dark">{t("probleem.label")}</p>
                <h2 className="mt-4 font-display text-2xl font-bold text-text-dark sm:text-3xl">
                  {t("probleem.title")}
                </h2>
                <p className="mt-6 text-text-dark-secondary leading-relaxed">
                  {t("probleem.desc")}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── 3 Tiers ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">{t("tiers.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("tiers.title")}
                </h2>
                <p className="mt-4 text-text-dark-secondary">
                  {t("tiers.subtitle")}
                </p>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-5xl grid gap-6 md:grid-cols-3">
              {tiers.map((tier, i) => (
                <FadeIn key={tier.title} delay={i * 0.1}>
                  <div
                    className={`relative h-full rounded-2xl border p-6 sm:p-8 transition-all ${
                      tier.highlight
                        ? "border-accent-teal ring-2 ring-accent-teal/20 bg-accent-teal/5"
                        : "border-border-light-mode bg-bg-light"
                    }`}
                  >
                    {tier.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-teal-dark px-3 py-1 text-xs font-bold text-white">
                        {t("tiers.popular")}
                      </span>
                    )}
                    <h3 className="font-display text-xl font-bold text-text-dark">
                      {tier.title}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-accent-teal-dark">
                        {tier.price}
                      </span>
                      <span className="text-sm text-text-dark-muted">{tier.priceSuffix}</span>
                    </div>
                    <p className="mt-2 text-sm text-text-dark-muted">{tier.hours}</p>

                    <ul className="mt-6 space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-text-dark-secondary">
                          <Check size={16} className="mt-0.5 shrink-0 text-accent-teal-dark" strokeWidth={3} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="mt-8 block w-full btn-primary text-center">
                      <span className="btn-label">{t("tiers.cta")}</span>
                      <span className="btn-arrow"><ArrowRight size={16} /></span>
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Vergelijkingstabel ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("vergelijking.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("vergelijking.title")}
              </h2>
            </FadeIn>

            {/* Desktop table */}
            <FadeIn delay={0.15}>
              <div className="mt-12 hidden lg:block overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-border-light-mode">
                      <th className="pb-4 pr-4 font-display text-sm font-semibold text-text-dark-muted w-[180px]">&nbsp;</th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        {t("vergelijking.headers.light")}
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-bold text-accent-teal-dark">
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-accent-teal" />
                          {t("vergelijking.headers.standard")}
                        </span>
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        {t("vergelijking.headers.intensive")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.aspect} className={i < comparisonRows.length - 1 ? "border-b border-border-light-mode/50" : ""}>
                        <td className="py-4 pr-4 font-medium text-text-dark">{row.aspect}</td>
                        <td className="py-4 px-4 text-text-dark-secondary">{row.light}</td>
                        <td className="py-4 px-4 rounded-lg bg-accent-teal/5 text-text-dark font-medium">
                          <span className="flex items-start gap-2">
                            <Check size={16} className="mt-0.5 shrink-0 text-accent-teal-dark" strokeWidth={3} />
                            {row.standard}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-text-dark-secondary">{row.intensive}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Mobile stacked */}
            <div className="mt-12 space-y-4 lg:hidden">
              {comparisonRows.map((row, i) => (
                <FadeIn key={row.aspect} delay={i * 0.06}>
                  <div className="rounded-2xl border border-border-light-mode bg-white p-5">
                    <p className="font-display text-sm font-bold text-text-dark">{row.aspect}</p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-start gap-2 rounded-lg bg-accent-teal/5 p-2.5">
                        <Check size={14} className="mt-0.5 shrink-0 text-accent-teal-dark" strokeWidth={3} />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-accent-teal-dark">
                            {t("vergelijking.headers.standard")}
                          </p>
                          <p className="text-sm text-text-dark">{row.standard}</p>
                        </div>
                      </div>
                      {[
                        { label: t("vergelijking.headers.light"), value: row.light },
                        { label: t("vergelijking.headers.intensive"), value: row.intensive },
                      ].map((alt) => (
                        <div key={alt.label} className="flex items-start gap-2 p-2.5">
                          <span className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          <div>
                            <p className="text-[10px] font-medium uppercase tracking-wider text-text-dark-muted">{alt.label}</p>
                            <p className="text-sm text-text-dark-secondary">{alt.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Voor wie / Niet voor wie ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("voorWie.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("voorWie.title")}
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="h-full rounded-2xl border border-accent-teal/20 bg-accent-teal/5 p-6 sm:p-8">
                  <h3 className="font-display text-lg font-bold text-text-dark">
                    {t("voorWie.voorWieTitle")}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {voorWieItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-dark-secondary">
                        <Check size={18} className="mt-0.5 shrink-0 text-accent-teal" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="h-full rounded-2xl border border-red-200 bg-red-50 p-6 sm:p-8">
                  <h3 className="font-display text-lg font-bold text-text-dark">
                    {t("voorWie.nietVoorWieTitle")}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {nietVoorWieItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-dark-secondary">
                        <XIcon size={18} className="mt-0.5 shrink-0 text-red-400" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── Voorwaarden ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl">
                <p className="section-label-dark">{t("voorwaarden.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("voorwaarden.title")}
                </h2>
                <ul className="mt-8 space-y-3">
                  {voorwaarden.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-dark-secondary">
                      <Check size={18} className="mt-0.5 shrink-0 text-accent-teal-dark" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl">
              <FadeIn>
                <p className="section-label-dark">{t("faq.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {tc("veelgesteldeVragen")}
                </h2>
              </FadeIn>

              <div className="mt-12 space-y-4">
                {faqItems.map((faq, i) => (
                  <FadeIn key={faq.q} delay={i * 0.1}>
                    <details className="group rounded-xl border border-border-light-mode bg-bg-light px-6 py-5 cursor-pointer transition-all hover:shadow-sm">
                      <summary className="flex items-center justify-between gap-4 font-display text-base font-semibold text-text-dark [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <ChevronDown size={18} className="shrink-0 text-text-dark-muted transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <p className="mt-4 text-sm text-text-dark-secondary">{faq.a}</p>
                    </details>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Footer ─── */}
        <section className="bg-bg-light py-24 sm:py-32 lg:py-40">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("ctaFooter.title")}
                </h2>
                <p className="mt-4 text-lg text-text-dark-secondary">
                  {t("ctaFooter.desc")}
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact" className="btn-primary">
                    <span className="btn-label">{t("ctaFooter.cta")}</span>
                    <span className="btn-arrow"><ArrowRight size={16} /></span>
                  </Link>
                  <Link href="/de-scan" className="btn-secondary-dark">
                    {tc("startMetDeScan")}
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
