import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "De Accelr Methode™, Diagnose → Build → Run",
  description:
    "Van ad-hoc sales naar een schaalbaar systeem. 10 dimensies, 4 fases, werkende systemen die van jou zijn.",
  openGraph: {
    title: "De Accelr Methode™, Diagnose → Build → Run",
    description:
      "Van ad-hoc sales naar een schaalbaar systeem. 10 dimensies, 4 fases, werkende systemen die van jou zijn.",
    images: ["/og-methode.png"],
    url: "https://accelr.nl/methode",
  },
};

/* ─── Compound effect data table ─── */
const compoundData = [
  { pijler: "Proces", effect: "+12pp winrate", bron: "CSO Insights" },
  { pijler: "Pipeline", effect: "10-15 meetings/maand", bron: "Bridge Group" },
  { pijler: "People", effect: "2× meer verkooptijd", bron: "Bain & Company" },
  {
    pijler: "AI",
    effect: "1.3× meer omzetgroei",
    bron: "Salesforce (n=5.500)",
  },
  {
    pijler: "Samen",
    effect: "2× kans op >10% groei",
    bron: "McKinsey (n=3.800)",
  },
];

/* ─── 10 dimensies ─── */
const dimensies = [
  {
    num: "/01",
    name: "Strategy",
    desc: "Heb je een helder ICP, positionering en go-to-market plan?",
  },
  {
    num: "/02",
    name: "Process",
    desc: "Is je salesproces gedocumenteerd en herhaalbaar?",
  },
  {
    num: "/03",
    name: "Pipeline",
    desc: "Heb je een voorspelbare instroom van gekwalificeerde leads?",
  },
  {
    num: "/04",
    name: "CRM",
    desc: "Wordt je CRM actief gebruikt en levert het bruikbare data?",
  },
  {
    num: "/05",
    name: "Outbound",
    desc: "Heb je een werkende outbound engine (email, LinkedIn, telefoon)?",
  },
  {
    num: "/06",
    name: "Enablement",
    desc: "Heeft je team playbooks, scripts en training?",
  },
  {
    num: "/07",
    name: "AI & Automation",
    desc: "Zijn AI-tools structureel geïntegreerd in je salesproces?",
  },
  {
    num: "/08",
    name: "Team",
    desc: "Heb je de juiste mensen met de juiste rollen en doelen?",
  },
  {
    num: "/09",
    name: "Data",
    desc: "Meet je de juiste KPI's en stuur je op data?",
  },
  {
    num: "/10",
    name: "Leadership",
    desc: "Is er dedicated sales leadership en coaching?",
  },
];

export default function MethodePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ═══ SECTIE 1 — HERO ═══ */}
        <section className="bg-white py-24 sm:py-32 lg:py-40 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn direction="none">
              <div className="mx-auto max-w-4xl">
                <p className="section-label-dark">/ De Accelr Methode&trade;</p>

                <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight text-text-dark sm:text-6xl lg:text-[80px]">
                  Bouw een salesmotor
                  <br />
                  die zonder jou draait.
                </h1>

                <div className="mt-10">
                  <Link
                    href="/de-scan"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-7 py-4 text-sm font-semibold text-bg-primary transition-all duration-300 hover:bg-accent-teal-hover hover:shadow-lg hover:shadow-accent-teal/25 hover:-translate-y-0.5"
                  >
                    Start met De Scan
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 2 — DE KERN (Methode + formule) ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Methode</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
                Elk B2B-bedrijf heeft een commercieel systeem nodig.
              </h2>
            </FadeIn>

            <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
              {/* Left: description */}
              <FadeIn delay={0.1}>
                <div className="max-w-xl">
                  <p className="text-lg text-text-dark-secondary leading-relaxed">
                    Alles begint hier, met de Accelr Methode: een gestructureerde
                    aanpak die laat zien waar je omzet laat liggen en hoe je een
                    schaalbaar salesysteem bouwt.
                  </p>
                  <p className="mt-4 text-lg text-text-dark-secondary leading-relaxed">
                    Geen standaardadvies. Geen rapport dat in een la belandt. Een
                    werkend systeem gebaseerd op vier pijlers die elkaar
                    versterken.
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
                  De formule
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  {["Proces", "Pipeline", "People", "AI"].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 sm:gap-4"
                    >
                      <div className="rounded-full border border-accent-teal-dark/30 bg-accent-teal/10 px-5 py-3 font-display text-lg font-semibold text-accent-teal-dark sm:px-6 sm:text-xl">
                        {item}
                      </div>
                      {i < 3 && (
                        <span className="text-2xl font-light text-text-dark-muted">
                          &times;
                        </span>
                      )}
                    </div>
                  ))}
                  <span className="text-2xl font-light text-text-dark-muted">
                    =
                  </span>
                  <div className="rounded-full border border-accent-teal-dark bg-accent-teal/20 px-5 py-3 font-display text-lg font-semibold text-accent-teal-dark sm:px-6 sm:text-xl">
                    exponentiële groei
                  </div>
                </div>

                <p className="mt-6 text-center text-text-dark-secondary">
                  Elke factor versterkt de andere. Het effect is multiplicatief,
                  niet additief. Verbeter elk element met 20% en je totale output
                  groeit met{" "}
                  <span className="font-semibold text-text-dark">107%</span>.
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

        {/* ═══ SECTIE 3 — IN HET KORT (3 deliverables) ═══ */}
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
                  desc: "Elke kans krijgt een geschatte impact in euro's, een tijdsinschatting en een prioriteit. Je weet precies waar je moet beginnen.",
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

        {/* ═══ SECTIE 4 — VOOR WIE ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Voor wie
              </h3>
            </FadeIn>

            <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
              {/* Left: description */}
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

                  {/* Typisch profiel */}
                  <div className="mt-10">
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-text-dark-muted">
                      Typisch profiel
                    </p>
                    <ul className="mt-4 space-y-2">
                      {[
                        "B2B SaaS, tech of IT-dienstverlening",
                        "€500K – €20M omzet",
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

              {/* Right: Founder working photo */}
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

        {/* ═══ SECTIE 5 — WAT VERANDERT ER ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Wat verandert er
              </h3>
            </FadeIn>

            <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
              {/* Left: Office planning photo */}
              <FadeIn delay={0.1} direction="left">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/office-planning.jpg"
                    alt="Team bespreekt plannen op kantoor"
                    width={960}
                    height={720}
                    className="h-full w-full object-cover"
                  />
                </div>
              </FadeIn>

              {/* Right: text */}
              <FadeIn delay={0.2}>
                <div>
                  <p className="text-lg text-text-dark-secondary leading-relaxed">
                    De meeste B2B-bedrijven doen aan sales zoals ze altijd
                    hebben gedaan: de founder belt, mailt en networkt. Het
                    werkt, tot het niet meer schaalt. Je mist deals omdat er
                    geen opvolging is. Je hebt tools maar niemand die ze
                    werkend maakt. Je wilt je eerste salesperson aannemen maar
                    je hebt geen proces om te overdragen.
                  </p>
                  <p className="mt-6 text-lg text-text-dark-secondary leading-relaxed">
                    De Accelr Methode vervangt ad-hoc sales door een systeem.
                    Niet door te adviseren wat je zou moeten doen, maar door
                    het daadwerkelijk te bouwen. CRM&apos;s worden ingericht,
                    outbound engines draaien, AI-tools zijn geïntegreerd,
                    processen zijn gedocumenteerd. Het resultaat: een
                    salesmotor die draait, ook als jij er niet bent.
                  </p>

                  <div className="mt-8">
                    <Link
                      href="/de-scan"
                      className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-7 py-4 text-sm font-semibold text-bg-primary transition-all duration-300 hover:bg-accent-teal-hover hover:shadow-lg hover:shadow-accent-teal/25 hover:-translate-y-0.5"
                    >
                      Start met De Scan
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 6 — HOE HET WERKT (4 stappen) ═══ */}
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
                      We beginnen met een kickoff van 60 minuten om doelen,
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
                      €3.500 vast · Niet tevreden? Geld terug. Geen
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
                          "CRM-basis + salesproces → 3-4 weken",
                          "+ Outbound engine + AI-tooling → 4-6 weken",
                          "+ Team enablement + hiring → 6-8 weken",
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
                      Typische investering: €5.000 – €20.000 afhankelijk van
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
                      1-2 dagen per week · Min. 3 maanden · Daarna maandelijks
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

        {/* ═══ SECTIE 7 — VAN DIAGNOSE NAAR SYSTEEM ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl">
                <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Van diagnose naar systeem
                </h3>
                <p className="mt-6 text-lg text-text-dark-secondary leading-relaxed">
                  De meeste klanten gaan direct van Scan naar Bouw. Elk
                  onderdeel wordt tot in detail uitgewerkt, welke tools, welke
                  data, welke processen, voordat er iets gebouwd wordt.
                </p>
                <p className="mt-4 text-lg text-text-dark-secondary leading-relaxed">
                  Ik ontwerp en implementeer de systemen die in het plan staan:
                  CRM inrichting, outbound engines, AI-automations, playbooks.
                  De oplevering is snel, zorgvuldig en volledig gedocumenteerd.
                </p>
                <p className="mt-4 text-lg text-text-dark-secondary leading-relaxed">
                  Als je ervoor kiest om zelf te bouwen, levert De Scan alle
                  specificaties en prioriteiten waarmee je eigen team met
                  vertrouwen kan uitvoeren.
                </p>

                <div className="mt-8">
                  <Link
                    href="/de-scan"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-7 py-4 text-sm font-semibold text-bg-primary transition-all duration-300 hover:bg-accent-teal-hover hover:shadow-lg hover:shadow-accent-teal/25 hover:-translate-y-0.5"
                  >
                    Start met De Scan
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 8 — DE 10 DIMENSIES ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              {/* Left: text + grid */}
              <div>
                <FadeIn>
                  <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                    Wat ik meet
                  </h3>
                  <p className="mt-6 text-text-dark-secondary leading-relaxed">
                    Ik maak de onzichtbare gaten in je salesoperatie zichtbaar.
                    Elke dimensie wordt gescoord op een schaal van 1-10, met
                    concrete verbeterpunten en geschatte euro-waarde per kans.
                  </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <p className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.2em] text-text-dark-muted">
                    De 10 dimensies
                  </p>
                </FadeIn>

                <div className="mt-4 space-y-0">
                  {dimensies.map((d, i) => (
                    <FadeIn key={d.num} delay={0.1 + i * 0.04}>
                      <div
                        className={`flex items-start gap-4 py-4 ${
                          i < dimensies.length - 1
                            ? "border-b border-border-light-mode/60"
                            : ""
                        }`}
                      >
                        <span className="shrink-0 font-mono text-xs font-medium text-text-dark-muted">
                          {d.num}
                        </span>
                        <div>
                          <p className="font-display font-semibold text-text-dark">
                            {d.name}
                          </p>
                          <p className="text-sm text-text-dark-secondary">
                            {d.desc}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                <FadeIn delay={0.6}>
                  <p className="mt-6 text-sm text-text-dark-secondary">
                    Elke score wordt onderbouwd met concrete observaties, geen
                    vage indrukken, maar meetbare feiten.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/score"
                      className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-7 py-4 text-sm font-semibold text-bg-primary transition-all duration-300 hover:bg-accent-teal-hover hover:shadow-lg hover:shadow-accent-teal/25 hover:-translate-y-0.5"
                    >
                      Check je Sales Maturity Score
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </FadeIn>
              </div>

              {/* Right: Radar / spider chart of 10 dimensions */}
              <FadeIn delay={0.2} direction="right">
                <div className="aspect-square w-full rounded-2xl overflow-hidden sticky top-24">
                  <Image
                    src="/images/data-dashboard.jpg"
                    alt="Data dashboard met sales metrics en KPIs"
                    width={960}
                    height={960}
                    className="h-full w-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 9 — CTA FOOTER ═══ */}
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

      {/* ═══ SECTIE 10 — FOOTER ═══ */}
      <Footer />
    </>
  );
}
