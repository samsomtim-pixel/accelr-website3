import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { Search, Hammer, Cpu, Unlock, ArrowRight } from "lucide-react";

/* Icons that can't live in JSON */
const approachIcons = [Search, Hammer, Cpu, Unlock];

/* Non-text data for trajecten cards */
const trajectenLinks = [
  "https://www.aethogenix.com/",
  null,
  "https://stablagency.com/",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "overTim.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [{ url: "https://www.accelr.nl/images/og-default.png", width: 1200, height: 630, alt: "Accelr" }],
      url: "https://www.accelr.nl/over-tim",
    },
  };
}

export default async function OverTimPage() {
  const t = await getTranslations("overTim");

  const approachCards = t.raw("aanpak.cards") as Array<{
    title: string;
    text: string;
  }>;
  const learnings = t.raw("verhaal.learnings") as string[];
  const paragraphs = t.raw("verhaal.paragraphs") as string[];
  const ervaringItems = t.raw("ervaring.items") as string[];
  const trajectenCards = t.raw("trajecten.cards") as Array<{
    name: string;
    subtitle: string;
    deed: string;
  }>;

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ─── Hero ─── */}
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px]">
              <FadeIn>
                <div>
                  <p className="section-label-dark">{t("hero.label")}</p>

                  <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                    {t("hero.title")}
                  </h1>

                  <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                    {t("hero.subtitle")}
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <div className="mx-auto max-w-[380px]">
                  <div className="aspect-[3/4] w-full rounded-2xl bg-bg-primary overflow-hidden">
                    <Image
                      src="/images/tim.jpeg"
                      alt="Tim, Founder & Sales Growth Partner bij Accelr"
                      width={560}
                      height={747}
                      className="h-full w-full object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
            <div className="h-[500px] w-[800px] rounded-full bg-accent-teal/5 blur-3xl" />
          </div>
        </section>

        {/* ─── Mijn verhaal ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl">
                <p className="section-label-dark">{t("verhaal.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("verhaal.title")}
                </h2>

                <div className="mt-6 space-y-4 text-text-dark-secondary">
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                  <h3 className="font-display text-lg font-semibold text-text-dark">
                    {t("verhaal.watIkLeerde")}
                  </h3>
                  <ul className="space-y-2">
                    {learnings.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-teal-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p>{t("verhaal.patroon")}</p>

                  <p>{t("verhaal.waarom")}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Mijn aanpak ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">{t("aanpak.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("aanpak.title")}
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-3xl grid gap-6 sm:grid-cols-2">
              {approachCards.map((card, i) => {
                const Icon = approachIcons[i];
                return (
                  <FadeIn key={card.title} delay={i * 0.1}>
                    <div className="card-light h-full">
                      <Icon size={24} className="text-accent-teal" />
                      <p className="mt-4 font-display text-lg font-semibold text-text-dark">
                        {card.title}
                      </p>
                      <p className="mt-2 text-sm text-text-dark-secondary">
                        {card.text}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Ervaring ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl">
                <p className="section-label-dark">{t("ervaring.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("ervaring.title")}
                </h2>
                <ul className="mt-6 space-y-3">
                  {ervaringItems.map((item, i) => (
                    <FadeIn key={item} delay={i * 0.1}>
                      <li className="flex items-start gap-2 text-text-dark-secondary">
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

        {/* ─── Recente trajecten ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">{t("trajecten.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("trajecten.title")}
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-3xl grid gap-6 sm:grid-cols-3">
              {trajectenCards.map((r, i) => {
                const link = trajectenLinks[i];
                return (
                  <FadeIn key={r.name} delay={i * 0.1}>
                    <div className="card-light h-full flex flex-col">
                      <p className="font-display text-lg font-bold text-text-dark">
                        {link ? (
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent-teal-dark transition-colors"
                          >
                            {r.name}
                          </a>
                        ) : (
                          r.name
                        )}
                      </p>
                      <p className="mt-1 text-xs font-medium text-text-dark-muted">
                        {r.subtitle}
                      </p>
                      <p className="mt-4 flex-1 text-sm text-text-dark-secondary">
                        {r.deed}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
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
                  {t("cta.ctaSubtext")}
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
