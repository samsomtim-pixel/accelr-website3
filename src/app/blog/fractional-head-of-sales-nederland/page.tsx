import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Fractional Head of Sales: wat is het en waarom groeit het in Nederland? | Accelr Blog",
  description:
    "Alles over het Fractional Head of Sales model. Wat het is, wat het kost, en waarom steeds meer B2B bedrijven in Nederland het overwegen.",
  openGraph: {
    title:
      "Fractional Head of Sales: wat is het en waarom groeit het in Nederland? | Accelr Blog",
    description:
      "Alles over het Fractional Head of Sales model. Wat het is, wat het kost, en waarom steeds meer B2B bedrijven in Nederland het overwegen.",
  },
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">Sales Leadership</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  Fractional Head of Sales: wat is het?
                </h1>

                <div className="mt-6 flex items-center gap-4 text-sm text-text-dark-secondary">
                  <span>8 min leestijd</span>
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
                    In Amerika is het al jaren gangbaar. In Nederland begint het
                    net. Een Fractional Head of Sales is een ervaren commercieel
                    leider die parttime (1-2 dagen per week) voor jouw bedrijf
                    werkt. Dit artikel legt uit wat het is, wat het kost, en
                    wanneer het slim is.
                  </p>

                  {/* Section: Wat is het? */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    Wat is een Fractional Head of Sales?
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    Een Fractional Head of Sales is een ervaren sales leader die
                    parttime (meestal 1-2 dagen per week) jouw commerciële
                    strategie en organisatie opbouwt en leidt.
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    Vergelijk het met een fractional CFO of CMO: senior
                    expertise, zonder de kosten van een fulltime hire.
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    In de VS werken meer dan 120.000 bedrijven met fractional
                    executives. In Europa groeit het model snel, vooral bij B2B
                    tech-bedrijven tussen de €1M-€10M omzet.
                  </p>

                  <div className="mt-8 rounded-2xl bg-white p-6 border border-gray-100">
                    <p className="text-lg font-semibold text-text-dark">
                      Wat doet een Fractional Head of Sales?
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="text-text-dark-secondary">
                        Bouwt je sales funnel en CRM-proces
                      </li>
                      <li className="text-text-dark-secondary">
                        Traint je team of eerste sales hire
                      </li>
                      <li className="text-text-dark-secondary">
                        Ontwikkelt playbooks, scripts, ICP
                      </li>
                      <li className="text-text-dark-secondary">
                        Stuurt op KPI's en pipeline management
                      </li>
                      <li className="text-text-dark-secondary">
                        Helpt bij hiring en onboarding van sales talent
                      </li>
                    </ul>
                  </div>

                  {/* Section: Wat kost het? */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    Wat kost het?
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    De kostenvergelijking:
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-xl bg-white p-6 border border-gray-100">
                      <h3 className="font-display text-xl font-semibold text-text-dark">
                        Fractional Head of Sales
                      </h3>
                      <p className="mt-2 text-3xl font-bold text-accent-teal-dark">
                        €4.000 - €8.000/maand
                      </p>
                      <p className="mt-2 text-sm text-text-dark-secondary">
                        1-2 dagen per week, minimaal 6 maanden
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-6 border border-gray-100">
                      <h3 className="font-display text-xl font-semibold text-text-dark">
                        Fulltime Head of Sales
                      </h3>
                      <p className="mt-2 text-3xl font-bold text-text-dark">
                        €150.000 - €220.000/jaar
                      </p>
                      <p className="mt-2 text-sm text-text-dark-secondary">
                        Salaris + werkgeverslasten + bonus + onboarding
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-6 border border-gray-100">
                      <h3 className="font-display text-xl font-semibold text-text-dark">
                        Interim sales manager
                      </h3>
                      <p className="mt-2 text-3xl font-bold text-text-dark">
                        €120.000 - €180.000/jaar
                      </p>
                      <p className="mt-2 text-sm text-text-dark-secondary">
                        5 dagen per week, vaak korte termijn focus
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    Fractional is <strong>60-70% goedkoper</strong> dan fulltime
                    of interim, maar je krijgt wel senior-level expertise.
                  </p>

                  {/* Section: Wanneer is het slim? */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    Wanneer is het slim?
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    Een Fractional Head of Sales is slim als:
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                      <p className="text-lg text-text-dark-secondary">
                        Je zit tussen <strong>€1M-€10M omzet</strong>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                      <p className="text-lg text-text-dark-secondary">
                        Je founder verkoopt zelf en wil dat{" "}
                        <strong>systematiseren</strong>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                      <p className="text-lg text-text-dark-secondary">
                        Je hebt net je <strong>eerste sales hire</strong> gedaan
                        (of die is mislukt)
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                      <p className="text-lg text-text-dark-secondary">
                        Je hebt <strong>geen sales systeem</strong>: geen CRM,
                        geen playbook, geen pipeline
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                      <p className="text-lg text-text-dark-secondary">
                        Je wil <strong>groeien naar €5M-€20M</strong> maar weet
                        niet hoe
                      </p>
                    </div>
                  </div>

                  {/* Section: Wanneer niet? */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    Wanneer is het NIET slim?
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    Fractional is niet de juiste keuze als:
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex gap-3">
                      <XCircle className="h-6 w-6 shrink-0 text-red-500" />
                      <p className="text-lg text-text-dark-secondary">
                        Je zit onder <strong>€500K omzet</strong>, focus eerst
                        op product-market fit
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <XCircle className="h-6 w-6 shrink-0 text-red-500" />
                      <p className="text-lg text-text-dark-secondary">
                        Je hebt al een <strong>sales team van 5+</strong>, dan
                        heb je fulltime leadership nodig
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <XCircle className="h-6 w-6 shrink-0 text-red-500" />
                      <p className="text-lg text-text-dark-secondary">
                        Je wil iemand die{" "}
                        <strong>zelf ook gaat verkopen</strong>, fractional is
                        strategisch, niet executie
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <XCircle className="h-6 w-6 shrink-0 text-red-500" />
                      <p className="text-lg text-text-dark-secondary">
                        Je bent niet bereid om{" "}
                        <strong>autoriteit te delegeren</strong>, een
                        fractional moet kunnen beslissen
                      </p>
                    </div>
                  </div>

                  {/* Section: Hoe werkt het bij Accelr? */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    Hoe werkt het bij Accelr?
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    Bij Accelr werk ik in fases:
                  </p>

                  <div className="mt-8 space-y-6">
                    <div className="rounded-xl bg-white p-6 border-l-4 border-accent-teal-dark">
                      <h3 className="font-display text-xl font-semibold text-text-dark">
                        Maand 1: Diagnose
                      </h3>
                      <p className="mt-2 text-text-dark-secondary">
                        We doen De Scan. Ik breng je funnel, tooling, ICP en
                        processen in kaart. Je krijgt een roadmap met
                        prioriteiten.
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-6 border-l-4 border-accent-teal-dark">
                      <h3 className="font-display text-xl font-semibold text-text-dark">
                        Maand 2-3: Bouwen
                      </h3>
                      <p className="mt-2 text-text-dark-secondary">
                        We bouwen het fundament: CRM, playbook, scripts, ICP,
                        onboarding, KPI-dashboard. Alles wat je nodig hebt om te
                        schalen.
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-6 border-l-4 border-accent-teal-dark">
                      <h3 className="font-display text-xl font-semibold text-text-dark">
                        Maand 4+: Runnen & Optimaliseren
                      </h3>
                      <p className="mt-2 text-text-dark-secondary">
                        We trainen je team, sturen op KPI's, optimaliseren de
                        funnel. Ik blijf 1-2 dagen per week beschikbaar voor
                        coaching, strategie en beslissingen.
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    Minimale looptijd: <strong>6 maanden</strong>. Je kunt
                    daarna opschalen naar fulltime, afschalen, of blijven met
                    fractional, afhankelijk van wat je nodig hebt.
                  </p>

                  {/* CTA Section */}
                  <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                    <h3 className="font-display text-2xl font-bold text-text-dark">
                      Is dit iets voor jou?
                    </h3>
                    <p className="mt-4 text-lg text-text-dark-secondary">
                      Laten we het uitzoeken. Plan een gesprek, ik stel wat
                      vragen over je situatie, en we kijken of fractional past.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/expertise/fractional-head-of-sales"
                        className="btn-primary"
                      >
                        Meer over Fractional
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
                  Wil je dit verkennen?
                </h2>
                <p className="mt-6 text-lg leading-8 text-text-dark-secondary">
                  Plan een gesprek. We kijken samen of fractional bij jouw
                  situatie past.
                </p>
                <div className="mt-10">
                  <Link href="/contact" className="btn-primary text-lg">
                    Plan een gesprek
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
