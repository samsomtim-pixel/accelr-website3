import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Sparkles } from "lucide-react";
import { PILLAR_COLORS } from "@/lib/constants";

const P = PILLAR_COLORS;

const layers = [
  {
    label: "FUNDAMENT",
    cards: [
      {
        badge: "DIAGNOSE",
        title: "De Scan\u2122",
        desc: "Volledige doorlichting van je salesoperatie. Scores op 10 dimensies, geprioriteerde roadmap, harde cijfers.",
        aiText: "AI-powered: data-analyse en benchmarking",
        framework: "Framework: Diagnose van alle pijlers",
        href: "/de-scan" as const,
        color: P.strategy.color,
        bg: P.strategy.bg,
        border: P.strategy.border,
      },
      {
        badge: "STRATEGIE",
        title: "Strategie & GTM",
        desc: "ICP, positionering, go-to-market plan, pricing. Het strategisch fundament op basis van data, niet onderbuikgevoel.",
        aiText: "AI-powered: ICP-modellering en marktanalyse",
        framework: "Framework: Strategie-pijler",
        href: "/sales-strategie" as const,
        color: P.strategy.color,
        bg: P.strategy.bg,
        border: P.strategy.border,
      },
    ],
  },
  {
    label: "BOUWEN",
    cards: [
      {
        badge: "PROCES",
        title: "Outbound & Leadgen",
        desc: "Signal-based prospecting die de juiste prospects benadert op het juiste moment. LinkedIn, e-mail en telefoon in \u00e9\u00e9n systeem.",
        aiText: "AI-powered: koopsignalen detecteren, verrijken en converteren",
        framework: "Framework: Proces-pijler, laag 1",
        href: "/outbound-leadgeneratie" as const,
        color: P.process.color,
        bg: P.process.bg,
        border: P.process.border,
      },
      {
        badge: "PROCES",
        title: "CRM & Salesproces",
        desc: "CRM dat je team echt gebruikt. Pipeline-dashboards, automatische updates, lead scoring. Geen data-invoer meer.",
        aiText: "AI-powered: enrichment, scoring en automatisering",
        framework: "Framework: Proces-pijler, laag 2+3",
        href: "/crm-implementatie" as const,
        color: P.process.color,
        bg: P.process.bg,
        border: P.process.border,
      },
    ],
  },
  {
    label: "OPTIMALISEREN",
    cards: [
      {
        badge: "PEOPLE",
        title: "Sales Enablement",
        desc: "Playbooks op basis van wat werkt, call-analyse, coaching en onboarding. Je team wordt elke week beter.",
        aiText: "AI-powered: conversation intelligence en automatische playbook-updates",
        framework: "Framework: People-pijler",
        href: "/sales-enablement" as const,
        color: P.people.color,
        bg: P.people.bg,
        border: P.people.border,
      },
    ],
  },
];

export default function ExpertiseMapping() {
  return (
    <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
      <div className="container-wide">
        <FadeIn>
          <p className="section-label-dark">/ Expertise</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
            De bouwblokken
          </h2>
          <p className="mt-4 max-w-2xl text-text-dark-secondary">
            Vijf onderdelen, drie lagen. AI is de rode draad door alles heen.
          </p>
        </FadeIn>

        {layers.map((layer, layerIdx) => (
          <div key={layer.label} className="mt-12">
            <p className="text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              {layer.label}
            </p>
            <div className={`grid gap-6 grid-cols-1 ${layer.cards.length > 1 ? "md:grid-cols-2" : ""}`}>
              {layer.cards.map((card, cardIdx) => (
                <FadeIn key={card.title} delay={(layerIdx * 2 + cardIdx) * 0.08}>
                  <Link href={card.href} className="block h-full">
                    <div
                      className="card-light h-full flex flex-col overflow-hidden"
                      style={{ borderTop: `4px solid ${card.color}` }}
                    >
                      <span
                        className="self-start rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          color: card.color,
                          backgroundColor: `${card.color}15`,
                        }}
                      >
                        {card.badge}
                      </span>
                      <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">
                        {card.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-text-dark-secondary leading-relaxed">
                        {card.desc}
                      </p>
                      <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        <Sparkles size={14} className="shrink-0" />
                        {card.aiText}
                      </p>
                      <p className="mt-2 text-xs font-medium text-gray-400 dark:text-gray-500 italic">
                        {card.framework}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-teal">
                        Ontdek meer <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}

        {/* Overkoepelend: Fractional Head of Sales */}
        <FadeIn delay={0.5}>
          <div
            className="mt-12 rounded-2xl p-6 text-center"
            style={{
              backgroundColor: P.result.bg,
              border: `1px solid ${P.result.border}`,
            }}
          >
            <p
              className="text-[10px] font-bold uppercase tracking-wider"
              style={{ color: P.result.color }}
            >
              Overkoepelend
            </p>
            <h3 className="mt-2 font-display text-lg font-bold text-text-dark">
              Fractional Head of Sales
            </h3>
            <p className="mt-1 text-sm text-text-dark-secondary">
              Bewaakt alle lagen doorlopend. 1-2 dagen/week.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
