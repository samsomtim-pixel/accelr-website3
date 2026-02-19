"use client";

import { ChevronDown } from "lucide-react";

const dimensions = [
  {
    num: 1,
    name: "Strategy",
    lowScore:
      "Je ICP is vaag of te breed. Geen duidelijke positionering. Je probeert iedereen te verkopen.",
    blocks: "ICP & persona ontwikkeling, Positionering, Go-to-market plan",
    audience: "Founders die breed schieten en inconsistente deals sluiten.",
  },
  {
    num: 2,
    name: "Process",
    lowScore:
      "Geen gedocumenteerd salesproces. Elke deal verloopt anders. Geen duidelijke stages of criteria.",
    blocks: "Salesproces ontwerp, Stage-definities, Kwalificatiecriteria",
    audience:
      "Bedrijven waar sales afhankelijk is van individueel talent, niet van een systeem.",
  },
  {
    num: 3,
    name: "Pipeline",
    lowScore:
      "Geen voorspelbare pipeline. De ene maand vier deals, de volgende nul. Geen zicht op wat er komt.",
    blocks: "Pipeline design, Forecasting setup, Lead scoring",
    audience: "Founders die elke maand opnieuw beginnen met verkopen.",
  },
  {
    num: 4,
    name: "CRM",
    lowScore:
      "Geen CRM, of een CRM dat niemand gebruikt. Slechte datakwaliteit. Geen rapportage.",
    blocks: "CRM selectie & inrichting, Data cleanup, Dashboards & rapportage",
    audience:
      "Bedrijven die klantdata in spreadsheets, hoofden of e-mail bijhouden.",
  },
  {
    num: 5,
    name: "Outbound",
    lowScore:
      "Geen actief outbound. Alleen inbound of netwerk. Geen systematische acquisitie.",
    blocks:
      "Outbound email engine, LinkedIn outreach, Multi-channel sequences",
    audience:
      "Bedrijven die afhankelijk zijn van referrals en wachten tot de telefoon gaat.",
  },
  {
    num: 6,
    name: "Enablement",
    lowScore:
      "Geen playbooks, scripts of training. Iedereen verkoop op eigen manier.",
    blocks:
      "Sales playbooks, Discovery-methodiek, Objection handling, Training",
    audience:
      "Teams waar nieuwe medewerkers maanden nodig hebben om productief te worden.",
  },
  {
    num: 7,
    name: "AI & Automation",
    lowScore:
      "Geen AI-tools in gebruik, of tools gekocht maar niet geïmplementeerd.",
    blocks:
      "AI tool selectie, Workflow automations, AI prospecting, Prompt libraries",
    audience:
      "Bedrijven die handmatig werk doen dat geautomatiseerd kan worden.",
  },
  {
    num: 8,
    name: "Team",
    lowScore:
      "Geen salesteam, of een team zonder duidelijke rollen en verantwoordelijkheden.",
    blocks:
      "Roldefinitie, Interview scorecards, Onboarding, Beloningsstructuur",
    audience:
      "Founders die hun eerste sales hire overwegen of een team zonder structuur hebben.",
  },
  {
    num: 9,
    name: "Data",
    lowScore:
      "Geen KPI-tracking. Geen zicht op conversieratio's, deal velocity of forecast accuracy.",
    blocks: "KPI-definitie, Dashboard setup, Forecast modellen",
    audience:
      "Bedrijven die op gevoel beslissingen nemen in plaats van op data.",
  },
  {
    num: 10,
    name: "Leadership",
    lowScore:
      "Geen sales management. Geen accountability. Niemand die het team stuurt.",
    blocks:
      "Pipeline reviews, Coaching programma, Wekelijkse ritmes, KPI-monitoring",
    audience:
      "Bedrijven zonder Head of Sales die het zich niet kunnen veroorloven.",
  },
];

export default function ScoreDimensions() {
  return (
    <div className="space-y-3">
      {dimensions.map((d) => (
        <details key={d.num} className="card group cursor-pointer">
          <summary className="flex items-center gap-4 [&::-webkit-details-marker]:hidden">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-teal/10 font-display text-sm font-bold text-accent-teal">
              {d.num}
            </span>
            <span className="flex-1 font-display font-semibold">{d.name}</span>
            <ChevronDown
              size={18}
              className="shrink-0 text-text-muted transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="mt-4 space-y-3 pl-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-red-400">
                Lage score betekent
              </p>
              <p className="mt-1 text-sm text-text-secondary">{d.lowScore}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-teal">
                Relevante bouwblokken
              </p>
              <p className="mt-1 text-sm text-text-secondary">{d.blocks}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                Typisch voor
              </p>
              <p className="mt-1 text-sm text-text-secondary">{d.audience}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
