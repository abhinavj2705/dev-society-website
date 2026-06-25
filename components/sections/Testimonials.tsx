import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";

const testimonials = [
  {
    quote: "Alex truly understood my vision & turned it into impactful designs, results went beyond my expectations!",
    name: "Maya Wells",
    role: "Founder, Studio Noma",
    rating: "4.9",
    avatar: "/avatars/person-1.svg"
  },
  {
    quote: "Working with Alex felt calm and exact. The new site gave our team clarity and doubled qualified inquiries.",
    name: "Noah Grant",
    role: "CEO, PayNest",
    rating: "5.0",
    avatar: "/avatars/person-2.svg"
  },
  {
    quote: "As a small business owner, I appreciated how direct the process was. Everything launched smoothly.",
    name: "Elena Ruiz",
    role: "Owner, Mesa",
    rating: "4.8",
    avatar: "/avatars/person-3.svg"
  },
  {
    quote: "The collaboration felt structured and premium from day one. We launched with a site the whole team can use.",
    name: "Jon Bell",
    role: "COO, Connecto",
    rating: "4.9",
    avatar: "/avatars/person-1.svg"
  }
];

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-main overflow-hidden">
        <SectionHeader eyebrow="Testimonials" title="Good work gets noticed" />
        <div className="mt-16">
          <TestimonialsMarquee testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
