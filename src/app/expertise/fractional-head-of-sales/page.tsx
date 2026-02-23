import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Check, X as XIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Fractional Head of Sales Nederland | Accelr",
  description:
    "Ervaren commercieel leiderschap, 1-2 dagen per week. Voor scale-ups die te groot zijn om zonder te groeien, maar te klein voor een fulltime hire.",
  openGraph: {
    title: "Fractional Head of Sales Nederland | Accelr",
    description:
      "Ervaren commercieel leiderschap, 1-2 dagen per week. Voor scale-ups die te groot zijn om zonder te groeien, maar te klein voor een fulltime hire.",
    images: ["/images/og-accelr.png"],
    url: "https://accelr.nl/expertise/fractional-head-of-sales",
  },
};

/* ─── Vergelijkingstabel (3 columns only) ─── */
const comparisonRows = [
  {
    aspect: "Kosten/jaar",
    fulltime: "€150K-€220K",
    interim: "€120K-€180K",
    accelr: "€48K-€96K",
  },
  {
    aspect: "Risico bij mis-match",
    fulltime: "€80K+ (6 mnd salaris + werving)",
    interim: "Medium (contract)",
    accelr: "Laag (maandelijks)",
  },
  {
    aspect: "Beschikbaarheid",
    fulltime: "5 dagen/week",
    interim: "5 dagen/week",
    accelr: "1-2 dagen/week",
  },
  {
    aspect: "Expertise breedte",
    fulltime: "1 profiel, 1 bedrijf",
    interim: "1 profiel",
    accelr: "Breed (strategie+ops+AI)",
  },
  {
    aspect: "Kennisoverdracht",
    fulltime: "❌ Vertrekt met kennis",
    interim: "❌ Vertrekt",
    accelr: "✅ Systemen + docs blijven",
  },
  {
    aspect: "Focus",
    fulltime: "Langetermijn operatie",
    interim: "Gat vullen",
    accelr: "Fundament bouwen + schalen",
  },
  {
    aspect: "Commitment",
    fulltime: "12+ maanden",
    interim: "6-12 maanden",
    accelr: "Min. 6 maanden",
  },
];

/* ─── Timeline ─── */
const timeline = [
  {
    num: "/01",
    period: "Week 1-4",
    title: "Diagnose",
    desc: "Volledige doorlichting via De Scan. Geen extra kosten, zit in eerste maand. Sales Maturity Score op alle pilaren, geprioriteerde roadmap.",
  },
  {
    num: "/02",
    period: "Maand 2-3",
    title: "Bouwen",
    desc: "CRM, proces, playbooks, outbound, AI-automations. Hands-on implementatie samen met je team.",
  },
  {
    num: "/03",
    period: "Maand 4+",
    title: "Runnen",
    desc: "Pipeline reviews, team coaching, forecast, optimalisatie. Het systeem draait, met doorlopende bijsturing.",
  },
];

/* ─── Voor wie / Niet voor wie ─── */
const voorWie = [
  "B2B SaaS/tech/IT, €1M-€10M omzet",
  "Technische founder die nog zelf verkoopt",
  "Minimaal 2 mensen in sales (of ambitie om team te bouwen)",
  "Bereid om autoriteit te delegeren",
];

const nietVoorWie = [
  "<€500K omzet (te vroeg, focus op PMF)",
  "Niet bereid data en CRM te delen",
  "Dagelijkse fulltime aanwezigheid nodig",
  "Zoekt een bureau dat het \"overneemt\"",
];

/* ─── Resultaten case studies ─── */
const caseStudies = [
  {
    title: "Bedrijfsnaam A",
    result: "€1.8M → €2.6M ARR (+44%)",
    href: "/resultaten/bedrijf-a",
  },
  {
    title: "Bedrijfsnaam B",
    result: "€600K onbenut, Upsell +262%",
    href: "/resultaten/bedrijf-b",
  },
  {
    title: "Bedrijfsnaam C",
    result: "€2.5M → €4.1M ARR (+64%)",
    href: "/resultaten/bedrijf-c",
  },
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
                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  Een Head of Sales zonder het fulltime{" "}
                  <span className="gradient-text">prijskaartje</span>
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                  Ervaren commercieel leiderschap, 1-2 dagen per week. Voor
                  scale-ups die te groot zijn om zonder te groeien, maar te
                  klein voor een fulltime hire.
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

        {/* ─── Wat is Fractional? ─── */}
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
                  die parttime (1-2 dagen per week) voor jouw bedrijf werkt. Je
                  krijgt strategisch leiderschap én hands-on execution, van
                  CRM-inrichting tot teamcoaching tot pipeline management. In
                  Amerika is dit model al jaren gangbaar bij meer dan 120.000
                  bedrijven. In Nederland begint het net.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Vergelijkingstabel (3 columns) ─── */}
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
                      <th className="pb-4 pr-4 font-display text-sm font-semibold text-text-dark-muted w-[180px]">
                        &nbsp;
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
              <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-dark-secondary">
                Interim houdt het draaiende. Fractional brengt versnelling,
                ervaring en richting.
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
                Voor wie dit werkt
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="h-full rounded-2xl border border-accent-teal/20 bg-accent-teal/5 p-6 sm:p-8">
                  <h3 className="font-display text-lg font-bold text-text-dark">
                    Voor wie dit werkt
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
                    Wanneer dit NIET werkt
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
                        Vanaf €4.000
                      </span>
                      <span className="text-text-dark-muted">/maand</span>
                    </div>

                    <ul className="space-y-3 text-text-dark-secondary">
                      <li className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-accent-teal-dark"
                          strokeWidth={3}
                        />
                        <span>1-2 dagen per week (8-16 uur)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-accent-teal-dark"
                          strokeWidth={3}
                        />
                        <span>Minimaal 6 maanden commitment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-accent-teal-dark"
                          strokeWidth={3}
                        />
                        <span>
                          Eerste maand = diagnose (geen aparte Scan-kosten)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-accent-teal-dark"
                          strokeWidth={3}
                        />
                        <span>Maandelijks opzegbaar na minimumperiode</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Resultaten ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Resultaten</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Wat anderen bereikten
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {caseStudies.map((study, i) => (
                <FadeIn key={study.title} delay={i * 0.1}>
                  <Link
                    href={study.href}
                    className="group block h-full rounded-2xl border border-border-light-mode bg-bg-light p-6 transition-all hover:border-accent-teal/40 hover:bg-accent-teal/5"
                  >
                    <h3 className="font-display text-lg font-bold text-text-dark">
                      {study.title}
                    </h3>
                    <p className="mt-3 text-2xl font-bold text-accent-teal-dark">
                      {study.result}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-accent-teal-dark group-hover:gap-3 transition-all">
                      <span>Lees meer</span>
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA Footer ─── */}
        <section className="bg-bg-light py-24 sm:py-32 lg:py-40">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Klaar voor commercieel leiderschap zonder fulltime
                  prijskaartje?
                </h2>
                <p className="mt-4 text-lg text-text-dark-secondary">
                  Plan een gesprek om te bespreken of een Fractional Head of
                  Sales past bij jouw situatie.
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact" className="btn-primary">
                    <span className="btn-label">Plan een gesprek</span>
                    <span className="btn-arrow">
                      <ArrowRight size={16} />
                    </span>
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
