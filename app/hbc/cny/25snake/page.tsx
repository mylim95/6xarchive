"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

const products = [
  {
    title: "The complete set",
    subtitle: "HBC CNY PACKET SERIES · 2025",
    description: "Three distinct colourways come together in the 2025 collection: midnight blue, auspicious red, and warm gold. A complete set made for sharing good fortune.",
    image: "/hbc/cny/25snake/ANGPAO%20MOCKUP.jpg",
    alt: "HBC 2025 Year of the Snake ang pao set mockup with blue, red, and gold packets",
    color: "all",
  },
  {
    title: "Blue · 靛",
    subtitle: "A COOLER KIND OF FORTUNE",
    description: "Deep blue and pale porcelain tones frame the winding snake motif in a crisp, graphic pattern.",
    image: "/hbc/cny/25snake/year%20of%20snake%20pattern%20-%20blue.png",
    alt: "Blue and pale blue Year of the Snake ang pao pattern",
    color: "blue",
  },
  {
    title: "Red · 紅",
    subtitle: "THE CLASSIC CNY RED",
    description: "A vivid red ground, golden details, and the 2025 snake mark bring the season’s most familiar colour into the collection.",
    image: "/hbc/cny/25snake/year%20of%20snake%20pattern%20-%20red.png",
    alt: "Red and gold Year of the Snake ang pao pattern",
    color: "red",
  },
  {
    title: "Gold · 金",
    subtitle: "WARM GOLD, BRIGHT WISHES",
    description: "A golden palette gives the ornate snake pattern a celebratory finish, designed to sit alongside the blue and red editions.",
    image: "/hbc/cny/25snake/year%20of%20snake%20pattern%20-%20yellow.png",
    alt: "Gold and yellow Year of the Snake ang pao pattern",
    color: "gold",
  },
];

const marks = [
  { name: "Blue", image: "/hbc/cny/25snake/snake%20-%20blue%20trans.png" },
  { name: "Gold", image: "/hbc/cny/25snake/snake%20-%20gold%20trans.png" },
  { name: "Red", image: "/hbc/cny/25snake/snake%20-%20red%20trans.png" },
];

export default function Snake2025Page() {
  const [active, setActive] = useState(0);
  const item = products[active];
  const move = (direction: number) => setActive((current) => (current + direction + products.length) % products.length);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/hbc/cny">← CNY ZODIAC</Link>
        <span>HBC · LUNAR ARCHIVE · 2025</span>
        <Link href="/hbc">HBC ↗</Link>
      </header>

      <section className={styles.hero} aria-labelledby="snake-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>乙巳蛇年 · HBC CNY ARCHIVE</p>
          <h1 id="snake-title">A year<br />in <em>good fortune.</em></h1>
          <p className={styles.heroNote}>2025 · THE YEAR OF THE SNAKE</p>
          <a className={styles.scrollCue} href="#story">DISCOVER THE 2025 EDITION <span aria-hidden="true">↓</span></a>
        </div>
        <div className={styles.heroArt}>
          <span className={styles.heroCircle} aria-hidden="true" />
          <img src="/hbc/cny/25snake/year-of-snake.png" alt="HBC Year of the Snake emblem for the 2025 Lunar New Year" />
          <span className={styles.yearMark} lang="zh-Hant">乙巳</span>
        </div>
        <span className={styles.sideNote}>HIDUP BOLA CLUB · SINCE 2014</span>
      </section>

      <section className={styles.story} id="story" aria-labelledby="story-title">
        <div className={styles.sectionMark}><span>01</span><i /></div>
        <div className={styles.storyGrid}>
          <p className={styles.eyebrow}>THE THEME</p>
          <div>
            <h2 id="story-title">A clever turn<br /><em>for the new year.</em></h2>
            <p className={styles.storyText}>
              For 2025, HBC wraps the Year of the Snake in a bold repeat pattern: winding snake forms, cloud motifs, and classic geometry arranged like a keepsake textile. Three colourways give the same emblem a different mood, from cool blue to festive red and warm gold.
            </p>
            <p className={styles.storyChinese} lang="zh-Hant">乙巳蛇年 · 蛇年大吉</p>
          </div>
        </div>
        <div className={styles.markStrip} aria-label="Snake emblem colourways">
          {marks.map((mark) => (
            <div className={styles.markTile} key={mark.name}>
              <img src={mark.image} alt="" />
              <span>{mark.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.merch} aria-labelledby="merch-title">
        <div className={styles.sectionMark}><span>02</span><i /></div>
        <div className={styles.merchTitleRow}>
          <div>
            <p className={styles.eyebrow}>THE 2025 CNY EDITION</p>
            <h2 id="merch-title">Fortune in<br /><em>every fold.</em></h2>
          </div>
          <p className={styles.merchIntro}>Explore the full ang pao set and each colourway in the collection.</p>
        </div>

        <div className={styles.showcase} aria-live="polite">
          <div className={styles.productImage} data-color={item.color} key={item.image}>
            <img src={item.image} alt={item.alt} />
            <span className={styles.imageIndex}>0{active + 1} / 0{products.length}</span>
          </div>
          <div className={styles.productCopy} key={item.title}>
            <p className={styles.eyebrow}>{item.subtitle}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className={styles.controls}>
              <button type="button" onClick={() => move(-1)} aria-label="Previous ang pao colourway">←</button>
              <span>0{active + 1}<i />0{products.length}</span>
              <button type="button" onClick={() => move(1)} aria-label="Next ang pao colourway">→</button>
            </div>
            <div className={styles.dots} aria-label="Select ang pao colourway">
              {products.map((product, index) => (
                <button
                  type="button"
                  key={product.color}
                  className={index === active ? styles.activeDot : ""}
                  onClick={() => setActive(index)}
                  aria-label={`Show ${product.title}`}
                  aria-current={index === active ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/hbc/cny">← BACK TO THE ZODIAC</Link>
        <span>HBC · LUNAR ARCHIVE · 2025</span>
        <span lang="zh-Hant">乙巳蛇年</span>
      </footer>
    </main>
  );
}

