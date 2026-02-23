import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Inzichten over B2B sales | Accelr",
  description:
    "Artikelen over B2B sales, CRM, AI-tools, outbound en salesstrategie voor tech-founders.",
  openGraph: {
    title: "Blog | Inzichten over B2B sales | Accelr",
    description:
      "Artikelen over B2B sales, CRM, AI-tools, outbound en salesstrategie voor tech-founders.",
  },
};

const publishedPosts = [
  {
    title: "Waarom je eerste sales hire mislukt (en hoe je het voorkomt)",
    excerpt:
      "Je hebt product-market fit, omzet groeit, tijd voor die eerste sales hire. Maar 6 maanden later: geen resultaat, €100K+ uitgegeven. Dit patroon zie ik bij 80% van de founders.",
    tag: "Sales Strategy",
    href: "/blog/waarom-eerste-sales-hire-mislukt",
    readTime: "6 min",
  },
  {
    title: "Fractional Head of Sales: wat is het en waarom groeit het in Nederland?",
    excerpt:
      "In Amerika is het al jaren gangbaar. In Nederland begint het net. Een Fractional Head of Sales is een ervaren commercieel leider die parttime voor jouw bedrijf werkt. Alles wat je moet weten.",
    tag: "Sales Leadership",
    href: "/blog/fractional-head-of-sales-nederland",
    readTime: "8 min",
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

            <div className="mt-16 mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                {publishedPosts.map((post, i) => (
                  <FadeIn key={post.href} delay={i * 0.1}>
                    <Link
                      href={post.href}
                      className="block group h-full"
                    >
                      <article className="card-light h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
                        <div className="flex items-center justify-between">
                          <span className="section-label-dark">{post.tag}</span>
                          <span className="text-xs text-text-dark-secondary">
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="mt-4 font-display text-xl font-semibold text-text-dark group-hover:text-accent-teal-dark transition-colors">
                          {post.title}
                        </h2>
                        <p className="mt-3 text-sm text-text-dark-secondary flex-1">
                          {post.excerpt}
                        </p>
                        <div className="mt-6 flex items-center text-sm font-medium text-accent-teal-dark group-hover:gap-2 transition-all">
                          Lees artikel
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </article>
                    </Link>
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
