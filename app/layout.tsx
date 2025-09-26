import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GridBackground from "@/components/ui/grid-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPX MGMT | David Chau",
  description: "SPX MGMT, founded by David Chau, is a private quant fund focused on systematic, risk-defined SPX options strategies for accredited investors.",
  keywords: "SPXMGMT, David Chau, Captain Condor, quantitative trading, hedge fund, SPX MGMT LLC, quant strategy, algorithmic trading, investment management, financial technology",
  authors: [{ name: "David Chau", url: "https://main.d370sik724g4hm.amplifyapp.com" }],
  creator: "David Chau",
  publisher: "SPX MGMT LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://main.d370sik724g4hm.amplifyapp.com',
    siteName: 'SPXMGMT',
    title: 'SPX MGMT | David Chau',
    description: 'SPX MGMT, founded by David Chau, is a private quant fund focused on systematic, risk-defined SPX options strategies for accredited investors.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SPXMGMT - David Chau Quantitative Trading Fund',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@spxmgmt',
    creator: '@davidchau',
    title: 'SPX MGMT | David Chau',
    description: 'SPX MGMT, founded by David Chau, is a private quant fund focused on systematic, risk-defined SPX options strategies for accredited investors.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://main.d370sik724g4hm.amplifyapp.com',
  },
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://main.d370sik724g4hm.amplifyapp.com/#organization",
        "name": "SPX MGMT LLC",
        "alternateName": "SPXMGMT",
        "url": "https://main.d370sik724g4hm.amplifyapp.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://main.d370sik724g4hm.amplifyapp.com/blacklog.png"
        },
        "description": "Private quant fund focused on systematic, risk-defined SPX options strategies for accredited investors.",
        "founder": {
          "@type": "Person",
          "@id": "https://main.d370sik724g4hm.amplifyapp.com/#person"
        },
        "sameAs": [
          "https://twitter.com/spxmgmt",
          "https://linkedin.com/company/spxmgmt"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://main.d370sik724g4hm.amplifyapp.com/#person",
        "name": "David Chau",
        "alternateName": "Captain Condor",
        "jobTitle": "Founder & Portfolio Manager",
        "worksFor": {
          "@id": "https://main.d370sik724g4hm.amplifyapp.com/#organization"
        },
        "description": "Quantitative trading expert specializing in live trading strategies and real-world market adaptation.",
        "url": "https://main.d370sik724g4hm.amplifyapp.com",
        "sameAs": [
          "https://twitter.com/davidchau",
          "https://linkedin.com/in/davidchau"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://main.d370sik724g4hm.amplifyapp.com/#website",
        "url": "https://main.d370sik724g4hm.amplifyapp.com",
        "name": "SPXMGMT",
        "description": "SPX MGMT, founded by David Chau, is a private quant fund focused on systematic, risk-defined SPX options strategies for accredited investors.",
        "publisher": {
          "@id": "https://main.d370sik724g4hm.amplifyapp.com/#organization"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <GridBackground 
              gridSize={40}
              dotSize={2}
              dotColor="rgba(255, 255, 255, 0.3)"
              backgroundColor="transparent"
              animated={true}
            />
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
