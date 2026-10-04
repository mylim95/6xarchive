"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function CoverMedia({ src, poster }: { src: string; poster?: string }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reduced) {
    return poster ? (
      <img src={poster} alt="" aria-hidden="true" className={styles.coverVideo} />
    ) : null;
  }

  return (
    <video
      className={styles.coverVideo}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}