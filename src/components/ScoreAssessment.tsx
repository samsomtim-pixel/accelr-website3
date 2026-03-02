"use client";

import { useState, useMemo } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

function getScoreColor(score: number) {
  if (score <= 3) return "text-red-500";
  if (score <= 6) return "text-yellow-500";
  return "text-accent-teal-dark";
}

function getScoreBg(score: number) {
  if (score <= 3) return "bg-red-500";
  if (score <= 6) return "bg-yellow-500";
  return "bg-accent-teal-dark";
}

export default function ScoreAssessment() {
  const t = useTranslations("score");

  const dimensions = t.raw("dimensions") as Array<{
    id: string;
    name: string;
    question: string;
    low: string;
    high: string;
  }>;

  const [scores, setScores] = useState<Record<string, number>>(
    Object.fromEntries(dimensions.map((d) => [d.id, 5]))
  );
  const [submitted, setSubmitted] = useState(false);

  const avg = useMemo(() => {
    const values = Object.values(scores);
    return values.reduce((a, b) => a + b, 0) / values.length;
  }, [scores]);

  const top3Weakest = useMemo(() => {
    return [...dimensions]
      .sort((a, b) => scores[a.id] - scores[b.id])
      .slice(0, 3);
  }, [scores, dimensions]);

  function getScoreLabel(avg: number) {
    if (avg <= 3)
      return {
        label: t("results.levels.urgent.label"),
        color: "text-red-500",
        desc: t("results.levels.urgent.desc"),
      };
    if (avg <= 5)
      return {
        label: t("results.levels.opbouwfase.label"),
        color: "text-orange-500",
        desc: t("results.levels.opbouwfase.desc"),
      };
    if (avg <= 7)
      return {
        label: t("results.levels.groeipotentieel.label"),
        color: "text-yellow-500",
        desc: t("results.levels.groeipotentieel.desc"),
      };
    return {
      label: t("results.levels.optimalisatie.label"),
      color: "text-accent-teal-dark",
      desc: t("results.levels.optimalisatie.desc"),
    };
  }

  const scoreInfo = getScoreLabel(avg);

  if (submitted) {
    return (
      <>
        {/* Results */}
        <section className="bg-white py-24 sm:py-28 lg:py-32">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl">
              <p className="section-label-dark">{t("results.label")}</p>
              <h2 className="mt-4 font-display text-4xl font-bold text-text-dark sm:text-5xl">
                {t("results.title")}
              </h2>

              {/* Score overview */}
              <div className="mt-12 card-light text-center">
                <p className="font-display text-6xl font-bold">
                  <span className={scoreInfo.color}>
                    {avg.toFixed(1)}
                  </span>
                  <span className="text-2xl text-text-dark-muted"> / 10</span>
                </p>
                <p
                  className={`mt-2 text-xl font-semibold ${scoreInfo.color}`}
                >
                  {scoreInfo.label}
                </p>
                <p className="mt-4 text-text-dark-secondary">
                  {scoreInfo.desc}
                </p>
              </div>

              {/* All scores bar chart */}
              <div className="mt-12 space-y-4">
                <h2 className="font-display text-xl font-bold text-text-dark">
                  {t("results.scorePerDimensie")}
                </h2>
                {dimensions.map((d) => (
                  <div key={d.id} className="flex items-center gap-4">
                    <span className="w-32 shrink-0 text-sm font-medium text-text-dark-secondary">
                      {d.name}
                    </span>
                    <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-border-light-mode">
                      <motion.div
                        className={`absolute inset-y-0 left-0 rounded-full ${getScoreBg(scores[d.id])}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${scores[d.id] * 10}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                    <span
                      className={`w-8 text-right text-sm font-bold ${getScoreColor(scores[d.id])}`}
                    >
                      {scores[d.id]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Top 3 weakest */}
              <div className="mt-12">
                <h2 className="font-display text-xl font-bold text-text-dark">
                  {t("results.top3")}
                </h2>
                <div className="mt-6 grid gap-4">
                  {top3Weakest.map((d, i) => (
                    <div key={d.id} className="card-light">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 font-display text-sm font-bold text-red-500">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-display font-semibold text-text-dark">
                            {d.name}{" "}
                            <span
                              className={`text-sm ${getScoreColor(scores[d.id])}`}
                            >
                              ({scores[d.id]}/10)
                            </span>
                          </p>
                          <p className="text-sm text-text-dark-secondary">
                            {d.low}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Score legend */}
              <div className="mt-12">
                <h2 className="font-display text-xl font-bold text-text-dark">
                  {t("results.scoreLegenda")}
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="card-light text-center">
                    <p className="font-display text-3xl font-bold text-red-500">
                      {t("results.legendItems.urgent.range")}
                    </p>
                    <p className="mt-2 font-semibold text-red-500">
                      {t("results.legendItems.urgent.label")}
                    </p>
                    <p className="mt-1 text-sm text-text-dark-secondary">
                      {t("results.legendItems.urgent.desc")}
                    </p>
                  </div>
                  <div className="card-light text-center">
                    <p className="font-display text-3xl font-bold text-yellow-500">
                      {t("results.legendItems.groei.range")}
                    </p>
                    <p className="mt-2 font-semibold text-yellow-500">
                      {t("results.legendItems.groei.label")}
                    </p>
                    <p className="mt-1 text-sm text-text-dark-secondary">
                      {t("results.legendItems.groei.desc")}
                    </p>
                  </div>
                  <div className="card-light text-center">
                    <p className="font-display text-3xl font-bold text-accent-teal-dark">
                      {t("results.legendItems.optim.range")}
                    </p>
                    <p className="mt-2 font-semibold text-accent-teal-dark">
                      {t("results.legendItems.optim.label")}
                    </p>
                    <p className="mt-1 text-sm text-text-dark-secondary">
                      {t("results.legendItems.optim.desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 card-light text-center">
                <p className="text-lg text-text-dark-secondary">
                  {t("results.cta.desc")}
                </p>
                <div className="mt-6 flex items-center justify-center gap-3 text-sm">
                  <span className="font-display text-2xl font-bold text-accent-teal-dark">
                    {t("results.cta.price")}
                  </span>
                  <span className="text-text-dark-muted">
                    {t("results.cta.priceNote")}
                  </span>
                </div>
                <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link href="/contact" className="btn-primary">
                    <span className="btn-label">
                      {t("results.cta.ctaLabel")}
                    </span>
                  </Link>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary-dark"
                  >
                    {t("results.cta.retake")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Assessment form */}
      <section className="bg-white py-24 sm:py-28 lg:py-32 relative overflow-hidden">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="section-label-dark">{t("form.label")}</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl">
              {t("form.title")}
            </h1>
            <p className="mt-6 text-lg text-text-dark-secondary">
              {t("form.subtitle")}
            </p>

            <div className="mt-12 space-y-8">
              {dimensions.map((d, i) => (
                <div key={d.id} className="card-light">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-teal/10 font-display text-sm font-bold text-accent-teal-dark">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-text-dark">
                        {d.name}
                      </h3>
                      <p className="mt-1 text-sm text-text-dark-secondary">
                        {d.question}
                      </p>

                      {/* Slider */}
                      <div className="mt-4">
                        <input
                          type="range"
                          min={1}
                          max={10}
                          value={scores[d.id]}
                          onChange={(e) =>
                            setScores((prev) => ({
                              ...prev,
                              [d.id]: Number(e.target.value),
                            }))
                          }
                          className="score-slider w-full"
                        />
                        <div className="mt-2 flex items-center justify-between text-xs text-text-dark-muted">
                          <span>{d.low.split(".")[0]}</span>
                          <span
                            className={`text-lg font-bold ${getScoreColor(scores[d.id])}`}
                          >
                            {scores[d.id]}
                          </span>
                          <span>{d.high.split(".")[0]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit */}
            <div className="mt-12 text-center">
              <button
                onClick={() => setSubmitted(true)}
                className="btn-primary"
              >
                <span className="btn-label">{t("form.submit")}</span>
              </button>
              <p className="mt-4 text-sm text-text-dark-muted">
                {t("form.averageScore")}{" "}
                <span className={`font-bold ${getScoreColor(avg)}`}>
                  {avg.toFixed(1)}
                </span>{" "}
                / 10
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
          <div className="h-[500px] w-[800px] rounded-full bg-accent-teal/5 blur-3xl" />
        </div>
      </section>
    </>
  );
}
