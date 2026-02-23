import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Case Study: B2B SaaS Supply chain | €2.5M → €4.1M ARR | Accelr',
  description: 'Hoe een B2B SaaS bedrijf in 12 maanden van €2.5M naar €4.1M ARR groeide en een fulltime Head of Sales onboard kreeg.',
  openGraph: {
    title: 'Case Study: B2B SaaS Supply chain | €2.5M → €4.1M ARR | Accelr',
    description: 'Hoe een B2B SaaS bedrijf in 12 maanden van €2.5M naar €4.1M ARR groeide en een fulltime Head of Sales onboard kreeg.',
    images: ['/images/og-accelr.png'],
  },
};

export default function BedrijfCPage() {
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
              B2B SaaS · Supply chain · 18 medewerkers
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-text-dark mb-6">
              [Bedrijfsnaam C]
            </h1>
            <div className="text-3xl md:text-4xl font-display text-accent-teal-dark">
              €2.5M → €4.1M ARR (+64%) in 12 maanden
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
                  Een B2B SaaS bedrijf in supply chain met €2.5M ARR. De founder had net een VP Sales aangenomen die na 4 maanden weer vertrok, €120K verlies inclusief opportunity cost. Het team van 3 AE's opereerde zonder systeem. Geen CRM-discipline, geen forecasting, geen gestructureerd verkoopproces. De founder overwoog een tweede hire maar wilde eerst het fundament op orde.
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
                    Fractional Head of Sales, 12 maanden
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Maand 1 */}
                  <div>
                    <h3 className="font-display text-2xl text-text-dark mb-4">
                      Maand 1, Diagnose
                    </h3>
                    <ul className="space-y-3 text-text-dark-secondary">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>CRM audit: Pipedrive → HubSpot migratie noodzakelijk</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Geen gestandaardiseerde sales cycle</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Team skills assessment uitgevoerd</span>
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
                        <span>HubSpot implementatie en migratie</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>7-staps verkoopproces ontwikkeld</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Sales playbook geschreven</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Outbound engine gebouwd: Clay + Apollo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>AI lead scoring geïmplementeerd</span>
                      </li>
                    </ul>
                  </div>

                  {/* Maand 5-9 */}
                  <div>
                    <h3 className="font-display text-2xl text-text-dark mb-4">
                      Maand 5-9, Opschalen
                    </h3>
                    <ul className="space-y-3 text-text-dark-secondary">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>SDR aangenomen en onboard</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Team training programma opgestart</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Wekelijkse pipeline reviews en kwartaal business reviews</span>
                      </li>
                    </ul>
                  </div>

                  {/* Maand 10-12 */}
                  <div>
                    <h3 className="font-display text-2xl text-text-dark mb-4">
                      Maand 10-12, Overdracht
                    </h3>
                    <ul className="space-y-3 text-text-dark-secondary">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Fulltime Head of Sales geworven en onboard</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Alle systemen en processen gedocumenteerd</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-teal-dark font-bold flex-shrink-0">→</span>
                        <span>Succesvolle overdracht afgerond</span>
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
                      <td className="py-4 pr-4 font-display text-lg">ARR</td>
                      <td className="py-4 px-4 font-display text-lg">€2.5M</td>
                      <td className="py-4 px-4 font-display text-lg">€4.1M</td>
                      <td className="py-4 pl-4 font-display text-lg text-accent-teal-dark">+64%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Pipeline per maand</td>
                      <td className="py-4 px-4">€180K</td>
                      <td className="py-4 px-4">€620K</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">+244%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Win rate</td>
                      <td className="py-4 px-4">18%</td>
                      <td className="py-4 px-4">29%</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">+61%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Sales cycle</td>
                      <td className="py-4 px-4">120 dagen</td>
                      <td className="py-4 px-4">68 dagen</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">-43%</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Team grootte</td>
                      <td className="py-4 px-4">3 AE's</td>
                      <td className="py-4 px-4">3 AE's + 1 SDR + HoS</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">—</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 pr-4">Founder in deals</td>
                      <td className="py-4 px-4">60%</td>
                      <td className="py-4 px-4">5%</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">-92%</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4">Kosten vs fulltime VP</td>
                      <td className="py-4 px-4">—</td>
                      <td className="py-4 px-4">—</td>
                      <td className="py-4 pl-4 font-bold text-accent-teal-dark">60% goedkoper</td>
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
                  "Het probleem was niet de persoon, maar het systeem. Tim heeft eerst het fundament gebouwd en daarna de juiste HoS gevonden om het over te nemen. Dat had ik zelf nooit kunnen doen."
                </blockquote>
                <div className="text-text-dark-secondary">
                  <div className="font-medium text-text-dark">[Naam]</div>
                  <div>CTO & Co-founder [Bedrijfsnaam C]</div>
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
