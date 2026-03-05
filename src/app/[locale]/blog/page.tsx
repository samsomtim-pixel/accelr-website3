import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [{ url: "https://accelr.nl/images/og-default.png", width: 1200, height: 630, alt: "Accelr" }],
    },
  };
}

const postHrefs = [
  "/blog/signal-based-outbound",
  "/blog/koude-acquisitie-naar-signal-based-outbound",
  "/blog/koopsignalen-b2b-outbound",
  "/blog/tools-signal-based-outbound",
  "/blog/intent-data-nederland-mkb",
  "/blog/waarom-eerste-sales-hire-mislukt",
  "/blog/fractional-head-of-sales-nederland",
] as const;

export default async function BlogPage() {
  const t = await getTranslations("blog");

  const posts = t.raw("posts") as Array<{
    title: string;
    excerpt: string;
    tag: string;
    readTime: string;
  }>;

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="section-label-dark">{t("hero.label")}</p>

                <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl">
                  {t("hero.title")}
                </h1>

                <p className="mt-6 text-lg text-text-dark-secondary">
                  {t("hero.subtitle")}
                </p>
              </div>
            </FadeIn>

            <div className="mt-16">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, i) => (
                  <FadeIn key={postHrefs[i]} delay={i * 0.1}>
                    <Link
                      href={postHrefs[i]}
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
                          {t("readArticle")}
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
