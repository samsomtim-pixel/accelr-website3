import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Waarom je eerste sales hire mislukt (en hoe je het voorkomt) | Accelr Blog",
  description:
    "€100K+ verspild aan een sales hire die niet werkt? Dit is waarom het misgaat, en wat je eerst moet bouwen.",
  openGraph: {
    title:
      "Waarom je eerste sales hire mislukt (en hoe je het voorkomt) | Accelr Blog",
    description:
      "€100K+ verspild aan een sales hire die niet werkt? Dit is waarom het misgaat, en wat je eerst moet bouwen.",
  },
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl">
                <p className="section-label-dark">Sales Strategy</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  Waarom je eerste sales hire mislukt
                </h1>

                <div className="mt-6 flex items-center gap-4 text-sm text-text-dark-secondary">
                  <span>6 min leestijd</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-bg-light py-16 sm:py-20 lg:py-24">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl">
              <FadeIn delay={0.1}>
                <div className="prose prose-lg max-w-none">
                  {/* Intro */}
                  <p className="text-xl leading-relaxed text-text-dark-secondary">
                    Je hebt product-market fit. Omzet groeit. Tijd voor die
                    eerste sales hire. Maar 6 maanden later: geen resultaat,
                    €100K+ uitgegeven, en je zit weer zelf te verkopen. Dit
                    patroon zie ik bij 80% van de founders die ik spreek.
                  </p>

                  {/* Section: Het patroon */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    Het patroon
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    Je hebt product-market fit. Omzet groeit. Je denkt:{" "}
                    <em>"Ik heb een verkoper nodig."</em>
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    Je huurt iemand in. Na 3-6 maanden: geen resultaat.
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    Want:
                  </p>

                  <ul className="mt-4 space-y-2">
                    <li className="text-lg text-text-dark-secondary">
                      <strong>Geen CRM-proces</strong>, geen pipeline, geen
                      duidelijke stages
                    </li>
                    <li className="text-lg text-text-dark-secondary">
                      <strong>Geen playbook</strong>, geen scripts, geen
                      discovery flow
                    </li>
                    <li className="text-lg text-text-dark-secondary">
                      <strong>Geen onboarding</strong>, "Ga maar lekker
                      bellen"
                    </li>
                    <li className="text-lg text-text-dark-secondary">
                      <strong>Geen gedefinieerde ICP</strong>, "Iedereen die
                      betaalt is een goede klant"
                    </li>
                  </ul>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    De sales hire faalt niet door gebrek aan talent, maar door
                    gebrek aan systeem.
                  </p>

                  {/* Section: Wat je eerst moet bouwen */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    Wat je eerst moet bouwen
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    Voor je die eerste sales hire doet, moet je dit op orde
                    hebben:
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                      <div>
                        <h3 className="font-display text-lg font-semibold text-text-dark">
                          1. Gedefinieerd ICP en buyer persona
                        </h3>
                        <p className="mt-1 text-text-dark-secondary">
                          Wie zijn je beste klanten? Welke titels? Welke
                          bedrijfsgrootte? Welke pijnpunten?
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                      <div>
                        <h3 className="font-display text-lg font-semibold text-text-dark">
                          2. CRM ingericht met pipeline stages
                        </h3>
                        <p className="mt-1 text-text-dark-secondary">
                          Welke stappen doorloopt een deal? Van eerste contact
                          tot closed-won. Wat is de definitie van elke stage?
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                      <div>
                        <h3 className="font-display text-lg font-semibold text-text-dark">
                          3. Discovery en demo scripts
                        </h3>
                        <p className="mt-1 text-text-dark-secondary">
                          Welke vragen stel je? Wat toon je in je demo? Hoe
                          handle je objecties?
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                      <div>
                        <h3 className="font-display text-lg font-semibold text-text-dark">
                          4. Onboarding checklist
                        </h3>
                        <p className="mt-1 text-text-dark-secondary">
                          Wat moet iemand leren in week 1, 2, 3, 4? Welke tools?
                          Welke processen?
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                      <div>
                        <h3 className="font-display text-lg font-semibold text-text-dark">
                          5. Eerste 3 maanden KPI's
                        </h3>
                        <p className="mt-1 text-text-dark-secondary">
                          Hoeveel calls? Hoeveel demos? Wat is succes in maand
                          1, 2, 3?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section: De oplossing */}
                  <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                    De oplossing
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-text-dark-secondary">
                    Bouw eerst het systeem, dan de hire.
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    Als je dat zelf niet kan of wil: laat een Fractional Head of
                    Sales het fundament leggen. In 3-6 maanden bouw je een
                    systeem waar elke sales hire succesvol in kan zijn.
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-text-dark-secondary">
                    Dan hire je niet een persoon die het moet uitzoeken. Dan
                    hire je iemand die een bewezen playbook kan uitvoeren.
                  </p>

                  {/* CTA Section */}
                  <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                    <h3 className="font-display text-2xl font-bold text-text-dark">
                      Wil je weten waar jij staat?
                    </h3>
                    <p className="mt-4 text-lg text-text-dark-secondary">
                      Met De Scan krijg je in 2 uur een compleet overzicht van
                      je sales funnel, tooling en processen. Plus een roadmap
                      wat je moet fixen voor je die eerste hire doet.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link href="/de-scan" className="btn-primary">
                        Bekijk De Scan
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        href="/expertise/fractional-head-of-sales"
                        className="btn-secondary-dark"
                      >
                        Fractional Head of Sales
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
                  Wil je dit voorkomen?
                </h2>
                <p className="mt-6 text-lg leading-8 text-text-dark-secondary">
                  Plan een gesprek. We kijken samen naar jouw situatie en maken
                  een plan.
                </p>
                <div className="mt-10">
                  <Link href="/contact" className="btn-primary text-lg">
                    Plan een gesprek
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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
