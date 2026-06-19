import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

function bold(text: string) {
  return { __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") };
}

export type BlogCard = {
  title: string;
  price?: string;
  desc: string;
  highlight?: boolean;
};

export type BlogTable = {
  columns: string[];
  rows: Array<{ label: string; cells: string[] }>;
};

export type BlogSection = {
  title?: string;
  paragraphs?: string[];
  listItems?: string[];
  checkItems?: string[];
  crossItems?: string[];
  cards?: BlogCard[];
  table?: BlogTable;
  outcomeTitle?: string;
  outcome?: string;
  codeBlock?: string;
  codeLang?: string;
};

export type BlogCta = {
  title: string;
  desc: string;
  cta: string;
  href: string;
};

export type BlogArticleData = {
  hero: { tag: string; title: string; readTime: string };
  intro: string;
  sections: BlogSection[];
  inlineCta: BlogCta;
};

export default function BlogArticleBody({ data }: { data: BlogArticleData }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-wide">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <p className="section-label-dark">{data.hero.tag}</p>
              <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                {data.hero.title}
              </h1>
              <div className="mt-6 flex items-center gap-4 text-sm text-text-dark-secondary">
                <span>{data.hero.readTime}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article */}
      <section className="bg-bg-light py-16 sm:py-20 lg:py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <FadeIn delay={0.1}>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-text-dark-secondary">
                  {data.intro}
                </p>

                {data.sections.map((section, si) => (
                  <div key={si}>
                    {section.title && (
                      <h2 className="mt-12 font-display text-3xl font-bold text-text-dark">
                        {section.title}
                      </h2>
                    )}

                    {section.paragraphs?.map((p, pi) => (
                      <p
                        key={pi}
                        className={`${pi === 0 ? "mt-6" : "mt-4"} text-lg leading-relaxed text-text-dark-secondary`}
                        dangerouslySetInnerHTML={bold(p)}
                      />
                    ))}

                    {section.listItems && (
                      <ul className="mt-6 space-y-3">
                        {section.listItems.map((item, li) => (
                          <li
                            key={li}
                            className="text-lg leading-relaxed text-text-dark-secondary"
                            dangerouslySetInnerHTML={bold(item)}
                          />
                        ))}
                      </ul>
                    )}

                    {section.checkItems && (
                      <div className="mt-6 space-y-3">
                        {section.checkItems.map((item, ci) => (
                          <div key={ci} className="flex gap-3">
                            <CheckCircle2 className="h-6 w-6 shrink-0 text-accent-teal-dark" />
                            <p
                              className="text-lg text-text-dark-secondary"
                              dangerouslySetInnerHTML={bold(item)}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {section.crossItems && (
                      <div className="mt-6 space-y-3">
                        {section.crossItems.map((item, xi) => (
                          <div key={xi} className="flex gap-3">
                            <XCircle className="h-6 w-6 shrink-0 text-red-500" />
                            <p
                              className="text-lg text-text-dark-secondary"
                              dangerouslySetInnerHTML={bold(item)}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {section.cards && (
                      <div className="mt-8 space-y-4">
                        {section.cards.map((card, ci) => (
                          <div
                            key={ci}
                            className="rounded-xl bg-white p-6 border border-gray-100"
                          >
                            <h3 className="font-display text-xl font-semibold text-text-dark">
                              {card.title}
                            </h3>
                            {card.price && (
                              <p
                                className={`mt-2 text-3xl font-bold ${card.highlight ? "text-accent-teal-dark" : "text-text-dark"}`}
                              >
                                {card.price}
                              </p>
                            )}
                            <p className="mt-2 text-sm text-text-dark-secondary">
                              {card.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.table && (
                      <div className="mt-8 overflow-x-auto">
                        <table className="w-full border-collapse text-left text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="py-3 pr-4 font-display font-semibold text-text-dark" />
                              {section.table.columns.map((col, hi) => (
                                <th
                                  key={hi}
                                  className="py-3 px-4 font-display font-semibold text-text-dark"
                                >
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, ri) => (
                              <tr key={ri} className="border-b border-gray-100">
                                <td className="py-3 pr-4 font-semibold text-text-dark">
                                  {row.label}
                                </td>
                                {row.cells.map((cell, cei) => (
                                  <td
                                    key={cei}
                                    className="py-3 px-4 text-text-dark-secondary"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {section.codeBlock && (
                      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-[#0f172a]">
                        {section.codeLang && (
                          <div className="border-b border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/50">
                            {section.codeLang}
                          </div>
                        )}
                        <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-white/90">
                          <code className="whitespace-pre-wrap">
                            {section.codeBlock}
                          </code>
                        </pre>
                      </div>
                    )}

                    {section.outcome && (
                      <div className="mt-6 rounded-2xl bg-white p-6 border border-gray-100">
                        {section.outcomeTitle && (
                          <p className="text-lg font-semibold text-text-dark">
                            {section.outcomeTitle}
                          </p>
                        )}
                        <p
                          className="mt-2 text-text-dark-secondary"
                          dangerouslySetInnerHTML={bold(section.outcome)}
                        />
                      </div>
                    )}
                  </div>
                ))}

                {/* Inline CTA */}
                <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                  <h3 className="font-display text-2xl font-bold text-text-dark">
                    {data.inlineCta.title}
                  </h3>
                  <p className="mt-4 text-lg text-text-dark-secondary">
                    {data.inlineCta.desc}
                  </p>
                  <div className="mt-6">
                    <Link href={data.inlineCta.href} className="btn-primary">
                      {data.inlineCta.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
