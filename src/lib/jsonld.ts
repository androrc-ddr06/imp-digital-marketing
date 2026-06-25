// ---------------------------------------------------------------------------
//  schema.org / JSON-LD builders. These return plain objects that <JsonLd>
//  serializes into a <script type="application/ld+json"> tag for rich results.
// ---------------------------------------------------------------------------
import { site, type Service, type FAQ } from "@/lib/content";

const base = site.url.replace(/\/$/, "");

/** Organization / professional-service schema for the whole site. */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${base}/#organization`,
    name: site.company,
    url: base,
    email: site.email,
    description: site.description,
    image: `${base}/opengraph-image`,
    areaServed: site.location,
    founder: { "@type": "Person", name: site.person },
    sameAs: [`https://www.instagram.com/${site.instagramHandle}`],
    // Only include the phone once a real number is set.
    ...(site.phone ? { telephone: site.phone } : {}),
  };
}

/** Per-service schema for a service detail page. */
export function serviceLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.short,
    serviceType: service.name,
    areaServed: site.location,
    url: `${base}/services/${service.slug}`,
    provider: {
      "@type": "ProfessionalService",
      name: site.company,
      url: base,
    },
  };
}

/** FAQ page schema built from the shared faqs list. */
export function faqLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
