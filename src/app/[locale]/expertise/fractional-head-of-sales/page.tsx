import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Check, X as XIcon } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("fractional");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      images: ["/images/og-accelr.png"],
      url: "https://accelr.nl/expertise/fractional-head-of-sales",
    },
  };
}

/* Case study hrefs (non-text, kept locally) */
const caseStudyHrefs = [
  "/resultaten/bedrijf-a",
  "/resultaten/bedrijf-b",
  "/resultaten/bedrijf-c",
];

export default async function FractionalPage() {
  const t = await getTranslations("fractional");
  const tc = await getTranslations("common");

  const comparisonRows = t.raw("vergelijking.rows") as Array<{
    aspect: string;
    fulltime: string;
    interim: string;
    accelr: string;
  }>;
  const timelineSteps = t.raw("traject.steps") as Array<{
    num: string;
    period: string;
    title: string;
    desc: string;
  }>;
  const voorWieItems = t.raw("voorWie.voorWieItems") as string[];
  const nietVoorWieItems = t.raw("voorWie.nietVoorWieItems") as string[];
  const features = t.raw("investering.features") as string[];
  const caseStudies = t.raw("resultaten.caseStudies") as Array<{
    title: string;
    result: string;
  }>;

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ─── Hero ─── */}
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  {t("hero.title")}{" "}
                  <span className="gradient-text">{t("hero.titleHighlight")}</span>
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                  {t("hero.subtitle")}
                </p>

                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/de-scan" className="btn-primary">
                    <span className="btn-label">{t("hero.cta")}</span>
                    <span className="btn-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                  <Link href="/contact" className="btn-secondary-dark">
                    {t("hero.ctaSecondary")}
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Wat is Fractional? ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">{t("watIsHet.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("watIsHet.title")}
                </h2>
                <p className="mt-6 text-lg text-text-dark-secondary leading-relaxed">
                  {t("watIsHet.desc")}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Vergelijkingstabel (3 columns) ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
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
                      <th className="pb-4 pr-4 font-display text-sm font-semibold text-text-dark-muted w-[180px]">
                        &nbsp;
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        {t("vergelijking.headers.fulltimeHos")}
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        {t("vergelijking.headers.interim")}
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-bold text-accent-teal-dark">
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-accent-teal" />
                          {t("vergelijking.headers.accelrFractional")}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr
                        key={row.aspect}
                        className={
                          i < comparisonRows.length - 1
                            ? "border-b border-border-light-mode/50"
                            : ""
                        }
                      >
                        <td className="py-4 pr-4 font-medium text-text-dark">
                          {row.aspect}
                        </td>
                        <td className="py-4 px-4 text-text-dark-secondary">
                          {row.fulltime}
                        </td>
                        <td className="py-4 px-4 text-text-dark-secondary">
                          {row.interim}
                        </td>
                        <td className="py-4 px-4 rounded-lg bg-accent-teal/5 text-text-dark font-medium">
                          <span className="flex items-start gap-2">
                            <Check
                              size={16}
                              className="mt-0.5 shrink-0 text-accent-teal-dark"
                              strokeWidth={3}
                            />
                            {row.accelr}
                          </span>
                        </td>
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
                  <div className="rounded-2xl border border-border-light-mode bg-bg-light p-5">
                    <p className="font-display text-sm font-bold text-text-dark">
                      {row.aspect}
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-start gap-2 rounded-lg bg-accent-teal/5 p-2.5">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-accent-teal-dark"
                          strokeWidth={3}
                        />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-accent-teal-dark">
                            {t("vergelijking.headers.accelrFractional")}
                          </p>
                          <p className="text-sm text-text-dark">{row.accelr}</p>
                        </div>
                      </div>
                      {[
                        { label: t("vergelijking.headers.fulltimeHos"), value: row.fulltime },
                        { label: t("vergelijking.headers.interim"), value: row.interim },
                      ].map((alt) => (
                        <div key={alt.label} className="flex items-start gap-2 p-2.5">
                          <span className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          <div>
                            <p className="text-[10px] font-medium uppercase tracking-wider text-text-dark-muted">
                              {alt.label}
                            </p>
                            <p className="text-sm text-text-dark-secondary">
                              {alt.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-dark-secondary">
                {t("vergelijking.footnote")}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ─── Wat ik concreet doe ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("traject.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("traject.title")}
              </h2>
            </FadeIn>

            <div className="mt-16 space-y-0">
              {timelineSteps.map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.1}>
                  <div
                    className={`grid items-start gap-6 py-10 lg:grid-cols-[80px_1fr] ${
                      i < timelineSteps.length - 1
                        ? "border-b border-border-light-mode"
                        : ""
                    }`}
                  >
                    <span className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                      {step.num}
                    </span>
                    <div>
                      <p className="text-xs font-medium text-accent-teal-dark uppercase tracking-wider">
                        {step.period}
                      </p>
                      <h4 className="mt-2 font-display text-xl font-bold text-text-dark sm:text-2xl">
                        {step.title}
                      </h4>
                      <p className="mt-3 max-w-2xl text-text-dark-secondary leading-relaxed">
                        {step.desc}
                      </p>
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
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-text-dark-secondary"
                      >
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-accent-teal"
                          strokeWidth={3}
                        />
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
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-text-dark-secondary"
                      >
                        <XIcon
                          size={18}
                          className="mt-0.5 shrink-0 text-red-400"
                          strokeWidth={2.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── Investering ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">{t("investering.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("investering.title")}
                </h2>

                <div className="mt-10 card-light">
                  <div className="space-y-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-3xl font-bold text-accent-teal-dark">
                        {t("investering.price")}
                      </span>
                      <span className="text-text-dark-muted">{t("investering.priceSuffix")}</span>
                    </div>

                    <ul className="space-y-3 text-text-dark-secondary">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            size={18}
                            className="mt-0.5 shrink-0 text-accent-teal-dark"
                            strokeWidth={3}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Resultaten ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("resultaten.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("resultaten.title")}
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {caseStudies.map((study, i) => (
                <FadeIn key={study.title} delay={i * 0.1}>
                  <Link
                    href={caseStudyHrefs[i]}
                    className="group block h-full rounded-2xl border border-border-light-mode bg-bg-light p-6 transition-all hover:border-accent-teal/40 hover:bg-accent-teal/5"
                  >
                    <h3 className="font-display text-lg font-bold text-text-dark">
                      {study.title}
                    </h3>
                    <p className="mt-3 text-2xl font-bold text-accent-teal-dark">
                      {study.result}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-accent-teal-dark group-hover:gap-3 transition-all">
                      <span>{tc("leesMeer")}</span>
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </FadeIn>
              ))}
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
                    <span className="btn-arrow">
                      <ArrowRight size={16} />
                    </span>
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
