import type { Metadata } from "next";
import "./globals.css";
import { sans, serif } from "./fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

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
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
