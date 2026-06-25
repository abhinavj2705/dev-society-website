"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/lib/projects";

const FULL_SPEED = 54;
const SLOW_SPEED = 120;

type ProjectWithIndex = Project & {
  index: string;
};

export function ProjectsMarquee({ projects }: { projects: ProjectWithIndex[] }) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  if (reduce) {
    return (
      <div className="flex w-full snap-x gap-6 overflow-x-auto px-[var(--pad-x)] pb-4">
        {projects.map((project) => (
          <ProjectMarqueeCard key={project.slug} project={project} active={false} />
        ))}
      </div>
    );
  }

  const track = [...projects, ...projects];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActiveKey(null);
      }}
    >
      <motion.div
        className="flex w-max gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: hovered ? SLOW_SPEED : FULL_SPEED,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {track.map((project, index) => {
          const key = `${project.slug}-${index}`;
          return (
            <ProjectMarqueeCard
              key={key}
              project={project}
              active={activeKey === key}
              dimmed={hovered && activeKey !== null && activeKey !== key}
              onHover={() => setActiveKey(key)}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

function ProjectMarqueeCard({
  project,
  active,
  dimmed,
  onHover
}: {
  project: ProjectWithIndex;
  active: boolean;
  dimmed?: boolean;
  onHover?: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      animate={{ opacity: dimmed ? 0.6 : 1, y: active ? -6 : 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      className="w-[260px] shrink-0 sm:w-[300px] lg:w-[380px]"
    >
      <a
        href={`/project-details/${project.slug}`}
        className="group block overflow-hidden rounded-[24px] bg-white ring-1 ring-zinc-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
          <motion.div
            className="absolute inset-0"
            animate={{ scale: active ? 1.05 : 1 }}
            transition={{ type: "spring", stiffness: 160, damping: 22 }}
          >
            <Image src={project.cover} alt={project.title} fill className="object-cover" sizes="(min-width: 1024px) 380px, (min-width: 640px) 300px, 260px" />
          </motion.div>
          <motion.div
            initial={false}
            animate={{ opacity: active ? 1 : 0, y: active ? 0 : 12 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-4 left-4 flex items-center gap-2 rounded-pill bg-accent px-4 py-2 text-sm font-semibold text-on-accent"
          >
            View project
            <ArrowRight size={16} />
          </motion.div>
        </div>
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <p className="text-base font-semibold text-zinc-900">{project.title}</p>
            <p className="text-sm text-zinc-500">{project.category}</p>
          </div>
          <span className="text-sm tabular-nums text-zinc-400">{project.index}</span>
        </div>
      </a>
    </motion.div>
  );
}
