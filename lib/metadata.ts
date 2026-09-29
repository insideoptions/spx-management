import type { Metadata } from "next";
import { pages, origin } from "./site";
export function pageMetadata(path: keyof typeof pages): Metadata {
  const { title, description } = pages[path];
  return {
    title,
    description,
    alternates: { canonical: origin + path },
    openGraph: {
      title,
      description,
      url: origin + path,
      type: "website",
      siteName: "SPX MGMT",
      locale: "en_US",
      images: [
        {
          url: origin + "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "SPX MGMT — Quantitative Investment Management",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [origin + "/opengraph-image"],
    },
  };
}
