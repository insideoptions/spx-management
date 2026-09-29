import { origin, pages } from "@/lib/site";
export default function PageSchema({ path }: { path: keyof typeof pages }) {
  const page = pages[path];
  const schema = {
    "@context": "https://schema.org",
    "@type": path === "/about" ? "AboutPage" : path === "/contact" ? "ContactPage" : path === "/media" ? "CollectionPage" : "WebPage",
    "@id": origin + path + "#webpage", url: origin + path,
    name: page.title, description: page.description, inLanguage: "en-US",
    isPartOf: { "@id": origin + "/#website" },
    about: { "@id": origin + (path === "/about" ? "/#founder" : "/#organization") },
    ...(["/", "/about"].includes(path) ? { video: {
      "@type": "VideoObject",
      name: "Understanding Market Efficiency: A Deep Dive into Quantitative Trading Strategies",
      description: "David Chau discusses quantitative trading, delta-neutral options strategies, and market efficiency with FinTech TV.",
      thumbnailUrl: "https://static.fintech.tv/v3/wp-content/uploads/2025/09/02153515/frame_01.jpg",
      uploadDate: "2025-09-02T15:45:53+00:00", duration: "PT4M30S",
      embedUrl: "https://cms.fintech.tv/understanding-market-efficiency-a-deep-dive-into-quantitative-trading-strategies/?embed=1",
      publisher: { "@type": "Organization", name: "FinTech TV", url: "https://fintech.tv" },
    }} : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
