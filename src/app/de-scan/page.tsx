import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "De Scan — Weet waar je geld laat liggen",
  description:
    "Salesdiagnose in 2 weken. Score op 10 dimensies, kansen met euro-waarde, actieplan. €3.500 vast. Niet tevreden? Geld terug.",
  openGraph: {
    title: "De Scan — Weet waar je geld laat liggen | Accelr",
    description:
      "Salesdiagnose in 2 weken. Score op 10 dimensies, kansen met euro-waarde, actieplan. €3.500 vast. Niet tevreden? Geld terug.",
  },
};

const dimensionsDetailed = [
  { num: 1, name: "Strategy", question: "Hoe scherp is je ICP? Klopt je positionering?" },
  { num: 2, name: "Process", question: "Heb je een gedocumenteerd salesproces? Wordt het gevolgd?" },
  { num: 3, name: "Pipeline", question: "Hoe voorspelbaar is je omzet?" },
  { num: 4, name: "CRM", question: "Gebruik je een CRM? Hoe is de datakwaliteit?" },
  { num: 5, name: "Outbound", question: "Doe je actief outbound? Met welk resultaat?" },
  { num: 6, name: "Enablement", question: "Heeft je team playbooks, scripts, training?" },
  { num: 7, name: "AI & Automation", question: "Welke tools gebruik je? Wat kan geautomatiseerd?" },
  { num: 8, name: "Team", question: "Heb je de juiste mensen op de juiste plek?" },
  { num: 9, name: "Data", question: "Welke KPI's track je? Hoe accuraat is je forecast?" },
  { num: 10, name: "Leadership", question: "Wie stuurt de sales aan? Is er accountability?" },
];

const deliverables = [
  "Sales Maturity Score — score op 10 dimensies (1-10)",
  "2-3 diepte-interviews (founder, sales, marketing)",
  "CRM & pipeline doorlichting (of gap-analyse als er geen CRM is)",
  "AI & tech readiness check",
  "Top 3-5 kansen met geschatte euro-waarde",
  "Geprioriteerd 90-dagen actieplan",
  "Advies per kans: zelf doen / met Accelr / outsourcen",
  "Live presentatie van bevindingen (nooit alleen per mail)",
];

export default function DeScanPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ─── Hero ─── */}
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">/ Altijd stap 1</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  De Scan: weet waar je geld laat liggen —{" "}
                  <span className="gradient-text">en hoeveel.</span>
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                  Een professionele doorlichting van je salesoperatie. In 1-2 weken
                  breng ik alles in kaart en lever ik een actieplan op met
                  geprioriteerde kansen en euro-waarde.
                </p>

                <div className="mt-6 flex items-center justify-center gap-3 text-sm">
                  <span className="font-display text-2xl font-bold text-accent-teal-dark">
                    €3.500
                  </span>
                  <span className="text-text-dark-muted">vast · Geen verrassingen</span>
                </div>

                <Link href="/contact" className="btn-primary mt-8 inline-flex">
                  <span className="btn-label">Plan je Scan</span>
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
                <p className="section-label-dark">/ Het probleem</p>
                <h2 className="mt-4 font-display text-2xl font-bold text-text-dark sm:text-3xl">
                  De meeste founders weten dat er iets mis is met hun sales. Ze
                  weten alleen niet{" "}
                  <span className="gradient-text">wát.</span>
                </h2>
                <div className="mt-6 space-y-4 text-text-dark-secondary">
                  <p>
                    Je sluit deals, maar het is niet herhaalbaar. Je hebt tools,
                    maar niemand gebruikt ze goed. Je weet dat er structuur nodig
                    is, maar waar begin je?
                  </p>
                  <p className="font-semibold text-text-dark">
                    De Scan geeft antwoord. Niet met meningen — met data.
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
                <p className="section-label-dark">/ 10 Dimensies</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Ik doorlicht je salesoperatie op 10 dimensies
                </h2>
                <p className="mt-4 text-text-dark-secondary">
                  Elke dimensie scoort 1-10.
                </p>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {dimensionsDetailed.map((d, i) => (
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
                <p className="section-label-dark">/ Deliverables</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Wat je krijgt
                </h2>

                <ul className="mt-10 space-y-3">
                  {deliverables.map((item, i) => (
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

        {/* ─── Hoe het werkt (tijdlijn) ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <p className="section-label-dark">/ Tijdlijn</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Hoe het werkt
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-2xl grid gap-8 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="card-light h-full">
                  <p className="section-label-dark">/ Week 1</p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Intakegesprek en briefing",
                      "Interviews met founder, sales en marketing",
                      "CRM & data analyse",
                      "Markt- en concurrentie review",
                    ].map((item) => (
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
                  <p className="section-label-dark">/ Week 2</p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Scorecard opbouwen",
                      "Kansen identificeren en euro-waarde schatten",
                      "Actieplan prioriteren",
                      "Live presentatie van bevindingen",
                    ].map((item) => (
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
                  Mijn garantie
                </h3>
                <p className="mt-4 text-xl font-semibold text-text-dark">
                  Niet tevreden? Geld terug. Geen voorwaarden.
                </p>
                <p className="mt-4 text-text-dark-secondary">
                  Ik kan dit garanderen omdat ik in 8+ jaar nog nooit een bedrijf
                  heb gezien waar niets te verbeteren valt aan het salesproces.
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
                <p className="section-label-dark">/ Eerlijk</p>
                <h2 className="mt-4 font-display text-2xl font-bold text-text-dark sm:text-3xl">
                  Waarom betaald?
                </h2>
                <p className="mt-4 text-text-dark-secondary">
                  Gratis diagnostiek = belangenconflict. Een arts rekent voor een
                  MRI. Een accountant voor een audit. Ik reken voor een
                  professionele diagnose. Het deliverable heeft standalone waarde —
                  je kunt er direct mee aan de slag, ook zonder vervolg.
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
                <p className="section-label-dark">/ FAQ</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Veelgestelde vragen
                </h2>
              </FadeIn>

              <div className="mt-12 space-y-4">
                {[
                  {
                    q: "Kan ik ook alleen De Scan doen zonder vervolg?",
                    a: "Ja. De Scan levert een actieplan waarmee je direct zelf aan de slag kunt. Geen verplicht vervolg, geen commitment.",
                  },
                  {
                    q: "Wat als ik al een CRM heb?",
                    a: "Dan doorlicht ik je huidige setup: datakwaliteit, pipeline-inrichting, rapportage, en adoptie door het team. Een CRM hebben en een CRM goed gebruiken zijn twee verschillende dingen.",
                  },
                  {
                    q: "Hoe bereid ik me voor?",
                    a: "Minimaal: toegang tot je CRM (als je er een hebt), en beschikbaarheid voor een interview van 60-90 minuten. Ik regel de rest.",
                  },
                ].map((faq, i) => (
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
                  <span className="btn-label">Plan je Scan</span>
                  <span className="btn-arrow">
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <p className="mt-4 text-sm text-text-dark-muted">
                  Of mail direct:{" "}
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
