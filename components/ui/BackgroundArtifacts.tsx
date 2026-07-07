"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundArtifacts() {
  const { scrollYProgress } = useScroll();
  
  // Parallax translation and rotation values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Soft Blurred Background Blobs */}
      <motion.div style={{ y: y1 }} className="absolute -left-[5%] top-[10%] h-[60vw] max-h-[800px] w-[60vw] max-w-[800px] rounded-full bg-blue-400/10 blur-[140px]" />
      <motion.div style={{ y: y2 }} className="absolute -right-[5%] top-[40%] h-[50vw] max-h-[700px] w-[50vw] max-w-[700px] rounded-full bg-orange-400/10 blur-[140px]" />
      <motion.div style={{ y: y3 }} className="absolute -left-[10%] top-[75%] h-[55vw] max-h-[750px] w-[55vw] max-w-[750px] rounded-full bg-blue-400/10 blur-[140px]" />

      {/* Floating Geometric Artifacts */}
      <motion.div style={{ y: y2, rotate: rotate1 }} className="absolute left-[3%] top-[8%] text-zinc-300/80">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 4v16m-8-8h16" />
        </svg>
      </motion.div>
      <motion.div style={{ y: y4, rotate: rotate2 }} className="absolute right-[4%] top-[22%] text-zinc-300/80">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </motion.div>
      <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute left-[2%] top-[40%] text-zinc-300/70">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75">
          <polygon points="12 2 22 22 2 22" />
        </svg>
      </motion.div>
      <motion.div style={{ y: y3, rotate: rotate2 }} className="absolute right-[3%] top-[58%] text-zinc-300/80">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      </motion.div>
      <motion.div style={{ y: y2, rotate: rotate1 }} className="absolute left-[4%] top-[72%] text-zinc-300/70">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 4v16m-8-8h16" />
        </svg>
      </motion.div>
      <motion.div style={{ y: y4, rotate: rotate2 }} className="absolute right-[5%] top-[88%] text-zinc-300/80">
        <svg width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </motion.div>
    </div>
  );
}
