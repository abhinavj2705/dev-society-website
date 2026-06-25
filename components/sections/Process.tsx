"use client";

import { motion } from "framer-motion";
import { reveal, stagger } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  ["01", "Understand the Why", "We clarify goals, audience, constraints, and the real business outcome before design starts."],
  ["02", "Design the Experience", "I blend strategy, usability, and visual storytelling to design experiences that feel intuitive and look distinct."],
  ["03", "Validate with Real Users", "Through feedback, testing, and iteration, I ensure the design works in the real world, not just on Figma."],
  ["04", "Launch and Learn", "I guide projects from concept to launch, helping teams build scalable design systems and maintain consistent, well-crafted brand experiences."]
];

export function Process() {
  return (
    <section className="section-pad">
      <div className="container-main grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
        <SectionHeader eyebrow="Process" title="How things get built together" className="lg:sticky lg:top-32 lg:self-start lg:text-left" />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid gap-5">
          {steps.map(([num, title, description], index) => (
            <motion.article key={title} variants={reveal} className={`rounded-[28px] p-8 md:p-10 ${index < 3 ? "bg-white" : "border border-white bg-white/50 text-zinc-400"}`}>
              <span className={`inline-flex min-h-11 items-center gap-4 rounded-pill px-6 font-display text-lg font-bold ${index < 3 ? "bg-accent text-white shadow-orange" : "bg-white text-zinc-400"}`}>
                {num}—
                {index < 3 ? title : null}
              </span>
              {index === 3 ? null : <h3 className="sr-only">{title}</h3>}
              <p className={`mt-7 text-2xl leading-relaxed ${index < 3 ? "text-ink" : ""}`}>{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
