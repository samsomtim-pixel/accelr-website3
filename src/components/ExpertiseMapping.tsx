import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";
import { PILLAR_COLORS } from "@/lib/constants";

const P = PILLAR_COLORS;

const mappingCards = [
  {
    label: "DIAGNOSE",
    title: "De Scan\u2122",
    desc: "Diagnosticeert alle pilaren. Output = strategie + actieplan.",
    href: "/de-scan",
    color: P.result.color,
    bg: P.result.bg,
    border: P.result.border,
    wide: true,
  },
  {
    label: "STRATEGIE",
    title: "Strategie & GTM",
    desc: "ICP, positionering, GTM, pricing. Het fundament.",
    href: "/sales-strategie",
    color: P.strategy.color,
    bg: P.strategy.bg,
    border: P.strategy.border,
    wide: true,
  },
  {
    label: "PROCES \u00b7 LAAG 1",
    title: "Outbound & Leadgen",
    desc: "Pipeline Generatie engine",
    href: "/outbound-leadgeneratie",
    color: P.process.color,
    bg: P.process.bg,
    border: P.process.border,
    wide: false,
  },
  {
    label: "PROCES \u00b7 LAAG 2+3",
    title: "CRM & Salesproces",
    desc: "Executie + Meting",
    href: "/crm-implementatie",
    color: P.process.color,
    bg: P.process.bg,
    border: P.process.border,
    wide: false,
  },
  {
    label: "PEOPLE \u00b7 LAAG 1+2",
    title: "Sales Enablement",
    desc: "Enablement + Zichtbaarheid",
    href: "/sales-enablement",
    color: P.people.color,
    bg: P.people.bg,
    border: P.people.border,
    wide: false,
  },
  {
    label: "\u00d7 AI",
    title: "AI & Automation",
    desc: "Automation + Intelligence + Analytics",
    href: "/ai-sales-automation",
    color: P.ai.color,
    bg: P.ai.bg,
    border: P.ai.border,
    wide: false,
  },
];

export default function ExpertiseMapping() {
  const wideCards = mappingCards.filter((c) => c.wide);
  const gridCards = mappingCards.filter((c) => !c.wide);

  return (
    <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
      <div className="container-wide">
        <FadeIn>
          <p className="section-label-dark">/ Expertise</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
            Hoe dit mapt op wat ik bouw
          </h2>
        </FadeIn>

        {/* Wide cards (Diagnose + Strategie) */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {wideCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08}>
              <Link href={card.href} className="block h-full">
                <div
                  className="h-full rounded-2xl p-6 transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: card.bg,
                    border: `1px solid ${card.border}`,
                  }}
                >
                  <p
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: card.color }}
                  >
                    {card.label}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-text-dark">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-dark-secondary">
                    {card.desc}
                  </p>
                  <span
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium"
                    style={{ color: card.color }}
                  >
                    Bekijk <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Grid cards (4 expertise areas) */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gridCards.map((card, i) => (
            <FadeIn key={card.title} delay={0.16 + i * 0.06}>
              <Link href={card.href} className="block h-full">
                <div
                  className="h-full rounded-2xl p-6 transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: card.bg,
                    border: `1px solid ${card.border}`,
                  }}
                >
                  <p
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: card.color }}
                  >
                    {card.label}
                  </p>
                  <h3 className="mt-2 font-display text-base font-bold text-text-dark">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs text-text-dark-secondary">
                    {card.desc}
                  </p>
                  <span
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium"
                    style={{ color: card.color }}
                  >
                    Bekijk <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Overkoepelend: Fractional Head of Sales */}
        <FadeIn delay={0.4}>
          <div
            className="mt-4 rounded-2xl p-6 text-center"
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
              Bewaakt alle pilaren doorlopend. 1-2 dagen/week.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
