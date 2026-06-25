import { About } from "@/components/sections/About";
import { Brands } from "@/components/sections/Brands";
import { Services } from "@/components/sections/Services";
import ArrowButton from "@/components/ui/ArrowButton";
import SplitWords from "@/components/ui/SplitWords";

export default function AboutPage() {
  return (
    <main>
      <section className="container-main flex min-h-[62vh] flex-col items-center justify-center py-[var(--pad-y)] text-center">
        <SplitWords
          text="Designer & Developer building work that gets results"
          as="h1"
          className="max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-normal text-ink md:text-8xl"
        />
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-500">
          I partner with founders and teams to clarify their story, design stronger digital experiences, and ship systems that can keep growing after launch.
        </p>
        <div className="mt-9">
          <ArrowButton href="/contact" label="Get in touch" />
        </div>
      </section>
      <About />
      <Brands />
      <Services />
    </main>
  );
}
