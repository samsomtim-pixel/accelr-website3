import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales Enablement voor B2B Teams | Accelr",
  description:
    "Playbooks, discovery frameworks, objection handling en team training. Geef je salesteam de structuur en tools om consistent te presteren.",
  openGraph: {
    title: "Sales Enablement voor B2B Teams | Accelr",
    description:
      "Playbooks, discovery frameworks, objection handling en team training. Geef je salesteam de structuur en tools om consistent te presteren.",
    url: "https://accelr.nl/sales-enablement",
  },
};

const deliverables = [
  {
    num: "/01",
    title: "Sales Playbook",
    desc: "Het complete draaiboek voor je salesproces. Van eerste contact tot close. Stappen, templates, scripts en best practices — zodat nieuwe reps sneller productief zijn en ervaren reps consistenter.",
  },
  {
    num: "/02",
    title: "Discovery Framework",
    desc: "Gestructureerde discovery die de juiste informatie boven tafel haalt. Geen checklist-gesprekken, maar een framework dat helpt om echte pijnpunten en koopbereidheid te identificeren.",
  },
  {
    num: "/03",
    title: "Objection Handling",
    desc: "De 15-20 meest voorkomende bezwaren in jouw markt, met onderbouwde responses. Getest, getraind en klaar voor dagelijks gebruik door je team.",
  },
  {
    num: "/04",
    title: "Training & Coaching",
    desc: "Hands-on training voor je team op de nieuwe tools en frameworks. Geen eenmalige workshop — een trainingsprogramma dat beklijft.",
  },
];

const steps = [
  { num: "/01", title: "Analyse", desc: "Huidig salesproces en knelpunten in kaart" },
  { num: "/02", title: "Ontwikkelen", desc: "Playbook, frameworks en materialen bouwen" },
  { num: "/03", title: "Trainen", desc: "Team trainen op nieuwe aanpak" },
  { num: "/04", title: "Embedden", desc: "Borgen in dagelijkse praktijk en CRM" },
];

const tools = ["Notion", "HubSpot", "Loom", "Google Workspace", "Miro"];

const voorJou = [
  "Je salesteam presteert inconsistent",
  "Nieuwe reps doen er te lang over om productief te worden",
  "Er is geen gestandaardiseerd salesproces",
  "Je verliest deals door slechte discovery of opvolging",
];

const faqs = [
  {
    q: "Werkt dit ook voor kleine teams (2-3 reps)?",
    a: "Juist. Bij kleine teams is consistentie extra belangrijk. Een playbook zorgt ervoor dat iedereen op dezelfde manier verkoopt — en dat kennis niet verloren gaat als iemand vertrekt.",
  },
  {
    q: "Hoe verschilt dit van een standaard salestraining?",
    a: "Ik bouw geen generieke training. Alles is gebaseerd op jouw markt, jouw product en jouw salesproces. Het resultaat is een werkend systeem, niet een map met slides.",
  },
  {
    q: "Hoe lang duurt het voordat het effect heeft?",
    a: "De meeste teams zien binnen 4-6 weken verbetering in discovery-kwaliteit en conversion rates. Volledige adoptie kost typisch 2-3 maanden.",
  },
];

export default function SalesEnablementPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ─── SECTIE 1: HERO ─── */}
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn direction="none">
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">/ Sales Enablement</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  Een salesteam dat weet
                  <br />
                  wat het moet doen.
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                  Playbooks, discovery frameworks, objection handling en
                  training. Structuur die ervoor zorgt dat je team consistent
                  presteert.
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
                  Je team verkoopt op gevoel.
                </h2>

                <div className="mt-8 space-y-4 text-lg text-text-dark-secondary leading-relaxed">
                  <p>
                    Elke rep doet het anders. Discovery is een checklist. Bezwaren
                    worden geïmproviseerd. Nieuwe mensen doen er maanden over om
                    op snelheid te komen.
                  </p>
                  <p>
                    Het probleem is niet talent — het is gebrek aan structuur.
                    Zonder playbook, zonder framework, zonder gedeelde aanpak is
                    elke deal een individueel experiment.
                  </p>
                  <p>
                    Sales enablement geeft je team de tools, kennis en structuur
                    om consistent te presteren. Niet als eenmalige training, maar
                    als werkend systeem.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── SECTIE 3: WAT JE KRIJGT ─── */}
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
                  Geef je team de structuur om te winnen.
                </h2>
                <p className="mt-6 text-lg text-text-dark-secondary">
                  De Scan brengt in kaart waar je salesproces hapert en welke
                  enablement-onderdelen het meeste impact hebben.
                </p>

                <div className="mt-10">
                  <Link href="/de-scan" className="btn-primary">
                    <span className="btn-label">
                      Start met De Scan &mdash; &euro;3.500
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
