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
          {service.badge && (
            <Reveal delay={260}>
              <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-sage/40 bg-cream/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cream">
                <Mark title="" className="h-3.5 w-3.5 text-sage" />
                {service.badge}
              </span>
            </Reveal>
          )}
        </Container>
      </section>

      {/* Body */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
            {/* The problem */}
            <Reveal>
              <p className="eyebrow text-forest/60">The problem</p>
              <p className="mt-5 font-display text-2xl leading-snug text-forest sm:text-3xl">
                {service.problem}
              </p>
            </Reveal>

            {/* The approach */}
            <Reveal delay={120}>
              <p className="eyebrow text-forest/60">How I do it</p>
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
                <p className="eyebrow text-forest/60">The result</p>
                <p className="mt-4 text-lg leading-relaxed text-forest/85">
                  {service.outcome}
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-forest/12 p-8">
                <p className="eyebrow text-forest/60">What you get</p>
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

          {/* What we can build for you (capability-led services like AI) */}
          {service.useCases && service.useCases.length > 0 && (
            <div className="mt-20">
              <Reveal className="max-w-2xl">
                <p className="eyebrow text-forest/60">What we can build for you</p>
                <h2 className="font-display text-display-sm mt-4 text-forest">
                  Real ways to put it to work.
                </h2>
                <p className="mt-4 leading-relaxed text-forest/70">
                  A few of the systems I can set up for your business — tailored to how you
                  actually operate.
                </p>
              </Reveal>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {service.useCases.map((u, i) => (
                  <Reveal key={u.title} delay={(i % 3) * 80}>
                    <div className="h-full rounded-2xl border border-forest/12 bg-cream-dim/40 p-7 transition-colors duration-500 hover:bg-cream-dim/70">
                      <Mark title="" className="h-7 w-7 text-sage" />
                      <h3 className="font-display mt-5 text-xl text-forest">{u.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-forest/70">{u.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Next service */}
          <Reveal>
            <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-forest/12 pt-8 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-forest/60">Next service</p>
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
