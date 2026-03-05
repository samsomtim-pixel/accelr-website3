import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "resultaten" });

  return {
    title: `Case Study: ${t("caseStudyA.name")} | ${t("caseStudyA.headline")} | Accelr`,
    description: t("caseStudyA.headline"),
    openGraph: {
      title: `Case Study: ${t("caseStudyA.name")} | Accelr`,
      description: t("caseStudyA.headline"),
      images: [{ url: "https://accelr.nl/images/og-default.png", width: 1200, height: 630, alt: "Accelr" }],
    },
  };
}

export default async function BedrijfAPage() {
  const t = await getTranslations("resultaten");

  const maand1Items = t.raw("caseStudyA.maand1Items") as string[];
  const maand2Items = t.raw("caseStudyA.maand2Items") as string[];
  const maand5Items = t.raw("caseStudyA.maand5Items") as string[];
  const tableRows = t.raw("caseStudyA.tableRows") as Array<{
    metric: string;
    voor: string;
    na: string;
    verschil: string;
  }>;

  return (
    <>
      <Navbar />
      <main className="bg-bg-light">
        {/* Hero Section */}
        <section className="container-wide pt-32 pb-12">
          <FadeIn>
            <Link
              href="/resultaten"
              className="inline-flex items-center gap-2 text-accent-teal-dark hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t("backLink")}</span>
            </Link>
            <div className="inline-block px-3 py-1 bg-accent-teal-dark/10 text-accent-teal-dark text-sm font-medium rounded-full mb-6">
              {t("caseStudyA.badge")}
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-text-dark mb-6">
              {t("caseStudyA.name")}
            </h1>
            <div className="text-3xl md:text-4xl font-display text-accent-teal-dark">
              {t("caseStudyA.headline")}
            </div>
          </FadeIn>
        </section>

        {/* De Uitdaging */}
        <section className="container-wide py-16">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="section-label-dark mb-6">
                {t("caseStudyA.uitdaging")}
              </div>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                <p className="text-xl text-text-dark leading-relaxed">
                  {t("caseStudyA.uitdagingDesc")}
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* De Aanpak */}
        <section className="container-wide py-16">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="section-label-dark mb-6">
                {t("caseStudyA.aanpak")}
              </div>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                <div className="mb-8">
                  <p className="text-xl font-display text-text-dark mb-8">
                    {t("caseStudyA.opdracht")}
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Maand 1 */}
                  <div>
                    <h3 className="font-display text-2xl text-text-dark mb-4">
                      {t("caseStudyA.maand1Title")}
                    </h3>
                    <ul className="space-y-3 text-text-dark-secondary">
                      {maand1Items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent-teal-dark font-bold flex-shrink-0">
                            &rarr;
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Maand 2-4 */}
                  <div>
                    <h3 className="font-display text-2xl text-text-dark mb-4">
                      {t("caseStudyA.maand2Title")}
                    </h3>
                    <ul className="space-y-3 text-text-dark-secondary">
                      {maand2Items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent-teal-dark font-bold flex-shrink-0">
                            &rarr;
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Maand 5-9 */}
                  <div>
                    <h3 className="font-display text-2xl text-text-dark mb-4">
                      {t("caseStudyA.maand5Title")}
                    </h3>
                    <ul className="space-y-3 text-text-dark-secondary">
                      {maand5Items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent-teal-dark font-bold flex-shrink-0">
                            &rarr;
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Resultaten */}
        <section className="container-wide py-16">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="section-label-dark mb-6">
                {t("caseStudyA.resultatenTitle")}
              </div>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 pr-4 font-display text-text-dark">
                        {t("caseStudyA.tableHeaders.metric")}
                      </th>
                      <th className="text-left py-4 px-4 font-display text-text-dark">
                        {t("caseStudyA.tableHeaders.voor")}
                      </th>
                      <th className="text-left py-4 px-4 font-display text-text-dark">
                        {t("caseStudyA.tableHeaders.na")}
                      </th>
                      <th className="text-left py-4 pl-4 font-display text-accent-teal-dark">
                        {t("caseStudyA.tableHeaders.verschil")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-text-dark-secondary">
                    {tableRows.map((row, i) => (
                      <tr
                        key={i}
                        className={
                          i < tableRows.length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }
                      >
                        <td
                          className={`py-4 pr-4 ${i === tableRows.length - 1 ? "font-display text-lg" : ""}`}
                        >
                          {row.metric}
                        </td>
                        <td
                          className={`py-4 px-4 ${i === tableRows.length - 1 ? "font-display text-lg" : ""}`}
                        >
                          {row.voor}
                        </td>
                        <td
                          className={`py-4 px-4 ${i === tableRows.length - 1 ? "font-display text-lg" : ""}`}
                        >
                          {row.na}
                        </td>
                        <td
                          className={`py-4 pl-4 font-bold text-accent-teal-dark ${i === tableRows.length - 1 ? "font-display text-lg" : ""}`}
                        >
                          {row.verschil}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Quote */}
        <section className="container-wide py-16">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="bg-accent-teal-dark/5 border-l-4 border-accent-teal-dark rounded-r-2xl p-8 md:p-12">
                <blockquote className="text-xl md:text-2xl text-text-dark italic leading-relaxed mb-6">
                  &ldquo;{t("caseStudyA.quoteDetailed")}&rdquo;
                </blockquote>
                <div className="text-text-dark-secondary">
                  <div className="font-medium text-text-dark">
                    {t("caseStudyA.quoteAuthor")}
                  </div>
                  <div>{t("caseStudyA.quoteRole")}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CTA Section */}
        <section className="container-wide py-24">
          <FadeIn>
            <div className="bg-white rounded-2xl p-12 md:p-16 text-center shadow-lg">
              <h2 className="font-display text-3xl md:text-4xl text-text-dark mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-xl text-text-dark-secondary mb-8 max-w-2xl mx-auto">
                {t("cta.desc")}
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                {t("cta.cta")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
