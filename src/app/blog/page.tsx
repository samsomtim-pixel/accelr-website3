import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Blog, Inzichten over B2B sales, AI en groei",
  description:
    "Artikelen over B2B sales, CRM, AI-tools, outbound en salesstrategie voor tech-founders.",
  openGraph: {
    title: "Blog, Inzichten over B2B sales, AI en groei | Accelr",
    description:
      "Artikelen over B2B sales, CRM, AI-tools, outbound en salesstrategie voor tech-founders.",
  },
};

const upcomingPosts = [
  {
    title: "Waarom founder-led sales niet schaalt (en wat wél werkt)",
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
    title: "Hoe Clay + Make je outbound 10x efficiënter maakt",
    excerpt:
      "AI-gedreven prospecting setup die je in een middag draait. Met concrete workflows en templates.",
    tag: "AI & Automation",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">/ Blog</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl">
                  Inzichten & artikelen
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary">
                  Praktische inzichten over B2B sales, CRM, AI-tools, outbound
                  en salesstrategie. Specifiek voor tech-founders.
                </p>
              </div>
            </FadeIn>

            <div className="mt-16 mx-auto max-w-3xl">
              <FadeIn delay={0.1}>
                <div className="card-light text-center py-12">
                  <p className="text-2xl font-display font-bold text-text-dark">
                    Binnenkort
                  </p>
                  <p className="mt-4 text-text-dark-secondary">
                    De eerste artikelen worden momenteel geschreven. Wil je een
                    seintje als ze live staan?
                  </p>
                  <a
                    href="mailto:tim@accelr.nl?subject=Blog%20notificatie"
                    className="btn-primary mt-6 inline-flex"
                  >
                    Stuur me een mail
                  </a>
                </div>
              </FadeIn>

              <div className="mt-12 space-y-6">
                <h2 className="font-display text-xl font-bold text-text-dark">
                  Geplande artikelen
                </h2>
                {upcomingPosts.map((post, i) => (
                  <FadeIn key={post.title} delay={i * 0.1}>
                    <div className="card-light">
                      <span className="section-label-dark">{post.tag}</span>
                      <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-dark-secondary">
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
