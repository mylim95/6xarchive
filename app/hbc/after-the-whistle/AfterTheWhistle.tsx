"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function AfterTheWhistle() {
  const sceneRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const updateDepth = (event: PointerEvent) => {
      const bounds = scene.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      scene.style.setProperty("--pointer-x", x.toFixed(3));
      scene.style.setProperty("--pointer-y", y.toFixed(3));
    };
    const resetDepth = () => {
      scene.style.setProperty("--pointer-x", "0");
      scene.style.setProperty("--pointer-y", "0");
    };

    scene.addEventListener("pointermove", updateDepth);
    scene.addEventListener("pointerleave", resetDepth);
    return () => {
      scene.removeEventListener("pointermove", updateDepth);
      scene.removeEventListener("pointerleave", resetDepth);
    };
  }, []);

  return (
    <main className={styles.page}>
      <section className={styles.hero} ref={sceneRef} aria-labelledby="title">
        <div className={styles.stadium} aria-hidden="true">
          <div className={styles.architecture} />
          <div className={styles.seats} />
          <div className={styles.lightSweep} />
          <div className={styles.goal} />
          <div className={styles.pitch}>
            <span className={styles.centerLine} />
            <span className={styles.centerCircle} />
            <span className={styles.touchline} />
          </div>
          <div className={styles.mistBack} />
          <div className={styles.mistMid} />
          <div className={styles.mistFront} />
          <div className={styles.orb}>
            <span className={styles.orbSeams} />
            <span className={styles.orbHighlight} />
          </div>
          <div className={styles.grain} />
        </div>

        <header className={styles.header}>
          <Link className={styles.archive} href="/" aria-label="Back to 6XARCHIVE">
            6XARCHIVE
          </Link>
          <div className={styles.division}>DIV-02 <i /> HBC / AFTER THE WHISTLE</div>
          <nav className={styles.nav} aria-label="Page navigation">
            <a href="#idea">THE IDEA</a>
            <a href="#threshold">ENTER <span aria-hidden="true">↗</span></a>
          </nav>
        </header>

        <div className={styles.brandMark}>
          <span className={styles.badge}>
            <img src="/hbc/HB-badge-trans.png" alt="Hidup Bola Club badge" width={1933} height={1932} />
          </span>
          <span>HIDUP BOLA CLUB</span>
        </div>

        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> THE GAME ENDS. THE STORY DOESN&apos;T.</p>
          <h1 id="title">AFTER THE<br /><em>WHISTLE</em></h1>
          <p className={styles.tagline}>RIVALS ON THE FIELD. HUMAN AFTER.</p>
          <a className={styles.enterButton} href="#threshold">
            <span>APPROACH THE GATE</span><b aria-hidden="true">↗</b>
          </a>
        </div>

        <div className={styles.edgeNote}>NO ENEMY IS FOREVER</div>
        <a className={styles.scrollCue} href="#idea" aria-label="Scroll to the idea">
          <span>SCROLL TO THE OTHER SIDE</span><i aria-hidden="true" />
        </a>
      </section>

      <section className={styles.idea} id="idea" aria-labelledby="idea-title">
        <p className={styles.sectionLabel}>HBC / THE SPACE BETWEEN SIDES</p>
        <h2 id="idea-title">Ninety minutes can divide us.<br /><em>What happens after is ours.</em></h2>
        <a className={styles.thresholdLink} href="#threshold">
          STAY CLOSE TO THE GATE <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className={styles.threshold} id="threshold" aria-label="The world is not open yet">
        <div className={styles.thresholdGlow} aria-hidden="true" />
        <span className={styles.thresholdMark}>
          <img src="/hbc/HB-badge-trans.png" alt="" width={1933} height={1932} />
        </span>
        <p>THE WORLD IS NOT OPEN YET</p>
        <span className={styles.thresholdLine} aria-hidden="true" />
      </section>

      <footer className={styles.footer}>
        <Link href="/">6XARCHIVE</Link>
        <span>DIV-02 / HIDUP BOLA CLUB</span>
        <Link href="/hbc">BACK TO HBC ↗</Link>
      </footer>
    </main>
  );
}
