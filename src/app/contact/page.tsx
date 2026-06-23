import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";
import ContactForm from "@/components/ContactForm";
import { site, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Alejandro what you're struggling with and why now is the time to fix it. Start a project with I&P Digital Marketing.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <Mark
        title=""
        className="pointer-events-none absolute -left-24 top-24 h-[380px] w-[380px] text-forest/[0.04]"
      />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr]">
          {/* Left: pitch */}
          <div>
            <Reveal>
              <p className="eyebrow text-forest/60">Start a project</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-display-sm mt-6 text-forest">
                Let&apos;s talk about what&apos;s holding you back.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md leading-relaxed text-forest/70">
                I keep this short and honest. Tell me where you&apos;re stuck and why now —
                and I&apos;ll tell you straight whether I can help and what I&apos;d do
                first.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 space-y-4 border-t border-forest/12 pt-8">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-forest/80 hover:text-forest"
                >
                  <Mark title="" className="h-4 w-4 text-sage" />
                  <span className="link-underline">{site.email}</span>
                </a>
                <p className="text-sm text-forest/55">
                  Based in {site.location} · Working with clients everywhere.
                </p>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10">
                <p className="eyebrow text-forest/45">How I can help</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <li
                      key={s.slug}
                      className="rounded-full border border-forest/15 px-3 py-1 text-xs text-forest/65"
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-forest/12 bg-white/40 p-7 sm:p-9">
              <ContactForm formspreeId={site.formspreeId} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
