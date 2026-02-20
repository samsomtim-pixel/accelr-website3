import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { Clock, MessageSquare, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact, Plan een kennismaking",
  description:
    "Plan een vrijblijvend kennismakingsgesprek met Tim. 30 minuten, eerlijk advies.",
  openGraph: {
    title: "Contact, Plan een kennismaking | Accelr",
    description:
      "Plan een vrijblijvend kennismakingsgesprek met Tim. 30 minuten, eerlijk advies.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">/ Contact</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl">
                  Plan een kennismaking
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary">
                  30 minuten. Vrijblijvend. Eerlijk advies over waar je salesmotor
                  staat en wat de logische volgende stap is.
                </p>
              </div>
            </FadeIn>

            <div className="mx-auto mt-12 max-w-2xl grid gap-6 sm:grid-cols-3">
              <FadeIn delay={0.1}>
                <div className="card-light text-center">
                  <Clock size={28} className="mx-auto text-accent-teal" />
                  <h3 className="mt-4 font-display font-semibold text-text-dark">30 minuten</h3>
                  <p className="mt-1 text-sm text-text-dark-secondary">
                    Kort en to the point
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="card-light text-center">
                  <MessageSquare size={28} className="mx-auto text-accent-teal" />
                  <h3 className="mt-4 font-display font-semibold text-text-dark">Vrijblijvend</h3>
                  <p className="mt-1 text-sm text-text-dark-secondary">
                    Geen verkooppraatje
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="card-light text-center">
                  <Mail size={28} className="mx-auto text-accent-teal" />
                  <h3 className="mt-4 font-display font-semibold text-text-dark">Eerlijk advies</h3>
                  <p className="mt-1 text-sm text-text-dark-secondary">
                    Ook als dat is: doe het zelf
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Calendly embed placeholder */}
            <FadeIn delay={0.4}>
              <div className="mx-auto mt-12 max-w-2xl">
                <div className="card-light">
                  <h2 className="font-display text-xl font-bold text-text-dark text-center">
                    Plan direct een gesprek
                  </h2>
                  <p className="mt-2 text-center text-sm text-text-dark-secondary">
                    Kies een moment dat jou uitkomt
                  </p>
                  {/*
                    Replace the div below with your Calendly embed:
                    <iframe src="https://calendly.com/YOUR_LINK" width="100%" height="700" frameBorder="0" />
                  */}
                  <div className="mt-6 flex min-h-[400px] items-center justify-center rounded-xl border border-border-light-mode bg-bg-light">
                    <div className="text-center">
                      <p className="text-text-dark-muted">
                        Calendly embed wordt hier geladen
                      </p>
                      <p className="mt-2 text-sm text-text-dark-muted">
                        Vervang dit blok met je Calendly widget
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-8 text-center">
                <p className="text-sm text-text-dark-muted">
                  Liever direct mailen?{" "}
                  <a
                    href="mailto:tim@accelr.nl"
                    className="text-accent-teal-dark hover:underline"
                  >
                    tim@accelr.nl
                  </a>
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
            <div className="h-[500px] w-[800px] rounded-full bg-accent-teal/5 blur-3xl" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
