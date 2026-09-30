import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./premium.css";
import PremiumBackground from "@/components/effects/PremiumBackground";
import ScrollAnimations from "@/components/redesign/scroll-animations";
import Header from "@/components/redesign/header";
import { Footer } from "@/components/redesign/pages";
import { origin } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  applicationName: "SPX MGMT",
  authors: [{ name: "David Chau", url: origin + "/about" }],
  creator: "SPX MGMT LLC",
  publisher: "SPX MGMT LLC",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  manifest: "/site.webmanifest",
};
export const viewport: Viewport = {
  themeColor: "#0b1111",
  colorScheme: "dark",
};
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": origin + "/#organization",
      name: "SPX MGMT LLC",
      url: origin,
      logo: origin + "/favicon.svg",
      description:
        "A boutique alternative investment firm founded in 2023, focused on systematic, non-directional index options strategies.",
      founder: { "@id": origin + "/#founder" },
      foundingDate: "2023",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3827 S Carson St #3169",
        addressLocality: "Carson City",
        addressRegion: "NV",
        postalCode: "89701",
        addressCountry: "US",
      },
    },
    {
      "@type": "Person",
      "@id": origin + "/#founder",
      name: "David Chau",
      alternateName: "Captain Condor",
      jobTitle: "Founder & Chief Investment Officer",
      url: origin + "/about",
      image: origin + "/wsj3.png",
      worksFor: { "@id": origin + "/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": origin + "/#website",
      name: "SPX MGMT",
      url: origin,
      publisher: { "@id": origin + "/#organization" },
      inLanguage: "en-US",
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\u003c"),
          }}
        />
      </head>
      <body>
        <PremiumBackground position="global" intensity="subtle" />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <ScrollAnimations />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
