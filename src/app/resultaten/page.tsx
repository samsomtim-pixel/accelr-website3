import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Resultaten | Case Studies | Accelr',
  description: 'Geen theorie. Dit is wat er gebeurt als je salesoperatie een systeem wordt.',
  openGraph: {
    title: 'Resultaten | Case Studies | Accelr',
    description: 'Geen theorie. Dit is wat er gebeurt als je salesoperatie een systeem wordt.',
    images: ['/images/og-accelr.png'],
    url: 'https://accelr.nl/resultaten',
  },
};

export default function ResultatenPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg-light">
        {/* Hero Section */}
        <section className="container-wide pt-32 pb-20">
          <FadeIn>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-text-dark mb-6">
              Resultaten
            </h1>
            <p className="text-xl md:text-2xl text-text-dark-secondary max-w-3xl">
              Geen theorie. Dit is wat er gebeurt als je salesoperatie een systeem wordt.
            </p>
          </FadeIn>
        </section>

        {/* Case Studies Grid */}
        <section className="container-wide pb-24">
          <div className="space-y-8">
            {/* Case Study A */}
            <FadeIn delay={0.1}>
              <Link href="/resultaten/bedrijf-a" className="block group">
                <div className="card-light p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-accent-teal-dark/10 text-accent-teal-dark text-sm font-medium rounded-full mb-4">
                        B2B SaaS · HR-tech · 22 medewerkers
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl text-text-dark mb-4">
                        [Bedrijfsnaam A]
                      </h2>
                      <div className="text-2xl md:text-3xl font-display text-accent-teal-dark mb-6">
                        €1.8M → €2.6M ARR (+44%) in 9 maanden
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-3 text-text-dark-secondary">
                          <TrendingUp className="w-5 h-5 text-accent-teal-dark flex-shrink-0 mt-1" />
                          <span>Win rate +55%, deal size +33%, sales cycle -42%</span>
                        </li>
                        <li className="flex items-start gap-3 text-text-dark-secondary">
                          <Zap className="w-5 h-5 text-accent-teal-dark flex-shrink-0 mt-1" />
                          <span>HubSpot heringericht, 6-staps verkoopproces, outbound engine gebouwd</span>
                        </li>
                        <li className="flex items-start gap-3 text-text-dark-secondary">
                          <Users className="w-5 h-5 text-accent-teal-dark flex-shrink-0 mt-1" />
                          <span>Founder van 70% naar 20% betrokkenheid in deals</span>
                        </li>
                      </ul>
                      <blockquote className="border-l-4 border-accent-teal-dark pl-6 py-2 italic text-text-dark-secondary">
                        "Na 6 maanden draaide het zonder mij. Tim heeft ons verkoopproces getransformeerd van chaos naar systeem."
                      </blockquote>
                    </div>
                    <div className="flex items-center text-accent-teal-dark group-hover:translate-x-2 transition-transform">
                      <span className="font-medium mr-2">Lees case study</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Case Study B */}
            <FadeIn delay={0.2}>
              <Link href="/resultaten/bedrijf-b" className="block group">
                <div className="card-light p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-accent-teal-dark/10 text-accent-teal-dark text-sm font-medium rounded-full mb-4">
                        IT-dienstverlener · 35 medewerkers
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl text-text-dark mb-4">
                        [Bedrijfsnaam B]
                      </h2>
                      <div className="text-2xl md:text-3xl font-display text-accent-teal-dark mb-6">
                        €600K onbenut potentieel gevonden, Upsell +262%
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-3 text-text-dark-secondary">
                          <TrendingUp className="w-5 h-5 text-accent-teal-dark flex-shrink-0 mt-1" />
                          <span>Salesforce adoptie van 15% naar 92%, forecast accuracy 78%</span>
                        </li>
                        <li className="flex items-start gap-3 text-text-dark-secondary">
                          <Zap className="w-5 h-5 text-accent-teal-dark flex-shrink-0 mt-1" />
                          <span>New business engine: €0 naar €220K per maand</span>
                        </li>
                        <li className="flex items-start gap-3 text-text-dark-secondary">
                          <Users className="w-5 h-5 text-accent-teal-dark flex-shrink-0 mt-1" />
                          <span>Klantportfolio-analyse onthulde €600K verborgen kansen</span>
                        </li>
                      </ul>
                      <blockquote className="border-l-4 border-accent-teal-dark pl-6 py-2 italic text-text-dark-secondary">
                        "De wake-up call die we nodig hadden. We zaten op €600K aan potentieel dat we niet zagen."
                      </blockquote>
                    </div>
                    <div className="flex items-center text-accent-teal-dark group-hover:translate-x-2 transition-transform">
                      <span className="font-medium mr-2">Lees case study</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Case Study C */}
            <FadeIn delay={0.3}>
              <Link href="/resultaten/bedrijf-c" className="block group">
                <div className="card-light p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-accent-teal-dark/10 text-accent-teal-dark text-sm font-medium rounded-full mb-4">
                        B2B SaaS · Supply chain · 18 medewerkers
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl text-text-dark mb-4">
                        [Bedrijfsnaam C]
                      </h2>
                      <div className="text-2xl md:text-3xl font-display text-accent-teal-dark mb-6">
                        €2.5M → €4.1M ARR (+64%) in 12 maanden
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-3 text-text-dark-secondary">
                          <TrendingUp className="w-5 h-5 text-accent-teal-dark flex-shrink-0 mt-1" />
                          <span>Pipeline +244%, win rate +61%, sales cycle -43%</span>
                        </li>
                        <li className="flex items-start gap-3 text-text-dark-secondary">
                          <Zap className="w-5 h-5 text-accent-teal-dark flex-shrink-0 mt-1" />
                          <span>Volledige HubSpot implementatie, AI lead scoring, outbound engine</span>
                        </li>
                        <li className="flex items-start gap-3 text-text-dark-secondary">
                          <Users className="w-5 h-5 text-accent-teal-dark flex-shrink-0 mt-1" />
                          <span>Fulltime Head of Sales geworven en succesvol onboard</span>
                        </li>
                      </ul>
                      <blockquote className="border-l-4 border-accent-teal-dark pl-6 py-2 italic text-text-dark-secondary">
                        "Het probleem was niet de persoon, maar het systeem. Tim heeft eerst het fundament gebouwd."
                      </blockquote>
                    </div>
                    <div className="flex items-center text-accent-teal-dark group-hover:translate-x-2 transition-transform">
                      <span className="font-medium mr-2">Lees case study</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container-wide pb-24">
          <FadeIn>
            <div className="bg-white rounded-2xl p-12 md:p-16 text-center shadow-lg">
              <h2 className="font-display text-3xl md:text-4xl text-text-dark mb-6">
                Herkenbaar? Plan een gesprek.
              </h2>
              <p className="text-xl text-text-dark-secondary mb-8 max-w-2xl mx-auto">
                Ontdek wat er mogelijk is voor jouw salesoperatie.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start het gesprek
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
