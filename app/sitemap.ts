import type { MetadataRoute } from "next";
import { origin, pages } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(pages).map((path) => ({ url: origin + path }));
}
