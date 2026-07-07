"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { reveal, stagger } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ArrowButton from "@/components/ui/ArrowButton";

const teamMembers = [
  {
    name: "Mandar Waigaonkar",
    role: "President and Lead Software Developer",
    linkedin: "https://www.linkedin.com/in/waigaonkarmandar",
    image: "/team/Mandar _Waigaonkar.png"
  },
  {
    name: "Charushree .S",
    role: "Lead Software Developer",
    linkedin: "https://www.linkedin.com/in/charushrees",
    image: "/team/Charushree _S.png"
  },
  {
    name: "Abhinav Jadhav",
    role: "Lead Software Developer",
    linkedin: "https://www.linkedin.com/in/abhinav-jadhav-",
    image: "/team/Abhinav_jadhav.png"
  },
  {
    name: "Akshat Tiwari",
    role: "Lead Software Developer",
    linkedin: "https://www.linkedin.com/in/akshattiwari01",
    image: "/team/akshath_tiwari.png"
  },
  {
    name: "Aditya Raj",
    role: "Lead Software Developer",
    linkedin: "https://www.linkedin.com/in/adithya-raj-1ab190316",
    image: "/team/aditya_raj.jpeg"
  }
];

export function Team() {
  return (
    <section className="section-pad">
      <div className="container-main">
        <SectionHeader eyebrow="Our Team" title="Meet the minds behind Dev Society" subtitle="Driven by passion, innovation, and a love for building." />
        <div className="mx-auto mt-16 max-w-[1000px]">
          {/* President */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mb-6 flex justify-center">
            {teamMembers.slice(0, 1).map((member) => (
              <motion.article key={member.name} variants={reveal} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group relative overflow-hidden rounded-[28px] bg-white p-8 text-center shadow-[0_1px_20px_rgba(24,24,27,0.04)] transition-all hover:-translate-y-1 hover:shadow-soft md:p-10">
                <div className="mx-auto mb-6 relative size-28 overflow-hidden rounded-[24px] bg-zinc-50 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">{member.role}</p>
                <div className="mt-8 flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 text-accent transition hover:bg-accent hover:text-white"
                    aria-label={`LinkedIn of ${member.name}`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
          {/* Rest of the team */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="flex flex-wrap justify-center gap-6">
            {teamMembers.slice(1).map((member) => (
              <motion.article key={member.name} variants={reveal} className="w-full md:w-[calc(50%-12px)] group relative overflow-hidden rounded-[28px] bg-white p-8 text-center shadow-[0_1px_20px_rgba(24,24,27,0.04)] transition-all hover:-translate-y-1 hover:shadow-soft md:p-10">
                <div className="mx-auto mb-6 relative size-28 overflow-hidden rounded-[24px] bg-zinc-50 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">{member.role}</p>
                <div className="mt-8 flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 text-accent transition hover:bg-accent hover:text-white"
                    aria-label={`LinkedIn of ${member.name}`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
        
        {/* <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-24 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex size-20 items-center justify-center rounded-[24px] bg-white shadow-[0_1px_20px_rgba(24,24,27,0.04)] text-accent">
            <Mail size={32} />
          </div>
          <h3 className="font-display text-4xl font-bold text-ink">Get in touch</h3>
          <p className="mt-4 max-w-lg text-lg text-zinc-500">
            Have questions or want to collaborate? Drop us an email and our team will get back to you shortly.
          </p>
          <div className="mt-8">
            <ArrowButton href="mailto:devsociety.cu@gmail.com" label="Email our team" />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
