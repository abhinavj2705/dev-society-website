export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  category: string;
  cover: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "connecto",
    title: "Connecto",
    client: "Connecto",
    year: "2023",
    role: "Product Design, Web Build",
    category: "SaaS",
    cover: "/mockups/phone.svg",
    summary: "A sharper onboarding and marketing system for a communications platform.",
    problem: "The product value was strong, but the buying journey felt fragmented and hard to trust.",
    approach: "We rebuilt the narrative around activation moments, designed a compact component system, and shipped a responsive launch site.",
    outcome: "Qualified demo requests rose 42% in the first quarter and the team reduced campaign build time by half."
  },
  {
    slug: "paynest",
    title: "PayNest",
    client: "PayNest",
    year: "2024",
    role: "Brand Identity, Website",
    category: "Fintech",
    cover: "/mockups/monitor.svg",
    summary: "A calm fintech identity and conversion-focused website for modern payments.",
    problem: "The product needed to feel secure without looking generic or institutional.",
    approach: "We paired restrained typography with warm interaction moments and built a modular page system for acquisition.",
    outcome: "The new site supported a successful partner launch and improved sales-team confidence in outbound campaigns."
  },
  {
    slug: "visionpad",
    title: "VisionPad",
    client: "VisionPad",
    year: "2025",
    role: "UX/UI, Prototype",
    category: "Hardware",
    cover: "/mockups/tablet.svg",
    summary: "A product experience and launch story for a collaborative display device.",
    problem: "The hardware story was compelling, but the software flow needed a more intuitive first-run experience.",
    approach: "We mapped first-session behaviors, prototyped core flows, and refined the launch narrative around team momentum.",
    outcome: "Testing showed faster task completion and clearer comprehension of the product’s core collaboration model."
  },
  {
    slug: "edunova",
    title: "EduNova",
    client: "EduNova",
    year: "2024",
    role: "Design System",
    category: "Education",
    cover: "/mockups/book.svg",
    summary: "A flexible visual system for an education platform scaling across markets.",
    problem: "The brand had outgrown its early templates and needed a system that could support many content types.",
    approach: "We created a simple identity framework, reusable content modules, and documentation for internal teams.",
    outcome: "The team launched new pages faster while keeping campaigns consistent across regions."
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length]
  };
}
