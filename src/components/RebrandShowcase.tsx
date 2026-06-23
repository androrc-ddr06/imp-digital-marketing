import Image from "next/image";
import Reveal from "./Reveal";
import type { Rebrand, RebrandImage } from "@/lib/content";

function ComparePanel({
  img,
  name,
  label,
  variant,
  sizes,
}: {
  img: RebrandImage;
  name: string;
  label: string;
  variant: "before" | "after";
  sizes: string;
}) {
  const pill =
    variant === "before"
      ? "bg-ink/75 text-cream"
      : "bg-forest text-cream ring-1 ring-sage/40";
  return (
    <div className="relative">
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-forest/12 shadow-[0_20px_50px_-32px_rgba(11,34,34,0.45)]"
        style={{ backgroundColor: img.bg }}
      >
        <Image
          src={img.src}
          alt={`${name} logo — ${label.toLowerCase()} the rebrand`}
          fill
          sizes={sizes}
          className="object-contain p-4 sm:p-6 lg:p-8"
        />
      </div>
      <span
        className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] backdrop-blur ${pill}`}
      >
        {label}
      </span>
    </div>
  );
}

export default function RebrandShowcase({
  rebrand,
  compact = false,
}: {
  rebrand: Rebrand;
  compact?: boolean;
}) {
  // The compact variant sits inside a 2-col grid, so panels render much
  // smaller on large screens — size the image requests accordingly.
  const panelSizes = compact
    ? "(max-width: 1024px) 90vw, 24vw"
    : "(max-width: 1024px) 90vw, 44vw";

  return (
    <div>
      {!compact && (
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-forest/60">Rebrand · Before &amp; After</p>
          <h3 className="font-display mt-3 text-3xl text-forest sm:text-4xl">
            {rebrand.name}
          </h3>
          <p className="mt-4 leading-relaxed text-forest/70">{rebrand.blurb}</p>
        </Reveal>
      )}

      {compact && (
        <Reveal>
          <p className="eyebrow text-forest/60">{rebrand.name}</p>
        </Reveal>
      )}

      {/* Before → After */}
      <Reveal className={compact ? "mt-5" : "mt-9"}>
        <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr]">
          <ComparePanel
            img={rebrand.before}
            name={rebrand.name}
            label="Before"
            variant="before"
            sizes={panelSizes}
          />
          <div className="flex items-center justify-center text-forest/40" aria-hidden>
            <span className="hidden text-2xl lg:block">→</span>
            <span className="text-2xl lg:hidden">↓</span>
          </div>
          <ComparePanel
            img={rebrand.after}
            name={rebrand.name}
            label="After"
            variant="after"
            sizes={panelSizes}
          />
        </div>
      </Reveal>

      {/* Brand applied in the real world */}
      {!compact && rebrand.mockups.length > 0 && (
        <Reveal className="mt-6">
          <p className="eyebrow mb-4 text-forest/55">The new brand, in the wild</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {rebrand.mockups.map((m) => (
              <div
                key={m.src}
                className="relative aspect-[9/5] overflow-hidden rounded-2xl border border-forest/12 bg-moss"
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 44vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </div>
  );
}
