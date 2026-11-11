import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.travelwithrahul.in";
  const currentDate = new Date();

  const stateSlugs = [
    "madhya-pradesh",
    "rajasthan",
    "gujarat",
    "maharashtra",
    "uttar-pradesh",
    "uttarakhand",
  ];

  const stateUrls: MetadataRoute.Sitemap = stateSlugs.map((slug) => ({
    url: `${baseUrl}/states/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...stateUrls,
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
