import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Case Study: IT-dienstverlener | Upsell +262% | Accelr',
  description: 'Hoe een IT-dienstverlener €600K onbenut potentieel vond en upsell met 262% verhoogde.',
  openGraph: {
    title: 'Case Study: IT-dienstverlener | Upsell +262% | Accelr',
    description: 'Hoe een IT-dienstverlener €600K onbenut potentieel vond en upsell met 262% verhoogde.',
    images: ['/images/og-accelr.png'],
  },
};

export default function BedrijfBPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg-light">
        {/* Hero Section */}
        <section className="container-wide pt-32 pb-12">
          <FadeIn>
            <Link
              href="/resultaten"
              className="inline-flex items-center gap-2 text-accent-teal-dark hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Terug naar alle resultaten</span>
            </Link>
            <div className="inline-block px-3 py-1 bg-accent-teal-dark/10 text-accent-teal-dark text-sm font-medium rounded-full mb-6">
              IT-dienstverlener · 35 medewerkers
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-text-dark mb-6">
              [Bedrijfsnaam B]
            </h1>
            <div className="text-3xl md:text-4xl font-display text-accent-teal-dark">
              €600K onbenut potentieel · Upsell +262%
            </div>
          </FadeIn>
        </section>

        {/* De Uitdaging */}
        <section className="container-wide py-16">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="section-label-dark mb-6">De uitdaging</div>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                <p className="text-xl text-text-dark leading-relaxed">
                  Een IT-dienstverlener met €3.2M omzet en 35 medewerkers. Sales draaide volledig op bestaande klanten en inbound. Geen actieve new business. Salesforce was aangeschaft maar adoptie lag op 15%. Geen pipeline-overzicht, geen forecasting, geen gestructureerde upsell. De directie wist dat er meer in zat, maar niet hoeveel.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* De Aanpak - Scan */}
        <section className="container-wide py-16">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="section-label-dark mb-6">De aanpak</div>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                <div className="space-y-8">
                  {/* De Scan */}
                  <div>
                    <h3 className="font-display text-2xl text-text-dark mb-4">
                      De Scan (6 weken)
                    </h3>
                    <ul className="space-y-3 text-text-dark-secondary">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Salesforce audit: 85% van accounts incompleet, geen opportunity tracking</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Klantportfolio-analyse: €600K onbenut cross-sell en upsell potentieel geïdentificeerd</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Geen gedefinieerd salesproces, alles ad-hoc</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Team assessment: 3 account managers, geen pipeline ownership</span>
                      </li>
                    </ul>
                  </div>

                  {/* Bouwen */}
                  <div>
                    <h3 className="font-display text-2xl text-text-dark mb-4">
                      Bouwen (maand 2-5)
                    </h3>
                    <ul className="space-y-3 text-text-dark-secondary">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Salesforce heringericht: pipeline stages, dashboards, deal tracking</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Upsell playbook ontwikkeld per klant-segment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>New business outbound: LinkedIn + email sequences</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Wekelijkse pipeline reviews ingevoerd</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Resultaten */}
        <section className="container-wide py-16">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="section-label-dark mb-6">Resultaten</div>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 pr-4 font-display text-text-dark">Metric</th>
                      <th className="text-left py-4 px-4 font-display text-text-dark">Voor</th>
                      <th className="text-left py-4 px-4 font-display text-text-dark">Na</th>
                      <th className="text-left py-4 pl-4 font-display text-accent-teal-dark">Verschil</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-dark-secondary">
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Salesforce adoptie</td>
                      <td className="py-4 px-4">15%</td>
                      <td className="py-4 px-4">92%</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">+513%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Upsell/cross-sell</td>
                      <td className="py-4 px-4">Ad-hoc</td>
                      <td className="py-4 px-4">Gestructureerd</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">+262%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">New business per maand</td>
                      <td className="py-4 px-4">€0</td>
                      <td className="py-4 px-4">€220K</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">—</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Pipeline visibility</td>
                      <td className="py-4 px-4">Geen</td>
                      <td className="py-4 px-4">Real-time dashboard</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">—</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4">Forecast accuracy</td>
                      <td className="py-4 px-4">0%</td>
                      <td className="py-4 px-4">78%</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Quote */}
        <section className="container-wide py-16">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="bg-accent-teal-dark/5 border-l-4 border-accent-teal-dark rounded-r-2xl p-8 md:p-12">
                <blockquote className="text-xl md:text-2xl text-text-dark italic leading-relaxed mb-6">
                  "De wake-up call die we nodig hadden. We zaten op €600K aan potentieel dat we niet zagen. Tim heeft het zichtbaar gemaakt en een systeem gebouwd om het te oogsten."
                </blockquote>
                <div className="text-text-dark-secondary">
                  <div className="font-medium text-text-dark">[Naam]</div>
                  <div>Directeur [Bedrijfsnaam B]</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CTA Section */}
        <section className="container-wide py-24">
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
