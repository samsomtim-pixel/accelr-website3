import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

interface RelatedService {
  href: string;
  title: string;
  desc: string;
}

interface RelatedServicesProps {
  label: string;
  services: RelatedService[];
}

/**
 * Small, content-light section that surfaces internal links from a blog
 * article to the relevant service pages. Used for topical anchoring
 * (SEO + reader navigation).
 */
export default function RelatedServices({
  label,
  services,
}: RelatedServicesProps) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container-wide">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <p className="section-label-dark">{label}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group block rounded-2xl border border-border-light-mode p-5 transition-colors hover:border-accent-teal-dark"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-base font-semibold text-text-dark group-hover:text-accent-teal-dark">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-dark-secondary">
                        {s.desc}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-text-dark-muted transition-transform group-hover:translate-x-1 group-hover:text-accent-teal-dark" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
