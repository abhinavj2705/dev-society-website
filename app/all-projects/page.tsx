"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { reveal, stagger } from "@/lib/animations";
import { projects } from "@/lib/projects";
import SplitWords from "@/components/ui/SplitWords";

export default function AllProjectsPage() {
  return (
    <main className="container-main py-[var(--pad-y)]">
      <section className="mx-auto max-w-4xl text-center">
        <SplitWords
          text="All Projects"
          as="h1"
          className="font-display text-6xl font-bold leading-none text-ink md:text-8xl"
        />
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
          A focused archive of selected systems, launches, and brand experiences.
        </p>
      </section>

      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
      >
        {projects.map((project, index) => (
          <motion.a
            key={project.slug}
            variants={reveal}
            href={`/project-details/${project.slug}`}
            className="group relative h-[430px] overflow-hidden rounded-[28px] bg-zinc-200 transition duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-soft [-webkit-mask-image:-webkit-radial-gradient(white,black)]"
          >
            <Image src={project.cover} alt={`${project.title} project cover`} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover rounded-[28px] transition duration-500 group-hover:scale-[1.04]" />
            <span className="absolute left-6 top-6 rounded-pill bg-white px-4 py-2 text-xs font-bold text-zinc-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="absolute inset-x-6 bottom-6">
              <div className="rounded-[22px] bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent">{project.category}</p>
                <h2 className="mt-2 font-display text-2xl font-bold">{project.title}</h2>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-500">{project.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink">
                  View project <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.section>
    </main>
  );
}
