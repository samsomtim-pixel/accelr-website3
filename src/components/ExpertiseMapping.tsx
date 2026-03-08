import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Sparkles } from "lucide-react";
import { PILLAR_COLORS } from "@/lib/constants";

const P = PILLAR_COLORS;

const expertiseCards = [
  {
    badge: "STRATEGIE",
    title: "Strategie & GTM",
    desc: "ICP, positionering, go-to-market plan, pricing. Het strategisch fundament op basis van data, niet onderbuikgevoel.",
    aiText: "AI-powered: ICP-modellering en marktanalyse",
    packages: "Fundament \u00b7 Groeimachine \u00b7 Transformatie",
    href: "/sales-strategie" as const,
    color: P.strategy.color,
  },
  {
    badge: "PROCES",
    title: "Outbound & Leadgen",
    desc: "Signal-based prospecting die de juiste prospects benadert op het juiste moment. LinkedIn, e-mail en telefoon in \u00e9\u00e9n systeem.",
    aiText: "AI-powered: koopsignalen detecteren, verrijken en converteren",
    packages: "Groeimachine \u00b7 Transformatie",
    href: "/outbound-leadgeneratie" as const,
    color: P.process.color,
  },
  {
    badge: "PROCES",
    title: "CRM & Salesproces",
    desc: "CRM dat je team echt gebruikt. Pipeline-dashboards, automatische updates, lead scoring. Geen data-invoer meer.",
    aiText: "AI-powered: enrichment, scoring en automatisering",
    packages: "Fundament \u00b7 Groeimachine \u00b7 Transformatie",
    href: "/crm-implementatie" as const,
    color: P.process.color,
  },
  {
    badge: "PEOPLE",
    title: "Sales Enablement",
    desc: "Playbooks op basis van wat werkt, call-analyse, coaching en onboarding. Je team wordt elke week beter.",
    aiText: "AI-powered: conversation intelligence en automatische playbook-updates",
    packages: "Groeimachine \u00b7 Transformatie",
    href: "/sales-enablement" as const,
    color: P.people.color,
  },
];

export default function ExpertiseMapping() {
  return (
    <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
      <div className="container-wide">
        <FadeIn>
          <p className="section-label-dark">/ Expertise</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
            De expertise achter elk pakket
          </h2>
          <p className="mt-4 max-w-2xl text-text-dark-secondary">
            Vier expertisegebieden die in verschillende combinaties terugkomen in onze pakketten. AI is de rode draad door alles heen.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2">
          {expertiseCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08}>
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
                  <p className="mt-2 text-xs font-medium text-text-dark-muted">
                    Onderdeel van: {card.packages}
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
    </section>
  );
}
