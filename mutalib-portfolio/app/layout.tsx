import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Nav from "@/components/nav";
import { Footer } from "@/components/sections";
import { site } from "@/lib/data";

const url = process.env.NEXT_PUBLIC_SITE_URL;
const title = "Mutalib Abubakar | Designer, STEM Educator & Digital Creative";
const description = "Explore the work of Mutalib Abubakar, a multidisciplinary creative working across graphic design, UI/UX, digital marketing, STEM education, and digital innovation.";
export const metadata: Metadata = {
  metadataBase: url ? new URL(url) : undefined,
  title, description,
  alternates: url ? { canonical: "/" } : undefined,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "Person", name: site.name, sameAs: [site.linkedin] };
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@300..700&display=swap" />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:p-3 focus:text-cream">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </body>
    </html>
  );
}
