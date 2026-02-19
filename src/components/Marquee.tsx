"use client";

import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
}

export default function Marquee({ children, speed = 30 }: MarqueeProps) {
  return (
    <div className="relative overflow-hidden hide-scrollbar">
      <div
        className="flex w-max animate-marquee items-center gap-12"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
