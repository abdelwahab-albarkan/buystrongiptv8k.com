import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.canonicalUrl;

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/plans", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/offer", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/setup/firestick", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/setup/tivimate", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/setup/smart-tv", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/privacy-policy", priority: 0.4, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.4, changeFrequency: "monthly" as const },
    { path: "/refund-policy", priority: 0.4, changeFrequency: "monthly" as const },
  ];

  return routes.map((item) => ({
    url: `${baseUrl}${item.path}`,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
