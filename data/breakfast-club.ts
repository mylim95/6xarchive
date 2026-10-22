export type ArchiveItem = {
  id: string;
  name: string;
  type: string;
  note: string;
  image: string;
  position?: string; // CSS object-position for the square crop
};

export type Tin = {
  id: string;
  name: string;
  descriptor: string;
  volume: string;
  status: string;
  image: string;
};

// ─────────────────────────────────────────────
// ARCHIVE COLLECTION — coasters, glass cups, tees
// Add a new object here and it appears in the grid.
// ─────────────────────────────────────────────
export const archive: ArchiveItem[] = [
  {
    id: "BFC-A01",
    name: "Authentic Kaki Coaster",
    type: "Coaster",
    note: "Kelab Sarapan Batu Pahat.",
    image: "/breakfast-club/archive/coaster.jpg",
    position: "center",
  },
  {
    id: "BFC-A02",
    name: "Kelab Sarapan Glass",
    type: "Glass Cup",
    note: "Buatan Batu Pahat, 2024 EDT.",
    image: "/breakfast-club/archive/glass.jpg",
    position: "center",
  },
  {
    id: "BFC-A03",
    name: "OG Vault Tee",
    type: "T-Shirt",
    note: "The Breakfast Team graphic.",
    image: "/breakfast-club/archive/tee-og-vault.jpg",
    position: "left center",
  },
  {
    id: "BFC-A04",
    name: "OG V2 Tee",
    type: "T-Shirt",
    note: "Authentic Kaki left-chest badge.",
    image: "/breakfast-club/archive/tee-og-v2.jpg",
    position: "left center",
  },
];

// ─────────────────────────────────────────────
// CONCEPT PRODUCT — the beverage tin range
// ─────────────────────────────────────────────
export const tins: Tin[] = [
  {
    id: "TIN-01",
    name: "Kopi O Kosong",
    descriptor: "Black coffee, zero sugar",
    volume: "250ML",
    status: "Concept",
    image: "/breakfast-club/tins/kopi-o-kosong.jpg",
  },
  {
    id: "TIN-02",
    name: "Milo Kosong",
    descriptor: "Chocolate malt drink, zero sugar",
    volume: "250ML",
    status: "Concept",
    image: "/breakfast-club/tins/milo-kosong.jpg",
  },
  {
    id: "TIN-03",
    name: "Teh C Kosong",
    descriptor: "Tea with evaporated milk, zero sugar",
    volume: "250ML",
    status: "Concept",
    image: "/breakfast-club/tins/teh-c-kosong.jpg",
  },
];