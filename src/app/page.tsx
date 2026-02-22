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
} from "lucide-react";

const P = PILLAR_COLORS;

export const metadata: Metadata = {
  title: "Accelr, Salesystemen Voor Ambitieuze B2B-Bedrijven",
  description:
    "Accelr helpt B2B tech-founders van ad-hoc sales naar een schaalbaar, AI-gedreven commercieel systeem. Diagnose, implementatie en leadership.",
  openGraph: {
    title: "Accelr, Salesystemen Voor Ambitieuze B2B-Bedrijven",
    description:
      "Accelr helpt B2B tech-founders van ad-hoc sales naar een schaalbaar, AI-gedreven commercieel systeem. Diagnose, implementatie en leadership.",
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

/* ─── Pain Points (pills) ─── */
const painPoints = [
  "De founder sluit 80% van de deals zelf. Dat schaalt niet.",
  "Leads verdwijnen in spreadsheets zonder opvolging.",
  "CRM gekocht, maar niemand die het werkend maakt.",
  "Outbound is ad-hoc: geen systeem, geen voorspelbaarheid.",
  "Opschalen vraagt om een systeem, niet om meer uren.",
];

/* ─── Keuzeblok cards (V7) ─── */
const keuzeCards = [
  {
    icon: Search,
    title: "De Scan\u2122",
    subtitle: "Eenmalige diagnose",
    body: "Ik analyseer je complete salesoperatie: proces, team, tooling en data. Je krijgt een rapport met harde cijfers, een prioriteitenlijst en een concrete roadmap.",
    details: "Doorlooptijd: 2-3 weken",
    badge: "Altijd de eerste stap",
    badgeCheck: true,
    price: "\u20ac 3.500 vast",
    cta: "Meer over De Scan",
    href: "/de-scan",
  },
  {
    icon: Wrench,
    title: "De Bouw",
    subtitle: "Projectmatig bouwen",
    body: "Ik bouw specifieke onderdelen van je salesinfrastructuur. CRM-inrichting, outbound-machine, playbooks, AI-automations \u2014 afgebakend en resultaatgericht.",
    details: "Op basis van Scan-resultaten of eigen briefing",
    badge: "Projectmatig, afgebakend",
    badgeCheck: false,
    price: "Vanaf \u20ac 5.000 per project",
    cta: "Bekijk de bouwblokken",
    href: "#bouwblokken",
  },
  {
    icon: User,
    title: "Fractional Head of Sales",
    subtitle: "Doorlopend partnerschap",
    body: "Ik word je parttime commercieel leider. 1-2 dagen per week, minimaal 6 maanden. Inclusief diagnose + alles wat nodig is om je sales structureel te laten groeien.",
    details: "Vast maandelijks retainer",
    badge: "Vast maandelijks retainer",
    badgeCheck: false,
    price: "Vanaf \u20ac 4.000/maand",
    cta: "Meer over Fractional",
    href: "/expertise/fractional-head-of-sales",
  },
];

/* ─── Bouwblokken cards (V7) ─── */
const bouwblokken = [
  {
    icon: Search,
    title: "De Scan\u2122",
    badge: "DIAGNOSE",
    desc: "Gestructureerde doorlichting van je salesoperatie op 10 dimensies. Actieplan met geprioriteerde kansen en euro-waarde.",
    href: "/de-scan",
    accent: P.strategy.color,
  },
  {
    icon: Compass,
    title: "Strategie & GTM",
    badge: "STRATEGIE",
    desc: "ICP-definitie, go-to-market plan, positionering, kanaalstrategie en pricing. De strategische basis onder alles wat je bouwt.",
    href: "/sales-strategie",
    accent: P.strategy.color,
  },
  {
    icon: Send,
    title: "Outbound & Leadgen",
    badge: "PROCES",
    desc: "Email engine, LinkedIn outreach, multi-channel sequences. Voorspelbare pipeline in plaats van afhankelijkheid van je netwerk.",
    href: "/outbound-leadgeneratie",
    accent: P.process.color,
  },
  {
    icon: Database,
    title: "CRM & Salesproces",
    badge: "PROCES",
    desc: "CRM selectie, inrichting, pipeline design, dashboards, lead scoring en rapportage. Van spreadsheet naar werkend systeem.",
    href: "/crm-implementatie",
    accent: P.process.color,
  },
  {
    icon: BookOpen,
    title: "Sales Enablement",
    badge: "PEOPLE",
    desc: "Playbooks, discovery scripts, objection handling, team training. Zodat je team verkoopt zoals jij dat doet.",
    href: "/sales-enablement",
    accent: P.people.color,
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    badge: "+ AI",
    desc: "AI prospecting (Clay/Apollo), workflow automation (Make/n8n), AI-personalisatie en prompt libraries. Structureel ge\u00efntegreerd.",
    href: "/ai-sales-automation",
    accent: P.ai.color,
  },
];

/* ─── Vergelijkingstabel V7 (Fractional vs Fulltime vs Interim vs Zelf) ─── */
const comparisonRows = [
  {
    aspect: "Kosten/jaar",
    zelf: "\u20ac0 (+ opportunitykosten)",
    fulltime: "\u20ac175.000 \u2013 \u20ac250.000",
    interim: "\u20ac120.000 \u2013 \u20ac200.000",
    accelr: "\u20ac48.000 \u2013 \u20ac96.000",
  },
  {
    aspect: "Commitment",
    zelf: "Geen",
    fulltime: "12+ maanden",
    interim: "6-12 maanden",
    accelr: "6 maanden, flexibel",
  },
  {
    aspect: "Expertise",
    zelf: "Jouw eigen kennis",
    fulltime: "1 profiel",
    interim: "1 profiel",
    accelr: "Breed: strategie + ops + AI",
  },
  {
    aspect: "Risico",
    zelf: "Hoog (bottleneck)",
    fulltime: "Hoog (mis-hire \u20ac100K+)",
    interim: "Medium",
    accelr: "Laag (start met Scan)",
  },
  {
    aspect: "Na 90 dagen",
    zelf: "Onvoorspelbaar",
    fulltime: "Onboarding loopt nog",
    interim: "Operationeel",
    accelr: "Systeem draait",
  },
];

/* ─── Investering V7 ─── */
const investmentModels = [
  {
    title: "De Scan",
    price: "\u20ac 3.500",
    priceSuffix: "vast",
    duration: "2-3 weken",
    result: "Diagnose + roadmap + cijfers",
    garantie: true,
    scanIncluded: "Dit \u00eds De Scan",
  },
  {
    title: "De Bouw",
    price: "Vanaf \u20ac 5.000",
    priceSuffix: "per project",
    duration: "4-12 weken",
    result: "Werkend onderdeel van je sales systeem",
    garantie: false,
    scanIncluded: "Nee (apart of vooraf)",
  },
  {
    title: "Fractional Head of Sales",
    price: "Vanaf \u20ac 4.000",
    priceSuffix: "/maand",
    duration: "Min. 6 maanden",
    result: "Commercieel leiderschap + alle bouwblokken",
    garantie: false,
    scanIncluded: "Eerste maand = diagnose",
  },
];

/* ─── Voor wie / Niet voor jou ─── */
const voorJou = [
  "B2B SaaS-, tech- of IT-bedrijf met \u20ac500K-\u20ac20M omzet",
  "Je hebt een bewezen product maar sales groeit niet",
  "De founder sluit 80%+ van de deals zelf",
  "Je wilt eigenaar zijn van je sales infrastructuur",
  "Je wilt AI inzetten maar weet niet waar te beginnen",
];
const nietVoorJou = [
  "Je zoekt een magic bullet (die bestaat niet)",
  "Je wilt alleen \"leads kopen\" zonder systeem",
  "Je hebt geen tijd om 2 uur per week te investeren",
  "Je hebt nog geen product-market fit",
  "Je verwacht resultaat zonder eigen betrokkenheid",
];

/* ─── FAQ (V7 = V6) ─── */
const faqs = [
  {
    q: "Wat als ik nog geen CRM of salesproces heb?",
    a: "Perfect \u2014 daar begint het. De Scan brengt in kaart wat je nodig hebt. De Bouw maakt het werkend.",
  },
  {
    q: "Hoe snel zie ik resultaat?",
    a: "De Scan levert binnen 2 weken een actieplan. De Bouw duurt 3-8 weken. De eerste resultaten zie je binnen de eerste maand van De Bouw.",
  },
  {
    q: "Wat maakt jou anders dan een sales consultant?",
    a: "De meeste consultants leveren een rapport. Ik bouw werkende systemen. CRM\u2019s, AI-tools, campagnes, processen \u2014 hands-on. En alles is van jou, niet van mij.",
  },
  {
    q: "Wat kost het?",
    a: "De Scan kost \u20ac3.500 vast. De Bouw varieert van \u20ac5.000-\u20ac20.000 afhankelijk van scope. Het Partnerschap is maandelijks. Alles wordt vooraf afgesproken \u2014 geen verrassingen.",
  },
];

/* ─── Blog Previews ─── */
const blogPreviews = [
  {
    title: "Waarom founder-led sales niet schaalt (en wat w\u00e9l werkt)",
    excerpt:
      "De meeste founders zijn hun eigen beste verkoper. Maar dat is een plafond, geen strategie. Over de transitie van founder-led naar systeem-led sales.",
    tag: "Sales Strategy",
  },
  {
    title: "CRM kiezen als B2B startup: HubSpot vs Pipedrive vs Salesforce",
    excerpt:
      "Een praktische vergelijking voor bedrijven van 5-50 medewerkers. Welk CRM past bij jouw fase?",
    tag: "Tools & Tech",
  },
  {
    title: "Hoe Clay + Make je outbound 10x effici\u00ebnter maakt",
    excerpt:
      "AI-gedreven prospecting setup die je in een middag draait. Met concrete workflows en templates.",
    tag: "AI & Automation",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ═══ SECTIE 1 — HERO (V7) ═══ */}
        <section className="relative min-h-[90vh] bg-white overflow-hidden">
          <div className="container-wide flex min-h-[90vh] items-center py-20 sm:py-28 lg:py-32">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_auto]">
              {/* Left: text */}
              <FadeIn direction="up">
                <div className="max-w-xl">
                  <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                    Van founder-led sales naar een schaalbaar systeem.
                  </h1>

                  <p className="mt-8 text-lg text-text-dark-secondary leading-relaxed">
                    Sales Scan &middot; Projectmatig bouwen &middot; Fractional
                    leiderschap &mdash; je kiest hoe diep ik erbij kom.
                  </p>

                  <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                    <Link href="/contact" className="btn-primary">
                      <span className="btn-label">Plan een gesprek</span>
                      <span className="btn-arrow">
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                    <Link href="/de-scan" className="btn-secondary-dark">
                      Start met De Scan
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* Right: animated wordmark */}
              <div className="hidden lg:flex items-center justify-end">
                <ScrollWordmark />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 2 — TOOL LOGOS MARQUEE (LICHT) ═══ */}
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

        {/* ═══ SECTIE 3 — PIJNPUNTEN (LICHT, pills) ═══ */}
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

            <div className="mx-auto mt-12 max-w-3xl space-y-4">
              {painPoints.map((point, i) => (
                <FadeIn key={point} delay={i * 0.08}>
                  <div className="pill flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 font-mono text-xs font-medium text-text-dark-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p>{point}</p>
                  </div>
                </FadeIn>
              ))}

              <FadeIn delay={painPoints.length * 0.08 + 0.1}>
                <div className="mt-8 text-center">
                  <Link
                    href="/de-scan"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-teal-dark hover:text-accent-teal-hover transition-colors"
                  >
                    Doe De Scan &mdash; ontdek waar je salesmotor vastloopt <ArrowRight size={14} />
                  </Link>
                  <p className="mt-2 text-xs text-text-dark-muted">
                    &euro;3.500 vast &middot; Geld-terug garantie &middot; Resultaat in 2 weken
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 4 — KEUZEBLOK "HOE WERKEN WE SAMEN?" (V7, NIEUW) ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Samenwerking</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Hoe werken we samen?
              </h2>
              <p className="mt-4 max-w-2xl text-text-dark-secondary">
                Elk traject begint met De Scan. Daarna bepalen we samen hoe we
                verder gaan.
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

                    <p className="mt-4 text-xs text-text-dark-muted">
                      {card.details}
                    </p>

                    <p className="mt-3 text-base font-bold text-accent-teal-dark">
                      {card.price}
                    </p>

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
              <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-dark-secondary">
                Niet zeker wat je nodig hebt? Start met De Scan. Op basis van de
                diagnose bepalen we samen of je projectmatig verder wilt of dat
                een doorlopend partnerschap meer oplevert.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 5 — FORMULE (V7, compact) ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Het framework</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                E&eacute;n systeem, vier hefbomen
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3">
                {/* Strategie */}
                <span
                  className="rounded-full border-[1.5px] px-5 py-2 font-display text-base font-medium sm:text-lg"
                  style={{ borderColor: P.strategy.color, backgroundColor: `${P.strategy.color}1A`, color: P.strategy.color }}
                >
                  Strategie
                </span>
                <span className="text-xl font-light text-text-dark-muted">&rarr;</span>
                <span className="text-xl font-light text-text-dark-muted">(</span>
                {/* Proces */}
                <span
                  className="rounded-full border-[1.5px] px-5 py-2 font-display text-base font-medium sm:text-lg"
                  style={{ borderColor: P.process.color, backgroundColor: `${P.process.color}1A`, color: P.process.color }}
                >
                  Proces
                </span>
                <span className="text-xl font-light text-text-dark-muted">&times;</span>
                {/* People */}
                <span
                  className="rounded-full border-[1.5px] px-5 py-2 font-display text-base font-medium sm:text-lg"
                  style={{ borderColor: P.people.color, backgroundColor: `${P.people.color}1A`, color: P.people.color }}
                >
                  People
                </span>
                <span className="text-xl font-light text-text-dark-muted">)</span>
                <span className="text-xl font-light text-text-dark-muted">&times;</span>
                {/* AI */}
                <span
                  className="rounded-full border-[1.5px] px-5 py-2 font-display text-base font-medium sm:text-lg"
                  style={{ borderColor: P.ai.color, backgroundColor: `${P.ai.color}1A`, color: P.ai.color }}
                >
                  AI
                </span>
                <span className="text-xl font-light text-text-dark-muted">=</span>
                {/* Result */}
                <span className="rounded-full bg-accent-teal px-5 py-2 font-display text-base font-semibold text-white sm:text-lg">
                  Schaalbare groei
                </span>
              </div>

              <p className="mt-6 max-w-2xl text-text-dark-secondary">
                Drie pijlers die elkaar versterken. AI is de multiplier. Het
                effect is niet optelbaar maar multiplicatief.
              </p>

              <div className="mt-4">
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

        {/* ═══ SECTIE 6 — BOUWBLOKKEN (V7, was Expertise) ═══ */}
        <section id="bouwblokken" className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Bouwblokken</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                De bouwblokken
              </h2>
              <p className="mt-4 max-w-2xl text-text-dark-secondary">
                Elke opdracht is maatwerk. Dit zijn de onderdelen die ik inzet
                &mdash; op projectbasis of als onderdeel van een doorlopend
                partnerschap.
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
                ik alles doorlopend.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 7 — VERGELIJKINGSTABEL V7 (Fractional vs Fulltime vs Interim vs Zelf) ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Het verschil</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Wat kost sales leiderschap?
              </h2>
            </FadeIn>

            {/* Desktop table */}
            <FadeIn delay={0.15}>
              <div className="mt-12 hidden lg:block overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-border-light-mode">
                      <th className="pb-4 pr-4 font-display text-sm font-semibold text-text-dark-muted w-[160px]">
                        &nbsp;
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        Zelf doen
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        Fulltime Head of Sales
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        Interim (fulltime)
                      </th>
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
                        className={
                          i < comparisonRows.length - 1
                            ? "border-b border-border-light-mode/50"
                            : ""
                        }
                      >
                        <td className="py-4 pr-4 font-medium text-text-dark">
                          {row.aspect}
                        </td>
                        <td className="py-4 px-4 text-text-dark-secondary">
                          {row.zelf}
                        </td>
                        <td className="py-4 px-4 text-text-dark-secondary">
                          {row.fulltime}
                        </td>
                        <td className="py-4 px-4 text-text-dark-secondary">
                          {row.interim}
                        </td>
                        <td className="py-4 px-4 rounded-lg bg-accent-teal/5 text-text-dark font-medium">
                          <span className="flex items-start gap-2">
                            <Check
                              size={16}
                              className="mt-0.5 shrink-0 text-accent-teal-dark"
                              strokeWidth={3}
                            />
                            {row.accelr}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Mobile stacked cards */}
            <div className="mt-12 space-y-4 lg:hidden">
              {comparisonRows.map((row, i) => (
                <FadeIn key={row.aspect} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border-light-mode bg-bg-light p-5">
                    <p className="font-display text-sm font-bold text-text-dark">
                      {row.aspect}
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-start gap-2 rounded-lg bg-accent-teal/5 p-2.5">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-accent-teal-dark"
                          strokeWidth={3}
                        />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-accent-teal-dark">
                            Accelr Fractional
                          </p>
                          <p className="text-sm text-text-dark">
                            {row.accelr}
                          </p>
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
                            <p className="text-[10px] font-medium uppercase tracking-wider text-text-dark-muted">
                              {alt.label}
                            </p>
                            <p className="text-sm text-text-dark-secondary">
                              {alt.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-text-dark-muted">
                Bronnen: Robert Half Salary Guide NL 2024, Glassdoor Nederland,
                marktonderzoek B2B sales consultancy.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 8 — INVESTERING V7 (3 engagement levels) ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
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
                  <div className="card-light h-full flex flex-col">
                    <h3 className="font-display text-lg font-bold text-text-dark">
                      {model.title}
                    </h3>

                    <p className="mt-4 text-2xl font-bold text-accent-teal-dark">
                      {model.price}
                      <span className="text-sm font-normal text-text-dark-secondary">
                        {" "}{model.priceSuffix}
                      </span>
                    </p>

                    <div className="mt-6 space-y-4 flex-1">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          Doorlooptijd
                        </p>
                        <p className="mt-1 text-sm text-text-dark">
                          {model.duration}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          Wat je krijgt
                        </p>
                        <p className="mt-1 text-sm text-text-dark">
                          {model.result}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          Geld-terug garantie
                        </p>
                        <p className="mt-1 text-sm text-text-dark">
                          {model.garantie ? (
                            <span className="flex items-center gap-1 text-accent-teal-dark font-semibold">
                              <Check size={14} strokeWidth={3} /> Ja
                            </span>
                          ) : (
                            "\u2014"
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          Inclusief De Scan
                        </p>
                        <p className="mt-1 text-sm text-text-dark">
                          {model.scanIncluded}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 9 — OVER TIM (LICHT, ongewijzigd) ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
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
                  {/* Photo */}
                  <div className="relative">
                    <div className="aspect-[3/4] w-full rounded-2xl bg-bg-primary overflow-hidden">
                      <Image
                        src="/images/tim.jpeg"
                        alt="Tim, Founder & Sales Growth Partner bij Accelr"
                        width={560}
                        height={747}
                        className="h-full w-full object-cover object-top"
                        priority
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 rounded-lg bg-accent-teal px-3 py-1.5">
                      <span className="font-mono text-xs font-bold text-bg-primary">
                        /01
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                      Founder & Sales Growth Partner
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-text-dark">
                      Tim
                    </h3>
                    <p className="mt-4 text-text-dark-secondary leading-relaxed">
                      Ik ben Tim. 10+ jaar in adtech en B2B sales bij
                      snelgroeiende tech-bedrijven. Ik heb salesteams
                      opgebouwd, strategie&euml;n ge&iuml;mplementeerd, en
                      outbound flows gebouwd die consistent omzet opleveren.
                    </p>
                    <p className="mt-4 text-text-dark-secondary leading-relaxed">
                      Eerst als koper van sales tools, als
                      eindverantwoordelijke voor revenue. Ik weet hoe het voelt
                      om tools te kopen die niet werken. Om freelancers in te
                      huren die iets bouwen dat kapot gaat zodra ze vertrekken.
                      Om te groeien op onderbuik in plaats van op data.
                    </p>
                    <p className="mt-4 text-text-dark-secondary leading-relaxed">
                      Nu bouw ik de systemen die ik zelf had willen hebben.
                      Gespecialiseerd in AI-gedreven sales infrastructuur,
                      powered by tools als n8n, Clay, en Make, die bedrijven
                      zelf kunnen runnen.
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
                        Lees meer over Tim <ArrowRight size={14} />
                      </Link>
                      <a
                        href="https://linkedin.com/in/timsam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-text-dark-muted hover:text-accent-teal-dark transition-colors"
                      >
                        LinkedIn <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 10 — VOOR WIE + NIET VOOR JOU (ongewijzigd) ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Voor wie</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Is dit voor jou?
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* Dit is voor jou */}
              <FadeIn delay={0.1}>
                <div className="h-full rounded-2xl border border-accent-teal/20 bg-accent-teal/5 p-6 sm:p-8">
                  <h3 className="font-display text-lg font-bold text-text-dark">
                    Dit is voor jou als
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {voorJou.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-text-dark-secondary"
                      >
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-accent-teal"
                          strokeWidth={3}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Dit is niet voor jou */}
              <FadeIn delay={0.2}>
                <div className="h-full rounded-2xl border border-red-200 bg-red-50 p-6 sm:p-8">
                  <h3 className="font-display text-lg font-bold text-text-dark">
                    Dit is niet voor jou als
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {nietVoorJou.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-text-dark-secondary"
                      >
                        <XIcon
                          size={18}
                          className="mt-0.5 shrink-0 text-red-400"
                          strokeWidth={2.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 11 — FAQ (ongewijzigd) ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
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

        {/* ═══ SECTIE 12 — BLOG PREVIEWS (ongewijzigd) ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="flex items-end justify-between">
                <div>
                  <p className="section-label-dark">/ Blog</p>
                  <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                    Inzichten &amp; artikelen
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-accent-teal-dark hover:text-accent-teal-hover transition-colors"
                >
                  Bekijk alle artikelen <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
              {/* Featured (large) */}
              <FadeIn>
                <div className="card-light h-full flex flex-col">
                  <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/images/hero-meeting.jpg"
                      alt="B2B sales strategie meeting"
                      width={960}
                      height={540}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="section-label-dark">{blogPreviews[0].tag}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-text-dark">
                    {blogPreviews[0].title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-text-dark-secondary leading-relaxed">
                    {blogPreviews[0].excerpt}
                  </p>
                  <p className="mt-4 text-xs font-medium text-text-dark-muted italic">
                    Binnenkort beschikbaar
                  </p>
                </div>
              </FadeIn>

              {/* 2 small stacked */}
              <div className="flex flex-col gap-6">
                {blogPreviews.slice(1).map((post, i) => (
                  <FadeIn key={post.title} delay={(i + 1) * 0.1}>
                    <div className="card-light flex-1">
                      <span className="section-label-dark">{post.tag}</span>
                      <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm text-text-dark-secondary leading-relaxed">
                        {post.excerpt}
                      </p>
                      <p className="mt-3 text-xs font-medium text-text-dark-muted italic">
                        Binnenkort beschikbaar
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn delay={0.3}>
              <div className="mt-8 text-center sm:hidden">
                <Link href="/blog" className="btn-secondary-dark">
                  Bekijk alle artikelen &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 13 — CTA FOOTER (V7) ═══ */}
        <section className="bg-bg-secondary py-24 sm:py-32 lg:py-40">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  accelr.
                </p>
                <p className="mt-6 text-lg text-text-secondary">
                  Benieuwd waar jouw salesmotor vastloopt?
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact" className="btn-primary">
                    <span className="btn-label">Plan een gesprek</span>
                    <span className="btn-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                  <Link href="/de-scan" className="btn-secondary">
                    Start met De Scan &rarr;
                  </Link>
                </div>

                <p className="mt-6 max-w-md text-center text-sm text-text-muted">
                  Nog niet klaar voor een gesprek? Start met De Scan &mdash; dat
                  is altijd de eerste stap.
                </p>

                <div className="mt-10 flex flex-col items-center gap-3 text-sm text-text-muted">
                  <a
                    href="mailto:tim@accelr.nl"
                    className="hover:text-accent-teal transition-colors"
                  >
                    tim@accelr.nl
                  </a>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    Amsterdam, Nederland
                  </span>
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
