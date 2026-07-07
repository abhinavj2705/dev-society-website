"use client";

import { motion } from "framer-motion";
import { GraduationCap, MonitorSmartphone, Palette, Lightbulb } from "lucide-react";
import { iconPop, reveal, stagger } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  { icon: GraduationCap, title: "Campus Solutions", copy: "Developing software that improves student experiences and streamlines university processes." },
  { icon: MonitorSmartphone, title: "Web & Mobile Apps", copy: "Creating responsive, production-ready applications with modern technologies." },
  { icon: Palette, title: "Design & Branding", copy: "Crafting clean interfaces and visual identities for campus products and events." },
  { icon: Lightbulb, title: "Innovation Lab", copy: "A space where students build, experiment, and turn ideas into impactful products." }
];

export function Services() {
  return (
    <section className="section-pad">
      <div className="container-main">
        <SectionHeader eyebrow="Services" title="End-to-end design services" />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} className="mx-auto mt-16 grid max-w-[1200px] gap-5 md:grid-cols-2">
          {services.map(({ icon: Icon, title, copy }) => (
            <motion.article key={title} variants={reveal} className="group rounded-[28px] bg-white p-8 transition hover:-translate-y-1 hover:shadow-soft md:p-10">
              <div className="flex items-center gap-5">
                <motion.span {...iconPop} className="grid size-20 place-items-center rounded-full bg-zinc-50 text-accent transition group-hover:bg-orange-50">
                  <Icon size={32} strokeWidth={2.1} />
                </motion.span>
                <h3 className="max-w-[230px] font-display text-2xl font-bold leading-tight">{title}</h3>
              </div>
              <p className="mt-14 text-2xl leading-relaxed text-zinc-500">{copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
