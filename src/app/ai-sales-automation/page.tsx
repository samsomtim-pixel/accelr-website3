import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Sales Automation voor B2B | Accelr",
  description:
    "AI structureel geïntegreerd in je salesproces. Clay, Make, n8n, Apollo. Geen experimenten, werkende systemen.",
  openGraph: {
    title: "AI Sales Automation voor B2B | Accelr",
    description:
      "Clay, Make, n8n structureel geïntegreerd in je salesproces. Werkende systemen, geen experimenten.",
    url: "https://accelr.nl/ai-sales-automation",
  },
};

const deliverables = [
  {
    num: "/01",
    title: "AI Prospecting Engine",
    desc: "Automatisch je ideale klanten vinden en verrijken met Clay en Apollo. Bedrijfsdata, contactgegevens, technographics en intent signals, zonder handmatig zoeken.",
  },
  {
    num: "/02",
    title: "Workflow Automation",
    desc: "Make en n8n workflows die je CRM, email tools en prospecting met elkaar verbinden. Leads die binnenkomen worden automatisch verrijkt, gescoord en gerouteerd.",
  },
  {
    num: "/03",
    title: "AI-Personalisatie",
    desc: "Outbound berichten die niet lezen als spam. AI-gegenereerde personalisatie op basis van bedrijfsdata, LinkedIn activiteit en technische stack. Op schaal, in jouw tone of voice.",
  },
  {
    num: "/04",
    title: "Prompt Libraries & Templates",
    desc: "Een bibliotheek van geteste prompts voor je team: discovery vragen, email varianten, objection handling, lead research. Klaar voor dagelijks gebruik.",
  },
];

const steps = [
  { num: "/01", title: "Audit huidige stack", desc: "Wat heb je, wat mist er, wat werkt niet?" },
  { num: "/02", title: "Architectuur ontwerp", desc: "Welke tools, welke flows, welke triggers" },
  { num: "/03", title: "Bouwen & testen", desc: "Ik configureer, integreer en test alles" },
  { num: "/04", title: "Training & overdracht", desc: "Je team kan het zelf runnen" },
];

const tools = ["Clay", "Apollo", "Make", "n8n", "OpenAI", "Instantly", "HubSpot"];

const voorJou = [
  "Je hebt tools gekocht maar niemand maakt ze werkend",
  "Je wilt AI inzetten maar weet niet waar te beginnen",
  "Je prospecting is handmatig en kost te veel tijd",
  "Je outbound berichten zijn generiek en converteren niet",
];

const faqs = [
  {
    q: "Moet ik al AI tools hebben?",
    a: "Nee. Ik selecteer en implementeer de juiste tools voor jouw situatie. De Scan brengt in kaart wat je nodig hebt.",
  },
  {
    q: "Wat kost dit?",
    a: "Afhankelijk van scope. Typisch €3.000-€8.000 als onderdeel van een groter traject. De Scan bepaalt de exacte scope en prijs.",
  },
  {
    q: "Kan mijn team dit zelf onderhouden?",
    a: "Ja, dat is het doel. Ik bouw het, documenteer het, en train je team. Het systeem is van jou.",
  },
];

export default function AiSalesAutomationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ─── SECTIE 1: HERO ─── */}
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn direction="none">
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">/ AI &amp; Automation</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  AI die daadwerkelijk verkoopt.
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                  Geen ChatGPT-experimenten. Structurele AI-integratie in je
                  salesproces die meetbaar meer pipeline en omzet oplevert.
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
                  De meeste bedrijven gebruiken AI als speeltje.
                </h2>

                <div className="mt-8 space-y-4 text-lg text-text-dark-secondary leading-relaxed">
                  <p>
                    Een prompt in ChatGPT. Een lijstje uit Apollo. Een automation
                    die &eacute;&eacute;n keer draait en dan breekt.
                  </p>
                  <p>
                    Het probleem is niet de technologie, het is de implementatie.
                    AI werkt alleen als het structureel is ingebed in je
                    salesproces: van prospecting tot personalisatie tot opvolging.
                    Niet als losse tool, maar als onderdeel van een werkend
                    systeem.
                  </p>
                  <p>
                    Dat is wat ik bouw. AI-gedreven sales infrastructuur die
                    draait zonder dat jij elke prompt zelf hoeft te schrijven.
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
                Wat ik bouw
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
                  Benieuwd wat AI voor jouw sales kan betekenen?
                </h2>
                <p className="mt-6 text-lg text-text-dark-secondary">
                  De Scan brengt in kaart waar AI het meeste oplevert in jouw
                  specifieke situatie. Concrete kansen, geen vage beloftes.
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
