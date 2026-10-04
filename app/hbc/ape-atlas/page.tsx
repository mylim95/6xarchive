import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { stamps } from "@/data/ape-atlas";

export const metadata: Metadata = {
  title: "Ape Atlas — HBC | 6XARCHIVE",
  description: "Ape Atlas — Hidup Bola Club's travelling identity. A custom stamp for every city.",
};

export default function ApeAtlasPage() {
  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>6XARCHIVE</Link>
        <p>HBC / APE ATLAS</p>
        <Link href="/hbc" className={styles.back}>HBC ↗</Link>
      </header>

      {/* COVER */}
      <section className={styles.cover} aria-labelledby="title">
        <div className={styles.coverNoise} aria-hidden="true" />
        <h1 id="title" className={styles.srOnly}>Ape Atlas</h1>
        <p className={styles.kicker}>HBC SUB-BRAND / WORLDWIDE</p>
        <img
          src="/hbc/ape-atlas/lockup.png"
          alt="Ape Atlas — gorilla head compass emblem and wordmark"
          width={1254}
          height={1254}
          className={styles.coverLockup}
        />
        <p className={styles.coverSub}>The world, one stamp at a time.</p>
      </section>

      {/* RECORD STRIP */}
      <section className={styles.strip} aria-label="Sub-brand record">
        <div><p>PARENT DIVISION</p><strong>HBC</strong></div>
        <div><p>TYPE</p><strong>Sub-Brand</strong></div>
        <div><p>SCOPE</p><strong>Worldwide</strong></div>
        <div><p>STATUS</p><strong>Active</strong></div>
      </section>

      {/* MANIFESTO */}
      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <div className={styles.manifestoMeta}>
          <p>CONCEPT</p><strong>ONE APE, EVERY CITY</strong>
          <p>OUTPUT</p><strong>CUSTOM EMBLEM PER STAMP</strong>
        </div>
        <div className={styles.statement}>
          <p className={styles.label}>THE CONCEPT</p>
          <h2 id="manifesto-title">Every city leaves its own mark.</h2>
          <p className={styles.lede}>
            Ape Atlas is HBC&apos;s travelling identity — the same ape, dropped into a
            different city every time. Each destination earns its own custom emblem: local
            landmarks, local slang, local culture, redrawn through the HBC lens and stamped
            into the atlas like a passport page.
          </p>
          <p className={styles.lede}>
            No two stamps look alike. Bali gets its own mark. Bangkok gets its own mark.
            Wherever the ape goes next, the city writes the design.
          </p>
        </div>
      </section>

      {/* THE ATLAS */}
      <section className={styles.atlas} aria-labelledby="atlas-title">
        <div className={styles.atlasHeading}>
          <p className={styles.label}>THE ATLAS</p>
          <h2 id="atlas-title">Stamps collected so far.</h2>
        </div>

        <div className={styles.grid}>
          {stamps.map((stamp) => (
            <article className={styles.card} key={stamp.id}>
               <div className={styles.frame}>
                {stamp.image ? (
                  <img
                    src={stamp.image}
                    alt={`${stamp.city} custom stamp`}
                    width={1200}
                    height={1200}
                    className={styles.frameStamp}
                  />
                ) : (
                  <img
                    src="/hbc/ape-atlas/icon.png"
                    alt=""
                    aria-hidden="true"
                    width={1130}
                    height={1098}
                    className={styles.frameIcon}
                  />
                )}
                <span className={styles.frameStatus}>{stamp.status}</span>
              </div>
              <div className={styles.cardLabel}>
                <p className={styles.cardId}>{stamp.id}</p>
                <h3>{stamp.city}</h3>
                <p className={styles.cardCountry}>{stamp.country}</p>
                <p className={styles.cardYear}>{stamp.year}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSER */}
      <section className={styles.closer} aria-label="Ape Atlas motto">
        <img
          src="/hbc/ape-atlas/wordmark.png"
          alt="Ape Atlas wordmark"
          width={1564}
          height={662}
          className={styles.closerWordmark}
        />
        <p className={styles.closerFinal}>Collect the world. One stamp at a time.</p>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>
        <Link href="/hbc">HBC / DIV-02</Link>
        <p>APE ATLAS / END OF RECORD</p>
      </footer>
    </main>
  );
}