import type { MetadataRoute } from "next";
import { buildAbsoluteUrl } from "@/lib/site";

const pageEntries = [
  { path: "/", priority: 1 },
  { path: "/vpn-guide", priority: 0.95 },
  { path: "/best-vpn-for-china", priority: 0.9 },
  { path: "/vpn-free-trial", priority: 0.86 },
  { path: "/no-log-vpn", priority: 0.86 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return pageEntries.map((item) => ({
    url: buildAbsoluteUrl(item.path),
    lastModified: now,
    changeFrequency: "weekly",
    priority: item.priority,
  }));
}
