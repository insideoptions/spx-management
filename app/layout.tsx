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
  title: "SPX MGMT LLC – Quantitative Fund | Managed by David Chau \"Captain Condor\"",
  description: "Unlike most quant strategies optimized only in backtests, ours was forged and fine-tuned in live markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <GridBackground 
              gridSize={40}
              dotSize={2}
              dotColor="rgba(255, 255, 255, 0.1)"
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
