import type { MetadataRoute } from "next";

const SITE_URL = "https://6xarchive.mylim95.workers.dev";

const publicRoutes = [
  "/",
  "/about",
  "/blesport",
  "/breakfast-club",
  "/faded-archive",
  "/funhey-lucks",
  "/gallery",
  "/hbc",
  "/hbc/after-the-whistle",
  "/hbc/ape-atlas",
  "/hbc/ape-benda-collection",
  "/hbc/caffeine-dose",
  "/hbc/guardians-of-asia",
  "/hbc/pixel-apes",
  "/hbc/pixel-apes/cutly",
  "/hbc/wanderland",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
