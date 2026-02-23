import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import Marquee from "@/components/Marquee";
import ScrollWordmark from "@/components/ScrollWordmark";
import { PILLAR_COLORS } from "@/lib/constants";
import {
  ArrowRight,
  Search,
  Compass,
  Database,
  Send,
  Cpu,
  BookOpen,
  Check,
  X as XIcon,
  ChevronDown,
  MapPin,
  Wrench,
  User,
  Linkedin,
} from "lucide-react";

const P = PILLAR_COLORS;

export const metadata: Metadata = {
  title: "Fractional Head of Sales | Van founder-led naar schaalbare sales | Accelr",
  description:
    "Accelr helpt B2B tech-founders van ad-hoc sales naar een schaalbaar, AI-gedreven commercieel systeem. Diagnose, implementatie en leadership.",
  openGraph: {
    title: "Fractional Head of Sales | Van founder-led naar schaalbare sales | Accelr",
    description:
      "Accelr helpt B2B tech-founders van ad-hoc sales naar een schaalbaar, AI-gedreven commercieel systeem.",
    images: ["/images/og-accelr.png"],
    url: "https://accelr.nl",
  },
};

/* ─── Tool logos for marquee ─── */
const techTools = [
  "HubSpot",
  "Clay",
  "Make",
  "n8n",
  "Instantly",
  "Apollo",
  "Lemlist",
  "ChatGPT",
  "Salesforce",
  "Pipedrive",
  "LinkedIn Sales Nav",
  "Notion",
];

/* ─── Pain Points V8 (numbered rows, one-liner) ─── */
const painPoints = [
  "Ik ben de bottleneck.",
  "Sales aannemen is een gok.",
  "Tools en AI zonder proces.",
  "Onvoorspelbare pipeline.",
  "Opschalen vraagt om een systeem, niet om meer uren.",
];

/* ─── Keuzeblok V8 ─── */
const keuzeCards = [
  {
    icon: Search,
    title: "De Scan\u2122",
    subtitle: "Eenmalige diagnose",
    body: "Ik analyseer je complete salesoperatie: proces, team, tooling en data. Je krijgt een rapport met harde cijfers, een prioriteitenlijst en een concrete roadmap.",
    details: "Doorlooptijd: 2-3 weken",
    badge: "Altijd de eerste stap",
    badgeCheck: true,
    price: "\u20ac3.500 vast",
    extra: "Geld-terug-garantie",
    cta: "Meer over De Scan",
    href: "/de-scan",
  },
  {
    icon: Wrench,
    title: "De Bouw",
    subtitle: "Specifieke onderdelen",
    body: "Ik bouw specifieke onderdelen van je salesinfrastructuur. CRM-inrichting, outbound-machine, playbooks, AI-automations, afgebakend en resultaatgericht.",
    details: "Op basis van Scan-resultaten of eigen briefing",
    badge: "Projectmatig, afgebakend",
    badgeCheck: false,
    price: "Vanaf \u20ac7.500 per project",
    extra: null,
    cta: "Bekijk de bouwblokken",
    href: "#bouwblokken",
  },
  {
    icon: User,
    title: "Fractional Head of Sales",
    subtitle: "Parttime commercieel leider",
    body: "Ik word je parttime commercieel leider. 1-2 dagen per week, minimaal 6 maanden. Inclusief diagnose en alles wat nodig is.",
    details: "Min. 6 maanden",
    badge: "Vast maandelijks retainer",
    badgeCheck: false,
    price: "Vanaf \u20ac4.000/maand",
    extra: null,
    cta: "Meer over Fractional",
    href: "/expertise/fractional-head-of-sales",
  },
];

/* ─── Bouwblokken V8 ─── */
const bouwblokken = [
  {
    icon: Search,
    title: "De Scan\u2122",
    badge: "DIAGNOSE",
    desc: "Volledige doorlichting van je salesoperatie",
    href: "/de-scan",
    accent: P.strategy.color,
  },
  {
    icon: Compass,
    title: "Strategie & GTM",
    badge: "STRATEGIE",
    desc: "ICP-validatie, go-to-market plan, positionering",
    href: "/sales-strategie",
    accent: P.strategy.color,
  },
  {
    icon: Send,
    title: "Outbound & Leadgen",
    badge: "PROCES",
    desc: "Prospecting-machine die gekwalificeerde meetings genereert",
    href: "/outbound-leadgeneratie",
    accent: P.process.color,
  },
  {
    icon: Database,
    title: "CRM & Salesproces",
    badge: "PROCES",
    desc: "CRM-inrichting, pipeline design, verkoopproces",
    href: "/crm-implementatie",
    accent: P.process.color,
  },
  {
    icon: BookOpen,
    title: "Sales Enablement",
    badge: "PEOPLE",
    desc: "Playbooks, training, onboarding, coaching",
    href: "/sales-enablement",
    accent: P.people.color,
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    badge: "+ AI",
    desc: "Make, n8n, Clay, automatiseer wat geen mens hoeft te doen",
    href: "/ai-sales-automation",
    accent: P.ai.color,
  },
];

/* ─── Resultaten V8 ─── */
const resultaten = [
  {
    name: "Aethogenix",
    subtitle: "Pharma \u00b7 Medical Cannabis",
    link: "https://www.aethogenix.com/",
    deed: "Positionering, ICP, GTM-plan, Fractional Head of Sales",
    quote: "[quote van Matthieu, wordt later ingevuld]",
    author: "Matthieu, Aethogenix",
  },
  {
    name: "Anoniem",
    subtitle: "Media",
    link: null,
    deed: "Salesteam opgebouwd, salesproces opgezet, CRM ingericht",
    quote: null,
    author: null,
  },
  {
    name: "STABL Agency",
    subtitle: "Growth Agency",
    link: "https://stablagency.com/",
    deed: "GTM-strategie, CRM-inrichting",
    quote: null,
    author: null,
  },
];

/* ─── Vergelijkingstabel V8 ─── */
const comparisonRows = [
  {
    aspect: "Kosten/jaar",
    zelf: "\u20ac0 + opportunity",
    fulltime: "\u20ac150K-\u20ac220K",
    interim: "\u20ac120K-\u20ac180K",
    accelr: "\u20ac48K-\u20ac96K",
  },
  {
    aspect: "Commitment",
    zelf: "Geen",
    fulltime: "12+ mnd",
    interim: "6-12 mnd",
    accelr: "6 mnd, flexibel",
  },
  {
    aspect: "Beschikbaarheid",
    zelf: "Resturen",
    fulltime: "Fulltime",
    interim: "Fulltime",
    accelr: "1-2 dagen/week",
  },
  {
    aspect: "Expertise",
    zelf: "Eigen kennis",
    fulltime: "1 profiel",
    interim: "1 profiel",
    accelr: "Breed: strategie+ops+AI",
  },
  {
    aspect: "Risico",
    zelf: "N.v.t.",
    fulltime: "Hoog (\u20ac80K+)",
    interim: "Medium",
    accelr: "Laag (Scan eerst)",
  },
  {
    aspect: "Kennisoverdracht",
    zelf: "N.v.t.",
    fulltime: "\u2014",
    interim: "\u2014",
    accelr: "Ingebouwd",
  },
  {
    aspect: "Na 90 dagen",
    zelf: "Onvoorspelbaar",
    fulltime: "Onboarding loopt",
    interim: "Operationeel",
    accelr: "CRM+proces+pipeline",
  },
  {
    aspect: "Niet beste keuze als...",
    zelf: "Je het zelf kunt",
    fulltime: "50+ FTE dagelijks",
    interim: "Gap vullen",
    accelr: "Dagelijks nodig",
    muted: true,
  },
];

/* ─── Investering V8 ─── */
const investmentModels = [
  {
    title: "De Scan\u2122",
    price: "\u20ac3.500",
    priceSuffix: "vast",
    duration: "2-3 weken",
    result: "47-punts diagnose, geprioriteerde roadmap, scan-rapport met harde cijfers",
    uren: "~8 uur totaal",
    garantie: true,
    scanIncluded: "Dit \u00eds De Scan",
    highlight: false,
  },
  {
    title: "De Bouw",
    price: "Vanaf \u20ac7.500",
    priceSuffix: "per project",
    duration: "4-12 weken",
    result: "Werkend onderdeel: ingericht CRM, draaiende outbound, playbook, of AI-automation",
    uren: "Projectafhankelijk",
    garantie: false,
    scanIncluded: "Apart (of vooraf gedaan)",
    highlight: false,
  },
  {
    title: "Fractional Head of Sales",
    price: "Vanaf \u20ac4.000",
    priceSuffix: "/maand",
    duration: "Min. 6 maanden",
    result: "Commercieel leiderschap + alle bouwblokken + team coaching + wekelijks overleg",
    uren: "8-16 uur/week (1-2 dagen)",
    garantie: false,
    scanIncluded: "Eerste maand = diagnose",
    highlight: true,
  },
];

/* ─── Voor wie V8 ─── */
const voorJou = [
  "B2B SaaS, tech of IT-dienstverlener",
  "\u20ac1M-\u20ac10M omzet, 10-80 medewerkers",
  "Technische founder die (nog) zelf verkoopt",
  "Net eerste sales hire gedaan, of eerste is mislukt",
  "Wil een systeem, niet een adviseur",
];
const nietVoorJou = [
  "B2C of e-commerce",
  "<\u20ac500K omzet (focus op product-market fit)",
  "Zoekt iemand die \"overneemt\" zonder jouw betrokkenheid",
  "Werkend team van 10+ (je hebt fulltime HoS nodig)",
];

/* ─── FAQ V8 ─── */
const faqs = [
  {
    q: "Wat is een Fractional Head of Sales?",
    a: "Ervaren commercieel leider, 1-2 dagen/week. Strategisch leiderschap + hands-on execution zonder \u20ac150K+/jaar. In Amerika gangbaar, in Nederland begint het net.",
  },
  {
    q: "Waarom beginnen met De Scan?",
    a: "80% denkt dat het probleem \"meer leads\" is. Na De Scan: bijna altijd een proces-, CRM- of kwalificatieprobleem. Voorkomt geld uitgeven aan de verkeerde oplossing. Niet eens met de bevindingen? Geld terug.",
  },
  {
    q: "Hoe verschilt Fractional van Interim?",
    a: "Interim = gat vullen, draaiende houden. Fractional = versnelling, bouwen, team ontwikkelen. 1-2 dagen/week, 60-70% goedkoper. Doel: fundament bouwen zodat je kunt schalen.",
  },
  {
    q: "Hoe snel resultaten?",
    a: "Scan: 2-3 weken \u2192 helder beeld. Bouw: 4-6 weken eerste onderdelen. Fractional: CRM+proces na 90 dagen, pipeline-impact na 3-4 maanden, structurele groei 6+ maanden. Eerlijk: duurzaam kost tijd.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ═══ SECTIE 1 — HERO V8 ═══ */}
        <section className="relative min-h-[90vh] bg-white overflow-hidden">
          <div className="container-wide flex min-h-[90vh] items-center py-20 sm:py-28 lg:py-32">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_auto]">
              <FadeIn direction="up">
                <div className="max-w-[600px]">
                  <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                    Je salesgroei hangt af van jou. Dat is het probleem.
                  </h1>

                  <p className="mt-8 max-w-[600px] text-lg text-text-dark-secondary leading-relaxed">
                    Ik bouw het salesfundament, strategie, proces en team, zodat
                    groei niet meer van jou alleen afhangt. Van diagnose tot
                    operationeel salesleiderschap.
                  </p>

                  {/* Drieluik */}
                  <div className="mt-10 flex flex-col gap-3">
                    <div className="rounded-lg bg-bg-light px-5 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-dark-muted">/ Sales Diagnose</p>
                    </div>
                    <div className="rounded-lg bg-bg-light px-5 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-dark-muted">/ Projectmatig bouwen</p>
                    </div>
                    <div className="rounded-lg bg-bg-light px-5 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-dark-muted">/ Fractional Head of Sales</p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                    <Link href="/contact" className="btn-primary">
                      <span className="btn-label">Plan een kennismaking</span>
                      <span className="btn-arrow">
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                    <Link href="/de-scan" className="btn-secondary-dark">
                      Start met De Scan
                    </Link>
                  </div>

                  <p className="mt-4 text-xs text-text-dark-muted">
                    30 minuten &middot; Geen verplichtingen &middot; Je loopt weg
                    met 3 concrete actiepunten.
                  </p>
                </div>
              </FadeIn>

              <div className="hidden lg:flex items-center justify-end">
                <ScrollWordmark />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 2 — TOOL TICKER ═══ */}
        <section className="border-y border-border-light-mode bg-bg-light py-6">
          <div className="mb-2 text-center">
            <p className="section-label-dark">/ Tools & Technologie&euml;n</p>
          </div>
          <Marquee speed={40}>
            {techTools.map((tool) => (
              <span
                key={tool}
                className="whitespace-nowrap font-mono text-sm font-medium text-text-dark-muted opacity-60"
              >
                {tool}
              </span>
            ))}
          </Marquee>
        </section>

        {/* ═══ SECTIE 3 — HERKENBAAR? V8 (numbered rows) ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <p className="section-label-dark">/ Herkenbaar?</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
                  Maak ruimte voor groei.
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-3xl flex flex-col gap-0">
              {painPoints.map((point, i) => (
                <FadeIn key={point} delay={i * 0.08}>
                  <div className="flex items-center gap-6 rounded-lg bg-bg-light px-6 py-5">
                    <span className="font-mono text-sm text-text-dark-secondary shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display text-base font-semibold text-text-dark sm:text-lg">
                      {point}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <div className="mt-10 text-center">
                <Link href="/de-scan" className="btn-primary">
                  Start met De Scan
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 4 — KEUZEBLOK V8 ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Samenwerking</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Hoe werken we samen?
              </h2>
              <p className="mt-4 max-w-2xl text-text-dark-secondary">
                Elk traject begint met diagnose. Daarna bepalen we samen hoe
                diep ik erbij kom.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {keuzeCards.map((card, i) => (
                <FadeIn key={card.title} delay={i * 0.1}>
                  <div className="card-light h-full flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <card.icon size={24} className="shrink-0 text-accent-teal" />
                      {card.badgeCheck ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent-teal/10 px-3 py-1 text-[11px] font-semibold text-accent-teal-dark">
                          <Check size={12} strokeWidth={3} />
                          {card.badge}
                        </span>
                      ) : (
                        <span className="rounded-full bg-bg-light px-3 py-1 text-[11px] font-medium text-text-dark-muted">
                          {card.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-lg font-semibold text-text-dark">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-text-dark-muted">
                      {card.subtitle}
                    </p>

                    <p className="mt-4 flex-1 text-sm text-text-dark-secondary leading-relaxed">
                      {card.body}
                    </p>

                    <p className="mt-4 text-xs text-text-dark-muted">{card.details}</p>

                    <p className="mt-3 text-base font-bold text-accent-teal-dark">
                      {card.price}
                    </p>

                    {card.extra && (
                      <p className="mt-1 flex items-center gap-1 text-xs font-medium text-accent-teal-dark">
                        <Check size={12} strokeWidth={3} /> {card.extra}
                      </p>
                    )}

                    <Link
                      href={card.href}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-teal-dark hover:text-accent-teal-hover transition-colors"
                    >
                      {card.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-dark-secondary italic">
                Niet zeker wat je nodig hebt? Start met De Scan. Bij een
                Fractional traject zit de diagnose in de eerste maand, je
                betaalt De Scan niet apart.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 5 — FORMULE V8 ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Het framework</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                E&eacute;n systeem, vier hefbomen
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <span className="rounded-full px-5 py-2 font-display text-base font-semibold text-white sm:text-lg" style={{ backgroundColor: P.strategy.color }}>
                  Strategie
                </span>
                <span className="text-xl font-light text-text-dark-muted">&rarr;</span>
                <span className="text-xl font-light text-text-dark-muted">(</span>
                <span className="rounded-full px-5 py-2 font-display text-base font-semibold text-white sm:text-lg" style={{ backgroundColor: P.process.color }}>
                  Proces
                </span>
                <span className="text-xl font-light text-text-dark-muted">&times;</span>
                <span className="rounded-full px-5 py-2 font-display text-base font-semibold text-white sm:text-lg" style={{ backgroundColor: P.people.color }}>
                  People
                </span>
                <span className="text-xl font-light text-text-dark-muted">)</span>
                <span className="text-xl font-light text-text-dark-muted">&times;</span>
                <span className="rounded-full px-5 py-2 font-display text-base font-semibold text-white sm:text-lg" style={{ backgroundColor: P.ai.color }}>
                  AI
                </span>
                <span className="text-xl font-light text-text-dark-muted">=</span>
                <span className="rounded-full bg-gray-800 px-5 py-2 font-display text-base font-semibold text-white sm:text-lg">
                  Schaalbare groei
                </span>
              </div>

              <p className="mt-6 mx-auto max-w-2xl text-center text-text-dark-secondary">
                Drie pijlers die elkaar versterken. AI is de multiplier. Als
                &eacute;&eacute;n pijler ontbreekt, vermenigvuldig je nul.
              </p>

              <div className="mt-4 text-center">
                <Link
                  href="/methode"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-teal-dark hover:text-accent-teal-hover transition-colors"
                >
                  Ontdek de volledige aanpak <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 6 — BOUWBLOKKEN V8 ═══ */}
        <section id="bouwblokken" className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Bouwblokken</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                De bouwblokken
              </h2>
              <p className="mt-4 max-w-2xl text-text-dark-secondary">
                Dit zijn de onderdelen die ik inzet, op projectbasis of
                doorlopend.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bouwblokken.map((card, i) => (
                <FadeIn key={card.title} delay={i * 0.08}>
                  <Link href={card.href} className="block h-full">
                    <div
                      className="card-light h-full flex flex-col overflow-hidden"
                      style={{ borderTop: `4px solid ${card.accent}` }}
                    >
                      <div className="flex items-center justify-between">
                        <card.icon size={24} className="text-accent-teal" />
                        <span
                          className="rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                          style={{ color: card.accent, backgroundColor: `${card.accent}15` }}
                        >
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-lg font-semibold text-text-dark">
                        {card.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm text-text-dark-secondary leading-relaxed">
                        {card.desc}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-teal">
                        Ontdek meer <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-dark-secondary">
                Bij De Scan analyseer ik alle bouwblokken. Bij De Bouw werk ik
                aan specifieke onderdelen. Als Fractional Head of Sales bewaak
                ik het geheel doorlopend.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 7 — RESULTATEN ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Resultaten</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Resultaten
              </h2>
              <p className="mt-4 max-w-2xl text-text-dark-secondary">
                Een greep uit recente trajecten.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {resultaten.map((r, i) => (
                <FadeIn key={r.name} delay={i * 0.1}>
                  <div className="card-light h-full flex flex-col">
                    <p className="font-display text-lg font-bold text-text-dark">
                      {r.link ? (
                        <a href={r.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent-teal-dark transition-colors">
                          {r.name}
                        </a>
                      ) : (
                        r.name
                      )}
                    </p>
                    <p className="mt-1 text-xs font-medium text-text-dark-muted">{r.subtitle}</p>

                    <p className="mt-4 text-sm text-text-dark-secondary">{r.deed}</p>

                    {r.quote && (
                      <blockquote className="mt-4 border-l-2 border-accent-teal/30 pl-3 flex-1">
                        <p className="text-xs italic text-text-dark-secondary">&ldquo;{r.quote}&rdquo;</p>
                        {r.author && (
                          <p className="mt-1 text-xs text-text-dark-muted">, {r.author}</p>
                        )}
                      </blockquote>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 8 — VERGELIJKINGSTABEL V8 ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Het verschil</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Wat kost sales leiderschap?
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-12 hidden lg:block overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-border-light-mode">
                      <th className="pb-4 pr-4 font-display text-sm font-semibold text-text-dark-muted w-[180px]">&nbsp;</th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">Zelf doen</th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">Fulltime HoS</th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">Interim</th>
                      <th className="pb-4 px-4 font-display text-sm font-bold text-accent-teal-dark">
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-accent-teal" />
                          Accelr Fractional
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr
                        key={row.aspect}
                        className={`${i < comparisonRows.length - 1 ? "border-b border-border-light-mode/50" : ""} ${row.muted ? "text-text-dark-muted text-xs" : ""}`}
                      >
                        <td className={`py-4 pr-4 font-medium ${row.muted ? "text-text-dark-muted" : "text-text-dark"}`}>{row.aspect}</td>
                        <td className="py-4 px-4 text-text-dark-secondary">{row.zelf}</td>
                        <td className="py-4 px-4 text-text-dark-secondary">{row.fulltime}</td>
                        <td className="py-4 px-4 text-text-dark-secondary">{row.interim}</td>
                        <td className="py-4 px-4 rounded-lg bg-accent-teal/5 text-text-dark font-medium">
                          {!row.muted ? (
                            <span className="flex items-start gap-2">
                              <Check size={16} className="mt-0.5 shrink-0 text-accent-teal-dark" strokeWidth={3} />
                              {row.accelr}
                            </span>
                          ) : (
                            <span className="text-text-dark-muted">{row.accelr}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Mobile */}
            <div className="mt-12 space-y-4 lg:hidden">
              {comparisonRows.filter((r) => !r.muted).map((row, i) => (
                <FadeIn key={row.aspect} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border-light-mode bg-white p-5">
                    <p className="font-display text-sm font-bold text-text-dark">{row.aspect}</p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-start gap-2 rounded-lg bg-accent-teal/5 p-2.5">
                        <Check size={14} className="mt-0.5 shrink-0 text-accent-teal-dark" strokeWidth={3} />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-accent-teal-dark">Accelr Fractional</p>
                          <p className="text-sm text-text-dark">{row.accelr}</p>
                        </div>
                      </div>
                      {[
                        { label: "Zelf doen", value: row.zelf },
                        { label: "Fulltime HoS", value: row.fulltime },
                        { label: "Interim", value: row.interim },
                      ].map((alt) => (
                        <div key={alt.label} className="flex items-start gap-2 p-2.5">
                          <span className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          <div>
                            <p className="text-[10px] font-medium uppercase tracking-wider text-text-dark-muted">{alt.label}</p>
                            <p className="text-sm text-text-dark-secondary">{alt.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-text-dark-muted">
                90 dagen = CRM ingericht, proces gedocumenteerd, playbooks live.
                Voorspelbare pipeline kost 6+ maanden. Bronnen: Robert Half
                Salary Guide NL 2024, Glassdoor Nederland.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 9 — INVESTERING V8 ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Investering</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                De investering
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {investmentModels.map((model, i) => (
                <FadeIn key={model.title} delay={i * 0.1}>
                  <div className={`card-light h-full flex flex-col ${model.highlight ? "ring-2 ring-accent-teal/40" : ""}`}>
                    <h3 className="font-display text-lg font-bold text-text-dark">{model.title}</h3>

                    <p className="mt-4 text-2xl font-bold text-accent-teal-dark">
                      {model.price}
                      <span className="text-sm font-normal text-text-dark-secondary"> {model.priceSuffix}</span>
                    </p>

                    <div className="mt-6 space-y-4 flex-1">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">Doorlooptijd</p>
                        <p className="mt-1 text-sm text-text-dark">{model.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">Wat je krijgt</p>
                        <p className="mt-1 text-sm text-text-dark">{model.result}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">Uren</p>
                        <p className="mt-1 text-sm text-text-dark">{model.uren}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">Geld-terug garantie</p>
                        <p className="mt-1 text-sm text-text-dark">
                          {model.garantie ? (
                            <span className="flex items-center gap-1 text-accent-teal-dark font-semibold">
                              <Check size={14} strokeWidth={3} /> Ja
                            </span>
                          ) : "\u2014"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">Inclusief De Scan</p>
                        <p className="mt-1 text-sm text-text-dark">{model.scanIncluded}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 10 — OVER TIM V8 ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Het team</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                De mens achter Accelr
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-12 mx-auto max-w-3xl">
                <div className="grid items-start gap-8 md:grid-cols-[280px_1fr]">
                  <div className="relative">
                    <div className="aspect-[3/4] w-full rounded-2xl bg-bg-primary overflow-hidden">
                      <Image
                        src="/images/tim.jpeg"
                        alt="Tim Samsom, Founder & Fractional Head of Sales bij Accelr"
                        width={560}
                        height={747}
                        className="h-full w-full object-cover object-top"
                        priority
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 rounded-lg bg-accent-teal px-3 py-1.5">
                      <span className="font-mono text-xs font-bold text-bg-primary">/01</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                      Founder &amp; Fractional Head of Sales
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-text-dark">
                      Tim Samsom
                    </h3>
                    <p className="mt-4 text-text-dark-secondary leading-relaxed">
                      8+ jaar B2B sales in adtech en tech. Als Country Manager
                      Nederland bij ShowHeroes bouwde ik de Nederlandse operatie
                      van scratch, van eerste klant tot structureel
                      commercieel team. Daarvoor verantwoordelijk voor sales bij
                      Streamads en commerci&euml;le rollen bij Ematters en
                      XS4ALL. Alumnus Nyenrode Business Universiteit.
                    </p>
                    <blockquote className="mt-6 border-l-4 border-accent-teal pl-5 py-1">
                      <p className="text-lg italic font-medium text-text-dark leading-relaxed">
                        De meeste sales problemen zijn geen mensen-problemen.
                        Het zijn systeem-problemen.
                      </p>
                    </blockquote>
                    <div className="mt-6 flex items-center gap-4">
                      <Link
                        href="/over-tim"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent-teal-dark hover:text-accent-teal-hover transition-colors"
                      >
                        Lees meer <ArrowRight size={14} />
                      </Link>
                      <a
                        href="https://linkedin.com/in/timsam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-dark-muted hover:text-accent-teal-dark transition-colors"
                      >
                        <Linkedin size={16} /> Bekijk mijn LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 11 — VOOR WIE V8 ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Voor wie</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Is dit voor jou?
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="h-full rounded-2xl border border-accent-teal/20 bg-accent-teal/5 p-6 sm:p-8">
                  <h3 className="font-display text-lg font-bold text-text-dark">Wel voor jou</h3>
                  <ul className="mt-6 space-y-3">
                    {voorJou.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-dark-secondary">
                        <Check size={18} className="mt-0.5 shrink-0 text-accent-teal" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="h-full rounded-2xl border border-red-200 bg-red-50 p-6 sm:p-8">
                  <h3 className="font-display text-lg font-bold text-text-dark">Niet voor jou</h3>
                  <ul className="mt-6 space-y-3">
                    {nietVoorJou.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-dark-secondary">
                        <XIcon size={18} className="mt-0.5 shrink-0 text-red-400" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 12 — FAQ V8 ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl">
              <FadeIn>
                <p className="section-label-dark">/ FAQ</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Veelgestelde vragen
                </h2>
              </FadeIn>

              <div className="mt-12 space-y-3">
                {faqs.map((faq, i) => (
                  <FadeIn key={faq.q} delay={i * 0.08}>
                    <details className="group rounded-xl border border-border-light-mode bg-white px-6 py-5 cursor-pointer transition-all hover:shadow-sm">
                      <summary className="flex items-center justify-between gap-4 font-display text-base font-semibold text-text-dark [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <ChevronDown size={18} className="shrink-0 text-text-dark-muted transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <p className="mt-4 text-sm text-text-dark-secondary leading-relaxed">{faq.a}</p>
                    </details>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 13 — FOOTER CTA V8 ═══ */}
        <section className="bg-bg-secondary py-24 sm:py-32 lg:py-40">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  accelr.
                </p>
                <h2 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                  Klaar om je sales te professionaliseren?
                </h2>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact" className="btn-primary">
                    <span className="btn-label">Plan een vrijblijvend gesprek</span>
                    <span className="btn-arrow"><ArrowRight size={16} /></span>
                  </Link>
                </div>

                <p className="mt-6 text-sm text-text-muted">
                  Of start met De Scan, &euro;3.500 vast, geld-terug-garantie.
                </p>

                <div className="mt-10 flex flex-col items-center gap-3 text-sm text-text-muted">
                  <a href="mailto:tim@accelr.nl" className="hover:text-accent-teal transition-colors">tim@accelr.nl</a>
                  <span className="flex items-center gap-1"><MapPin size={14} />Amsterdam, Nederland</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
