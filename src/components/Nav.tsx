"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "border-b border-forest/10 bg-cream/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Logo />

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`link-underline text-sm font-medium transition-opacity ${
                    active ? "text-forest" : "text-forest/70 hover:text-forest"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream transition-colors duration-300 hover:bg-moss"
            >
              Start a project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block h-px w-6 bg-forest transition-all duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-forest transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-forest transition-all duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-cream px-5 pt-24 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-forest"
              style={{
                transitionDelay: open ? `${100 + i * 60}ms` : "0ms",
                transform: open ? "none" : "translateY(12px)",
                opacity: open ? 1 : 0,
                transition: "transform .5s var(--ease-out-soft), opacity .5s var(--ease-out-soft)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-forest px-7 py-4 text-base font-medium text-cream"
        >
          Start a project →
        </Link>
      </div>
    </header>
  );
}
