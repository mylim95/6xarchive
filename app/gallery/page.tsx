import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import GalleryGrid from "./GalleryGrid";
import { artworks } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery | 6XARCHIVE",
  description: "A collection of illustration, figures, and collectible works.",
};

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>6XARCHIVE</Link>
        <p>GALLERY / SELECTED WORKS</p>
        <Link href="/idx-000" className={styles.back}>IDX-000 ↗</Link>
      </header>

      {/* COVER */}
      <section className={styles.cover} aria-labelledby="title">
        <p className={styles.kicker}>ARTWORK COLLECTION</p>
        <h1 id="title">GALLERY</h1>
        <p className={styles.coverSub}>
          Illustration, figures, and collectible works, gathered under one roof.
        </p>
        <p className={styles.coverFoot}>{artworks.length.toString().padStart(2, "0")} WORKS ON DISPLAY</p>
      </section>

      {/* GRID */}
      <section className={styles.body} aria-labelledby="collection-title">
        <div className={styles.bodyHeading}>
          <p className={styles.label}>THE COLLECTION</p>
          <h2 id="collection-title">Browse by category.</h2>
        </div>
        <GalleryGrid artworks={artworks} />
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>
        <Link href="/faded-archive">ARC-001 / FADED ARCHIVE</Link>
        <p>GALLERY / END OF COLLECTION</p>
      </footer>
    </main>
  );
}