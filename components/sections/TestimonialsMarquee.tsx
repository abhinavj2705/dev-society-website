"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: string;
  avatar: string;
};

const FULL_SPEED = 48;
const SLOW_SPEED = 112;

export function TestimonialsMarquee({ testimonials }: { testimonials: Testimonial[] }) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  if (reduce) {
    return (
      <div className="flex snap-x gap-5 overflow-x-auto pb-4">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} active={false} />
        ))}
      </div>
    );
  }

  const track = [...testimonials, ...testimonials];

  return (
    <div
      className="-mx-[30px] overflow-hidden px-[30px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActiveKey(null);
      }}
    >
      <motion.div
        className="flex w-max gap-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: hovered ? SLOW_SPEED : FULL_SPEED,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {track.map((testimonial, index) => {
          const key = `${testimonial.name}-${index}`;
          return (
            <TestimonialCard
              key={key}
              testimonial={testimonial}
              active={activeKey === key}
              onHover={() => setActiveKey(key)}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  active,
  onHover
}: {
  testimonial: Testimonial;
  active: boolean;
  onHover?: () => void;
}) {
  return (
    <motion.article
      onMouseEnter={onHover}
      animate={{ y: active ? -6 : 0 }}
      transition={{ type: "spring", stiffness: 190, damping: 24 }}
      className="min-h-[320px] w-[280px] shrink-0 rounded-[28px] bg-white p-8 sm:w-[370px]"
    >
      <div className="flex items-start justify-between">
        <Image src={testimonial.avatar} alt={`${testimonial.name} portrait`} width={88} height={88} className="rounded-xl" />
        <span className="inline-flex items-center gap-1 rounded-pill bg-zinc-50 px-3 py-2 text-xs font-semibold">
          <Star size={13} className="fill-accent text-accent" />
          {testimonial.rating}
        </span>
      </div>
      <Quote className="mt-6 fill-ink text-ink" size={32} />
      <p className="mt-8 text-xl leading-relaxed text-zinc-700">{testimonial.quote}</p>
      <div className="mt-8">
        <p className="font-bold text-ink">{testimonial.name}</p>
        <p className="text-sm text-zinc-500">{testimonial.role}</p>
      </div>
    </motion.article>
  );
}
