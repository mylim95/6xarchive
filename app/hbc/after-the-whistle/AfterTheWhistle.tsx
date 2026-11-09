"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function AfterTheWhistle() {
  const sceneRef = useRef<HTMLElement | null>(null);
  const [gateActive, setGateActive] = useState(false);

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

  const approachGate = () => {
    setGateActive(true);
    window.setTimeout(() => setGateActive(false), 1200);
  };

  return (
    <main className={styles.page}>
      <section
        className={[styles.hero, gateActive && styles.gateActive].filter(Boolean).join(" ")}
        ref={sceneRef}
        aria-labelledby="title"
      >
        <div className={styles.scene} aria-hidden="true">
          <video className={styles.stadium} src="/hbc/after-the-whistle/landing-video.mp4" autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
          <img className={styles.smoke} src="/hbc/after-the-whistle/mist.png" alt="" />
          <div className={styles.rain} />
          <div className={styles.lightSweep} />
          <div className={styles.ballRig}>
            <img className={styles.football} src="/hbc/after-the-whistle/football-crest.png" alt="" />
          </div>
          <div className={styles.vignette} />
        </div>

        <header className={styles.header}>
          <Link className={styles.brand} href="/hbc" aria-label="HBC — Hidup Bola Club">

              <img src="/hbc/HB-mascot-white.png" alt="" width={60} height={60} />


          </Link>

        </header>

        <div className={styles.heroCopy}>
          <h1 id="title"><span>AFTER</span><span className={styles.titleSmall}>THE</span><span>WHISTLE</span></h1>
          <p className={styles.tagline}>RIVALS ON THE FIELD. HUMAN AFTER.</p>
          <button className={styles.enterButton} type="button" onClick={approachGate}>
            <span>WAIT AT THE GATE</span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </button>
        </div>

        <p className={styles.worldStatus2} id="gate" aria-live="polite">THE WORLD IS NOT OPEN YET</p>
        <p className={styles.worldStatus} id="gate" aria-live="polite">Represented by Hidup Bola Club</p>
        <a className={styles.scrollCue} href="#gate" aria-label="Scroll to the gate">
          <span aria-hidden="true">↓</span>
        </a>
      </section>
    </main>
  );
}
