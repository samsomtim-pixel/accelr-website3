import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Case Study: B2B SaaS HR-tech | €1.8M → €2.6M ARR | Accelr',
  description: 'Hoe een B2B SaaS HR-tech bedrijf in 9 maanden van €1.8M naar €2.6M ARR groeide met Fractional Head of Sales.',
  openGraph: {
    title: 'Case Study: B2B SaaS HR-tech | €1.8M → €2.6M ARR | Accelr',
    description: 'Hoe een B2B SaaS HR-tech bedrijf in 9 maanden van €1.8M naar €2.6M ARR groeide met Fractional Head of Sales.',
    images: ['/images/og-accelr.png'],
  },
};

export default function BedrijfAPage() {
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
              B2B SaaS · HR-tech · 22 medewerkers
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-text-dark mb-6">
              [Bedrijfsnaam A]
            </h1>
            <div className="text-3xl md:text-4xl font-display text-accent-teal-dark">
              €1.8M → €2.6M ARR (+44%) in 9 maanden
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
                  De founder deed 70% van alle deals zelf. Twee account executives werkten zonder playbook, zonder gestructureerd CRM-gebruik, en zonder gedefinieerd salesproces. Pipeline-overzicht bestond uit een Google Sheet. Win rate was onbekend. De forecast was het onderbuikgevoel van de founder.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* De Aanpak */}
        <section className="container-wide py-16">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="section-label-dark mb-6">De aanpak</div>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                <div className="mb-8">
                  <p className="text-xl font-display text-text-dark mb-8">
                    Opdracht: Fractional Head of Sales, 2 dagen per week, 9 maanden.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Maand 1 */}
                  <div>
                    <h3 className="font-display text-2xl text-text-dark mb-4">
                      Maand 1, De Scan
                    </h3>
                    <ul className="space-y-3 text-text-dark-secondary">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>HubSpot audit: 40% van deals niet gelogd</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Geen gestandaardiseerd verkoopproces</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>2 AE's, geen SDR</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Rapport met 47 bevindingen, 12 kritieke gaps</span>
                      </li>
                    </ul>
                  </div>

                  {/* Maand 2-4 */}
                  <div>
                    <h3 className="font-display text-2xl text-text-dark mb-4">
                      Maand 2-4, Bouwen
                    </h3>
                    <ul className="space-y-3 text-text-dark-secondary">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>HubSpot heringericht: pipeline stages, deal rotation, dashboards</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>6-staps verkoopproces ontwikkeld en gedocumenteerd</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Sales playbook v1.0 geschreven</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Outbound engine gebouwd: Clay + Lemlist, 200 prospects per maand</span>
                      </li>
                    </ul>
                  </div>

                  {/* Maand 5-9 */}
                  <div>
                    <h3 className="font-display text-2xl text-text-dark mb-4">
                      Maand 5-9, Runnen
                    </h3>
                    <ul className="space-y-3 text-text-dark-secondary">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Wekelijkse pipeline reviews geïnstalleerd</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>SDR #1 aangenomen en onboard</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>AI-automations: lead scoring, Fireflies → CRM integratie</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Founder-betrokkenheid: 70% → 20% van deals</span>
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
                      <td className="py-4 pr-4">Pipeline/maand</td>
                      <td className="py-4 px-4">Onbekend</td>
                      <td className="py-4 px-4">€380K</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">—</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Gemiddelde deal size</td>
                      <td className="py-4 px-4">€18K</td>
                      <td className="py-4 px-4">€24K</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">+33%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Win rate</td>
                      <td className="py-4 px-4">~20%</td>
                      <td className="py-4 px-4">31%</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">+55%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Lead-to-close tijd</td>
                      <td className="py-4 px-4">90 dagen</td>
                      <td className="py-4 px-4">52 dagen</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">-42%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Deals per maand</td>
                      <td className="py-4 px-4">2-3</td>
                      <td className="py-4 px-4">5-6</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">+100%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Founder in deals</td>
                      <td className="py-4 px-4">70%</td>
                      <td className="py-4 px-4">20%</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">-71%</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-display text-lg">ARR</td>
                      <td className="py-4 px-4 font-display text-lg">€1.8M</td>
                      <td className="py-4 px-4 font-display text-lg">€2.6M</td>
                      <td className="py-4 pl-4 font-display text-lg text-accent-teal-dark">+44%</td>
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
                  "Tim dwong ons eerlijk te kijken naar onze pipeline. Confronterend, 40% van deals stond niet eens in het CRM. Na 3 maanden hadden we voor het eerst echt zicht op onze funnel. Na 6 maanden draaide het zonder mij."
                </blockquote>
                <div className="text-text-dark-secondary">
                  <div className="font-medium text-text-dark">[Naam]</div>
                  <div>Founder [Bedrijfsnaam A]</div>
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
