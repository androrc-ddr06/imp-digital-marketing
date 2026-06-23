import Link from "next/link";
import type { Service } from "@/lib/content";

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-forest/12 bg-cream/40 p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-forest/30 hover:bg-white/60 hover:shadow-[0_24px_60px_-30px_rgba(11,34,34,0.35)]"
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-2xl text-forest/35 transition-colors duration-500 group-hover:text-sage">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          aria-hidden
          className="text-forest/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:text-forest"
        >
          ↗
        </span>
      </div>
      <div className="mt-12">
        <h3 className="font-display text-2xl text-forest">{service.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-forest/65">{service.short}</p>
      </div>
    </Link>
  );
}
