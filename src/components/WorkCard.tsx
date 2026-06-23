import Image from "next/image";
import type { CaseStudy } from "@/lib/content";

export default function WorkCard({ study }: { study: CaseStudy }) {
  const Wrapper = study.url ? "a" : "div";
  const wrapperProps = study.url
    ? { href: study.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group block overflow-hidden rounded-2xl border border-forest/12 bg-white/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-forest/30 hover:shadow-[0_24px_60px_-30px_rgba(11,34,34,0.4)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-moss">
        <Image
          src={study.image}
          alt={`${study.name} — project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow text-forest/45">{study.category}</p>
          {study.url && (
            <span
              aria-hidden
              className="text-forest/35 transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-forest"
            >
              ↗
            </span>
          )}
        </div>
        <h3 className="font-display mt-2 text-2xl text-forest">{study.name}</h3>
        {study.location && (
          <p className="mt-1 text-sm text-forest/50">{study.location}</p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-forest/65">{study.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {study.services.map((s) => (
            <span
              key={s}
              className="rounded-full border border-forest/15 px-3 py-1 text-xs text-forest/60"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
