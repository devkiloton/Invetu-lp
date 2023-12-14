import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://invetu.com",
      lastModified: new Date("2023-12-13"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://invetu.com/support",
      lastModified: new Date("2023-12-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://invetu.com/legal",
      lastModified: new Date("2023-12-13"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://invetu.com/legal/terms-of-use",
      lastModified: new Date("2023-12-13"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://invetu.com/legal/privacy-policy",
      lastModified: new Date("2023-12-13"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
