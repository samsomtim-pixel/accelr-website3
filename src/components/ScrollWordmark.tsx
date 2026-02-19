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
    <div ref={containerRef} className="flex items-baseline">
      {LETTERS.map((letter, i) => (
        <ScrollLetter
          key={i}
          letter={letter}
          index={i}
          total={LETTERS.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
      <motion.span
        className="inline-block font-display font-bold leading-none tracking-tight text-accent-teal text-[80px] sm:text-[100px] lg:text-[120px]"
      >
        .
      </motion.span>
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
  // "a" (index 0) always stays visible
  // Letters disappear from right to left: "r" goes first, then "l", "e", etc.
  // Reverse index: r=0, l=1, e=2, c=3, c=4, a=5
  const reverseIndex = total - 1 - index;

  // Each letter fades out at a specific scroll range
  // First to go: reverseIndex 0 (r) at scroll 0.05-0.15
  // Last to go: reverseIndex 4 (c, index 1) at scroll 0.45-0.55
  // "a" (index 0) never fades out
  const start = 0.05 + reverseIndex * (0.4 / (total - 1));
  const end = start + 0.12;

  const opacity = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [start, end],
    index === 0 ? [1, 1] : [1, 0]
  );

  const x = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [start, end],
    index === 0 ? [0, 0] : [0, -20]
  );

  const width = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [start, end],
    index === 0 ? ["auto", "auto"] : ["auto", "0px"]
  );

  return (
    <motion.span
      style={{ opacity, x, width, overflow: "hidden" }}
      className="inline-block font-display font-bold leading-none tracking-tight text-text-dark dark:text-white text-[80px] sm:text-[100px] lg:text-[120px]"
    >
      {letter}
    </motion.span>
  );
}
