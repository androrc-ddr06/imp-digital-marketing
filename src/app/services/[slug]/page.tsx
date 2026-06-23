import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Mark from "@/components/Mark";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.short,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  const service = services[index];
  if (!service) notFound();

  const next = services[(index + 1) % services.length];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="bg-grain absolute inset-0" />
        <Mark
          title=""
          className="pointer-events-none absolute -right-16 -top-10 h-[420px] w-[420px] text-cream/[0.05] animate-spin-slow"
        />
        <Container className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
          <Reveal>
            <Link
              href="/services"
              className="link-underline text-sm text-cream/60 hover:text-cream"
            >
              ← All services
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow mt-8 text-sage">
              Service {String(index + 1).padStart(2, "0")}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="font-display text-display mt-5 max-w-3xl text-cream">
              {service.name}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg italic text-cream/80">{service.tagline}</p>
          </Reveal>
        </Container>
      </section>

      {/* Body */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
            {/* The problem */}
            <Reveal>
              <p className="eyebrow text-forest/50">The problem</p>
              <p className="mt-5 font-display text-2xl leading-snug text-forest sm:text-3xl">
                {service.problem}
              </p>
            </Reveal>

            {/* The approach */}
            <Reveal delay={120}>
              <p className="eyebrow text-forest/50">How I do it</p>
              <ul className="mt-6 space-y-5">
                {service.approach.map((item) => (
                  <li key={item} className="flex gap-4">
                    <Mark title="" className="mt-1 h-4 w-4 shrink-0 text-sage" />
                    <span className="leading-relaxed text-forest/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Deliverables + outcome */}
          <div className="mt-16 grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div className="rounded-2xl border border-forest/12 bg-cream-dim/40 p-8">
                <p className="eyebrow text-forest/50">The result</p>
                <p className="mt-4 text-lg leading-relaxed text-forest/85">
                  {service.outcome}
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-forest/12 p-8">
                <p className="eyebrow text-forest/50">What you get</p>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="border-b border-forest/10 pb-3 text-forest/80 last:border-0 last:pb-0"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Next service */}
          <Reveal>
            <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-forest/12 pt-8 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-forest/50">Next service</p>
                <Link
                  href={`/services/${next.slug}`}
                  className="font-display text-2xl text-forest link-underline"
                >
                  {next.name}
                </Link>
              </div>
              <Button href="/contact">Start a project</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
