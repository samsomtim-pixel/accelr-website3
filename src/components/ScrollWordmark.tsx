"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LETTERS = ["a", "c", "c", "e", "l", "r"];

export default function ScrollWordmark() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={containerRef} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="flex items-baseline">
          {LETTERS.map((letter, i) => (
            <ScrollLetter
              key={i}
              letter={letter}
              index={i}
              total={LETTERS.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
          <Dot scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}

function ScrollLetter({
  letter,
  index,
  total,
  scrollYProgress,
}: {
  letter: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // First letter (A) is always visible
  // Other letters reveal progressively between 0.05 and 0.45 of scroll
  const start = index === 0 ? 0 : 0.05 + (index - 1) * (0.4 / (total - 1));
  const end = index === 0 ? 0 : start + 0.08;

  const opacity = useTransform(
    scrollYProgress,
    index === 0 ? [0, 0] : [start, end],
    index === 0 ? [1, 1] : [0, 1]
  );

  const x = useTransform(
    scrollYProgress,
    index === 0 ? [0, 0] : [start, end],
    index === 0 ? [0, 0] : [40, 0]
  );

  // Scale down from hero size to normal as user continues scrolling (0.5 -> 0.8)
  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    [200, 200, 120]
  );

  return (
    <motion.span
      style={{ opacity, x, fontSize }}
      className="inline-block font-display font-bold leading-none tracking-tight text-text-dark dark:text-white"
    >
      {letter}
    </motion.span>
  );
}

function Dot({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Dot pulses at the start, then settles
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.5],
    [1.2, 1, 1.1, 1]
  );

  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    [200, 200, 120]
  );

  return (
    <motion.span
      style={{ scale, fontSize }}
      className="inline-block font-display font-bold leading-none tracking-tight text-accent-teal"
    >
      .
    </motion.span>
  );
}
