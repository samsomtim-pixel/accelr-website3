import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import ExpertiseMapping from "@/components/ExpertiseMapping";
import { ArrowRight, MapPin } from "lucide-react";
import { PILLAR_COLORS } from "@/lib/constants";

const P = PILLAR_COLORS;

export const metadata: Metadata = {
  title: "De Accelr Methode\u2122, Diagnose \u2192 Build \u2192 Run",
  description:
    "Van ad-hoc sales naar een schaalbaar systeem. 10 dimensies, 4 fases, werkende systemen die van jou zijn.",
  openGraph: {
    title: "De Accelr Methode\u2122, Diagnose \u2192 Build \u2192 Run",
    description:
      "Van ad-hoc sales naar een schaalbaar systeem. 10 dimensies, 4 fases, werkende systemen die van jou zijn.",
    images: ["/og-methode.png"],
    url: "https://accelr.nl/methode",
  },
};

/* \u2500\u2500\u2500 Compound effect data table (V6) \u2500\u2500\u2500 */
const compoundData = [
  { pijler: "Strategie", effect: "Fundament voor alles", bron: "\u2014" },
  { pijler: "Proces", effect: "+12pp winrate", bron: "CSO Insights (12+ jaar, 1.000+ bedrijven)" },
  { pijler: "People", effect: "2\u00d7 meer verkooptijd", bron: "Bain & Company, 2025" },
  { pijler: "AI", effect: "1.3\u00d7 meer omzetgroei", bron: "Salesforce (n=5.500)" },
  { pijler: "Samen", effect: "107% totale groei", bron: "Compound effect" },
];

export default function MethodePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* \u2550\u2550\u2550 SECTIE 1 \u2014 HERO \u2550\u2550\u2550 */}
        <section className="bg-white py-24 sm:py-32 lg:py-40 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn direction="none">
              <div className="mx-auto max-w-4xl">
                <p className="section-label-dark">/ De Accelr Methode&trade;</p>

                <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight text-text-dark sm:text-6xl lg:text-[80px]">
                  De Accelr Methode&trade;
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-text-dark-secondary leading-relaxed">
                  Drie pilaren, &eacute;&eacute;n multiplier. E&eacute;n systeem dat je
                  salesmotor laat draaien, ook als jij er niet bent.
                </p>

                <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                  <Link
                    href="/de-scan"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-7 py-4 text-sm font-semibold text-bg-primary transition-all duration-300 hover:bg-accent-teal-hover hover:shadow-lg hover:shadow-accent-teal/25 hover:-translate-y-0.5"
                  >
                    Start met De Scan
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-secondary-dark">
                    Plan een kennismaking
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* \u2550\u2550\u2550 SECTIE 2 \u2014 INTRO + FORMULE + TABEL \u2550\u2550\u2550 */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Methode</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
                Elk B2B-bedrijf heeft een commercieel systeem nodig.
              </h2>
            </FadeIn>

            <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
              {/* Left: shorter intro */}
              <FadeIn delay={0.1}>
                <div className="max-w-xl">
                  <p className="text-lg text-text-dark-secondary leading-relaxed">
                    Elk B2B-bedrijf dat voorbij founder-led sales wil groeien
                    heeft een commercieel systeem nodig. Geen standaardadvies.
                    Geen rapport dat in een la belandt. Een werkend systeem
                    gebaseerd op drie pilaren die elkaar versterken,
                    aangedreven door AI.
                  </p>
                  <p className="mt-4 text-lg text-text-dark-secondary leading-relaxed">
                    De Scan diagnosticeert waar het lekt. De formule bepaalt wat
                    ik bouw.
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

            {/* De formule \u2014 V6 */}
            <FadeIn delay={0.3}>
              <div className="mt-16 rounded-2xl border border-border-light-mode bg-white p-8 sm:p-10">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-text-dark-muted">
                  De formule
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                  {/* Strategie */}
                  <span
                    className="rounded-full px-5 py-2.5 font-display text-base font-medium sm:text-lg"
                    style={{ color: P.strategy.color, backgroundColor: `${P.strategy.color}15`, border: `1.5px solid ${P.strategy.color}` }}
                  >
                    Strategie
                  </span>
                  <span className="text-xl font-light text-text-dark-muted">&rarr;</span>
                  <span className="text-xl font-light text-text-dark-muted">(</span>
                  {/* Proces */}
                  <span
                    className="rounded-full px-5 py-2.5 font-display text-base font-medium sm:text-lg"
                    style={{ color: P.process.color, backgroundColor: `${P.process.color}15`, border: `1.5px solid ${P.process.color}` }}
                  >
                    Proces
                  </span>
                  <span className="text-xl font-light text-text-dark-muted">&times;</span>
                  {/* People */}
                  <span
                    className="rounded-full px-5 py-2.5 font-display text-base font-medium sm:text-lg"
                    style={{ color: P.people.color, backgroundColor: `${P.people.color}15`, border: `1.5px solid ${P.people.color}` }}
                  >
                    People
                  </span>
                  <span className="text-xl font-light text-text-dark-muted">)</span>
                  <span className="text-xl font-light text-text-dark-muted">&times;</span>
                  {/* AI */}
                  <span
                    className="rounded-full px-5 py-2.5 font-display text-base font-medium sm:text-lg"
                    style={{ color: P.ai.color, backgroundColor: `${P.ai.color}15`, border: `1.5px solid ${P.ai.color}` }}
                  >
                    AI
                  </span>
                  <span className="text-xl font-light text-text-dark-muted">=</span>
                  {/* Result */}
                  <span className="rounded-full bg-accent-teal px-5 py-2.5 font-display text-base font-semibold text-white sm:text-lg">
                    exponenti&euml;le groei
                  </span>
                </div>

                <p className="mt-6 text-center text-text-dark-secondary">
                  Strategie is de input die alles aandrijft. Proces en People
                  zijn de kernpilaren, ze versterken elkaar multiplicatief.
                  AI is de multiplier die alles versnelt. Verbeter elk element
                  met 20% en je totale output groeit met{" "}
                  <span className="font-semibold text-text-dark">107%</span>.
                </p>
              </div>
            </FadeIn>

            {/* Bron-tabel \u2014 V6 */}
            <FadeIn delay={0.4}>
              <div className="mx-auto mt-8 max-w-3xl overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border-light-mode">
                      <th className="pb-3 font-display font-semibold text-text-dark">
                        Pijler
                      </th>
                      <th className="pb-3 font-display font-semibold text-text-dark">
                        Effect
                      </th>
                      <th className="pb-3 font-display font-semibold text-text-dark">
                        Bron
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {compoundData.map((row) => (
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

        {/* \u2550\u2550\u2550 SECTIE 3 \u2014 EXPERTISE MAPPING \u2550\u2550\u2550 */}
        <ExpertiseMapping />

        {/* \u2550\u2550\u2550 SECTIE 4 \u2014 HOE HET FRAMEWORK WORDT TOEGEPAST (V7) \u2550\u2550\u2550 */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Toepassing</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Hoe het framework wordt toegepast
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "De Scan",
                  desc: "Alle pilaren worden geanalyseerd. Je krijgt per pilaar een score en prioriteitenlijst.",
                },
                {
                  title: "De Bouw",
                  desc: "Je kiest specifieke pilaren om aan te werken. Projectmatig, afgebakend.",
                },
                {
                  title: "Fractional Head of Sales",
                  desc: "Alle pilaren, doorlopend, met mij als eigenaar. Continue optimalisatie.",
                },
              ].map((card, i) => (
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

        {/* \u2550\u2550\u2550 SECTIE 5 \u2014 IN HET KORT (3 deliverables) \u2550\u2550\u2550 */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                In het kort
              </h3>
            </FadeIn>

            <div className="mt-12 space-y-0">
              {[
                {
                  num: "/01",
                  title: "Sales Maturity Score op 10 dimensies",
                  desc: "Een volledige doorlichting van je salesoperatie. Geen meningen, meetbare scores per dimensie met concrete verbeterpunten.",
                },
                {
                  num: "/02",
                  title: "Geprioriteerd actieplan met euro-waarde",
                  desc: "Elke kans krijgt een geschatte impact in euro\u2019s, een tijdsinschatting en een prioriteit. Je weet precies waar je moet beginnen.",
                },
                {
                  num: "/03",
                  title: "Werkende systemen die van jou zijn",
                  desc: "Alles wat ik bouw, CRM, automations, playbooks, campagnes, is volledig van jou. Geen lock-in, geen afhankelijkheid, geen licentiekosten.",
                },
              ].map((item, i) => (
                <FadeIn key={item.num} delay={i * 0.1}>
                  <div
                    className={`grid items-start gap-6 py-10 lg:grid-cols-[80px_1fr] ${
                      i < 2 ? "border-b border-border-light-mode" : ""
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

        {/* \u2550\u2550\u2550 SECTIE 6 \u2014 VOOR WIE \u2550\u2550\u2550 */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Voor wie
              </h3>
            </FadeIn>

            <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-lg text-text-dark-secondary leading-relaxed">
                    Voor founders en commercieel directeuren die het bedrijf
                    hebben gebouwd op hun eigen salestalent. Waar elke deal door
                    dezelfde persoon loopt. Waar er geen CRM is, of eentje dat
                    niemand gebruikt. Waar groei betekent: harder werken, niet
                    slimmer werken.
                  </p>
                  <p className="mt-6 text-lg text-text-dark-secondary leading-relaxed">
                    De Accelr Methode brengt structuur waar chaos is,
                    voorspelbaarheid waar toeval regeert, en een systeem dat
                    schaalbaar is zonder dat jij elke deal zelf hoeft te sluiten.
                  </p>

                  <div className="mt-10">
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-text-dark-muted">
                      Typisch profiel
                    </p>
                    <ul className="mt-4 space-y-2">
                      {[
                        "B2B SaaS, tech of IT-dienstverlening",
                        "\u20ac500K \u2013 \u20ac20M omzet",
                        "5-50 medewerkers",
                        "Founder doet 80%+ van de sales",
                        "Bestaande klanten, recurring revenue",
                      ].map((item) => (
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

        {/* \u2550\u2550\u2550 SECTIE 7 \u2014 HOE HET WERKT (4 stappen) \u2550\u2550\u2550 */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Hoe het werkt
              </h3>
            </FadeIn>

            <div className="mt-16 space-y-0">
              {/* /01 Scannen */}
              <FadeIn>
                <div className="grid items-start gap-8 py-12 border-b border-border-light-mode lg:grid-cols-[1fr_1fr]">
                  <div>
                    <span className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                      /01
                    </span>
                    <h4 className="mt-3 font-display text-2xl font-bold text-text-dark">
                      Week 1-2: Scannen
                    </h4>
                    <p className="mt-4 text-text-dark-secondary leading-relaxed">
                      Ik begin met een kickoff van 60 minuten om doelen,
                      systemen en beperkingen in kaart te brengen. Daarna
                      volgen diepte-interviews met founder, sales en marketing.
                      Ik doorlicht je CRM (of het gebrek daaraan), analyseer je
                      pipeline, check je tech stack en beoordeel je
                      AI-readiness.
                    </p>
                    <p className="mt-4 text-text-dark-secondary leading-relaxed">
                      <span className="font-semibold text-text-dark">
                        Resultaat:
                      </span>{" "}
                      Sales Maturity Score op 10 dimensies. Een helder beeld
                      van waar je staat, en waar het geld ligt.
                    </p>
                    <p className="mt-6 text-sm font-semibold text-accent-teal-dark">
                      &euro;3.500 vast &middot; Niet tevreden? Geld terug. Geen
                      voorwaarden.
                    </p>
                  </div>
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/analytics-screen.jpg"
                      alt="Analytics dashboard voor sales diagnostiek"
                      width={960}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>

              {/* /02 Plannen */}
              <FadeIn>
                <div className="grid items-start gap-8 py-12 border-b border-border-light-mode lg:grid-cols-[1fr_1fr]">
                  <div>
                    <span className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                      /02
                    </span>
                    <h4 className="mt-3 font-display text-2xl font-bold text-text-dark">
                      Week 2: Plannen
                    </h4>
                    <p className="mt-4 text-text-dark-secondary leading-relaxed">
                      Op basis van de Scan stel ik een implementatieplan op.
                      Welke systemen gebouwd moeten worden, in welke volgorde,
                      en wat elke stap oplevert. Vaste prijs per onderdeel,
                      vooraf afgesproken. Geen verrassingen.
                    </p>
                    <p className="mt-4 text-text-dark-secondary leading-relaxed">
                      Het plan integreert met je bestaande tools en is zo
                      gestructureerd dat ik het kan bouwen, of je het zelf
                      kunt oppakken.
                    </p>
                  </div>
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/whiteboard-session.jpg"
                      alt="Planning sessie met whiteboard en post-its"
                      width={960}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>

              {/* /03 Bouwen */}
              <FadeIn>
                <div className="grid items-start gap-8 py-12 border-b border-border-light-mode lg:grid-cols-[1fr_1fr]">
                  <div>
                    <span className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                      /03
                    </span>
                    <h4 className="mt-3 font-display text-2xl font-bold text-text-dark">
                      Week 3-10: Bouwen
                    </h4>
                    <p className="mt-4 text-text-dark-secondary leading-relaxed">
                      Ik bouw wat het plan aanwijst. Geen standaardpakketten,
                      alleen wat jij nodig hebt.
                    </p>
                    <div className="mt-4">
                      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-text-dark-muted">
                        Typische trajecten
                      </p>
                      <ul className="mt-3 space-y-2">
                        {[
                          "CRM-basis + salesproces \u2192 3-4 weken",
                          "+ Outbound engine + AI-tooling \u2192 4-6 weken",
                          "+ Team enablement + hiring \u2192 6-8 weken",
                        ].map((item) => (
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
                    <p className="mt-4 text-text-dark-secondary leading-relaxed">
                      Alles wordt werkend opgeleverd, gedocumenteerd en
                      overgedragen. Het systeem is van jou.
                    </p>
                    <p className="mt-6 text-sm font-semibold text-accent-teal-dark">
                      Typische investering: &euro;5.000 &ndash; &euro;20.000 afhankelijk van
                      scope.
                    </p>
                  </div>
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/tech-setup.jpg"
                      alt="Team bouwt technische oplossingen samen"
                      width={960}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>

              {/* /04 Runnen & Opschalen */}
              <FadeIn>
                <div className="grid items-start gap-8 py-12 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <span className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                      /04
                    </span>
                    <h4 className="mt-3 font-display text-2xl font-bold text-text-dark">
                      Doorlopend: Runnen &amp; Opschalen
                    </h4>
                    <p className="mt-4 text-text-dark-secondary leading-relaxed">
                      Een systeem zonder leiderschap verwatert binnen 3
                      maanden. Ik blijf als je fractional Head of Sales, niet
                      adviseren, maar aansturen.
                    </p>
                    <ul className="mt-4 space-y-2">
                      {[
                        "Wekelijkse pipeline reviews & forecasting",
                        "Sales coaching & 1-op-1 begeleiding",
                        "Doorlopende optimalisatie campagnes & tools",
                        "Kwartaal-reviews met strategische bijsturing",
                        "Eerste sales hire: roldefinitie, onboarding, coaching",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-text-dark-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal-dark" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-sm text-text-dark-muted">
                      1-2 dagen per week &middot; Min. 3 maanden &middot; Daarna maandelijks
                      opzegbaar
                    </p>
                    <p className="mt-3 text-sm italic text-text-dark-secondary">
                      Het doel is dat je me niet meer nodig hebt. Dat is geen
                      falen, dat is het plan.
                    </p>
                  </div>
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/growth-celebration.jpg"
                      alt="Team werkt samen aan doorlopende groei"
                      width={960}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* \u2550\u2550\u2550 SECTIE 8 \u2014 CTA FOOTER \u2550\u2550\u2550 */}
        <section className="bg-bg-secondary py-24 sm:py-32 lg:py-40">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  accelr.
                </p>
                <h2 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                  Klaar om je salesmotor te bouwen?
                </h2>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/de-scan"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-7 py-4 text-sm font-semibold text-bg-primary transition-all duration-300 hover:bg-accent-teal-hover hover:shadow-lg hover:shadow-accent-teal/25 hover:-translate-y-0.5"
                  >
                    Start met De Scan
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Plan een kennismaking
                  </Link>
                </div>

                <p className="mt-6 text-sm text-text-muted">
                  &euro;3.500 vast &middot; Geld-terug garantie &middot; Resultaat in 2 weken
                </p>

                <div className="mt-10 flex flex-col items-center gap-3 text-sm text-text-muted">
                  <a
                    href="mailto:tim@accelr.nl"
                    className="hover:text-accent-teal transition-colors"
                  >
                    tim@accelr.nl
                  </a>
                  <span>+31 6 XX XXX XX XX</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    Amsterdam, Nederland
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
