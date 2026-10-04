export type Stamp = {
  id: string;
  city: string;
  country: string;
  year: string;
  status: string;
  image?: string;
};

// ─────────────────────────────────────────────
// STAMP DATA — APE ATLAS
// One entry per city. Add an `image` path once a
// custom stamp is ready — the card swaps from the
// placeholder icon to that artwork automatically.
// ─────────────────────────────────────────────
export const stamps: Stamp[] = [
  {
    id: "AA-001",
    city: "Bali",
    country: "Indonesia",
    year: "2026",
    status: "Collected",
    image: "/hbc/ape-atlas/stamps/bali.png",
  },
  { id: "AA-002", city: "Bangkok", country: "Thailand", year: "2026", status: "Collected" },
  { id: "AA-003", city: "Uncharted", country: "—", year: "—", status: "Coming Soon" },
  { id: "AA-004", city: "Uncharted", country: "—", year: "—", status: "Coming Soon" },
];