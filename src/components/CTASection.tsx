import Button from "./Button";
import Container from "./Container";
import Mark from "./Mark";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title?: string;
  intro?: string;
};

export default function CTASection({
  eyebrow = "Let's build something",
  title = "Ready to grow on purpose?",
  intro = "Tell me what you're struggling with right now. If I can help, you'll hear back from me personally.",
}: Props) {
  return (
    <section className="bg-forest text-cream">
      <Container className="relative overflow-hidden py-24 sm:py-32">
        <Mark
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-cream/[0.05] animate-spin-slow"
          title=""
        />
        <Reveal className="relative max-w-2xl">
          <p className="eyebrow text-sage">{eyebrow}</p>
          <h2 className="font-display text-display mt-5 text-cream">{title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">{intro}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="cream">
              Start a project
            </Button>
            <Button href="/work" variant="ghost" className="text-cream hover:text-sage">
              See the work
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
