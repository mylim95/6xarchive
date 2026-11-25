"use client";

import { useState } from "react";
import CardSwap from "./CardSwap";
import styles from "./page.module.css";

const artworks = [
  {
    title: "Armoured Ape Beneath the Red Sun",
    image: "/hbc/guardians-of-asia/Armoured-Ape-Beneath-the-Red-Sun.jpg",
    alt: "Armoured ape guardian beneath a red sun",
    description: "An armoured ape guardian stands beneath a blazing red sun, like a relic from a forgotten imperial world.",
  },
  {
    title: "Borneo Guardian",
    image: "/hbc/guardians-of-asia/Borneo-Guardian_ Fierce-Ape-Warrior.jpg",
    alt: "Borneo guardian ape warrior",
    description: "A fierce ape warrior embodies the strength and watchful spirit of Borneo forest guardians.",
  },
  {
    title: "Chinese Monkey Door Guardians",
    image: "/hbc/guardians-of-asia/Gritty-Chinese-Monkey-Door-Guardians.png",
    alt: "Gritty Chinese monkey door guardians",
    description: "Gritty monkey sentinels stand watch at an imagined ancient Chinese threshold.",
  },
  {
    title: "Thai Guardian",
    image: "/hbc/guardians-of-asia/half-ape-half-thai-guradian.jpg",
    alt: "Half ape, half Thai guardian",
    description: "An imagined Thai guardian fuses ape-like strength with the ceremonial presence of a temple protector.",
  },
  {
    title: "Malaysia Guardian Ape Warrior",
    image: "/hbc/guardians-of-asia/Malaysia-Guardian-Ape-Warrior.jpg",
    alt: "Malaysia guardian ape warrior",
    description: "A Malaysian ape warrior stands as a powerful, watchful guardian of the archipelago.",
  },
  {
    title: "Mossy Ape-Lion Temple Guardians",
    image: "/hbc/guardians-of-asia/Mossy-Ape-Lion-Temple-Guardians.jpg",
    alt: "Mossy ape-lion temple guardians",
    description: "Moss-covered ape-lion guardians emerge from the stonework of an overgrown temple.",
  },
];

export default function ExhibitionPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArtwork = artworks[activeIndex] ?? artworks[0];

  return (
    <main className={styles.exhibition}>
      <header className={styles.header}>
        <a className={styles.wordmark} href="/hbc/guardians-of-asia">HBC <span>/</span> 6X ARCHIVE</a>
        <span className={styles.headerNote}>AN HBC ORIGINAL EXHIBITION</span>
      </header>

      <section className={styles.gallery} aria-labelledby="exhibition-title">
        <div className={styles.copy}>
          <p className={styles.eyebrow}>THE GUARDIAN ARCHIVE <span>·</span> 001—006</p>
          <h1 id="exhibition-title">Guardians<br /><em>of Asia</em></h1>
          <p className={styles.description}>Forgotten forms. Enduring guardians.</p>
          <p className={styles.instruction}>Drag a card to turn the archive · Use arrow keys to browse</p>
        </div>

        <div className={styles.deck}>
          <div className={styles.swapStage}>
            <CardSwap
              items={artworks}
              width={520}
              height={640}
              cardDistance={44}
              verticalDistance={36}
              depth={80}
              skewAmount={2}
              visibleCards={4}
              delay={5200}
              autoplay
              pauseOnHover
              draggable
              theme="dark"
              cardRadius={4}
              intro
              onChange={setActiveIndex}
              ariaLabel="Guardians of Asia artwork cards"
            />
          </div>
          <div className={styles.artworkCaption} aria-live="polite" aria-atomic="true">
            <div className={styles.captionHeading}>
              <span className={styles.captionIndex}>{String(activeIndex + 1).padStart(2, "0")} / {String(artworks.length).padStart(2, "0")}</span>
              <h2 key={activeIndex}>{activeArtwork.title}</h2>
            </div>
            <p key={`description-${activeIndex}`}>{activeArtwork.description}</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>HBC / GUARDIANS OF ASIA</span>
        <span className={styles.current}>{String(activeIndex + 1).padStart(2, "0")} <i /> {String(artworks.length).padStart(2, "0")} <b>{activeArtwork.title}</b></span>
        <a href="/hbc/guardians-of-asia">RETURN TO THE GATE <span>↗</span></a>
      </footer>
    </main>
  );
}
