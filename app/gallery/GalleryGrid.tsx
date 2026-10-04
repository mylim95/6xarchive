"use client";

import { useMemo, useState } from "react";
import styles from "./GalleryGrid.module.css";
import type { Artwork } from "@/data/gallery";

export default function GalleryGrid({ artworks }: { artworks: Artwork[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(artworks.map((a) => a.category)))],
    [artworks]
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? artworks : artworks.filter((a) => a.category === active);

  return (
    <div>
      <div className={styles.tabs} role="tablist" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={`${styles.tab} ${active === cat ? styles.tabActive : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((item) => (
          <article className={styles.piece} key={item.id}>
            <div className={styles.frame}>
              <div className={styles.mat}>
                <div className={styles.canvas} aria-hidden="true">
                  <span>IMAGE PENDING</span>
                </div>
              </div>
            </div>
            <div className={styles.plate}>
              <p className={styles.plateId}>{item.id}</p>
              <h3>{item.title}</h3>
              <p className={styles.plateCategory}>{item.category}</p>
              <dl className={styles.plateMeta}>
                <div><dt>Medium</dt><dd>{item.medium}</dd></div>
                <div><dt>Year</dt><dd>{item.year}</dd></div>
                <div><dt>Edition</dt><dd>{item.edition}</dd></div>
                <div><dt>Status</dt><dd>{item.status}</dd></div>
              </dl>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={styles.empty}>No works catalogued in this category yet.</p>
      )}
    </div>
  );
}