import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales Strategie & GTM voor B2B | Accelr",
  description:
    "ICP, go-to-market plan, positionering en pricing. De basis die ervoor zorgt dat al je sales-activiteiten in de juiste richting werken.",
  openGraph: {
    title: "Sales Strategie & GTM voor B2B | Accelr",
    description:
      "ICP, go-to-market plan, positionering en pricing. De basis die ervoor zorgt dat al je sales-activiteiten in de juiste richting werken.",
    url: "https://accelr.nl/sales-strategie",
  },
};

const deliverables = [
  {
    num: "/01",
    title: "ICP & Buyer Persona",
    desc: "Wie zijn je best-fit klanten? Welke bedrijven, welke rollen, welke pijnpunten? Geen vage persona-posters — een scherp profiel waar je targeting, messaging en hele salesproces op bouwt.",
  },
  {
    num: "/02",
    title: "Go-to-Market Plan",
    desc: "Welke marktsegmenten pak je eerst aan? Via welke kanalen? Met welke boodschap? Een concreet plan dat prioriteiten stelt en duidelijk maakt waar je wél en niet op inzet.",
  },
  {
    num: "/03",
    title: "Positionering & Messaging",
    desc: "Hoe positioneer je jezelf ten opzichte van alternatieven? Wat maakt jouw aanbod relevant voor jouw ICP? Messaging frameworks voor je website, outbound, sales calls en proposals.",
  },
  {
    num: "/04",
    title: "Pricing & Deal Structuur",
    desc: "Wat vraag je, hoe presenteer je het, en hoe structureer je deals? Pricing die past bij je markt, je waardepropositie en je salesproces.",
  },
];

const steps = [
  { num: "/01", title: "Analyse", desc: "Huidige klanten, markt en concurrentie doorlichten" },
  { num: "/02", title: "ICP scherp", desc: "Best-fit profiel definiëren op basis van data" },
  { num: "/03", title: "Strategie bouwen", desc: "GTM plan, positionering, pricing" },
  { num: "/04", title: "Activeren", desc: "Doorvertalen naar campagnes, content en sales" },
];

const tools = ["Clay", "Apollo", "LinkedIn Sales Nav", "HubSpot", "Notion"];

const voorJou = [
  "Je verkoopt aan 'iedereen' en sluit te weinig",
  "Je hebt geen duidelijk ICP of buyer persona",
  "Je messaging resoneert niet met je doelgroep",
  "Je weet niet welke marktsegmenten je moet prioriteren",
];

const faqs = [
  {
    q: "Is dit niet te strategisch / abstract?",
    a: "Nee. Alles wat ik oplever is direct bruikbaar: targeting lijsten, messaging templates, een GTM plan met concrete acties. Geen PowerPoint-strategie.",
  },
  {
    q: "Hoe lang duurt dit traject?",
    a: "Typisch 2-3 weken van start tot oplevering, afhankelijk van de scope. De Scan bepaalt wat er nodig is.",
  },
  {
    q: "Wat als ik al een ICP heb?",
    a: "Dan valideren we die. In mijn ervaring klopt het ICP van de meeste bedrijven niet — of is het te breed. We scherpen aan op basis van data.",
  },
];

export default function SalesStrategiePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ─── SECTIE 1: HERO ─── */}
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn direction="none">
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">/ Sales Strategie &amp; GTM</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  Weten aan wie je verkoopt
                  <br />
                  is het halve werk.
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                  ICP, go-to-market plan, positionering en pricing. De basis die
                  ervoor zorgt dat al je sales-activiteiten in de juiste richting
                  werken.
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
                  De meeste B2B-bedrijven verkopen aan iedereen.
                </h2>

                <div className="mt-8 space-y-4 text-lg text-text-dark-secondary leading-relaxed">
                  <p>
                    Geen scherp ICP. Geen duidelijke positionering. Pricing die
                    &ldquo;ooit is bedacht&rdquo; en nooit meer is herzien. En
                    dan verwachten dat outbound, content en sales calls w&eacute;l
                    converteren.
                  </p>
                  <p>
                    Het resultaat: je team besteedt 80% van de tijd aan prospects
                    die nooit klant worden. Je messaging is generiek. Je
                    pipeline zit vol met deals die niet bewegen.
                  </p>
                  <p>
                    Sales strategie is geen luxe — het is de basis. Zonder
                    scherpe targeting en positionering is alles wat je daarna
                    bouwt minder effectief.
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
                  Eerst de basis. Dan bouwen.
                </h2>
                <p className="mt-6 text-lg text-text-dark-secondary">
                  De Scan brengt in kaart of je strategie klopt — en waar de
                  grootste kansen liggen om scherper te verkopen.
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
