import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { sans, serif } from "./fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/content";
import { organizationLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.person} — ${site.company}`,
    template: `%s — ${site.company}`,
  },
  description: site.description,
  keywords: [
    "digital marketing",
    "social media management",
    "rebranding",
    "website design",
    "funnel creation",
    "AI implementation",
    "paid advertising",
    "Alejandro Rodriguez",
    "I&P Digital Marketing",
  ],
  authors: [{ name: site.person }],
  openGraph: {
    title: `${site.person} — ${site.company}`,
    description: site.description,
    url: site.url,
    siteName: site.company,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.person} — ${site.company}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationLd()} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
