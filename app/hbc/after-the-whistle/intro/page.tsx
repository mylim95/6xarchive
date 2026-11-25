import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Enter the Underground — After the Whistle | 6XARCHIVE",
  description: "Step into the world beneath the game. An HBC story about rivals, loyalty and what happens after the whistle.",
};

export default function AfterTheWhistleIntroPage() {
  return (
    <main className={styles.page}>
      <div className={styles.backdrop} aria-hidden="true" />
      <header className={styles.header}>
        <Link className={styles.brand} href="/hbc" aria-label="HBC — Hidup Bola Club">
          <img className={styles.brandMark} src="/hbc/HB-mascot-white.png" alt="" width={60} height={60} />
          <span className={styles.brandName}>HIDUP BOLA CLUB</span>
        </Link>
        <span className={styles.issue}>DIVISION 02 / AFTER THE WHISTLE</span>
      </header>
      <section className={styles.content} aria-labelledby="intro-title">
        <p className={styles.kicker}><span /> A WORLD BELOW THE GAME</p>
        <h1 id="intro-title">When the whistle fades,<br /><em>the real story begins.</em></h1>
        <p className={styles.copy}>
          Beneath the noise of match day, another world waits in the dark. Old rivals
          cross paths, loyalties are tested, and every choice leaves a mark. This is
          After the Whistle — where the game ends and the story opens.
        </p>
        <p className={styles.note}>THE TUNNEL IS OPEN. THE WORLD IS YOURS TO ENTER.</p>
      </section>
      <Link className={styles.tunnelLink} href="/hbc/after-the-whistle/underground" aria-label="Enter the tunnel and meet the After the Whistle crew">
        <span className={styles.tunnelLabel}>ENTER THE TUNNEL <span aria-hidden="true">↗</span></span>
      </Link>
      <footer className={styles.footer}>
        <Link href="/hbc">← BACK TO HBC</Link><span>HBC / EST. 2014</span>
      </footer>
    </main>
  );
}
