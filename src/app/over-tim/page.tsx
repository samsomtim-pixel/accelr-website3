import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { Search, Hammer, Cpu, Unlock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Over Tim, Sales Growth Partner",
  description:
    "8+ jaar B2B sales bij adtech en SaaS scale-ups. Van ShowHeroes naar Accelr. Hands-on, AI-native.",
  openGraph: {
    title: "Over Tim, Sales Growth Partner | Accelr",
    description:
      "8+ jaar B2B sales bij adtech en SaaS scale-ups. Van ShowHeroes naar Accelr. Hands-on, AI-native.",
  },
};

const approachCards = [
  {
    icon: Search,
    title: "Diagnose eerst",
    text: "Ik bouw pas als ik weet wat je nodig hebt.",
  },
  {
    icon: Hammer,
    title: "Ik bouw zelf",
    text: "Geen team van juniors. Van strategie tot implementatie.",
  },
  {
    icon: Cpu,
    title: "AI als gereedschap",
    text: "Clay, Make, n8n, ChatGPT, structureel geïntegreerd.",
  },
  {
    icon: Unlock,
    title: "Geen afhankelijkheid",
    text: "Het systeem is van jou, niet van mij.",
  },
];

export default function OverTimPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* ─── Hero ─── */}
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px]">
              <FadeIn>
                <div>
                  <p className="section-label-dark">/ Over Tim</p>

                  <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                    De mens achter de salesmotor.
                  </h1>

                  <p className="mt-6 text-lg text-text-dark-secondary sm:text-xl">
                    Ik ben Tim, founder van Accelr en Sales Growth Partner voor B2B
                    tech-bedrijven in Nederland. Ik help founders van ad-hoc sales
                    naar een werkend systeem.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <div className="mx-auto max-w-[380px]">
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
                </div>
              </FadeIn>
            </div>
          </div>
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
            <div className="h-[500px] w-[800px] rounded-full bg-accent-teal/5 blur-3xl" />
          </div>
        </section>

        {/* ─── Mijn verhaal ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl">
                <p className="section-label-dark">/ Mijn verhaal</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Van scale-up naar Accelr
                </h2>

                <div className="mt-6 space-y-4 text-text-dark-secondary">
                  <p>
                    Voordat ik Accelr startte, was ik Country Manager Nederland
                    bij ShowHeroes, een Europese adtech scale-up. Daar bouwde ik
                    de Nederlandse operatie op: van eerste klant tot winstgevende
                    markt.
                  </p>

                  <h3 className="font-display text-lg font-semibold text-text-dark">
                    Wat ik daar leerde:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Salesprocessen opzetten waar er geen waren",
                      "CRM-implementatie en pipeline management",
                      "Deals sluiten van €10K tot €500K+ met enterprise klanten",
                      "De realiteit dat 80% van sales-succes zit in het systeem, niet het talent",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-teal-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p>
                    Daarvoor werkte ik 6+ jaar in B2B sales bij meerdere tech- en
                    adtech scale-ups.
                  </p>

                  <p>
                    Wat ik keer op keer zag bij tech-founders: briljante producten,
                    maar geen salesmotor. De founder doet alle sales zelf, er is
                    geen proces, geen CRM, geen strategie. De groei hangt af van
                    toeval en netwerk.
                  </p>

                  <p>
                    Daarom startte ik Accelr. Ik combineer de strategische blik
                    van een commercieel directeur met de hands-on aanpak van een
                    implementatie-specialist. En ik zet AI in als gereedschap,
                    niet als gimmick.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── Mijn aanpak ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">/ Mijn aanpak</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Hoe ik werk
                </h2>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-3xl grid gap-6 sm:grid-cols-2">
              {approachCards.map((card, i) => (
                <FadeIn key={card.title} delay={i * 0.1}>
                  <div className="card-light h-full">
                    <card.icon size={24} className="text-accent-teal" />
                    <h3 className="mt-4 font-display text-lg font-semibold text-text-dark">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-dark-secondary">
                      {card.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Ervaring ─── */}
        <section className="bg-bg-light py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl">
                <p className="section-label-dark">/ Ervaring</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
                  Track record
                </h2>
                <ul className="mt-6 space-y-3">
                  {[
                    "8+ jaar B2B sales bij adtech en SaaS scale-ups",
                    "Country Manager bij ShowHeroes (Europese adtech scale-up)",
                    "Hands-on: van strategie tot CRM-implementatie",
                    "AI-tools als dagelijks werktuig",
                  ].map((item, i) => (
                    <FadeIn key={item} delay={i * 0.1}>
                      <li className="flex items-start gap-2 text-text-dark-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal-dark" />
                        {item}
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="bg-white py-20 sm:py-28 lg:py-32">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <Link href="/contact" className="btn-primary">
                  <span className="btn-label">Plan een kennismaking</span>
                  <span className="btn-arrow">
                    <ArrowRight size={16} />
                  </span>
                </Link>
                <p className="mt-4 text-sm text-text-dark-muted">
                  30 minuten · Vrijblijvend · Eerlijk advies
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
