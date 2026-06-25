import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/lib/content";

/**
 * FAQ accordion built on native <details>/<summary> — accessible and works
 * without client-side JS. Renders nothing if there are no questions.
 */
export default function FAQ({ className = "" }: { className?: string }) {
  if (faqs.length === 0) return null;

  return (
    <section className={className || "py-20 sm:py-28"}>
      <Container>
        <SectionHeading
          eyebrow="Questions, answered"
          title="The things people ask before reaching out."
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-forest/12 border-y border-forest/12">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 4) * 60}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-forest [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden
                    className="shrink-0 text-2xl leading-none text-forest/40 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-forest/70">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
