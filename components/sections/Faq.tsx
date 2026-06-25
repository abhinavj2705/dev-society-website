"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { reveal, stagger } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqItem } from "@/components/ui/FaqItem";

const faqs = [
  ["How soon can we start?", "Most projects begin within two weeks after a discovery call, scope alignment, and deposit."],
  ["Do you design and build?", "Yes. I can lead strategy, interface design, visual systems, and production-ready implementation."],
  ["What do you need from me?", "Clear goals, brand context, decision makers, and any existing research or product constraints."],
  ["Can you work with an existing team?", "Absolutely. I often partner with founders, product teams, marketers, and engineering leads."],
  ["What happens after launch?", "I provide handoff, QA support, documentation, and optional retainers for optimization."],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad">
      <div className="container-main">
        <SectionHeader eyebrow="FAQ" title="Before you ask" />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} className="mx-auto mt-14 max-w-[820px]">
          {faqs.map(([question, answer], index) => {
            const active = open === index;
            return (
              <motion.div key={question} variants={reveal}>
                <FaqItem
                  question={question}
                  answer={answer}
                  isOpen={active}
                  onToggle={() => setOpen(active ? null : index)}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
