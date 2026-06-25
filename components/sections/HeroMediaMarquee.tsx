"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type MediaItem = {
  src: string;
  alt: string;
  wide?: boolean;
};

const FULL_SPEED = 34;
const SLOW_SPEED = 82;

export function HeroMediaMarquee({ items }: { items: MediaItem[] }) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  if (reduce) {
    return (
      <div className="mt-16 flex snap-x gap-5 overflow-x-auto pb-3 md:mt-20">
        {items.map((item) => (
          <HeroMediaCard key={item.src} item={item} active={false} />
        ))}
      </div>
    );
  }

  const track = [...items, ...items];

  return (
    <div
      className="-mx-[30px] mt-16 overflow-hidden pb-3 md:mt-20 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActiveKey(null);
      }}
    >
      <motion.div
        className="flex w-max gap-5 px-[30px]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: hovered ? SLOW_SPEED : FULL_SPEED,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {track.map((item, index) => {
          const key = `${item.src}-${index}`;
          return (
            <HeroMediaCard
              key={key}
              item={item}
              active={activeKey === key}
              onHover={() => setActiveKey(key)}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

function HeroMediaCard({
  item,
  active,
  onHover
}: {
  item: MediaItem;
  active: boolean;
  onHover?: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      animate={{ y: active ? -6 : 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 24 }}
      className={`relative h-[260px] shrink-0 overflow-hidden rounded-[24px] bg-zinc-200 shadow-[0_1px_0_rgba(255,255,255,0.8)] md:h-[370px] [-webkit-mask-image:-webkit-radial-gradient(white,black)] ${item.wide ? "w-[280px] md:w-[360px]" : "w-[220px] md:w-[280px]"}`}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: active ? 1.04 : 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 24 }}
      >
        <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 280px, 360px" className="object-cover" priority={item.src.includes("phone")} />
      </motion.div>
    </motion.div>
  );
}
