import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import Mark from "@/components/Mark";
import CTASection from "@/components/CTASection";
import { caseStudies, siteBuilds } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from I&P Digital Marketing — rebrands, social media growth, and websites for Roosters Rolling BBQ, MJL Plumbing, Lillard Restoration, and more.",
};

const featured = caseStudies.find((c) => c.featured)!;
const others = caseStudies.filter((c) => !c.featured);

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 sm:pt-44 sm:pb-20">
        <Container>
          <Reveal>
            <p className="eyebrow text-forest/50">Selected work</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-display mt-6 max-w-3xl text-forest">
              Real brands. Real results.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-forest/70">
              A look at the clients I handle personally — the rebrands, the social growth,
              and the websites behind the numbers.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Featured case study */}
      <section className="pb-8">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-forest text-cream">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={featured.image}
                    alt={`${featured.name} — flagship project`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative p-9 sm:p-12">
                  <Mark
                    title=""
                    className="pointer-events-none absolute right-6 top-6 h-24 w-24 text-cream/[0.06]"
                  />
                  <p className="eyebrow text-sage">{featured.category}</p>
                  <h2 className="font-display mt-4 text-4xl text-cream">{featured.name}</h2>
                  {featured.location && (
                    <p className="mt-1 text-cream/55">{featured.location}</p>
                  )}
                  <p className="mt-6 leading-relaxed text-cream/75">{featured.summary}</p>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {featured.metrics?.map((m) => (
                      <div key={m.label} className="border-l border-cream/15 pl-4">
                        <p className="font-display text-2xl text-cream">{m.value}</p>
                        <p className="mt-1 text-xs leading-snug text-cream/55">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  {featured.url && (
                    <div className="mt-9">
                      <Button href={featured.url} variant="cream">
                        Visit the site
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Other case studies */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((study, i) => (
              <Reveal key={study.slug} delay={(i % 2) * 100}>
                <WorkCard study={study} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Websites */}
      <section className="bg-cream-dim/40 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Websites shipped"
            title="Sites we've built"
            intro="Click through to any of these live builds."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siteBuilds.map((b, i) => (
              <Reveal key={b.domain} delay={(i % 4) * 70}>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-forest/12 bg-white/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-forest/30 hover:shadow-[0_24px_60px_-30px_rgba(11,34,34,0.4)]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={b.image}
                      alt={`${b.name} website`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <div>
                      <p className="font-medium text-forest">{b.name}</p>
                      <p className="mt-0.5 text-xs text-forest/55">{b.domain}</p>
                    </div>
                    <span
                      aria-hidden
                      className="text-forest/35 transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-forest"
                    >
                      ↗
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
