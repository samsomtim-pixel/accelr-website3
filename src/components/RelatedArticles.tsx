import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

interface RelatedArticle {
  href: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
}

interface RelatedArticlesProps {
  label: string;
  articles: RelatedArticle[];
}

export default function RelatedArticles({
  label,
  articles,
}: RelatedArticlesProps) {
  return (
    <section className="bg-bg-light py-16 sm:py-20">
      <div className="container-wide">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <p className="section-label-dark">{label}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, i) => (
                <FadeIn key={article.href} delay={i * 0.1}>
                  <Link href={article.href} className="block group h-full">
                    <article className="card-light h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
                      <div className="flex items-center justify-between">
                        <span className="section-label-dark text-xs">
                          {article.tag}
                        </span>
                        <span className="text-xs text-text-dark-secondary">
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-semibold text-text-dark group-hover:text-accent-teal-dark transition-colors">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-dark-secondary flex-1 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex items-center text-sm font-medium text-accent-teal-dark group-hover:gap-2 transition-all">
                        Lees artikel
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
