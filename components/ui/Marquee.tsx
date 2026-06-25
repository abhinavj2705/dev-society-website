"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  speed?: number;
  gap?: number;
};

export default function Marquee({ children, speed = 30, gap = 56 }: Props) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  if (reduce) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
        {children}
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
      }}
    >
      <motion.div
        className="flex w-max items-center"
        style={{ gap }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: hovered ? speed * 2 : speed,
          ease: "linear",
          repeat: Infinity
        }}
      >
        <div className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" style={{ gap }} aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
