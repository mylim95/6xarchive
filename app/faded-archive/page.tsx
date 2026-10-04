import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { specimens } from "@/data/faded-archive";

export const metadata: Metadata = {
  title: "ARC-001 — Faded Archive | 6XARCHIVE",
  description: "Faded Archive — a collectible card series, catalogued.",
};


export default function FadedArchivePage() {
  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>6XARCHIVE</Link>
        <p>EXHIBITION / ARC-001</p>
        <Link href="/idx-000" className={styles.back}>IDX-000 ↗</Link>
      </header>

      {/* COVER */}
      <section className={styles.cover} aria-labelledby="title">
        <div className={styles.coverNoise} aria-hidden="true" />
        <p className={styles.kicker}>ARC-001 / FIRST EXHIBITION</p>
        <h1 id="title">FADED<br /><em>ARCHIVE</em></h1>
        <p className={styles.coverSub}>A collectible card series, catalogued.</p>
        <p className={styles.coverFoot}>{specimens.length.toString().padStart(2, "0")} SPECIMENS ON RECORD</p>
      </section>

      {/* CURATOR'S NOTE */}
      <section className={styles.intro} aria-labelledby="intro-title">
        <div className={styles.introMeta}>
          <p>SERIES</p><strong>FADED ARCHIVE</strong>
          <p>MEDIUM</p><strong>COLLECTIBLE CARD</strong>
          <p>STATUS</p><strong>ONGOING</strong>
        </div>
        <div className={styles.statement}>
          <p className={styles.label}>CURATOR&apos;S NOTE</p>
          <h2 id="intro-title">Objects worn soft by memory, preserved before they fade further.</h2>
          <p className={styles.lede}>
            Faded Archive is a growing collection of designer cards — each one treated as a
            recovered specimen rather than a finished product. Add your own description here:
            the story behind the series, the materials, the recurring characters or motifs.
          </p>
        </div>
      </section>

      {/* SPECIMEN GRID */}
      <section className={styles.gallery} aria-labelledby="gallery-title">
        <div className={styles.galleryHeading}>
          <p className={styles.label}>THE COLLECTION</p>
          <h2 id="gallery-title">WHAT REMAINS</h2>
        </div>

       <div className={styles.grid}>
          {specimens.map((item) => (
            <article className={styles.card} key={item.id}>
              <div className={styles.cardFrame}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.cardImage}
                  />
                ) : (
                  <div className={styles.cardPlate} aria-hidden="true">
                    <span>IMAGE PENDING</span>
                  </div>
                )}
                <div className={styles.cardSpot} aria-hidden="true" />
              </div>
              <div className={styles.cardLabel}>
                <p className={styles.cardId}>{item.id}</p>
                <h3>{item.title}</h3>
                <dl className={styles.cardMeta}>
                  <div><dt>Series</dt><dd>{item.series}</dd></div>
                  <div><dt>Medium</dt><dd>{item.medium}</dd></div>
                  <div><dt>Year</dt><dd>{item.year}</dd></div>
                  <div><dt>Edition</dt><dd>{item.edition}</dd></div>
                </dl>
                <span className={styles.cardStatus}>{item.status}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>
        <Link href="/idx-000">IDX-000 / THE CURATOR</Link>
        <p>ARC-001 / END OF EXHIBITION</p>
      </footer>
    </main>
  );
}