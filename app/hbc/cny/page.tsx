"use client";

import Link from "next/link";
import styles from "./page.module.css";
import CircularCarousel from "@/components/CircularCarousel";

type Zodiac = { animal: string; hanzi: string; pinyin: string; year: string; cycleYear: string; calendarYear: number };
const zodiac: Zodiac[] = [
  { animal: "Rat", calendarYear: 2032, cycleYear: "叁贰", hanzi: "鼠", pinyin: "SHǓ", year: "子" },
  { animal: "Ox", calendarYear: 2033, cycleYear: "叁叁", hanzi: "牛", pinyin: "NIÚ", year: "丑" },
  { animal: "Tiger", calendarYear: 2034, cycleYear: "叁肆", hanzi: "虎", pinyin: "HǓ", year: "寅" },
  { animal: "Rabbit", calendarYear: 2035, cycleYear: "叁伍", hanzi: "兔", pinyin: "TÙ", year: "卯" },
  { animal: "Dragon", calendarYear: 2024, cycleYear: "贰肆", hanzi: "龍", pinyin: "LÓNG", year: "辰" },
  { animal: "Snake", calendarYear: 2025, cycleYear: "贰伍", hanzi: "蛇", pinyin: "SHÉ", year: "巳" },
  { animal: "Horse", calendarYear: 2026, cycleYear: "贰陆", hanzi: "馬", pinyin: "MǍ", year: "午" },
  { animal: "Goat", calendarYear: 2027, cycleYear: "贰柒", hanzi: "羊", pinyin: "YÁNG", year: "未" },
  { animal: "Monkey", calendarYear: 2028, cycleYear: "贰捌", hanzi: "猴", pinyin: "HÓU", year: "申" },
  { animal: "Rooster", calendarYear: 2029, cycleYear: "贰玖", hanzi: "雞", pinyin: "JĪ", year: "酉" },
  { animal: "Dog", calendarYear: 2030, cycleYear: "叁零", hanzi: "狗", pinyin: "GǑU", year: "戌" },
  { animal: "Pig", calendarYear: 2031, cycleYear: "叁壹", hanzi: "豬", pinyin: "ZHŪ", year: "亥" },
 ];

const carouselItems = zodiac.map((item) => ({
  alt: `${item.animal}, the Chinese zodiac sign ${item.hanzi}`,
  title: item.animal, character: item.hanzi, year: item.cycleYear, calendarYear: item.calendarYear,
  href: ["Dragon", "Snake", "Horse"].includes(item.animal) ? `/hbc/cny/${String(item.calendarYear).slice(-2)}${item.animal.toLowerCase()}` : undefined,
}));

export default function CnyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <Link href="/" className={styles.archive}>6XARCHIVE</Link>
        <span>HBC&nbsp; / &nbsp;<span lang="zh-Hant">年獸檔案</span></span>
        <Link href="/hbc" className={styles.back}>BACK TO HBC ↗</Link>
      </header>
      <section className={styles.hero} aria-labelledby="title">
        <div className={styles.heroCopy}>
          <h1 id="title">A year<br />of <em>apes.</em></h1>
          <p className={styles.intro}>Twelve signs. One unruly spirit. Meet the animals that keep time in the Chinese zodiac — with a little HBC mischief in the mix.</p>
        </div>
        <div className={styles.apeSeal}>
          <img src="/hbc/cny/CNY-ape.png" alt="HBC Chinese New Year ape mascot" />
        </div>
      </section>
      <section className={styles.orbitSection} aria-labelledby="orbit-title">
        <div className={styles.sectionHead}>
          <div><p className={styles.eyebrow}>THE CELESTIAL ROLL CALL</p><h2 id="orbit-title">Twelve in orbit<span>.</span></h2></div>
          <p className={styles.hint}>DRAG OR SCROLL<br />TO TURN THE ZODIAC RING</p>
        </div>
        <div className={styles.carouselStage} role="group" aria-label="Twelve traditional Chinese zodiac characters">
          <CircularCarousel items={carouselItems} preset="cylinder" intro="rise" cardWidth={210} aspectRatio={0.78} gap={30} autoplay="drift" speed={10} pauseOnHover draggable captions fadeColor="#641018" cornerRadius={3} className={styles.carousel} />
        </div>
        <p className={styles.note}>Twelve signs, carried forward through generations.</p>
      </section>
      <footer className={styles.footer}><img src="/hbc/cny/CNY-ape.png" alt="" /><span>HBC · HORNY BAD CHIMP</span><span><span lang="zh-Hant">馬年大吉</span> · MAY YOUR YEAR RUN WILD</span><Link href="/hbc">EXPLORE HBC ↗</Link></footer>
    </main>
  );
}
