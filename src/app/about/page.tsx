import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alejandro Rodriguez is the founder of I&P Digital Marketing — a hands-on studio helping local businesses rebrand, grow, and modernize with AI.",
};

const values = [
  {
    title: "Personal, not outsourced",
    body: "You work directly with me. Your accounts aren't passed to a junior or a faceless team — I handle the strategy, the creative, and the results myself.",
  },
  {
    title: "Results over vanity",
    body: "Followers are nice; customers pay the bills. Everything I build is measured against real outcomes — growth, leads, and revenue.",
  },
  {
    title: "Modern by default",
    body: "I'm baking AI into how I work and how my clients operate — faster responses, smarter follow-up, and content that ships on time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <Mark
          title=""
          className="pointer-events-none absolute -right-20 -top-6 h-[420px] w-[420px] text-forest/[0.04]"
        />
        <Container className="relative">
          <Reveal>
            <p className="eyebrow text-forest/60">About</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-display mt-6 max-w-4xl text-forest">
              Hi, I&apos;m {site.person.split(" ")[0]}.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-forest/70">
              I founded {site.company} to give local businesses the kind of marketing
              usually reserved for big brands — sharp branding, content that travels, and
              websites that actually bring in customers.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div className="space-y-6 text-lg leading-relaxed text-forest/80">
                <p>
                  I&apos;m a one-person studio by design. When you hire {site.company}, you
                  get me — not a rotating cast of account managers. That means the person
                  building your brand is the same person answering your texts.
                </p>
                <p>
                  My flagship client, Roosters Rolling BBQ, is the clearest proof of what
                  that focus produces. We rebranded the business, took over their social,
                  and built their website — growing them from{" "}
                  <span className="text-forest">700 to over 2,000 followers across platforms</span> and past{" "}
                  <span className="text-forest">3 million video views.</span>
                </p>
                <p>
                  Beyond Roosters, I&apos;ve rebranded companies like MJL Plumbing and
                  Lillard Restoration Services, and shipped websites across food, sports,
                  and community organizations. The common thread: work that looks the part
                  and pulls its weight.
                </p>
                <p>
                  Now I&apos;m bringing AI into everything I do — automating follow-up,
                  speeding up content, and helping clients respond to leads in seconds
                  instead of days.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-forest/12 bg-cream-dim/40 p-8">
                <Mark title="" className="h-10 w-10 text-forest" />
                <p className="mt-6 font-display text-2xl leading-snug text-forest">
                  &ldquo;{site.tagline}&rdquo;
                </p>
                <dl className="mt-8 space-y-4 border-t border-forest/12 pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-forest/55">Studio</dt>
                    <dd className="text-forest">{site.company}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-forest/55">Founder</dt>
                    <dd className="text-forest">{site.person}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-forest/55">Based in</dt>
                    <dd className="text-forest">{site.location}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-forest/55">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${site.email}`}
                        className="link-underline text-forest"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </dl>
                <div className="mt-8">
                  <Button href="/contact">Work with me</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-forest/12 p-8">
                  <span className="font-display text-2xl text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-5 text-2xl text-forest">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-forest/70">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
