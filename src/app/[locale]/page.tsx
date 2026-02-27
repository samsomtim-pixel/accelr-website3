import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
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

/* Icons/hrefs/accents that can't live in JSON */
const keuzeIcons = [Search, Wrench, User];
const keuzeHrefs = ["/de-scan", "#bouwblokken", "/expertise/fractional-head-of-sales"];
const keuzeBadgeCheck = [true, false, false];

const bouwIcons = [Search, Compass, Send, Database, BookOpen, Cpu];
const bouwHrefs = [
  "/de-scan",
  "/sales-strategie",
  "/outbound-leadgeneratie",
  "/crm-implementatie",
  "/sales-enablement",
  "/ai-sales-automation",
];
const bouwAccents = [
  P.strategy.color,
  P.strategy.color,
  P.process.color,
  P.process.color,
  P.people.color,
  P.ai.color,
];

const resultatenLinks = [
  "https://www.aethogenix.com/",
  null,
  "https://stablagency.com/",
];

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: ["/images/og-accelr.png"],
      url: "https://accelr.nl",
    },
  };
}

export default async function HomePage() {
  const t = await getTranslations("home");

  const painPointItems = t.raw("painPoints.items") as string[];
  const keuzeCards = t.raw("keuzeblok.cards") as Array<{
    title: string;
    subtitle: string;
    body: string;
    details: string;
    badge: string;
    price: string;
    extra: string | null;
    cta: string;
  }>;
  const bouwCards = t.raw("bouwblokken.cards") as Array<{
    title: string;
    badge: string;
    desc: string;
  }>;
  const resultaatCards = t.raw("resultaten.cards") as Array<{
    name: string;
    subtitle: string;
    deed: string;
  }>;
  const vergelijkingRows = t.raw("vergelijking.rows") as Array<{
    aspect: string;
    zelf: string;
    fulltime: string;
    interim: string;
    accelr: string;
  }>;
  const investmentModels = t.raw("investering.models") as Array<{
    title: string;
    price: string;
    priceSuffix: string;
    duration: string;
    result: string;
    uren: string;
    garantie: boolean;
    scanIncluded: string;
  }>;
  const voorJouItems = t.raw("voorWie.voorJou") as string[];
  const nietVoorJouItems = t.raw("voorWie.nietVoorJouItems") as string[];
  const faqItems = t.raw("faq.items") as Array<{ q: string; a: string }>;

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ═══ SECTIE 1 — HERO ═══ */}
        <section className="relative min-h-[90vh] bg-white overflow-hidden">
          <div className="container-wide flex min-h-[90vh] items-center py-20 sm:py-28 lg:py-32">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_auto]">
              <FadeIn direction="up">
                <div className="max-w-[600px]">
                  <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                    {t("hero.title")}
                  </h1>

                  <p className="mt-8 max-w-[600px] text-lg text-text-dark-secondary leading-relaxed">
                    {t("hero.subtitle")}
                  </p>

                  {/* Drieluik */}
                  <div className="mt-10 flex flex-col gap-3">
                    <div className="rounded-lg bg-bg-light px-5 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-dark-muted">
                        {t("hero.drieluik1")}
                      </p>
                    </div>
                    <div className="rounded-lg bg-bg-light px-5 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-dark-muted">
                        {t("hero.drieluik2")}
                      </p>
                    </div>
                    <div className="rounded-lg bg-bg-light px-5 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-dark-muted">
                        {t("hero.drieluik3")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                    <Link href="/contact" className="btn-primary">
                      <span className="btn-label">{t("hero.cta")}</span>
                      <span className="btn-arrow">
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                    <Link href="/de-scan" className="btn-secondary-dark">
                      {t("hero.ctaSecondary")}
                    </Link>
                  </div>

                  <p className="mt-4 text-xs text-text-dark-muted">
                    {t("hero.ctaSubtext")}
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
            <p className="section-label-dark">{t("toolTicker.label")}</p>
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

        {/* ═══ SECTIE 3 — HERKENBAAR? ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <p className="section-label-dark">{t("painPoints.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl lg:text-5xl">
                  {t("painPoints.title")}
                </h2>
                <p className="mt-4 text-text-dark-secondary">
                  {t("painPoints.subtitle")}
                </p>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-3xl flex flex-col gap-0">
              {painPointItems.map((point, i) => (
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
                  {t("painPoints.cta")}
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 4 — KEUZEBLOK ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("keuzeblok.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("keuzeblok.title")}
              </h2>
              <p className="mt-4 max-w-2xl text-text-dark-secondary">
                {t("keuzeblok.subtitle")}
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {keuzeCards.map((card, i) => {
                const Icon = keuzeIcons[i];
                return (
                  <FadeIn key={card.title} delay={i * 0.1}>
                    <div className="card-light h-full flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <Icon size={24} className="shrink-0 text-accent-teal" />
                        {keuzeBadgeCheck[i] ? (
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

                      <p className="mt-4 font-display text-lg font-semibold text-text-dark">
                        {card.title}
                      </p>
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
                        href={keuzeHrefs[i]}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-teal-dark hover:text-accent-teal-hover transition-colors"
                      >
                        {card.cta} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            <FadeIn delay={0.4}>
              <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-dark-secondary italic">
                {t("keuzeblok.note")}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 5 — FORMULE ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("formule.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("formule.title")}
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <span
                  className="rounded-full px-5 py-2 font-display text-base font-semibold text-white sm:text-lg"
                  style={{ backgroundColor: P.strategy.color }}
                >
                  {t("formule.strategie")}
                </span>
                <span className="text-xl font-light text-text-dark-muted">&rarr;</span>
                <span className="text-xl font-light text-text-dark-muted">(</span>
                <span
                  className="rounded-full px-5 py-2 font-display text-base font-semibold text-white sm:text-lg"
                  style={{ backgroundColor: P.process.color }}
                >
                  {t("formule.proces")}
                </span>
                <span className="text-xl font-light text-text-dark-muted">&times;</span>
                <span
                  className="rounded-full px-5 py-2 font-display text-base font-semibold text-white sm:text-lg"
                  style={{ backgroundColor: P.people.color }}
                >
                  {t("formule.people")}
                </span>
                <span className="text-xl font-light text-text-dark-muted">)</span>
                <span className="text-xl font-light text-text-dark-muted">&times;</span>
                <span
                  className="rounded-full px-5 py-2 font-display text-base font-semibold text-white sm:text-lg"
                  style={{ backgroundColor: P.ai.color }}
                >
                  {t("formule.ai")}
                </span>
                <span className="text-xl font-light text-text-dark-muted">=</span>
                <span className="rounded-full bg-gray-800 px-5 py-2 font-display text-base font-semibold text-white sm:text-lg">
                  {t("formule.result")}
                </span>
              </div>

              <p className="mt-6 mx-auto max-w-2xl text-center text-text-dark-secondary">
                {t("formule.desc")}
              </p>

              <div className="mt-4 text-center">
                <Link
                  href="/methode"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-teal-dark hover:text-accent-teal-hover transition-colors"
                >
                  {t("formule.cta")} <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 6 — BOUWBLOKKEN ═══ */}
        <section id="bouwblokken" className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("bouwblokken.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("bouwblokken.title")}
              </h2>
              <p className="mt-4 max-w-2xl text-text-dark-secondary">
                {t("bouwblokken.subtitle")}
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bouwCards.map((card, i) => {
                const Icon = bouwIcons[i];
                return (
                  <FadeIn key={card.title} delay={i * 0.08}>
                    <Link href={bouwHrefs[i]} className="block h-full">
                      <div
                        className="card-light h-full flex flex-col overflow-hidden"
                        style={{ borderTop: `4px solid ${bouwAccents[i]}` }}
                      >
                        <div className="flex items-center justify-between">
                          <Icon size={24} className="text-accent-teal" />
                          <span
                            className="rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                            style={{
                              color: bouwAccents[i],
                              backgroundColor: `${bouwAccents[i]}15`,
                            }}
                          >
                            {card.badge}
                          </span>
                        </div>
                        <p className="mt-4 font-display text-lg font-semibold text-text-dark">
                          {card.title}
                        </p>
                        <p className="mt-3 flex-1 text-sm text-text-dark-secondary leading-relaxed">
                          {card.desc}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-teal">
                          {t("bouwblokken.ontdekMeer") ?? "Ontdek meer"} <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>

            <FadeIn delay={0.5}>
              <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-dark-secondary">
                {t("bouwblokken.note")}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 7 — RESULTATEN ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("resultaten.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("resultaten.title")}
              </h2>
              <p className="mt-4 max-w-2xl text-text-dark-secondary">
                {t("resultaten.subtitle")}
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {resultaatCards.map((r, i) => (
                <FadeIn key={r.name} delay={i * 0.1}>
                  <div className="card-light h-full flex flex-col">
                    <p className="font-display text-lg font-bold text-text-dark">
                      {resultatenLinks[i] ? (
                        <a
                          href={resultatenLinks[i]!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent-teal-dark transition-colors"
                        >
                          {r.name}
                        </a>
                      ) : (
                        r.name
                      )}
                    </p>
                    <p className="mt-1 text-xs font-medium text-text-dark-muted">
                      {r.subtitle}
                    </p>
                    <p className="mt-4 flex-1 text-sm text-text-dark-secondary">
                      {r.deed}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTIE 8 — VERGELIJKINGSTABEL ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("vergelijking.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("vergelijking.title")}
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-12 hidden lg:block overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-border-light-mode">
                      <th className="pb-4 pr-4 font-display text-sm font-semibold text-text-dark-muted w-[180px]">
                        &nbsp;
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        {t("vergelijking.headers.zelfDoen")}
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        {t("vergelijking.headers.fulltimeHos")}
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-medium text-text-dark-muted">
                        {t("vergelijking.headers.interim")}
                      </th>
                      <th className="pb-4 px-4 font-display text-sm font-bold text-accent-teal-dark">
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-accent-teal" />
                          {t("vergelijking.headers.accelrFractional")}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {vergelijkingRows.map((row, i) => {
                      const isLast = i === vergelijkingRows.length - 1;
                      return (
                        <tr
                          key={row.aspect}
                          className={`${!isLast ? "border-b border-border-light-mode/50" : ""} ${isLast ? "text-text-dark-muted text-xs" : ""}`}
                        >
                          <td
                            className={`py-4 pr-4 font-medium ${isLast ? "text-text-dark-muted" : "text-text-dark"}`}
                          >
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
                            {!isLast ? (
                              <span className="flex items-start gap-2">
                                <Check
                                  size={16}
                                  className="mt-0.5 shrink-0 text-accent-teal-dark"
                                  strokeWidth={3}
                                />
                                {row.accelr}
                              </span>
                            ) : (
                              <span className="text-text-dark-muted">
                                {row.accelr}
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Mobile */}
            <div className="mt-12 space-y-4 lg:hidden">
              {vergelijkingRows.slice(0, -1).map((row, i) => (
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
                            {t("vergelijking.headers.accelrFractional")}
                          </p>
                          <p className="text-sm text-text-dark">{row.accelr}</p>
                        </div>
                      </div>
                      {[
                        { label: t("vergelijking.headers.zelfDoen"), value: row.zelf },
                        { label: t("vergelijking.headers.fulltimeHos"), value: row.fulltime },
                        { label: t("vergelijking.headers.interim"), value: row.interim },
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
              <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-text-dark-muted">
                {t("vergelijking.footnote")}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 9 — INVESTERING ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("investering.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("investering.title")}
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {investmentModels.map((model, i) => (
                <FadeIn key={model.title} delay={i * 0.1}>
                  <div
                    className={`card-light h-full flex flex-col ${i === 2 ? "ring-2 ring-accent-teal/40" : ""}`}
                  >
                    <p className="font-display text-lg font-bold text-text-dark">
                      {model.title}
                    </p>

                    <p className="mt-4 text-2xl font-bold text-accent-teal-dark">
                      {model.price}
                      <span className="text-sm font-normal text-text-dark-secondary">
                        {" "}
                        {model.priceSuffix}
                      </span>
                    </p>

                    <div className="mt-6 space-y-4 flex-1">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          {t("investering.labels.doorlooptijd")}
                        </p>
                        <p className="mt-1 text-sm text-text-dark">
                          {model.duration}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          {t("investering.labels.watJeKrijgt")}
                        </p>
                        <p className="mt-1 text-sm text-text-dark">
                          {model.result}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          {t("investering.labels.uren")}
                        </p>
                        <p className="mt-1 text-sm text-text-dark">
                          {model.uren}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          {t("investering.labels.geldTerugGarantie")}
                        </p>
                        <p className="mt-1 text-sm text-text-dark">
                          {model.garantie ? (
                            <span className="flex items-center gap-1 text-accent-teal-dark font-semibold">
                              <Check size={14} strokeWidth={3} />{" "}
                              {t("investering.labels.ja")}
                            </span>
                          ) : (
                            "\u2014"
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                          {t("investering.labels.inclusiefDeScan")}
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

        {/* ═══ SECTIE 10 — OVER TIM ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("overTim.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("overTim.title")}
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
                      <span className="font-mono text-xs font-bold text-bg-primary">
                        /01
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-widest text-text-dark-muted">
                      {t("overTim.role")}
                    </p>
                    <p className="mt-3 font-display text-2xl font-bold text-text-dark">
                      {t("overTim.name")}
                    </p>
                    <p className="mt-4 text-text-dark-secondary leading-relaxed">
                      {t("overTim.bio")}
                    </p>
                    <blockquote className="mt-6 border-l-4 border-accent-teal pl-5 py-1">
                      <p className="text-lg italic font-medium text-text-dark leading-relaxed">
                        {t("overTim.quote")}
                      </p>
                    </blockquote>
                    <div className="mt-6 flex items-center gap-4">
                      <Link
                        href="/over-tim"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent-teal-dark hover:text-accent-teal-hover transition-colors"
                      >
                        {t("overTim.leesMeer")} <ArrowRight size={14} />
                      </Link>
                      <a
                        href="https://linkedin.com/in/timsam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-dark-muted hover:text-accent-teal-dark transition-colors"
                      >
                        <Linkedin size={16} /> {t("overTim.linkedin")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SECTIE 11 — VOOR WIE ═══ */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <p className="section-label-dark">{t("voorWie.label")}</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                {t("voorWie.title")}
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="h-full rounded-2xl border border-accent-teal/20 bg-accent-teal/5 p-6 sm:p-8">
                  <p className="font-display text-lg font-bold text-text-dark">
                    {t("voorWie.welVoorJou")}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {voorJouItems.map((item) => (
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

              <FadeIn delay={0.2}>
                <div className="h-full rounded-2xl border border-red-200 bg-red-50 p-6 sm:p-8">
                  <p className="font-display text-lg font-bold text-text-dark">
                    {t("voorWie.nietVoorJou")}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {nietVoorJouItems.map((item) => (
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

        {/* ═══ SECTIE 12 — FAQ ═══ */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl">
              <FadeIn>
                <p className="section-label-dark">{t("faq.label")}</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  {t("faq.title")}
                </h2>
              </FadeIn>

              <div className="mt-12 space-y-3">
                {faqItems.map((faq, i) => (
                  <FadeIn key={faq.q} delay={i * 0.08}>
                    <details className="group rounded-xl border border-border-light-mode bg-white px-6 py-5 cursor-pointer transition-all hover:shadow-sm">
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

        {/* ═══ SECTIE 13 — FOOTER CTA ═══ */}
        <section className="bg-bg-secondary py-24 sm:py-32 lg:py-40">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  accelr.
                </p>
                <h2 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                  {t("ctaFooter.title")}
                </h2>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact" className="btn-primary">
                    <span className="btn-label">{t("ctaFooter.cta")}</span>
                    <span className="btn-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>

                <p className="mt-6 text-sm text-text-muted">
                  {t("ctaFooter.scanNote")}
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
                    {t("ctaFooter.location")}
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
