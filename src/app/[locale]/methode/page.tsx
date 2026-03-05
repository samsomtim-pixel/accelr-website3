import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import ExpertiseMapping from "@/components/ExpertiseMapping";
import { ArrowRight, MapPin } from "lucide-react";
import { PILLAR_COLORS } from "@/lib/constants";

const P = PILLAR_COLORS;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "methode.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [{ url: "https://accelr.nl/images/og-default.png", width: 1200, height: 630, alt: "Accelr" }],
      url: "https://accelr.nl/methode",
    },
  };
}

export default async function MethodePage() {
  const t = await getTranslations("methode");

  const compoundRows = t.raw("compoundTable.rows") as Array<{
    pijler: string;
    effect: string;
    bron: string;
  }>;
  const toepassingCards = t.raw("toepassing.cards") as Array<{
    title: string;
    desc: string;
  }>;
  const inHetKortItems = t.raw("inHetKort.items") as Array<{
    num: string;
    title: string;
    desc: string;
  }>;
  const profielItems = t.raw("voorWie.profielItems") as string[];
  const hoeHetWerktSteps = t.raw("hoeHetWerkt.steps") as Array<{
    num: string;
    title: string;
    desc?: string;
    result?: string;
    resultDesc?: string;
    price?: string;
    desc1?: string;
    desc2?: string;
    typischeTrajecten?: string;
    trajectItems?: string[];
    overdracht?: string;
    items?: string[];
    details?: string;
    note?: string;
  }>;

  /* Image data that can't live in JSON */
  const stepImages = [
    { src: "/images/analytics-screen.jpg", alt: "Analytics dashboard voor sales diagnostiek" },
    { src: "/images/whiteboard-session.jpg", alt: "Planning sessie met whiteboard en post-its" },
    { src: "/images/tech-setup.jpg", alt: "Team bouwt technische oplossingen samen" },
    { src: "/images/growth-celebration.jpg", alt: "Team werkt samen aan doorlopende groei" },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ═══ SECTIE 1 — HERO ═══ */}
        <section className="bg-white py-24 sm:py-32 lg:py-40 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn direction="none">
              <div className="mx-auto max-w-4xl">
                <p className="section-label-dark">{t("hero.label")}</p>

                <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight text-text-dark sm:text-6xl lg:text-[80px]">
                  {t("hero.title")}
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-text-dark-secondary leading-relaxed">
                  {t("hero.subtitle")}
                </p>

                <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                  <Link
                    href="/de-scan"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-7 py-4 text-sm font-semibold text-bg-primary transition-all duration-300 hover:bg-accent-teal-hover hover:shadow-lg hover:shadow-accent-teal/25 hover:-translate-y-0.5"
                  >
                    {t("hero.cta")}
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-secondary-dark">
                    {t("hero.ctaSecondary")}
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 2 — INTRO + FORMULE + TABEL ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("intro.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
                {t("intro.title")}
              </h2>
            </FadeIn>

            <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
              {/* Left: shorter intro */}
              <FadeIn delay={0.1}>
                <div className="max-w-xl">
                  <p className="text-lg text-text-dark-secondary leading-relaxed">
                    {t("intro.p1")}
                  </p>
                  <p className="mt-4 text-lg text-text-dark-secondary leading-relaxed">
                    {t("intro.p2")}
                  </p>
                </div>
              </FadeIn>

              {/* Right: Team strategy photo */}
              <FadeIn delay={0.2} direction="right">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/team-strategy.jpg"
                    alt="Team werkt samen aan strategie"
                    width={960}
                    height={720}
                    className="h-full w-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>

            {/* De formule */}
            <FadeIn delay={0.3}>
              <div className="mt-16 rounded-2xl border border-border-light-mode bg-white p-8 sm:p-10">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-text-dark-muted">
                  {t("formule.label")}
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                  {/* Strategie */}
                  <span
                    className="rounded-full px-5 py-2.5 font-display text-base font-medium sm:text-lg"
                    style={{ color: P.strategy.color, backgroundColor: `${P.strategy.color}15`, border: `1.5px solid ${P.strategy.color}` }}
                  >
                    {t("formule.strategie")}
                  </span>
                  <span className="text-xl font-light text-text-dark-muted">&rarr;</span>
                  <span className="text-xl font-light text-text-dark-muted">(</span>
                  {/* Proces */}
                  <span
                    className="rounded-full px-5 py-2.5 font-display text-base font-medium sm:text-lg"
                    style={{ color: P.process.color, backgroundColor: `${P.process.color}15`, border: `1.5px solid ${P.process.color}` }}
                  >
                    {t("formule.proces")}
                  </span>
                  <span className="text-xl font-light text-text-dark-muted">&times;</span>
                  {/* People */}
                  <span
                    className="rounded-full px-5 py-2.5 font-display text-base font-medium sm:text-lg"
                    style={{ color: P.people.color, backgroundColor: `${P.people.color}15`, border: `1.5px solid ${P.people.color}` }}
                  >
                    {t("formule.people")}
                  </span>
                  <span className="text-xl font-light text-text-dark-muted">)</span>
                  <span className="text-xl font-light text-text-dark-muted">&times;</span>
                  {/* AI */}
                  <span
                    className="rounded-full px-5 py-2.5 font-display text-base font-medium sm:text-lg"
                    style={{ color: P.ai.color, backgroundColor: `${P.ai.color}15`, border: `1.5px solid ${P.ai.color}` }}
                  >
                    {t("formule.ai")}
                  </span>
                  <span className="text-xl font-light text-text-dark-muted">=</span>
                  {/* Result */}
                  <span className="rounded-full bg-accent-teal px-5 py-2.5 font-display text-base font-semibold text-white sm:text-lg">
                    {t("formule.result")}
                  </span>
                </div>

                <p className="mt-6 text-center text-text-dark-secondary">
                  {t("formule.desc")}
                </p>
              </div>
            </FadeIn>

            {/* Bron-tabel */}
            <FadeIn delay={0.4}>
              <div className="mx-auto mt-8 max-w-3xl overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border-light-mode">
                      <th className="pb-3 font-display font-semibold text-text-dark">
                        {t("compoundTable.headers.pijler")}
                      </th>
                      <th className="pb-3 font-display font-semibold text-text-dark">
                        {t("compoundTable.headers.effect")}
                      </th>
                      <th className="pb-3 font-display font-semibold text-text-dark">
                        {t("compoundTable.headers.bron")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {compoundRows.map((row) => (
                      <tr
                        key={row.pijler}
                        className="border-b border-border-light-mode/50"
                      >
                        <td className="py-3 text-text-dark">{row.pijler}</td>
                        <td className="py-3 font-semibold text-accent-teal-dark">
                          {row.effect}
                        </td>
                        <td className="py-3 text-text-dark-muted">
                          {row.bron}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 3 — EXPERTISE MAPPING ═══ */}
        <ExpertiseMapping />

        {/* ═══ SECTIE 4 — HOE HET FRAMEWORK WORDT TOEGEPAST ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("toepassing.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("toepassing.title")}
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {toepassingCards.map((card, i) => (
                <FadeIn key={card.title} delay={i * 0.1}>
                  <div className="card-light h-full flex flex-col">
                    <h3 className="font-display text-lg font-semibold text-text-dark">
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-text-dark-secondary leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 5 — IN HET KORT (3 deliverables) ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("inHetKort.title")}
              </h3>
            </FadeIn>

            <div className="mt-12 space-y-0">
              {inHetKortItems.map((item, i) => (
                <FadeIn key={item.num} delay={i * 0.1}>
                  <div
                    className={`grid items-start gap-6 py-10 lg:grid-cols-[80px_1fr] ${
                      i < inHetKortItems.length - 1 ? "border-b border-border-light-mode" : ""
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

        {/* ═══ SECTIE 6 — VOOR WIE ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("voorWie.title")}
              </h3>
            </FadeIn>

            <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-lg text-text-dark-secondary leading-relaxed">
                    {t("voorWie.desc1")}
                  </p>
                  <p className="mt-6 text-lg text-text-dark-secondary leading-relaxed">
                    {t("voorWie.desc2")}
                  </p>

                  <div className="mt-10">
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-text-dark-muted">
                      {t("voorWie.typischProfiel")}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {profielItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-text-dark-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal-dark" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="right">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/founder-working.jpg"
                    alt="Founders werken samen aan hun bedrijf"
                    width={960}
                    height={720}
                    className="h-full w-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 7 — HOE HET WERKT (4 stappen) ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("hoeHetWerkt.title")}
              </h3>
            </FadeIn>

            <div className="mt-16 space-y-0">
              {hoeHetWerktSteps.map((step, i) => {
                const isLast = i === hoeHetWerktSteps.length - 1;
                const img = stepImages[i];

                return (
                  <FadeIn key={step.num}>
                    <div
                      className={`grid items-start gap-8 py-12 lg:grid-cols-[1fr_1fr] ${
                        !isLast ? "border-b border-border-light-mode" : ""
                      }`}
                    >
                      <div>
                        <span className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                          {step.num}
                        </span>
                        <h4 className="mt-3 font-display text-2xl font-bold text-text-dark">
                          {step.title}
                        </h4>

                        {/* Step 1: desc + result + price */}
                        {step.desc && !step.typischeTrajecten && !step.items && (
                          <>
                            <p className="mt-4 text-text-dark-secondary leading-relaxed">
                              {step.desc}
                            </p>
                            {step.result && (
                              <p className="mt-4 text-text-dark-secondary leading-relaxed">
                                <span className="font-semibold text-text-dark">
                                  {step.result}
                                </span>{" "}
                                {step.resultDesc}
                              </p>
                            )}
                            {step.price && (
                              <p className="mt-6 text-sm font-semibold text-accent-teal-dark">
                                {step.price}
                              </p>
                            )}
                          </>
                        )}

                        {/* Step 2: desc1 + desc2 */}
                        {step.desc1 && (
                          <>
                            <p className="mt-4 text-text-dark-secondary leading-relaxed">
                              {step.desc1}
                            </p>
                            {step.desc2 && (
                              <p className="mt-4 text-text-dark-secondary leading-relaxed">
                                {step.desc2}
                              </p>
                            )}
                          </>
                        )}

                        {/* Step 3: desc + trajecten + overdracht + price */}
                        {step.typischeTrajecten && (
                          <>
                            <p className="mt-4 text-text-dark-secondary leading-relaxed">
                              {step.desc}
                            </p>
                            <div className="mt-4">
                              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-text-dark-muted">
                                {step.typischeTrajecten}
                              </p>
                              <ul className="mt-3 space-y-2">
                                {step.trajectItems?.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-2 text-sm text-text-dark-secondary"
                                  >
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal-dark" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {step.overdracht && (
                              <p className="mt-4 text-text-dark-secondary leading-relaxed">
                                {step.overdracht}
                              </p>
                            )}
                            {step.price && (
                              <p className="mt-6 text-sm font-semibold text-accent-teal-dark">
                                {step.price}
                              </p>
                            )}
                          </>
                        )}

                        {/* Step 4: desc + items + details + note */}
                        {step.items && (
                          <>
                            <p className="mt-4 text-text-dark-secondary leading-relaxed">
                              {step.desc}
                            </p>
                            <ul className="mt-4 space-y-2">
                              {step.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm text-text-dark-secondary"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal-dark" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            {step.details && (
                              <p className="mt-6 text-sm text-text-dark-muted">
                                {step.details}
                              </p>
                            )}
                            {step.note && (
                              <p className="mt-3 text-sm italic text-text-dark-secondary">
                                {step.note}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                      <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={960}
                          height={720}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 8 — CTA FOOTER ═══ */}
        <section className="bg-bg-secondary py-24 sm:py-32 lg:py-40">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  accelr.
                </p>
                <h2 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                  {t("ctaFooter.title")}
                </h2>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/de-scan"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-7 py-4 text-sm font-semibold text-bg-primary transition-all duration-300 hover:bg-accent-teal-hover hover:shadow-lg hover:shadow-accent-teal/25 hover:-translate-y-0.5"
                  >
                    {t("ctaFooter.cta")}
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    {t("ctaFooter.ctaSecondary")}
                  </Link>
                </div>

                <p className="mt-6 text-sm text-text-muted">
                  {t("ctaFooter.scanNote")}
                </p>

                <div className="mt-10 flex flex-col items-center gap-3 text-sm text-text-muted">
                  <a
                    href="mailto:tim@accelr.nl"
                    className="hover:text-accent-teal transition-colors"
                  >
                    tim@accelr.nl
                  </a>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {t("ctaFooter.location")}
                  </span>
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
