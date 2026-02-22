import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PILLAR_COLORS } from "@/lib/constants";

const P = PILLAR_COLORS;

/* ─── Data ─── */
const strategyItems = [
  "ICP-definitie & buyer persona's",
  "Go-to-market plan",
  "Kanaalstrategie",
  "Positionering & messaging",
  "Pricing & packaging",
  "Kortingsbeleid & dealstructuur",
  "Competitive positioning",
  "Marktsegmentatie",
];

const processLayers = [
  {
    title: "Laag 1: Pipeline Generatie",
    items: [
      "ICP-to-lijst targeting",
      "Outbound email engine",
      "LinkedIn sequences",
      "Call structuur",
      "Multi-channel orchestratie",
      "Lead kwalificatie (MQL → SQL)",
    ],
  },
  {
    title: "Laag 2: Sales Executie",
    items: [
      "Salesproces ontwerp",
      "CRM selectie + inrichting",
      "Pipeline stages",
      "Discovery-methodiek",
      "Proposal structuur",
      "Objection handling",
    ],
  },
  {
    title: "Laag 3: Meting & Optimalisatie",
    items: [
      "KPI dashboards",
      "Pipeline health metrics",
      "Forecasting",
      "Win/loss analyse",
      "Lead scoring",
      "Data-hygiëne",
    ],
  },
];

const peopleLayers = [
  {
    title: "Laag 1: Enablement",
    items: [
      "Sales playbooks & scripts",
      "Discovery frameworks",
      "Demo-optimalisatie",
      "Objection handling guides",
      "Onboarding sales hires",
    ],
  },
  {
    title: "Laag 2: Zichtbaarheid",
    items: [
      "LinkedIn strategie team",
      "Content kalender",
      "Case studies & social proof",
      "Events & spreekbeurten",
      "Thought leadership plan",
    ],
  },
  {
    title: "Laag 3: Organisatie & Groei",
    items: [
      "Roldefinitie sales hire",
      "Belonings- & commissiemodel",
      "Training & coaching cadans",
      "Account management playbooks",
      "QBR-templates",
      "Expansie/upsell frameworks",
    ],
  },
];

const aiLayers = [
  {
    title: "Laag 1: Automation",
    items: [
      "Workflow automation (Make, n8n)",
      "CRM automation & triggers",
      "Email sequence automation",
      "Data verrijking",
      "Rapportage automation",
    ],
  },
  {
    title: "Laag 2: Intelligence",
    items: [
      "AI prospecting (Clay, Apollo)",
      "AI-personalisatie",
      "Prompt libraries",
      "AI lead scoring",
      "AI-assisted discovery prep",
    ],
  },
  {
    title: "Laag 3: Analytics & Learning",
    items: [
      "AI-driven pipeline forecasting",
      "Performance pattern recognition",
      "Automatische alerts bij afwijkingen",
      "A/B test analyse",
      "Conversie-optimalisatie insights",
    ],
  },
];

/* ─── Arrow separator ─── */
function DownArrow() {
  return (
    <div className="flex justify-center py-4">
      <ChevronDown size={28} className="text-text-dark-muted/40" />
    </div>
  );
}

/* ─── Pill tag ─── */
function PillTag({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-medium"
      style={{
        color,
        backgroundColor: `${color}10`,
        border: `1px solid ${color}30`,
      }}
    >
      {children}
    </span>
  );
}

/* ─── Layer block ─── */
function LayerBlock({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <div
      className="rounded-[10px] p-4"
      style={{ backgroundColor: `${color}08`, border: `1px solid ${color}15` }}
    >
      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color }}>
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <PillTag key={item} color={color}>
            {item}
          </PillTag>
        ))}
      </div>
    </div>
  );
}

export default function FrameworkArchitecture() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="container-wide">
        <FadeIn>
          <p className="section-label-dark">/ Framework</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
            De architectuur
          </h2>
          <p className="mt-4 max-w-2xl text-text-dark-secondary">
            Drie pilaren, elk met drie lagen. Aangedreven door AI. Dit is wat we
            diagnosticeren, ontwerpen en bouwen.
          </p>
        </FadeIn>

        {/* ─── STRATEGIE BLOCK ─── */}
        <FadeIn delay={0.1}>
          <div
            className="mt-14 rounded-2xl p-7 sm:p-8"
            style={{
              backgroundColor: P.strategy.bg,
              border: `1px solid ${P.strategy.border}`,
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: P.strategy.color }}
              />
              <h3 className="font-display text-xl font-bold text-text-dark">
                Strategie
              </h3>
              <span className="text-sm text-text-dark-muted">
                &mdash; de input die alles aandrijft
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {strategyItems.map((item) => (
                <PillTag key={item} color={P.strategy.color}>
                  {item}
                </PillTag>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href="/sales-strategie"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: P.strategy.color }}
              >
                Bekijk Strategie &amp; GTM expertise <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </FadeIn>

        <DownArrow />

        {/* ─── PROCES × PEOPLE ─── */}
        <FadeIn delay={0.2}>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* PROCES */}
            <div
              className="rounded-2xl p-7 sm:p-8"
              style={{
                backgroundColor: P.process.bg,
                border: `1px solid ${P.process.border}`,
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: P.process.color }}
                />
                <h3 className="font-display text-xl font-bold text-text-dark">
                  Proces
                </h3>
              </div>
              <p className="mt-2 text-sm text-text-dark-muted">
                Van eerste contact tot getekend contract, en alles wat je meet
              </p>

              <div className="mt-5 space-y-4">
                {processLayers.map((layer) => (
                  <LayerBlock
                    key={layer.title}
                    title={layer.title}
                    items={layer.items}
                    color={P.process.color}
                  />
                ))}
              </div>

              <div className="mt-5 space-y-2">
                <Link
                  href="/outbound-leadgeneratie"
                  className="flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: P.process.color }}
                >
                  Outbound &amp; Leadgeneratie <ArrowRight size={14} />
                </Link>
                <Link
                  href="/crm-implementatie"
                  className="flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: P.process.color }}
                >
                  CRM &amp; Salesproces <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* × operator */}
            <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 pointer-events-none" style={{ display: "none" }}>
              <span className="text-2xl font-light text-text-dark-muted">&times;</span>
            </div>

            {/* PEOPLE */}
            <div
              className="rounded-2xl p-7 sm:p-8"
              style={{
                backgroundColor: P.people.bg,
                border: `1px solid ${P.people.border}`,
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: P.people.color }}
                />
                <h3 className="font-display text-xl font-bold text-text-dark">
                  People
                </h3>
              </div>
              <p className="mt-2 text-sm text-text-dark-muted">
                Je team klaar maken, zichtbaar maken, en laten groeien
              </p>

              <div className="mt-5 space-y-4">
                {peopleLayers.map((layer) => (
                  <LayerBlock
                    key={layer.title}
                    title={layer.title}
                    items={layer.items}
                    color={P.people.color}
                  />
                ))}
              </div>

              <div className="mt-5">
                <Link
                  href="/sales-enablement"
                  className="flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: P.people.color }}
                >
                  Sales Enablement <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        <DownArrow />

        {/* ─── AI MULTIPLIER ─── */}
        <FadeIn delay={0.3}>
          <div
            className="rounded-2xl p-7 sm:p-8"
            style={{
              backgroundColor: P.ai.bg,
              border: `1px solid ${P.ai.border}`,
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: P.ai.color }}
              />
              <h3 className="font-display text-xl font-bold text-text-dark">
                &times; AI Multiplier
              </h3>
              <span className="text-sm text-text-dark-muted">
                &mdash; versnelt alles van 1&times; naar 3-5&times;
              </span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {aiLayers.map((layer) => (
                <LayerBlock
                  key={layer.title}
                  title={layer.title}
                  items={layer.items}
                  color={P.ai.color}
                />
              ))}
            </div>

            <div className="mt-5">
              <Link
                href="/ai-sales-automation"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: P.ai.color }}
              >
                AI &amp; Automation expertise <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
