"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function Counter({ to, suffix = "", duration = 1.2, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduce) {
      el.textContent = `${to}${suffix}`;
      return;
    }

    if (!inView) return;

    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        el.textContent = `${Math.round(value)}${suffix}`;
      }
    });

    return () => controls.stop();
  }, [duration, inView, reduce, suffix, to]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
