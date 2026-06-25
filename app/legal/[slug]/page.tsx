import { notFound } from "next/navigation";
import SplitWords from "@/components/ui/SplitWords";
import { legalPages, type LegalSlug } from "@/lib/legal";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export default function LegalPage({ params }: Props) {
  const page = legalPages[params.slug as LegalSlug];
  if (!page) notFound();

  return (
    <main className="container-main py-[var(--pad-y)]">
      <article className="mx-auto max-w-3xl rounded-[32px] bg-white p-8 md:p-12">
        <SplitWords
          text={page.title}
          as="h1"
          className="font-display text-5xl font-bold leading-none text-ink md:text-7xl"
        />
        <div className="mt-10 grid gap-6 text-lg leading-relaxed text-zinc-500">
          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
