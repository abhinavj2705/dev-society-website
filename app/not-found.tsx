"use client";

import { motion } from "framer-motion";
import { revealUpLg } from "@/lib/animations";
import ArrowButton from "@/components/ui/ArrowButton";
import SplitWords from "@/components/ui/SplitWords";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-content flex-col items-center justify-center gap-8 px-[var(--pad-x)] py-[var(--pad-y)] text-center">
      <motion.h1
        variants={revealUpLg}
        initial="hidden"
        animate="show"
        className="font-display text-[120px] font-bold leading-none tracking-normal text-ink md:text-[200px]"
      >
        4<span className="text-accent">0</span>4
      </motion.h1>
      <SplitWords text="Page not found." as="h2" className="font-display text-3xl font-bold text-ink md:text-4xl" />
      <p className="max-w-md text-balance text-lg leading-relaxed text-zinc-500">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <ArrowButton href="/" label="Back to home" />
        <ArrowButton href="/all-projects" label="View all projects" variant="ghost" />
      </div>
    </main>
  );
}
