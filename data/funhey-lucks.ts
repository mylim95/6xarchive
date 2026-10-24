export type Dragon = {
  id: string;
  glyph: string;
  romanised: string;
  name: string;
  note: string;
  accent: string;
  image: string;
  alt: string;
};

// ─────────────────────────────────────────────
// THE THREE DRAGONS — 中 發 白 = 大三元
// Lucky Mahjong Club illustrations, one colourway each.
// ─────────────────────────────────────────────
export const dragons: Dragon[] = [
  {
    id: "LMC-01",
    glyph: "中",
    romanised: "Zhōng",
    name: "Red Dragon",
    note: "紅中 — the red centre.",
    accent: "#e5202a",
    image: "/funhey-lucks/dragon-zhong.png",
    alt: "Lucky Mahjong Club 666 — Red Dragon (中) illustration",
  },
  {
    id: "LMC-02",
    glyph: "發",
    romanised: "Fā",
    name: "Green Dragon",
    note: "發財 — to prosper.",
    accent: "#3fa84c",
    image: "/funhey-lucks/dragon-fa.png",
    alt: "Lucky Mahjong Club 666 — Green Dragon (發) illustration",
  },
  {
    id: "LMC-03",
    glyph: "白",
    romanised: "Bái",
    name: "White Dragon",
    note: "白板 — the blank tile.",
    accent: "#0087c9",
    image: "/funhey-lucks/dragon-bai.png",
    alt: "Lucky Mahjong Club 666 — White Dragon (白) illustration",
  },
];