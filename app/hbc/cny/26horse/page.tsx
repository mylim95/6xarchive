"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

const items = [
  {
    title: "Year of the Horse · Angpao",
    eyebrow: "THE CNY EDITION",
    description: "A deep red packet with gold detailing, carrying the HBC horse-rider artwork into a Lunar New Year tradition made for sharing.",
    image: "/hbc/cny/26horse/Year-of-the-Horse-Angpao-Mockup.png",
    alt: "Year of the Horse 2026 red angpao mockup with gold details",
  },
  {
    title: "Balik Kampung · Puasa Wallpaper",
    eyebrow: "CNY × PUASA",
    description: "When the festive seasons meet: an HBC balik kampung scene that brings Lunar New Year and the Puasa period into one shared homecoming story.",
    image: "/hbc/cny/26horse/balik-kampung-wallpaper.jpg",
    alt: "HBC Balik Kampung wallpaper combining the Year of the Horse with Puasa and Raya",
  },
];

export default function Horse2026Page() {
  const [active, setActive] = useState(0);
  const item = items[active];
  const move = (direction: number) => setActive((current) => (current + direction + items.length) % items.length);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/hbc/cny">← CNY ZODIAC</Link>
        <span>HBC · LUNAR ARCHIVE · 2026</span>
        <Link href="/hbc">HBC ↗</Link>
      </header>

      <section className={styles.hero} aria-labelledby="horse-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>丙午馬年 · HBC CNY ARCHIVE</p>
          <h1 id="horse-title">Ride into<br /><em>the new year.</em></h1>
          <p className={styles.heroNote}>2026 · THE YEAR OF THE HORSE</p>
          <a className={styles.scrollCue} href="#story">DISCOVER THE 2026 EDITION <span aria-hidden="true">↓</span></a>
        </div>
        <div className={styles.heroArt}>
          <span className={styles.heroCircle} aria-hidden="true" />
          <img src="/hbc/cny/26horse/year-of-horse.png" alt="HBC Year of the Horse illustration: an armored ape riding a horse" />
          <span className={styles.yearMark} lang="zh-Hant">丙午</span>
        </div>
        <span className={styles.sideNote}>HIDUP BOLA CLUB · SINCE 2014</span>
      </section>

      <section className={styles.story} id="story" aria-labelledby="story-title">
        <div className={styles.sectionMark}><span>01</span><i /></div>
        <div className={styles.storyGrid}>
          <p className={styles.eyebrow}>THE THEME</p>
          <div>
            <h2 id="story-title">A bold ride<br /><em>into 2026.</em></h2>
            <p className={styles.storyText}>
              HBC’s Year of the Horse brings a mounted guardian to the Lunar New Year: an armored ape, a prancing horse, and a bright banner for 2026. The edition pairs classic red and gold with emerald and blue accents for a lively, collectible take on the season.
            </p>
            <p className={styles.storyChinese} lang="zh-Hant">丙午馬年 · 馬到成功</p>
          </div>
        </div>
      </section>

      <section className={styles.threeD} aria-labelledby="three-d-title">
        <div className={styles.threeDImage}>
          <span className={styles.imageCaption}>HBC · HORSE EDITION · 2026</span>
          <img src="/hbc/cny/26horse/year-of-horse-3d.png" alt="Three-dimensional HBC Year of the Horse ape rider artwork" />
        </div>
        <div className={styles.threeDCopy}>
          <p className={styles.eyebrow}>A CLOSER LOOK · 3D EDITION</p>
          <h2 id="three-d-title">Built for<br /><em>the parade.</em></h2>
          <p>Meet the three-dimensional take on the 2026 emblem. Rich lacquer-like reds, gold armor, and sculpted details give the horse and rider a collectible presence.</p>
          <span className={styles.threeDMark} lang="zh-Hant">奔騰向前</span>
        </div>
      </section>

      <section className={styles.merch} aria-labelledby="merch-title">
        <div className={styles.sectionMark}><span>02</span><i /></div>
        <div className={styles.merchTitleRow}>
          <div>
            <p className={styles.eyebrow}>THE 2026 COLLECTION</p>
            <h2 id="merch-title">Two seasons,<br /><em>one homecoming.</em></h2>
          </div>
          <p className={styles.merchIntro}>From Lunar New Year packets to a homecoming wallpaper for the season when CNY and Puasa meet.</p>
        </div>

        <div className={styles.showcase} aria-live="polite">
          <div className={styles.productImage} key={item.image}>
            <img src={item.image} alt={item.alt} />
            <span className={styles.imageIndex}>0{active + 1} / 0{items.length}</span>
          </div>
          <div className={styles.productCopy} key={item.title}>
            <p className={styles.eyebrow}>{item.eyebrow}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className={styles.controls}>
              <button type="button" onClick={() => move(-1)} aria-label="Previous merch item">←</button>
              <span>0{active + 1}<i />0{items.length}</span>
              <button type="button" onClick={() => move(1)} aria-label="Next merch item">→</button>
            </div>
            <div className={styles.dots} aria-label="Select merch item">
              {items.map((product, index) => (
                <button
                  type="button"
                  key={product.title}
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
        <span>HBC · LUNAR ARCHIVE · 2026</span>
        <span lang="zh-Hant">丙午馬年</span>
      </footer>
    </main>
  );
}
