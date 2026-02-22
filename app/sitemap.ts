import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourwebsite.com";

  const newsArticles = [
    "cong-nghe-ai-thay-doi-the-gioi",
    "du-lich-viet-nam-2026",
    "the-thao-viet-nam-sea-games",
    "kinh-te-viet-nam-tang-truong",
    "giao-duc-chuyen-doi-so",
    "van-hoa-am-thuc-viet",
  ];

  const movies = [
    "dune-part-two",
    "oppenheimer",
    "barbie",
    "the-batman",
    "spider-man-across-the-spider-verse",
    "the-zone-of-interest",
    "poor-things",
    "killers-of-the-flower-moon",
  ];

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/movies`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  const newsRoutes = newsArticles.map((slug) => ({
    url: `${baseUrl}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const movieRoutes = movies.map((slug) => ({
    url: `${baseUrl}/movies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...newsRoutes, ...movieRoutes];
}
