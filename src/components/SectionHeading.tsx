import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "forest" | "cream";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "forest",
}: Props) {
  const isCream = tone === "cream";
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${isCream ? "text-sage" : "text-forest/60"}`}>{eyebrow}</p>
      )}
      <h2
        className={`font-display text-display-sm mt-4 ${
          isCream ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            isCream ? "text-cream/70" : "text-forest/70"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
