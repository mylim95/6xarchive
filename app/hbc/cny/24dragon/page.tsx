"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

const merch = [
  {
    name: "HBC Angpao — Dragon Edition",
    detail: "A limited-edition red packet set for the Year of the Dragon, carrying the HBC dragon artwork into the Lunar New Year ritual.",
    image: "/hbc/cny/24dragon/hbc%20angpao%20edt.jpg",
    alt: "HBC Year of the Dragon ang pao set in warm gold and orange",
    number: "01",
  },
  {
    name: "Heng Ong Huat — Packet Series",
    detail: "A three-piece packet series made for sharing good fortune, with the HBC mark and a bold 2024 Dragon year stamp.",
    image: "/hbc/cny/24dragon/heng%20ong%20huat%20ang%20pao.jpg",
    alt: "HBC CNY packet series presentation for 2024",
    number: "02",
  },
];

export default function Dragon2024Page() {
  const [active, setActive] = useState(0);
  const move = (direction: number) => setActive((current) => (current + direction + merch.length) % merch.length);
  const item = merch[active];

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/hbc/cny">← CNY ZODIAC</Link>
        <span>HBC · LUNAR ARCHIVE · 2024</span>
        <Link href="/hbc">HBC ↗</Link>
      </header>

      <section className={styles.hero} aria-labelledby="dragon-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>甲辰龍年 · HBC CNY ARCHIVE</p>
          <h1 id="dragon-title">A year with<br /><em>the dragon.</em></h1>
          <p className={styles.heroNote}>2024 · THE YEAR OF THE DRAGON</p>
          <a className={styles.scrollCue} href="#story">DISCOVER THE 2024 EDITION <span aria-hidden="true">↓</span></a>
        </div>
        <div className={styles.artwork}>
          <span className={styles.artHalo} aria-hidden="true" />
          <img src="/hbc/cny/24dragon/year%20of%20dragon.png" alt="Illustrated HBC dragon for the 2024 Lunar New Year" />
          <span className={styles.artStamp} lang="zh-Hant">甲辰</span>
        </div>
        <span className={styles.sideNote}>HIDUP BOLA CLUB · SINCE 2014</span>
      </section>

      <section className={styles.story} id="story" aria-labelledby="story-title">
        <div className={styles.sectionMark}><span>01</span><i /></div>
        <div className={styles.storyGrid}>
          <p className={styles.eyebrow}>THE THEME</p>
          <div>
            <h2 id="story-title">Good fortune,<br /><em>with a little fire.</em></h2>
            <p className={styles.storyText}>
              HBC welcomes the Year of the Dragon with a bright, unruly guardian: a coiling dragon drawn in vivid orange, warm gold, and cobalt blue. The 2024 edition brings that character to the traditions of the season, from reunion greetings to red packets shared with family and friends.
            </p>
            <p className={styles.storyChinese} lang="zh-Hant">甲辰龍年 · 龍行大運</p>
          </div>
        </div>
      </section>

      <section className={styles.merch} aria-labelledby="merch-title">
        <div className={styles.merchHeading}>
          <div className={styles.sectionMark}><span>02</span><i /></div>
          <div className={styles.merchTitleRow}>
            <div>
              <p className={styles.eyebrow}>THE 2024 CNY EDITION</p>
              <h2 id="merch-title">Made to <em>be shared.</em></h2>
            </div>
            <p className={styles.merchIntro}>A closer look at the Year of the Dragon packet collection.</p>
          </div>
        </div>

        <div className={styles.showcase} aria-live="polite">
          <div className={styles.productImage} key={item.image}>
            <img src={item.image} alt={item.alt} />
            <span className={styles.imageIndex}>{item.number} / 0{merch.length}</span>
          </div>
          <div className={styles.productCopy} key={item.name}>
            <p className={styles.eyebrow}>HBC · RED PACKET SERIES</p>
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
            <p className={styles.productChinese} lang="zh-Hant">新年快樂 · 龍年大吉</p>
            <div className={styles.controls}>
              <button type="button" onClick={() => move(-1)} aria-label="Previous merch item">←</button>
              <span>0{active + 1} <i /> 0{merch.length}</span>
              <button type="button" onClick={() => move(1)} aria-label="Next merch item">→</button>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/hbc/cny">← BACK TO THE ZODIAC</Link>
        <span>HBC · LUNAR ARCHIVE · 2024</span>
        <span lang="zh-Hant">甲辰龍年</span>
      </footer>
    </main>
  );
}
