import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Mark from "@/components/Mark";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import RebrandShowcase from "@/components/RebrandShowcase";
import CTASection from "@/components/CTASection";
import { caseStudies, rebrands, services, siteBuilds, stats, site } from "@/lib/content";

const featured = caseStudies.find((c) => c.featured)!;

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
        <Mark
          title=""
          className="pointer-events-none absolute -right-24 -top-10 h-[420px] w-[420px] text-forest/[0.04] sm:right-0 sm:h-[560px] sm:w-[560px]"
        />
        <Container className="relative">
          <Reveal>
            <p className="eyebrow text-forest/60">
              {site.company} · {site.location}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-display mt-6 max-w-4xl text-forest">
              Brands that grow <span className="italic text-moss">on purpose.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-forest/70">
              I&apos;m {site.person}, founder of {site.company}. I help local businesses
              rebrand, grow on social, and turn attention into real customers — with a
              modern, AI-powered edge.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact">Start a project</Button>
              <Button href="/work" variant="outline">
                See the work
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Marquee of client domains */}
      <div className="border-y border-forest/10 bg-forest text-cream">
        <div className="marquee-mask overflow-hidden py-5">
          <div className="animate-marquee flex w-max items-center gap-12 pr-12">
            {[...siteBuilds, ...siteBuilds, ...siteBuilds].map((b, i) => (
              <span
                key={i}
                className="flex items-center gap-12 whitespace-nowrap text-sm tracking-wide text-cream/70"
              >
                {b.domain}
                <Mark title="" className="h-3.5 w-3.5 text-sage" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Stats                                                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <p className="font-display text-5xl text-forest sm:text-6xl">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-forest">{stat.label}</p>
                {stat.detail && (
                  <p className="mt-1 text-sm text-forest/55">{stat.detail}</p>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Featured work — Roosters                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-cream-dim/40 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Flagship client"
            title="Roosters Rolling BBQ"
            intro="Our biggest and best client. We rebranded the business, run their social, and built their website — turning a local BBQ spot into a content machine."
          />
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-forest/12 shadow-[0_30px_80px_-40px_rgba(11,34,34,0.5)]">
                <Image
                  src={featured.image}
                  alt="Roosters Rolling BBQ rebrand — branded apron, taco packaging, and cap"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-3 gap-4">
                {featured.metrics?.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-forest/12 bg-cream/60 p-5"
                  >
                    <p className="font-display text-2xl text-forest sm:text-3xl">{m.value}</p>
                    <p className="mt-2 text-xs leading-snug text-forest/60">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-7 leading-relaxed text-forest/75">{featured.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-forest/15 px-3 py-1 text-xs text-forest/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/work">View all work</Button>
                {featured.url && (
                  <Button href={featured.url} variant="outline">
                    Visit site
                  </Button>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Before & After teaser                                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Before &amp; After"
              title="See the transformation."
              intro="The clearest proof of a rebrand: what the business looked like before, next to what we built after."
            />
            <Reveal>
              <Button href="/work" variant="ghost" className="text-forest">
                See all rebrands
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-10">
            {rebrands.map((rebrand) => (
              <RebrandShowcase key={rebrand.slug} rebrand={rebrand} compact />
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Services                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="What I do"
              title="Six ways I help you grow"
              intro="A complete toolkit to build your brand and bring in customers — handled personally, start to finish."
            />
            <Reveal>
              <Button href="/services" variant="ghost" className="text-forest">
                All services
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 80}>
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Websites strip                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-cream-dim/40 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Websites shipped"
            title="Sites built to convert"
            intro="Fast, brand-forward websites — each engineered to turn visitors into customers."
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
