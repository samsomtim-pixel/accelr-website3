import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Check, X as XIcon, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Fractional Head of Sales, Commercieel leiderschap zonder fulltime prijskaartje",
  description:
    "Fractional Head of Sales: jouw commercieel leider, 1-2 dagen per week. Strategie, operatie en AI-gedreven groei. Vanaf \u20ac4.000/maand.",
  openGraph: {
    title: "Fractional Head of Sales | Accelr",
    description:
      "Fractional Head of Sales: jouw commercieel leider, 1-2 dagen per week. Strategie, operatie en AI-gedreven groei. Vanaf \u20ac4.000/maand.",
  },
};

/* ─── Vergelijkingstabel (uitgebreid) ─── */
const comparisonRows = [
  {
    aspect: "Kosten/jaar",
    zelf: "\u20ac0 (+ opportunitykosten)",
    fulltime: "\u20ac175K \u2013 \u20ac250K",
    interim: "\u20ac120K \u2013 \u20ac200K",
    accelr: "\u20ac48K \u2013 \u20ac96K",
  },
  {
    aspect: "Commitment",
    zelf: "Geen",
    fulltime: "12+ maanden",
    interim: "6-12 maanden",
    accelr: "6 maanden, flexibel",
  },
  {
    aspect: "Beschikbaarheid",
    zelf: "Nvt",
    fulltime: "Fulltime",
    interim: "Fulltime",
    accelr: "1-2 dagen/week",
  },
  {
    aspect: "Opstarttijd",
    zelf: "Nvt",
    fulltime: "3-6 maanden",
    interim: "2-4 weken",
    accelr: "2-4 weken",
  },
  {
    aspect: "Expertise",
    zelf: "Jouw eigen kennis",
    fulltime: "1 profiel",
    interim: "1 profiel",
    accelr: "Breed: strategie + ops + AI",
  },
  {
    aspect: "Risico",
    zelf: "Hoog (bottleneck)",
    fulltime: "Hoog (mis-hire \u20ac100K+)",
    interim: "Medium",
    accelr: "Laag (start met Scan)",
  },
  {
    aspect: "Kennisoverdracht",
    zelf: "Nvt",
    fulltime: "Vertrekt mee",
    interim: "Vertrekt mee",
    accelr: "Ingebouwd in proces",
  },
  {
    aspect: "Na 90 dagen",
    zelf: "Onvoorspelbaar",
    fulltime: "Onboarding loopt nog",
    interim: "Operationeel",
    accelr: "Systeem draait",
  },
];

/* ─── Timeline ─── */
const timeline = [
  {
    num: "/01",
    period: "Week 1-4",
    title: "Diagnose",
    desc: "Alle pilaren doorlichten. Dit is De Scan: strategie, proces, team, tooling, data. Je krijgt een Sales Maturity Score op 10 dimensies en een geprioriteerde roadmap.",
  },
  {
    num: "/02",
    period: "Maand 2-3",
    title: "Bouwen",
    desc: "Prioriteiten uit de roadmap implementeren. CRM inrichten, outbound engine draaien, playbooks schrijven, AI-tools integreren. Alles hands-on, samen met je team.",
  },
  {
    num: "/03",
    period: "Maand 4+",
    title: "Runnen",
    desc: "KPI\u2019s bewaken, team coachen, systeem optimaliseren. Wekelijkse pipeline reviews, kwartaal-reviews, doorlopende bijsturing. Het doel: een systeem dat draait zonder mij.",
  },
];

/* ─── Voor wie / Niet voor wie ─── */
const voorWie = [
  "\u20ac2M+ omzet, groeiambitie",
  "Founder doet sales erbij (of heeft net eerste salesperson aangenomen)",
  "Minimaal 2 mensen in commercieel team",
  "Bereid commerci\u00eble autoriteit te delegeren",
  "Wil niet blind een dure hire doen",
];

const nietVoorWie = [
  "<\u20ac1M omzet (te vroeg \u2014 start met De Scan)",
  "Niet bereid data te delen",
  "Fulltime manager nodig (50+ werknemers)",
  "Zoekt een bureau dat \"het overneemt\"",
];

export default function FractionalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ─── Hero ─── */}
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">/ Fractional Head of Sales</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  Een Head of Sales zonder het fulltime{" "}
                  <span className="gradient-text">prijskaartje.</span>
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                  Fractional Head of Sales: jouw commercieel leider, 1-2 dagen
                  per week. Alle strategische sturing, zonder de overhead van
                  een &euro;200K+ hire.
                </p>

                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/de-scan" className="btn-primary">
                    <span className="btn-label">Start met De Scan</span>
                    <span className="btn-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                  <Link href="/contact" className="btn-secondary-dark">
                    Plan een gesprek
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Wat is een Fractional Head of Sales? ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">/ Wat is het?</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Wat is een Fractional Head of Sales?
                </h2>
                <p className="mt-6 text-lg text-text-dark-secondary leading-relaxed">
                  Een Fractional Head of Sales is een ervaren commercieel leider
                  die parttime voor jouw bedrijf werkt. In Amerika is dit
                  concept al jaren gangbaar &mdash; in Nederland begint het net
                  op te komen.
                </p>
                <p className="mt-4 text-lg text-text-dark-secondary leading-relaxed">
                  Vergelijk het met een CFO die je deelt met andere bedrijven,
                  maar dan voor sales. Je krijgt strategisch leiderschap,
                  operationele sturing en hands-on execution zonder de kosten
                  van een fulltime hire.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Vergelijkingstabel ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Vergelijking</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Wat kost sales leiderschap?
              </h2>
            </FadeIn>

            {/* Desktop table */}
            <FadeIn delay={0.15}>
              <div className="mt-12 hidden lg:block overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-border-light-mode">
                      <th className="pb-4 pr-4 font-display text-sm font-semibold text-text-dark-muted w-[160px]">
                        &nbsp;
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        Zelf doen
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        Fulltime HoS
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        Interim
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-bold text-accent-teal-dark">
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-accent-teal" />
                          Accelr Fractional
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
                          {row.zelf}
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
                            Accelr Fractional
                          </p>
                          <p className="text-sm text-text-dark">{row.accelr}</p>
                        </div>
                      </div>
                      {[
                        { label: "Zelf doen", value: row.zelf },
                        { label: "Fulltime HoS", value: row.fulltime },
                        { label: "Interim", value: row.interim },
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
              <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-text-dark-muted">
                Bronnen: Robert Half Salary Guide NL 2024, Glassdoor Nederland,
                marktonderzoek B2B sales consultancy.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ─── Wat ik concreet doe ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Het traject</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Wat ik concreet doe
              </h2>
            </FadeIn>

            <div className="mt-16 space-y-0">
              {timeline.map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.1}>
                  <div
                    className={`grid items-start gap-6 py-10 lg:grid-cols-[80px_1fr] ${
                      i < timeline.length - 1
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
              <p className="section-label-dark">/ Fit check</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Is dit voor jou?
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="h-full rounded-2xl border border-accent-teal/20 bg-accent-teal/5 p-6 sm:p-8">
                  <h3 className="font-display text-lg font-bold text-text-dark">
                    Dit werkt als
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {voorWie.map((item) => (
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
                    Dit werkt niet als
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {nietVoorWie.map((item) => (
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
                <p className="section-label-dark">/ Investering</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  De investering
                </h2>

                <div className="mt-10 card-light">
                  <div className="space-y-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-3xl font-bold text-accent-teal-dark">
                        Vanaf &euro;4.000
                      </span>
                      <span className="text-text-dark-muted">/maand</span>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          Beschikbaarheid
                        </p>
                        <p className="mt-1 text-sm text-text-dark font-medium">
                          1-2 dagen per week (8-16 uur)
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          Minimale looptijd
                        </p>
                        <p className="mt-1 text-sm text-text-dark font-medium">
                          6 maanden
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          Eerste maand
                        </p>
                        <p className="mt-1 text-sm text-text-dark font-medium">
                          Diagnostische fase (= De Scan)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── CTA Footer ─── */}
        <section className="bg-bg-secondary py-24 sm:py-32 lg:py-40">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  accelr.
                </p>
                <h2 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                  Klaar om je sales structureel aan te pakken?
                </h2>
                <p className="mt-4 text-text-secondary">
                  Start met De Scan &mdash; dat is altijd de eerste stap, ook
                  bij een Fractional traject.
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/de-scan" className="btn-primary">
                    <span className="btn-label">Start met De Scan</span>
                    <span className="btn-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Plan een gesprek
                  </Link>
                </div>

                <p className="mt-6 text-sm text-text-muted">
                  &euro;3.500 vast &middot; Geld-terug garantie &middot;
                  Resultaat in 2 weken
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
