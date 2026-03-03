import FadeIn from "@/components/FadeIn";
import { Sparkles } from "lucide-react";
import { PILLAR_COLORS } from "@/lib/constants";

interface AiHighlightsProps {
  label: string;
  title: string;
  items: { title: string; desc: string }[];
}

const ai = PILLAR_COLORS.ai;

export default function AiHighlights({ label, title, items }: AiHighlightsProps) {
  return (
    <section
      className="py-20 sm:py-28 lg:py-32"
      style={{ backgroundColor: ai.bg }}
    >
      <div className="container-wide">
        <FadeIn>
          <div
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: ai.color }}
          >
            <Sparkles size={16} />
            {label}
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold text-text-dark sm:text-4xl">
            {title}
          </h3>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div
                className="h-full rounded-2xl bg-white p-6 dark:bg-[#0A0A0A]"
                style={{ border: `1px solid ${ai.border}` }}
              >
                <Sparkles size={20} style={{ color: ai.color }} />
                <h4 className="mt-3 font-display text-lg font-semibold text-text-dark">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-text-dark-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
