import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { clientLogos } from "@/lib/content";

type Props = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
};

export default function ClientLogos({
  eyebrow = "Companies we've worked with",
  title = "Brands that trust I&P.",
  intro = "From BBQ to law firms to sport floors — a growing list of businesses we've helped look the part.",
  className = "",
}: Props) {
  return (
    <section className={className}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {clientLogos.map((c, i) => (
            <Reveal key={c.src} delay={(i % 4) * 70}>
              <div
                className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-forest/12 shadow-[0_16px_40px_-30px_rgba(11,34,34,0.4)]"
                style={{ backgroundColor: c.bg }}
              >
                <Image
                  src={c.src}
                  alt={`${c.name} logo`}
                  fill
                  sizes="(max-width: 640px) 45vw, 22vw"
                  className="object-contain p-6 sm:p-7"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
