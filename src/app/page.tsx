import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import Marquee from "@/components/Marquee";
import ScrollWordmark from "@/components/ScrollWordmark";
import {
  ArrowRight,
  Search,
  Compass,
  Database,
  Send,
  Cpu,
  BookOpen,
  Users,
  BarChart3,
  Check,
  X as XIcon,
  ChevronDown,
  Rocket,
  MapPin,
  ClipboardList,
  Hammer,
  Play,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Accelr — Salesystemen Voor Ambitieuze B2B-Bedrijven",
  description:
    "Accelr helpt B2B tech-founders van ad-hoc sales naar een schaalbaar, AI-gedreven commercieel systeem. Diagnose, implementatie en leadership.",
  openGraph: {
    title: "Accelr — Salesystemen Voor Ambitieuze B2B-Bedrijven",
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
  "CRM gekocht — maar niemand die het werkend maakt.",
  "Outbound is ad-hoc: geen systeem, geen voorspelbaarheid.",
  "Opschalen vraagt om een systeem, niet om meer uren.",
];

/* ─── Expertise Cards ─── */
const expertiseCards = [
  {
    icon: Search,
    title: "De Scan\u2122",
    desc: "Gestructureerde doorlichting van je salesoperatie op 10 dimensies. Actieplan met geprioriteerde kansen en euro-waarde.",
    meta: "\u20ac3.500 vast \u00b7 Niet tevreden? Geld terug.",
    href: "/de-scan",
  },
  {
    icon: Compass,
    title: "Sales Strategie & GTM",
    desc: "ICP-definitie, go-to-market plan, positionering, kanaalstrategie en pricing. De strategische basis onder alles wat je bouwt.",
    href: "/sales-strategie",
  },
  {
    icon: Database,
    title: "CRM & Pipeline",
    desc: "CRM selectie, inrichting, pipeline design, dashboards, lead scoring en rapportage. Van spreadsheet naar werkend systeem.",
    href: "/crm-implementatie",
  },
  {
    icon: Send,
    title: "Outbound & Leadgeneratie",
    desc: "Email engine, LinkedIn outreach, multi-channel sequences. Voorspelbare pipeline in plaats van afhankelijkheid van je netwerk.",
    href: "/outbound-leadgeneratie",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    desc: "AI prospecting (Clay/Apollo), workflow automation (Make/n8n), AI-personalisatie en prompt libraries. Structureel ge\u00efntegreerd.",
    href: "/ai-sales-automation",
  },
  {
    icon: BookOpen,
    title: "Sales Enablement",
    desc: "Playbooks, discovery scripts, objection handling, team training. Zodat je team verkoopt zoals jij dat doet.",
    href: "/sales-enablement",
  },
];

/* ─── Aanpak steps (V4: Scannen, Plannen, Bouwen, Runnen & Opschalen) ─── */
const aanpakSteps = [
  {
    num: "/01",
    title: "Scannen",
    icon: Search,
    desc: "Ik begin met diepgaand onderzoek. Interviews met founder, sales en marketing. CRM-doorlichting, pipeline-analyse, AI readiness check. In 2 weken weet je precies waar je staat op 10 dimensies \u2014 en waar het geld ligt.",
    deliverables: [
      "Sales Maturity Score (10 dimensies, 1-10)",
      "Top 3-5 kansen met geschatte euro-waarde",
      "Geprioriteerd 90-dagen actieplan",
      "Advies per kans: zelf doen, met Accelr, of outsourcen",
    ],
    price: "\u20ac3.500 vast \u00b7 Niet tevreden? Geld terug.",
  },
  {
    num: "/02",
    title: "Plannen",
    icon: ClipboardList,
    desc: "Op basis van de Scan maken we een concreet implementatieplan. Welke systemen, in welke volgorde, met welke resources. Geen vage roadmap \u2014 een gedetailleerd bouwplan met milestones, verantwoordelijkheden en een helder budget.",
    deliverables: [
      "Gedetailleerd implementatieplan met fases",
      "Toolselectie en architectuur",
      "Budgetoverzicht en timeline",
      "Go/no-go beslismoment met volledige transparantie",
    ],
    price: "Onderdeel van De Scan of separaat af te nemen.",
  },
  {
    num: "/03",
    title: "Bouwen",
    icon: Hammer,
    desc: "Ik bouw wat het plan aanwijst. Geen standaardpakketten \u2014 alleen wat de diagnose aanwijst. CRM inrichting, outbound engines, AI-tooling, processen, playbooks. Werkende systemen die van jou zijn.",
    deliverables: [
      "CRM-basis + salesproces \u2192 3-4 weken",
      "+ Outbound engine + AI-tooling \u2192 4-6 weken",
      "+ Team enablement + hiring \u2192 6-8 weken",
    ],
    price: "Vaste prijs, vooraf afgesproken. Typisch \u20ac5.000 \u2013 \u20ac20.000.",
  },
  {
    num: "/04",
    title: "Runnen & Opschalen",
    icon: Play,
    desc: "Een systeem zonder leiderschap verwatert binnen 3 maanden. Ik blijf als fractional Head of Sales \u2014 niet adviseren, maar aansturen. Wekelijkse pipeline reviews, sales coaching, doorlopende optimalisatie. En als het draait: opschalen met je eerste sales hire.",
    deliverables: [
      "Wekelijkse pipeline reviews & coaching",
      "Maandrapportages met heldere KPI\u2019s",
      "Roldefinitie & onboarding eerste sales hire",
      "Procesdocumentatie voor overdracht",
    ],
    price: "1-2 dagen per week \u00b7 Minimaal 3 maanden, daarna maandelijks opzegbaar.",
  },
];

/* ─── Vergelijkingstabel (3 kolommen: Accelr / Bureau / Zelf doen) ─── */
const comparisonRows3 = [
  {
    aspect: "Aanpak",
    accelr: "Systeem bouwen + overdragen",
    bureau: "Campagnes draaien zolang je betaalt",
    zelf: "Zelf uitzoeken, 95% faalt",
  },
  {
    aspect: "Na het project",
    accelr: "Systeem blijft draaien — het is van jou",
    bureau: "Stopt als contract stopt",
    zelf: "Stopt als jij stopt",
  },
  {
    aspect: "AI-expertise",
    accelr: "Structureel in elk onderdeel",
    bureau: "Basis tooling, handmatig",
    zelf: "Trial-and-error",
  },
  {
    aspect: "Kosten",
    accelr: "Vanaf €3.500 (Scan) + maatwerk Bouw",
    bureau: "€3K-€8K/maand doorlopend",
    zelf: "€500-€2K/maand + je eigen tijd",
  },
  {
    aspect: "Eigendom",
    accelr: "Jouw CRM, jouw data, jouw processen",
    bureau: "In hun platform",
    zelf: "Van jou, maar ongeoptimaliseerd",
  },
  {
    aspect: "Resultaat",
    accelr: "Werkend systeem in 3-8 weken",
    bureau: "Afhankelijk van scope en budget",
    zelf: "6-12 maanden experimenteren",
  },
  {
    aspect: "Doorlopend",
    accelr: "Optioneel: fractional Head of Sales",
    bureau: "Verplicht: anders stopt alles",
    zelf: "Jij bent het zelf",
  },
];

/* ─── Kostenvergelijking ─── */
const investmentCards = [
  {
    title: "Junior SDR inhuren",
    traditional: "€65.000",
    traditionalPer: "/jaar",
    accelr: "vanaf €18.000",
    accelrPer: "/jaar (Run)",
    saving: "tot 72%",
  },
  {
    title: "Sales Manager inhuren",
    traditional: "€120.000",
    traditionalPer: "/jaar",
    accelr: "vanaf €42.000",
    accelrPer: "/jaar (Partnerschap)",
    saving: "tot 65%",
  },
  {
    title: "Sales infrastructuur laten bouwen",
    traditional: "€25.000 – €50.000",
    traditionalPer: "",
    accelr: "vanaf €5.000",
    accelrPer: "(Bouw)",
    saving: "tot 85%",
  },
];

/* ─── Voor wie / Niet voor jou ─── */
const voorJou = [
  "B2B SaaS-, tech- of IT-bedrijf met €500K-€20M omzet",
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

/* ─── Technologieën (numbered grid) ─── */
const technologies = [
  { num: "/01", name: "HubSpot", desc: "CRM & marketing automation" },
  { num: "/02", name: "Clay", desc: "AI-driven data enrichment" },
  { num: "/03", name: "Make", desc: "Workflow automation" },
  { num: "/04", name: "n8n", desc: "Open-source automation" },
  { num: "/05", name: "Instantly", desc: "Cold email at scale" },
  { num: "/06", name: "Apollo", desc: "Prospecting & enrichment" },
  { num: "/07", name: "Lemlist", desc: "Multi-channel outreach" },
  { num: "/08", name: "LinkedIn Sales Nav", desc: "Social selling" },
  { num: "/09", name: "ChatGPT / AI", desc: "Content & personalisatie" },
  { num: "/10", name: "Notion", desc: "Playbooks & documentatie" },
];

/* ─── FAQ (V4) ─── */
const faqs = [
  {
    q: "Wat als ik nog geen CRM of salesproces heb?",
    a: "Perfect \u2014 daar begint het. De Scan brengt in kaart wat je nodig hebt. De Bouw maakt het werkend.",
  },
  {
    q: "Hoe snel zie ik resultaat?",
    a: "De Scan levert binnen 2 weken een actieplan. De Bouw duurt 3-8 weken. De eerste resultaten \u2014 meer meetings, betere pipeline, werkend CRM \u2014 zie je binnen de eerste maand van De Bouw.",
  },
  {
    q: "Kan ik ook alleen De Scan doen?",
    a: "Absoluut. De Scan heeft standalone waarde. Je krijgt een actieplan waarmee je zelf aan de slag kunt. Geen verplicht vervolg.",
  },
  {
    q: "Wat maakt jou anders dan een sales consultant?",
    a: "De meeste consultants leveren een rapport. Ik bouw werkende systemen. CRM\u2019s, AI-tools, campagnes, processen \u2014 hands-on. En alles is van jou, niet van mij.",
  },
  {
    q: "Wat kost het?",
    a: "De Scan kost \u20ac3.500 vast. De Bouw varieert van \u20ac5.000-\u20ac20.000 afhankelijk van scope. Het Partnerschap is maandelijks op basis van beschikbaarheid. Alles wordt vooraf afgesproken \u2014 geen verrassingen.",
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
        {/* ═══ SECTIE 1 — HERO (2-column: text left, animated wordmark right) ═══ */}
        <section className="relative min-h-[90vh] bg-white overflow-hidden">
          <div className="container-wide flex min-h-[90vh] items-center py-20 sm:py-28 lg:py-32">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_auto]">
              {/* Left: text */}
              <FadeIn direction="up">
                <div className="max-w-xl">
                  <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                    Salesystemen voor ambitieuze B2B-bedrijven.
                  </h1>

                  <p className="mt-8 text-lg text-text-dark-secondary leading-relaxed">
                    Accelr helpt B2B tech-founders van ad-hoc sales naar een
                    schaalbaar, AI-gedreven commercieel systeem. Diagnose,
                    implementatie en leadership.
                  </p>

                  <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                    <Link href="/contact" className="btn-primary">
                      <span className="btn-label">Plan een gesprek</span>
                      <span className="btn-arrow">
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                    <Link href="/methode" className="btn-secondary-dark">
                      De Accelr Methode&trade;
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
            <p className="section-label-dark">/ Tools & Technologie\u00ebn</p>
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
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 4 — EXPERTISE (LICHT, 6 cards) ═══ */}
        <section id="expertise" className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Expertise</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Wat ik bouw
              </h2>
              <p className="mt-4 max-w-2xl text-text-dark-secondary">
                Van diagnose tot draaiend systeem. Elk onderdeel versterkt het
                geheel.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {expertiseCards.map((card, i) => (
                <FadeIn key={card.title} delay={i * 0.08}>
                  <Link href={card.href} className="block h-full">
                    <div className="card-light h-full flex flex-col">
                      <card.icon size={24} className="text-accent-teal" />
                      <h3 className="mt-4 font-display text-lg font-semibold text-text-dark">
                        {card.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm text-text-dark-secondary leading-relaxed">
                        {card.desc}
                      </p>
                      {card.meta && (
                        <p className="mt-4 text-xs font-semibold text-accent-teal">
                          {card.meta}
                        </p>
                      )}
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

        {/* ═══ SECTIE 5 — AANPAK / DE ACCELR METHODE™ (LICHT, 4 stappen) ═══ */}
        <section id="aanpak" className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Aanpak</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                De Accelr Methode&trade;
              </h2>
              <p className="mt-4 max-w-2xl text-text-dark-secondary">
                Scannen &rarr; Plannen &rarr; Bouwen &rarr; Runnen &amp;
                Opschalen. In die volgorde. Altijd.
              </p>
            </FadeIn>

            <div className="mt-16 space-y-0">
              {aanpakSteps.map((step, i) => (
                <FadeIn key={step.num}>
                  <div
                    className={`grid items-start gap-8 lg:grid-cols-[140px_1fr] py-12 ${
                      i < aanpakSteps.length - 1
                        ? "border-b border-border-light-mode"
                        : ""
                    }`}
                  >
                    {/* Left: number + icon */}
                    <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                      <span className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                        {step.num}
                      </span>
                      <div className="h-12 w-12 rounded-xl bg-accent-teal/10 flex items-center justify-center">
                        <step.icon
                          size={24}
                          className="text-accent-teal-dark"
                        />
                      </div>
                    </div>

                    {/* Right: content */}
                    <div>
                      <h3 className="font-display text-2xl font-bold text-text-dark">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-text-dark-secondary leading-relaxed">
                        {step.desc}
                      </p>
                      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                        {step.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-text-dark-secondary"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal-dark" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 text-sm font-semibold text-accent-teal-dark">
                        {step.price}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 6 — REVIEWS (placeholder, hidden for now) ═══ */}
        {/* Reviews section — activate when testimonials are available
        <section className="section-padding bg-bg-light">
          <div className="container-wide">
            <p className="section-label-dark">/ Reviews</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
              Wat klanten zeggen
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card-light">
                  <p className="text-text-dark-secondary italic">&ldquo;Review placeholder&rdquo;</p>
                  <p className="mt-4 text-sm font-semibold text-text-dark">— Naam, Bedrijf</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* ═══ SECTIE 6 — VERGELIJKINGSTABEL (3 kolommen) ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Het verschil</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Waarom bedrijven voor Accelr kiezen.
              </h2>
            </FadeIn>

            {/* Desktop table */}
            <FadeIn delay={0.15}>
              <div className="mt-12 hidden lg:block overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-border-light-mode">
                      <th className="pb-4 pr-4 font-display text-sm font-semibold text-text-dark-muted w-[180px]">
                        Aspect
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-bold text-accent-teal-dark">
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-accent-teal" />
                          accelr.
                        </span>
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        Typisch bureau
                      </th>
                      <th className="pb-4 pl-4 font-display text-sm font-medium text-text-dark-muted">
                        Zelf doen
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows3.map((row, i) => (
                      <tr
                        key={row.aspect}
                        className={
                          i < comparisonRows3.length - 1
                            ? "border-b border-border-light-mode/50"
                            : ""
                        }
                      >
                        <td className="py-4 pr-4 font-medium text-text-dark">
                          {row.aspect}
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
                        <td className="py-4 px-4 text-text-dark-secondary">
                          {row.bureau}
                        </td>
                        <td className="py-4 pl-4 text-text-dark-secondary">
                          {row.zelf}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Mobile stacked cards */}
            <div className="mt-12 space-y-4 lg:hidden">
              {comparisonRows3.map((row, i) => (
                <FadeIn key={row.aspect} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border-light-mode bg-white p-5">
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
                            Accelr
                          </p>
                          <p className="text-sm text-text-dark">
                            {row.accelr}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-2.5">
                        <span className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wider text-text-dark-muted">
                            Bureau
                          </p>
                          <p className="text-sm text-text-dark-secondary">
                            {row.bureau}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-2.5">
                        <span className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wider text-text-dark-muted">
                            Zelf doen
                          </p>
                          <p className="text-sm text-text-dark-secondary">
                            {row.zelf}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 7 — KOSTENVERGELIJKING (3 cards) ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Investering</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Vergelijk je investering.
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {investmentCards.map((card, i) => (
                <FadeIn key={card.title} delay={i * 0.1}>
                  <div className="card-light h-full flex flex-col">
                    <h3 className="font-display text-lg font-bold text-text-dark">
                      {card.title}
                    </h3>

                    <div className="mt-6 space-y-4 flex-1">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          Traditioneel
                        </p>
                        <p className="mt-1 text-xl font-bold text-text-dark-muted line-through decoration-text-dark-muted/40">
                          {card.traditional}
                          <span className="text-sm font-normal no-underline">
                            {" "}
                            {card.traditionalPer}
                          </span>
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          Met Accelr
                        </p>
                        <p className="mt-1 text-xl font-bold text-accent-teal-dark">
                          {card.accelr}
                          <span className="text-sm font-normal text-text-dark-secondary">
                            {" "}
                            {card.accelrPer}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-full bg-accent-teal/10 px-4 py-1.5 text-sm font-bold text-accent-teal-dark">
                        Besparing: {card.saving}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-text-dark-muted">
                Inclusief werving (€10K-€15K), inwerktijd (5 maanden), en het
                risico dat het niet werkt.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 8 — TECHNOLOGIEËN (LICHT, numbered grid) ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">/ Technologie\u00ebn</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                Onze tools
              </h2>
              <p className="mt-4 max-w-2xl text-text-dark-secondary">
                Geen tools om de tools. Alleen technologie die bewezen werkt voor
                B2B sales.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {technologies.map((tech, i) => (
                <FadeIn key={tech.name} delay={i * 0.05}>
                  <div className="rounded-xl border border-border-light-mode bg-bg-light p-5 transition-all duration-300 hover:shadow-md hover:shadow-black/5">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-text-dark-muted">
                      {tech.num}
                    </span>
                    <p className="mt-2 font-display text-base font-semibold text-text-dark">
                      {tech.name}
                    </p>
                    <p className="mt-1 text-xs text-text-dark-muted">
                      {tech.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 9 — OVER TIM (LICHT, Triad team-card style) ═══ */}
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
                  {/* Photo */}
                  <div className="relative">
                    <div className="aspect-[3/4] w-full rounded-2xl bg-bg-primary overflow-hidden">
                      <Image
                        src="/images/tim.jpeg"
                        alt="Tim — Founder & Sales Growth Partner bij Accelr"
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
                      Gespecialiseerd in AI-gedreven sales infrastructuur —
                      powered by tools als n8n, Clay, en Make — die bedrijven
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

        {/* ═══ SECTIE 10 — VOOR WIE + NIET VOOR JOU ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
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

        {/* ═══ SECTIE 11 — FAQ (LICHT, accordion) ═══ */}
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

        {/* ═══ SECTIE 11 — BLOG PREVIEWS (LICHT, 1 featured + 2 small) ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
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

        {/* ═══ SECTIE 12 — CTA FOOTER (DONKER, large logo, 2 buttons, contact) ═══ */}
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
                  <Link href="/score" className="btn-secondary">
                    Check je Sales Maturity Score
                  </Link>
                </div>

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
