import type { MetadataRoute } from "next";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

const siteUrl = configuredSiteUrl.startsWith("http")
  ? configuredSiteUrl
  : `https://${configuredSiteUrl}`;

const routes = [
  "/",
  "/about",
  "/blesport",
  "/breakfast-club",
  "/faded-archive",
  "/funhey-lucks",
  "/gallery",
  "/hbc",
  "/hbc/after-the-whistle",
  "/hbc/after-the-whistle/intro",
  "/hbc/after-the-whistle/underground",
  "/hbc/ape-atlas",
  "/hbc/ape-benda-collection",
  "/hbc/caffeine-dose",
  "/hbc/cny",
  "/hbc/cny/24dragon",
  "/hbc/cny/25snake",
  "/hbc/cny/26horse",
  "/hbc/guardians-of-asia",
  "/hbc/guardians-of-asia/exhibition",
  "/hbc/pixel-apes",
  "/hbc/pixel-apes/cutly",
  "/hbc/wanderland",
  "/idx-000",
  "/mac",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
