"use client";

import { motion } from "framer-motion";
import { reveal, stagger } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";

const roles = [
  ["Design Director", "2025 - Now"],
  ["Sr. Product Designer", "2024 - 2025"],
  ["Product Designer", "2015 - 2024"],
  ["UI/UX Designer", "2012 - 2015"]
];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-main">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mx-auto max-w-3xl text-center">
          <Badge>About me</Badge>
          <h2 className="mt-5 font-display text-5xl font-bold leading-[1] tracking-normal md:text-7xl">
            Mindset, methods,
            <br />& experience
          </h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mx-auto mt-12 grid max-w-[940px] gap-5 lg:grid-cols-[1fr_1fr]">
          <motion.article variants={reveal} className="rounded-[28px] bg-white p-8 md:p-10">
            <div className="mb-7 flex items-center gap-4 text-sm font-bold text-accent">
              <span className="size-3 rounded-full bg-accent" />
              What I do
            </div>
            <p className="text-2xl leading-relaxed text-zinc-800">
              I help brands find clarity and express it through strong, thoughtful design.
            </p>
          </motion.article>
          <motion.article variants={reveal} className="rounded-[28px] border border-white bg-white/55 p-8 text-zinc-400 md:p-10">
            <div className="mb-7 flex items-center gap-4 text-sm font-bold">
              <span className="size-3 rounded-full bg-zinc-400" />
              Background
            </div>
            <p className="text-2xl leading-relaxed">
              Originally from CDMX, I’ve been designing identities for 7+ years, working with startups, restaurants, hoteliers, & creative founders across Mexico.
            </p>
          </motion.article>
          <motion.article variants={reveal} className="rounded-[28px] border border-white bg-white/55 p-8 text-zinc-400 md:p-10">
            <div className="mb-7 flex items-center gap-4 text-sm font-bold">
              <span className="size-3 rounded-full bg-zinc-400" />
              My Approach
            </div>
            <p className="text-2xl leading-relaxed">
              I believe good design starts with empathy. I ask questions, listen closely, and build brands that feel as good as they look, honest, beautiful, and built to last.
            </p>
          </motion.article>
          <motion.article variants={reveal} className="rounded-[28px] bg-white p-8 md:p-10">
            <div className="mb-7 flex items-center gap-4 text-sm font-bold text-accent">
              <span className="size-3 rounded-full bg-accent" />
              Career
            </div>
            <div className="grid gap-0">
              {roles.map(([role, year]) => (
                <div key={role} className="flex items-center justify-between border-b border-zinc-100 py-3 last:border-none">
                  <span className="text-xl font-medium text-ink md:text-2xl">{role}</span>
                  <span className="font-display text-xl font-bold text-zinc-600 md:text-2xl">{year}</span>
                </div>
              ))}
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
