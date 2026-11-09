"use client";

import styles from "./page.module.css";

export default function GuardiansOfAsiaPage() {
  return (
    <main className={styles.world}>
      <video
        className={styles.videoBackground}
        src="/hbc/guardians-of-asia/landing-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true" />

      <header className={styles.top}>
        <span>HBC / 6X ARCHIVE</span>
        <span>WORLD 001</span>
      </header>

      <section className={styles.intro}>
        <p className={styles.eyebrow}>
          AN HBC ORIGINAL EXHIBITION
        </p>

        <h1>GUARDIANS<br />OF ASIA</h1>

        <p className={styles.description}>
          The forgotten guardians are waiting.
        </p>

        <button className={styles.enter}>
          ENTER THE WORLD <span>↗</span>
        </button>
      </section>

      <footer className={styles.bottom}>
        <span>THE FORGOTTEN IMPERIAL GROUNDS</span>
        <span>SCROLL TO EXPLORE</span>
      </footer>
    </main>
  );
}
