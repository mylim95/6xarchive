"use client";

import { useEffect } from "react";
import styles from "./Spotlight.module.css";

export default function Spotlight() {
  useEffect(() => {
    const updateLight = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--light-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--light-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", updateLight, { passive: true });
    return () => window.removeEventListener("pointermove", updateLight);
  }, []);

  return <div className={styles.spotlight} aria-hidden="true" />;
}
