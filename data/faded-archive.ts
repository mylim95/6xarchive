export type Specimen = {
    id: string;
    title: string;
    series: string;
    medium: string;
    year: string;
    edition: string;
    status: string;
    image?: string;
  };
  
  // ─────────────────────────────────────────────
  // SPECIMEN DATA — FADED ARCHIVE / ARC-001
  // Shared between the homepage preview and the
  // full exhibition page. Edit once, updates both.
  // ─────────────────────────────────────────────
  export const specimens: Specimen[] = [
    {
      id: "FA-001",
      title: "KEDAI RUNCIT",
      series: "Faded Archive Lokal",
      medium: "Collectible Card",
      year: "2026",
      edition: "1/6",
      status: "Preserved",
      image: "/fadedarchive/card01.png",
    },
    {
      id: "FA-002",
      title: "THE KOPITIAM",
      series: "Faded Archive Lokal",
      medium: "Collectible Card",
      year: "2026",
      edition: "1/6",
      status: "Preserved",
      image: "/fadedarchive/card02.png",
    },
    {
      id: "FA-003",
      title: "THE BATIK",
      series: "Faded Archive Lokal",
      medium: "Collectible Card",
      year: "2026",
      edition: "1/6",
      status: "Preserved",
      image: "/fadedarchive/card03.png",
    },
    {
      id: "FA-004",
      title: "THE OLD RECEIPT",
      series: "Faded Archive Lokal",
      medium: "Collectible Card",
      year: "2026",
      edition: "1/6",
      status: "Preserved",
      image: "/fadedarchive/card04.png",
    },
    {
      id: "FA-005",
      title: "THE IKAT TEPI",
      series: "Faded Archive Lokal",
      medium: "Collectible Card",
      year: "2026",
      edition: "1/6",
      status: "Preserved",
      image: "/fadedarchive/card05.png",
    },
    {
      id: "FA-006",
      title: "THE LAST CINEMA",
      series: "Faded Archive Lokal",
      medium: "Collectible Card",
      year: "2026",
      edition: "1/6",
      status: "Preserved",
      image: "/fadedarchive/card06.png",
    },
  ];