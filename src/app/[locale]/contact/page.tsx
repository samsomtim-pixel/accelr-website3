import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { Clock, MessageSquare, Mail } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";

/* Icons that can't live in JSON */
const cardIcons = [Clock, MessageSquare, Mail];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `${t("title")} | Accelr`,
      description: t("description"),
    },
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  const cards = [
    {
      title: t("cards.duration"),
      desc: t("cards.durationDesc"),
    },
    {
      title: t("cards.noObligation"),
      desc: t("cards.noObligationDesc"),
    },
    {
      title: t("cards.honestAdvice"),
      desc: t("cards.honestAdviceDesc"),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">{t("hero.label")}</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl">
                  {t("hero.title")}
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary">
                  {t("hero.subtitle")}
                </p>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-2xl grid gap-6 sm:grid-cols-3">
              {cards.map((card, i) => {
                const Icon = cardIcons[i];
                return (
                  <FadeIn key={card.title} delay={(i + 1) * 0.1}>
                    <div className="card-light text-center">
                      <Icon size={28} className="mx-auto text-accent-teal" />
                      <h3 className="mt-4 font-display font-semibold text-text-dark">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-dark-secondary">
                        {card.desc}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* Calendly embed */}
            <FadeIn delay={0.4}>
              <div className="mx-auto mt-12 max-w-2xl">
                <div className="card-light">
                  <h2 className="font-display text-xl font-bold text-text-dark text-center">
                    {t("calendly.title")}
                  </h2>
                  <p className="mt-2 text-center text-sm text-text-dark-secondary">
                    {t("calendly.subtitle")}
                  </p>
                  <CalendlyEmbed url="https://calendly.com/tim-accelr/30min" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-8 text-center">
                <p className="text-sm text-text-dark-muted">
                  {t("email.text")}{" "}
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
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
            <div className="h-[500px] w-[800px] rounded-full bg-accent-teal/5 blur-3xl" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
