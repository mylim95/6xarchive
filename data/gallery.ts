export type Artwork = {
    id: string;
    title: string;
    category: string;
    medium: string;
    year: string;
    edition: string;
    status: string;
  };
  
  // ─────────────────────────────────────────────
  // ARTWORK DATA — GALLERY
  // Add real pieces here. `category` drives the
  // filter tabs automatically — introduce a new
  // category name and a new tab appears.
  // ─────────────────────────────────────────────
  export const artworks: Artwork[] = [
    {
      id: "GLR-001",
      title: "Untitled Work",
      category: "Illustration",
      medium: "Digital Illustration",
      year: "2026",
      edition: "1/1",
      status: "On Display",
    },
    {
      id: "GLR-002",
      title: "Untitled Work",
      category: "Illustration",
      medium: "Digital Illustration",
      year: "2026",
      edition: "1/1",
      status: "On Display",
    },
    {
      id: "GLR-003",
      title: "Untitled Work",
      category: "Figure",
      medium: "Designer Figure",
      year: "2026",
      edition: "1/1",
      status: "On Display",
    },
    {
      id: "GLR-004",
      title: "Untitled Work",
      category: "Collectibles",
      medium: "Collectible Card",
      year: "2026",
      edition: "1/1",
      status: "On Display",
    },
    {
      id: "GLR-005",
      title: "Untitled Work",
      category: "Figure",
      medium: "Designer Figure",
      year: "2026",
      edition: "1/1",
      status: "On Display",
    },
    {
      id: "GLR-006",
      title: "Untitled Work",
      category: "Illustration",
      medium: "Digital Illustration",
      year: "2026",
      edition: "1/1",
      status: "On Display",
    },
  ];