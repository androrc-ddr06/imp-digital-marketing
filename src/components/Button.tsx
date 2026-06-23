import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "cream" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage";

const variants: Record<Variant, string> = {
  // forest button on light backgrounds
  solid: "bg-forest text-cream hover:bg-moss focus-visible:ring-offset-cream",
  // outlined on light backgrounds
  outline:
    "border border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-cream focus-visible:ring-offset-cream",
  // cream button on dark backgrounds
  cream: "bg-cream text-forest hover:bg-white focus-visible:ring-offset-forest",
  // text-only
  ghost: "text-forest hover:opacity-70 px-0",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
};

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
  arrow = true,
}: ButtonProps) {
  const external = href.startsWith("http");
  const content = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden
          className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5"
        >
          →
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </Link>
  );
}
