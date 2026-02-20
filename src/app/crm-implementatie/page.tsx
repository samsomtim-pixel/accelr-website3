import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "CRM Implementatie voor MKB & Scale-ups | Accelr",
  description:
    "CRM selectie, inrichting, pipeline design en dashboards. Van spreadsheet naar werkend systeem in 3-4 weken.",
  openGraph: {
    title: "CRM Implementatie voor MKB & Scale-ups | Accelr",
    description:
      "CRM selectie, inrichting, pipeline design en dashboards. Van spreadsheet naar werkend systeem in 3-4 weken.",
    url: "https://accelr.nl/crm-implementatie",
  },
};

const deliverables = [
  {
    num: "/01",
    title: "CRM Selectie",
    desc: "HubSpot, Pipedrive of Salesforce, afhankelijk van je fase, budget en complexiteit. Onafhankelijk advies, geen partnerships.",
  },
  {
    num: "/02",
    title: "Pipeline Design",
    desc: "Fases die passen bij jouw salesproces. Lead scoring, deal stages, automatische herinneringen. Geen standaard template.",
  },
  {
    num: "/03",
    title: "Dashboards & Rapportage",
    desc: "Real-time overzicht van pipeline, conversion rates, forecast en activiteit per rep. Data waar je op kunt sturen.",
  },
  {
    num: "/04",
    title: "Integraties",
    desc: "Je CRM verbonden met je email, calendar, outbound tools en marketing automation. Eén bron van waarheid.",
  },
];

const steps = [
  { num: "/01", title: "Audit", desc: "Huidig CRM (of gebrek daaraan) doorlichten" },
  { num: "/02", title: "Ontwerp", desc: "Pipeline, velden, automations, dashboards" },
  { num: "/03", title: "Migratie", desc: "Data overzetten en opschonen" },
  { num: "/04", title: "Training", desc: "Team trainen op het nieuwe systeem" },
];

const tools = ["HubSpot", "Pipedrive", "Salesforce", "Make", "n8n", "Notion"];

const voorJou = [
  "Je hebt geen CRM of werkt nog in spreadsheets",
  "Je hebt een CRM maar niemand gebruikt het goed",
  "Je kunt je pipeline niet voorspellen",
  "Je mist rapportage om op te sturen",
];

const faqs = [
  {
    q: "Welk CRM raden jullie aan?",
    a: "Hangt af van je fase. HubSpot voor de meeste MKB-bedrijven, Pipedrive als je lean wilt starten, Salesforce bij complexere sales cycles. De Scan geeft een onderbouwd advies.",
  },
  {
    q: "Hoe lang duurt een CRM implementatie?",
    a: "Typisch 3-4 weken van start tot werkend systeem, inclusief data migratie en team training.",
  },
  {
    q: "Wat als we al een CRM hebben?",
    a: "Dan optimaliseer ik wat je hebt. Vaak is het niet het CRM dat het probleem is, maar de inrichting.",
  },
];

export default function CrmImplementatiePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ─── SECTIE 1: HERO ─── */}
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn direction="none">
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">/ CRM &amp; Pipeline</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  Een CRM dat je team
                  <br />
                  daadwerkelijk gebruikt.
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                  Niet n&oacute;g een tool die na 3 maanden een dure database is.
                  Een werkend systeem met pipeline, dashboards en rapportage.
                </p>

                <div className="mt-10">
                  <Link href="/de-scan" className="btn-primary">
                    <span className="btn-label">Start met De Scan</span>
                    <span className="btn-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
            <div className="h-[500px] w-[800px] rounded-full bg-accent-teal/5 blur-3xl" />
          </div>
        </section>

        {/* ─── SECTIE 2: HET PROBLEEM ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl">
                <h2 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  70% van CRM-implementaties faalt.
                </h2>

                <div className="mt-8 space-y-4 text-lg text-text-dark-secondary leading-relaxed">
                  <p>
                    Niet omdat het CRM slecht is. Maar omdat niemand het goed
                    inricht. De pipeline klopt niet. De velden zijn verwarrend. De
                    dashboards tonen de verkeerde data. En na drie maanden werkt je
                    team er omheen in plaats van erin.
                  </p>
                  <p>
                    Het resultaat: je hebt een CRM dat &euro;500/maand kost en een
                    spreadsheet die je eigenlijk nog steeds gebruikt.
                  </p>
                  <p>
                    Ik richt je CRM in zodat het werkt voor hoe jouw team verkoopt
                    , niet andersom.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── SECTIE 3: WAT IK BOUW ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Wat je krijgt
              </h3>
            </FadeIn>

            <div className="mt-12 space-y-0">
              {deliverables.map((item, i) => (
                <FadeIn key={item.num} delay={i * 0.1}>
                  <div
                    className={`grid items-start gap-6 py-10 lg:grid-cols-[80px_1fr] ${
                      i < deliverables.length - 1
                        ? "border-b border-border-light-mode"
                        : ""
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

        {/* ─── SECTIE 4: HOE HET WERKT ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Hoe het werkt
              </h3>
            </FadeIn>

            <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.1}>
                  <div className="card-light h-full">
                    <span className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                      {step.num}
                    </span>
                    <h4 className="mt-3 font-display text-lg font-bold text-text-dark">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm text-text-dark-secondary">
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTIE 5: TOOLS ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Tools die ik gebruik
              </h3>
            </FadeIn>

            <div className="mt-12 flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <FadeIn key={tool} delay={i * 0.05}>
                  <div className="rounded-full border border-border-light-mode bg-bg-light px-6 py-3 font-display text-sm font-semibold text-text-dark">
                    {tool}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTIE 6: VOOR WIE ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Dit is voor jou als...
              </h3>
            </FadeIn>

            <div className="mt-8 space-y-3">
              {voorJou.map((item, i) => (
                <FadeIn key={item} delay={i * 0.08}>
                  <div className="flex items-start gap-3 rounded-xl border border-accent-teal/20 bg-accent-teal/5 px-5 py-4">
                    <span className="mt-0.5 text-accent-teal font-bold">&#10003;</span>
                    <p className="text-text-dark-secondary">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTIE 7: FAQ ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl">
              <FadeIn>
                <h3 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Veelgestelde vragen
                </h3>
              </FadeIn>

              <div className="mt-12 space-y-3">
                {faqs.map((faq, i) => (
                  <FadeIn key={faq.q} delay={i * 0.08}>
                    <details className="group rounded-xl border border-border-light-mode bg-bg-light px-6 py-5 cursor-pointer transition-all hover:shadow-sm">
                      <summary className="flex items-center justify-between gap-4 font-display text-base font-semibold text-text-dark [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <ChevronDown
                          size={18}
                          className="shrink-0 text-text-dark-muted transition-transform duration-300 group-open:rotate-180"
                        />
                      </summary>
                      <p className="mt-4 text-sm text-text-dark-secondary leading-relaxed">
                        {faq.a}
                      </p>
                    </details>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTIE 8: CTA ─── */}
        <section className="bg-bg-light py-24 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Van spreadsheet naar werkend systeem.
                </h2>
                <p className="mt-6 text-lg text-text-dark-secondary">
                  De Scan brengt in kaart wat je nodig hebt, CRM selectie,
                  inrichting, of optimalisatie van wat je al hebt.
                </p>

                <div className="mt-10">
                  <Link href="/de-scan" className="btn-primary">
                    <span className="btn-label">
                      Start met De Scan, &euro;3.500
                    </span>
                    <span className="btn-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>

                <p className="mt-4 text-sm text-text-dark-muted">
                  De Scan bepaalt welke onderdelen voor jou prioriteit hebben.
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
