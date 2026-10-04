import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import CoverMedia from "./CoverMedia";

export const metadata: Metadata = {
  title: "HBC — Hidup Bola Club | 6XARCHIVE",
  description: "Hidup Bola Club — friendship, loyalty and mantap, born in Batu Pahat, Johor.",
};

export default function HbcPage() {
  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>6XARCHIVE</Link>
        <p>DIV-02 / HIDUP BOLA CLUB</p>
        <Link href="/about" className={styles.back}>THE HOUSE ↗</Link>
      </header>

     {/* COVER */}
      <section className={styles.cover} aria-labelledby="title">
        <CoverMedia src="/hbc/cover-loop.mp4" poster="/hbc/cover-poster.jpg" />
        <div className={styles.coverOverlay} aria-hidden="true" />
        <div className={styles.coverContent}>
          <div className={styles.coverNoise} aria-hidden="true" />
          <img
            src="/hbc/HB-mascot-white.png"
            alt="HBC mascot mark"
            width={2117}
            height={2118}
            className={styles.coverMascot}
          />
          <p className={styles.kicker}>DIVISION 02 / EST. 2014</p>
          <h1 id="title">HIDUP BOLA<br /><em>CLUB</em></h1>
          <p className={styles.coverSub}>Football is more than a game. It&apos;s a culture.</p>
        </div>
      </section>

      {/* RECORD STRIP */}
      <section className={styles.strip} aria-label="Club record">
        <div><p>FOUNDED</p><strong>2014</strong></div>
        <div><p>ORIGIN</p><strong>Batu Pahat, Johor</strong></div>
        <div><p>STATUS</p><strong>Active</strong></div>
        <div><p>MOTTO</p><strong>Mantap</strong></div>
      </section>

      {/* MANIFESTO */}
      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <div className={styles.manifestoMeta}>
          <p>ORIGIN</p><strong>FRIENDSHIP FIRST</strong>
          <p>PHILOSOPHY</p><strong>LOYALTY &amp; UNITY</strong>
          <p>MASCOT</p><strong>THE APE</strong>
        </div>
        <div className={styles.statement}>
          <p className={styles.label}>THE ORIGIN STORY</p>
          <h2 id="manifesto-title">Not everyone plays. Everyone belongs.</h2>
          <p className={styles.lede}>
            HBC began as a circle of friends in Batu Pahat, Johor — friendship first, football
            second. Some of us play. Some of us never touch a ball. What holds the club
            together was never really the game; it&apos;s loyalty, brotherhood, and the habit of
            showing up for each other. Football just gave it a name.
          </p>
          <p className={styles.lede}>
            Led by its Ape mascot, Hidup Bola Club turns that friendship into characters,
            collectibles, apparel, objects and different worlds — from football and travel to
            coffee, adventure, gaming and beyond. HBC is not just about playing bola.
            It&apos;s about living it.
          </p>
        </div>
      </section>

      {/* THE CREST */}
      <section className={styles.crest} aria-labelledby="crest-title">
        <div className={styles.crestHeading}>
          <p className={styles.label}>THE CREST</p>
          <h2 id="crest-title">One badge, worn differently.</h2>
        </div>

        <div className={styles.crestGrid}>
          <figure className={styles.crestPiece}>
            <div className={styles.crestFrame}>
              <img src="/hbc/HB-badge-trans.png" alt="HBC club badge" width={1933} height={1932} />
            </div>
            <figcaption>
              <p className={styles.plateId}>CREST-01</p>
              <p>Club Badge</p>
            </figcaption>
          </figure>

          <figure className={styles.crestPiece}>
            <div className={styles.crestFrame}>
              <img src="/hbc/FABRIC_MOCKUP.png" alt="HBC embroidered on black mesh jersey fabric" width={1920} height={1080} />
            </div>
            <figcaption>
              <p className={styles.plateId}>CREST-02</p>
              <p>Mesh Application</p>
            </figcaption>
          </figure>

          <figure className={styles.crestPiece}>
            <div className={styles.crestFrame}>
              <img src="/hbc/FABRIC_MOCKUP_SEWING.png" alt="HBC embroidered patch on woven fabric" width={3646} height={2404} />
            </div>
            <figcaption>
              <p className={styles.plateId}>CREST-03</p>
              <p>Woven Patch</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* THE SQUAD */}
      <section className={styles.squad} aria-labelledby="squad-title">
        <div className={styles.squadNoise} aria-hidden="true" />
        <p className={styles.label} style={{ color: "var(--h-brass)" }}>THE SQUAD</p>
        <h2 id="squad-title">Every member, their own character.</h2>
        <p className={styles.squadCopy}>
          Soldier, samurai, ninja, joker, chicken, warlord — HBC was never one face. The squad
          is a roster of personas, each one carrying the same badge, the same loyalty, into a
          different kind of fight.
        </p>
        <img
          src="/hbc/HIDUP_BOLA__SQUAD.png"
          alt="HBC squad — illustrated roster of club characters"
          width={1080}
          height={1080}
          className={styles.squadArt}
        />
      </section>

      {/* MOTTO CLOSER */}
      <section className={styles.closer} aria-label="Club motto">
        <img
          src="/hbc/hb-img-5.png"
          alt="MANTAP — 2014, Batu Pahat"
          width={1501}
          height={338}
          className={styles.closerWordmark}
        />
        <p className={styles.closerFinal}>
          HBC is not just about playing bola. It&apos;s about living it.
        </p>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>
        <Link href="/about">THE HOUSE / ALL DIVISIONS</Link>
        <p>DIV-02 / END OF RECORD</p>
      </footer>
    </main>
  );
}