import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Mark from "@/components/Mark";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, rebranding, website influence, website & funnel creation, AI implementation, and paid advertising — handled personally by Alejandro Rodriguez.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <Mark
          title=""
          className="pointer-events-none absolute -right-20 top-10 h-[380px] w-[380px] text-forest/[0.04]"
        />
        <Container className="relative">
          <Reveal>
            <p className="eyebrow text-forest/50">Services</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-display mt-6 max-w-3xl text-forest">
              Everything you need to grow.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-forest/70">
              Six services that work together — from the first impression to the final
              sale. Pick one, or let me run the whole playbook.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 80}>
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Not sure where to start?"
        title="Let's figure it out together."
        intro="Tell me what you're struggling with right now. I'll point you to the move that matters most — even if it's not one of mine."
      />
    </>
  );
}
