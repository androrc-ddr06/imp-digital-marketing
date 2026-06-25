import Container from "./Container";
import Reveal from "./Reveal";
import Mark from "./Mark";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/content";

/**
 * Client testimonials wall. Renders nothing until at least one real quote is
 * added to `testimonials` in content.ts — no placeholder quotes ever ship.
 */
export default function Testimonials({ className = "" }: { className?: string }) {
  if (testimonials.length === 0) return null;

  return (
    <section className={className || "py-20 sm:py-28"}>
      <Container>
        <SectionHeading
          eyebrow="What clients say"
          title="Trusted by the businesses I work with."
          intro="Real words from the owners behind the brands — the people who feel the difference every day."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-forest/12 bg-cream-dim/40 p-8">
                <Mark title="" className="h-8 w-8 text-sage" />
                {typeof t.rating === "number" && (
                  <div
                    className="mt-5 text-sm tracking-wide text-sage"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {"★".repeat(Math.max(0, Math.min(5, Math.round(t.rating))))}
                  </div>
                )}
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-forest/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 border-t border-forest/12 pt-5">
                  <p className="font-medium text-forest">{t.name}</p>
                  <p className="mt-0.5 text-sm text-forest/55">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
