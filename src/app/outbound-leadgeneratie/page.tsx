import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Outbound Leadgeneratie voor B2B | Accelr",
  description:
    "Outbound email, LinkedIn outreach en multi-channel sequences. Voorspelbare pipeline zonder afhankelijkheid van je netwerk.",
  openGraph: {
    title: "Outbound Leadgeneratie voor B2B | Accelr",
    description:
      "Outbound email, LinkedIn outreach en multi-channel sequences. Voorspelbare pipeline zonder afhankelijkheid van je netwerk.",
    url: "https://accelr.nl/outbound-leadgeneratie",
  },
};

const deliverables = [
  {
    num: "/01",
    title: "Outbound Email Engine",
    desc: "Instantly of Lemlist, volledig geconfigureerd. Domain warmup, DKIM/SPF/DMARC, inbox rotation. Deliverability van dag één.",
  },
  {
    num: "/02",
    title: "LinkedIn Outreach",
    desc: "Connectie-strategie, berichtensequences, content-alignment. Handmatig of geautomatiseerd, afhankelijk van je voorkeur.",
  },
  {
    num: "/03",
    title: "Multi-Channel Sequences",
    desc: "Email + LinkedIn + telefoon in één gecoördineerde flow. Elke stap bouwt voort op de vorige. Geen losse kanalen.",
  },
  {
    num: "/04",
    title: "Targeting & Messaging",
    desc: "ICP-gebaseerde lijsten via Clay/Apollo. Messaging die resoneert met jouw buyers — getest, geoptimaliseerd, AI-gepersonaliseerd.",
  },
];

const steps = [
  { num: "/01", title: "ICP scherp", desc: "Wie zijn je best-fit klanten, echt?" },
  { num: "/02", title: "Infra opzetten", desc: "Domeinen, tooling, warmup" },
  { num: "/03", title: "Campagnes bouwen", desc: "Lijsten, messaging, sequences" },
  { num: "/04", title: "Testen & optimaliseren", desc: "A/B tests, response tracking, itereren" },
];

const tools = ["Instantly", "Lemlist", "Clay", "Apollo", "LinkedIn Sales Nav", "HubSpot"];

const voorJou = [
  "Je bent afhankelijk van je netwerk voor nieuwe klanten",
  "Je hebt outbound geprobeerd maar het leverde niets op",
  "Je wilt een voorspelbare instroom van gekwalificeerde leads",
  "Je hebt geen tijd om zelf campagnes te bouwen en testen",
];

const faqs = [
  {
    q: "Hoeveel meetings kan ik verwachten?",
    a: "Afhankelijk van je markt en aanbod. Typisch 5-15 gekwalificeerde meetings per maand na de eerste optimalisatieronde. Geen loze beloftes — ik geef een realistische inschatting na De Scan.",
  },
  {
    q: "Is cold outbound niet spam?",
    a: "Slecht uitgevoerde outbound is spam. Goed uitgevoerde outbound is relevante waarde aanbieden aan mensen die er baat bij hebben. Het verschil zit in targeting en messaging.",
  },
  {
    q: "Hoe snel draait het?",
    a: "Domain warmup duurt 2-3 weken. Eerste resultaten binnen 4-6 weken. Optimalisatie is doorlopend.",
  },
];

export default function OutboundLeadgeneratiePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ─── SECTIE 1: HERO ─── */}
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn direction="none">
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">/ Outbound &amp; Leadgeneratie</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  Een pipeline die niet
                  <br />
                  afhankelijk is van jouw netwerk.
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                  Outbound email, LinkedIn en multi-channel sequences.
                  Geautomatiseerd, getest, en werkend.
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
                  Netwerk-sales heeft een plafond.
                </h2>

                <div className="mt-8 space-y-4 text-lg text-text-dark-secondary leading-relaxed">
                  <p>
                    De eerste klanten kwamen via je netwerk. Referrals. Een intro
                    via een oud-collega. Dat werkte — tot het niet meer genoeg was.
                  </p>
                  <p>
                    Nu heb je voorspelbare instroom nodig. Maar cold outbound voelt
                    als spam, LinkedIn outreach levert niets op, en de ene tool na
                    de andere belooft &ldquo;10 meetings per week&rdquo; zonder
                    resultaat.
                  </p>
                  <p>
                    Het probleem is niet outbound zelf. Het probleem is dat niemand
                    het goed opzet: juiste targeting, relevante messaging,
                    multi-channel sequencing, en continue optimalisatie.
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
                  Van afhankelijk van je netwerk naar voorspelbare pipeline.
                </h2>
                <p className="mt-6 text-lg text-text-dark-secondary">
                  De Scan brengt in kaart welke outbound-aanpak het meeste
                  oplevert voor jouw markt en aanbod.
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
