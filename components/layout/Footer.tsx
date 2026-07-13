"use client";

import { motion } from "framer-motion";
import { ArrowRight, Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { iconPop, reveal, socialChild, stagger } from "@/lib/animations";
import RollingText from "@/components/ui/RollingText";

export function Footer() {
  return (
    <motion.footer
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="border-t border-zinc-100 bg-[#f6f6f7] px-[15px] py-8 text-ink md:px-[30px]"
    >
      <div className="container-main">
        <div className="flex flex-wrap justify-center gap-10 p-0 md:gap-24">
          <div>
            <h2 className="font-display text-lg font-bold">Socials</h2>
            <div className="mt-4 flex max-w-[320px] rounded-[24px] bg-white p-3 text-zinc-700">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {[
                  ["LinkedIn", "https://www.linkedin.com/company/devsoccu/", <Linkedin key="li" size={16} />],
                  ["GitHub", "https://github.com", <Github key="gh" size={16} />],
                  ["Instagram", "https://instagram.com", <Instagram key="ig" size={16} />],
                  ["Facebook", "https://facebook.com", <Facebook key="fb" size={16} />]
                ].map(([label, href, icon]) => (
                  <motion.a
                    key={String(label)}
                    href={String(href)}
                    target="_blank"
                    rel="noreferrer"
                    variants={socialChild}
                    className="group inline-flex min-h-9 items-center gap-2 rounded-pill border border-zinc-200 px-4 text-sm font-semibold transition hover:bg-accent hover:text-white hover:border-transparent"
                  >
                    {icon}
                    <RollingText>{String(label)}</RollingText>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold">Links</h2>
            <div className="mt-4 flex max-w-[320px] rounded-[24px] bg-white p-3 text-zinc-700">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {[
                  ["All Projects", "/all-projects"],
                  ["Contact", "/contact"],
                  ["About", "/about"],
                  ["Recruitment", "https://dev-soc-registrations.vercel.app/"],
                  ["404", "/404"]
                ].map(([item, href]) => (
                  <motion.a
                    key={item}
                    href={href}
                    variants={socialChild}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className={`group inline-flex min-h-9 items-center justify-center rounded-pill border border-zinc-200 px-4 text-sm font-semibold transition hover:bg-accent hover:text-white hover:border-transparent ${item === "404" ? "hidden" : ""}`}
                  >
                    <RollingText>{item}</RollingText>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
        <div className="mt-8 flex flex-col-reverse items-center justify-center gap-6 rounded-3xl bg-white p-6 text-center text-xs text-zinc-500 shadow-sm md:flex-row md:justify-between md:rounded-[60px] md:px-8 md:py-6 md:text-sm md:text-left">
          <span>© 2026 Developer Society, Christ University. Built for launch.</span>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a href="/legal/privacy" className="transition hover:text-ink active:text-accent">Privacy Policy</a>
            <a href="/legal/terms" className="transition hover:text-ink active:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
