import Link from "next/link";
import Mark from "./Mark";

type LogoProps = {
  /** Tint of the symbol + text. */
  tone?: "forest" | "cream";
  className?: string;
};

/**
 * Lockup: compass mark + "I&P" wordmark, links home.
 * Kept as text so it stays crisp at any size and inherits brand fonts.
 */
export default function Logo({ tone = "forest", className = "" }: LogoProps) {
  const color = tone === "cream" ? "text-cream" : "text-forest";
  return (
    <Link
      href="/"
      aria-label="I&P Digital Marketing — home"
      className={`group inline-flex items-center gap-2.5 ${color} ${className}`}
    >
      <Mark className="h-7 w-7 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-90" />
      <span className="font-display text-xl leading-none tracking-tight">
        I<span className="opacity-60">&amp;</span>P
      </span>
    </Link>
  );
}
