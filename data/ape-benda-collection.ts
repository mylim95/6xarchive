export type Product = {
  id: string;
  name: string;
  merchId: string;
  tagline: string;
  material: string;
  status: string;
  image?: string;
};

// ─────────────────────────────────────────────
// PRODUCT DATA — APE BENDA COLLECTION
// One entry per merch item. Add an `image` once
// product art is ready — the card swaps from the
// placeholder to that artwork automatically.
// ─────────────────────────────────────────────
export const products: Product[] = [
  {
    id: "ABC-001",
    name: "Ape Coaster",
    merchId: "HBC666",
    tagline: "Nothing stops apes drinking.",
    material: "Cork",
    status: "Archive",
    image: "/hbc/ape-benda-collection/coaster-mockup.jpg",
  },
  {
    id: "ABC-002",
    name: "Ape Dice",
    merchId: "HBC666",
    tagline: "Nothing stops apes dice 666",
    material: "Plastic",
    status: "Archive",
    image: "/hbc/ape-benda-collection/dice-mockup.jpg",
  },
  {
    id: "ABC-003",
    name: "HBC Angpao Packet Collection  - Snake Year CNY 24",
    merchId: "HBC666",
    tagline: "Nothing Stops Apes Heng Ong Huat",
    material: "Card Board",
    status: "Archive",
    image: "/hbc/ape-benda-collection/24-angpao-mockup.jpg",
  },
  {
    id: "",
    name: "Coming Soon",
    merchId: "—",
    tagline: "—",
    material: "—",
    status: "Coming Soon",
  },
  {
    id: "",
    name: "Coming Soon",
    merchId: "—",
    tagline: "—",
    material: "—",
    status: "Coming Soon",
  },
  {
    id: "",
    name: "Coming Soon",
    merchId: "—",
    tagline: "—",
    material: "—",
    status: "Coming Soon",
  },
];