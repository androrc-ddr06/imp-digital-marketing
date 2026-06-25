import Link from "next/link";
import Container from "./Container";
import Mark from "./Mark";
import { navLinks, services, site } from "@/lib/content";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-forest-deep text-cream">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Mark className="h-8 w-8 text-cream" />
              <span className="font-display text-2xl">
                I<span className="opacity-60">&amp;</span>P
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/65">
              {site.description}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="link-underline inline-block text-cream/85"
              >
                {site.email}
              </a>
              <a
                href={`https://www.instagram.com/${site.instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-block text-cream/85"
              >
                Instagram @{site.instagramHandle}
              </a>
              {site.phone && (
                <span className="flex flex-wrap gap-x-4">
                  <a href={`tel:${site.phone}`} className="link-underline text-cream/85">
                    Call {site.phoneDisplay}
                  </a>
                  <a href={`sms:${site.phone}`} className="link-underline text-cream/85">
                    Text
                  </a>
                </span>
              )}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="eyebrow text-sage">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="eyebrow text-sage">Services</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="link-underline hover:text-cream"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center">
          <p>
            © {year} {site.company}. Led by {site.person}.
          </p>
          <p className="text-cream/40">{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
