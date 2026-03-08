import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Check } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "deBouw.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [{ url: "https://accelr.nl/images/og-default.png", width: 1200, height: 630, alt: "Accelr" }],
      url: "https://accelr.nl/de-bouw",
    },
  };
}

/* Links for the bouwblok detail pages */
const bouwblokHrefs = [
  "/sales-strategie",
  "/outbound-leadgeneratie",
  "/crm-implementatie",
  "/sales-enablement",
] as const;

export default async function DeBouwPage() {
  const t = await getTranslations("deBouw");
  const tc = await getTranslations("common");

  const packages = t.raw("pakketten.cards") as Array<{
    title: string;
    price: string;
    priceSuffix: string;
    duration: string;
    highlight?: boolean;
    bouwblokken: string[];
  }>;
  const bouwblokken = t.raw("bouwblokken.items") as Array<{
    title: string;
    desc: string;
  }>;
  const matrixRows = t.raw("matrix.rows") as Array<{
    name: string;
    fundament: boolean;
    groeimachine: boolean;
    transformatie: boolean;
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
                <p className="section-label-dark">{t("hero.label")}</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  {t("hero.title")}{" "}
                  <span className="gradient-text">{t("hero.titleHighlight")}</span>
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                  {t("hero.subtitle")}
                </p>

                <Link href="/de-scan" className="btn-primary mt-8 inline-flex">
                  <span className="btn-label">{t("hero.cta")}</span>
                  <span className="btn-arrow"><ArrowRight size={16} /></span>
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
            <div className="h-[500px] w-[800px] rounded-full bg-accent-teal/5 blur-3xl" />
          </div>
        </section>

        {/* ─── 3 Pakketten ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">{t("pakketten.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("pakketten.title")}
                </h2>
                <p className="mt-4 text-text-dark-secondary">
                  {t("pakketten.subtitle")}
                </p>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-5xl grid gap-6 md:grid-cols-3">
              {packages.map((pkg, i) => (
                <FadeIn key={pkg.title} delay={i * 0.1}>
                  <div
                    className={`relative h-full rounded-2xl border p-6 sm:p-8 ${
                      pkg.highlight
                        ? "border-accent-teal ring-2 ring-accent-teal/20 bg-accent-teal/5"
                        : "border-border-light-mode bg-white"
                    }`}
                  >
                    {pkg.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-teal-dark px-3 py-1 text-xs font-bold text-white">
                        {t("pakketten.popular")}
                      </span>
                    )}
                    <h3 className="font-display text-xl font-bold text-text-dark">
                      {pkg.title}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-accent-teal-dark">
                        {pkg.price}
                      </span>
                      <span className="text-sm text-text-dark-muted">{pkg.priceSuffix}</span>
                    </div>
                    <p className="mt-2 text-sm text-text-dark-muted">{pkg.duration}</p>

                    <ul className="mt-6 space-y-3">
                      {pkg.bouwblokken.map((blok) => (
                        <li key={blok} className="flex items-start gap-3 text-sm text-text-dark-secondary">
                          <Check size={16} className="mt-0.5 shrink-0 text-accent-teal-dark" strokeWidth={3} />
                          {blok}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="mt-8 block w-full btn-primary text-center">
                      <span className="btn-label">{t("pakketten.cta")}</span>
                      <span className="btn-arrow"><ArrowRight size={16} /></span>
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-dark-muted">
                {t("pakketten.note")}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ─── Vergelijkingsmatrix ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">{t("matrix.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("matrix.title")}
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mx-auto mt-12 max-w-3xl overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-border-light-mode">
                      <th className="pb-4 pr-4 font-display text-sm font-semibold text-text-dark-muted">{t("matrix.headers.bouwblok")}</th>
                      <th className="pb-4 px-4 text-center font-display text-sm font-medium text-text-dark-muted">{t("matrix.headers.fundament")}</th>
                      <th className="pb-4 px-4 text-center font-display text-sm font-bold text-accent-teal-dark">{t("matrix.headers.groeimachine")}</th>
                      <th className="pb-4 px-4 text-center font-display text-sm font-medium text-text-dark-muted">{t("matrix.headers.transformatie")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matrixRows.map((row, i) => (
                      <tr key={row.name} className={i < matrixRows.length - 1 ? "border-b border-border-light-mode/50" : ""}>
                        <td className="py-4 pr-4 font-medium text-text-dark">{row.name}</td>
                        <td className="py-4 px-4 text-center">
                          {row.fundament ? <Check size={18} className="mx-auto text-accent-teal-dark" strokeWidth={3} /> : <span className="text-text-dark-muted">\u2014</span>}
                        </td>
                        <td className="py-4 px-4 text-center bg-accent-teal/5 rounded-lg">
                          {row.groeimachine ? <Check size={18} className="mx-auto text-accent-teal-dark" strokeWidth={3} /> : <span className="text-text-dark-muted">\u2014</span>}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {row.transformatie ? <Check size={18} className="mx-auto text-accent-teal-dark" strokeWidth={3} /> : <span className="text-text-dark-muted">\u2014</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Ook los beschikbaar ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">{t("bouwblokken.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("bouwblokken.title")}
                </h2>
                <p className="mt-4 text-text-dark-secondary">
                  {t("bouwblokken.subtitle")}
                </p>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-4xl grid gap-6 sm:grid-cols-2">
              {bouwblokken.map((blok, i) => (
                <FadeIn key={blok.title} delay={i * 0.1}>
                  <Link
                    href={bouwblokHrefs[i]}
                    className="group block h-full rounded-2xl border border-border-light-mode bg-white p-6 transition-all hover:border-accent-teal/40 hover:shadow-md"
                  >
                    <h3 className="font-display text-lg font-bold text-text-dark group-hover:text-accent-teal-dark transition-colors">
                      {blok.title}
                    </h3>
                    <p className="mt-3 text-sm text-text-dark-secondary">{blok.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-accent-teal-dark group-hover:gap-3 transition-all">
                      <span>{tc("ontdekMeer")}</span>
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium text-text-dark-muted">
                {t("bouwblokken.priceNote")}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ─── CTA Footer ─── */}
        <section className="bg-white py-24 sm:py-32 lg:py-40">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("ctaFooter.title")}
                </h2>
                <p className="mt-4 text-lg text-text-dark-secondary">
                  {t("ctaFooter.desc")}
                </p>
                <p className="mt-2 text-sm font-semibold text-accent-teal-dark">
                  {t("ctaFooter.scanNote")}
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/de-scan" className="btn-primary">
                    <span className="btn-label">{t("ctaFooter.ctaScan")}</span>
                    <span className="btn-arrow"><ArrowRight size={16} /></span>
                  </Link>
                  <Link href="/contact" className="btn-secondary-dark">
                    {t("ctaFooter.ctaContact")}
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
