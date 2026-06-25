"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function BuyPill() {
  return (
    <motion.a
      href="/contact"
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 18, delay: 2 }}
      className="fixed bottom-7 right-5 z-50 inline-flex min-h-9 items-center gap-2 rounded-lg bg-black px-5 text-xs font-bold text-white shadow-soft transition hover:-translate-y-0.5 md:bottom-12 md:right-9"
    >
      <Zap size={14} className="fill-white" />
      Get in touch
    </motion.a>
  );
}
