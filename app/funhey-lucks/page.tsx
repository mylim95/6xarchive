import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { dragons } from "@/data/funhey-lucks";

export const metadata: Metadata = {
  title: "Fun Hey Lucks Co 歡喜國粹館 — 6XARCHIVE",
  description:
    "Fun Hey Lucks Co — Hong Kong-inspired retro clubhouse. Mahjong, games and lucky symbols. Good luck. Good games. 好玩最重要.",
};

export default function FunheyLucksPage() {
  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>6XARCHIVE</Link>
        <p>DIV-05 / FUN HEY LUCKS CO</p>
        <Link href="/about" className={styles.back}>THE HOUSE ↗</Link>
      </header>

      {/* COVER */}
      <section className={styles.cover} aria-labelledby="title">
        <div className={styles.felt} aria-hidden="true" />
        <div className={styles.marquee}>
          <h1 id="title" className={styles.srOnly}>Fun Hey Lucks Co 歡喜國粹館</h1>
          <p className={styles.kicker}>DIVISION 05 / HONG KONG ’90s RETRO</p>
          <img
            src="/funhey-lucks/logo.png"
            alt="Fun Hey Lucks Co 歡喜國粹館 — Quintessence of Lucks 666, est. 2022"
            width={3514}
            height={3547}
            className={styles.coverLogo}
          />
          <p className={styles.coverSub}>Luck, games and a little bit of chaos.</p>
        </div>
      </section>

      {/* PLAQUE STRIP */}
      <section className={styles.strip} aria-label="Clubhouse record">
        <div><p>EST.</p><strong>2022</strong></div>
        <div><p>TYPE</p><strong>Clubhouse · 國粹館</strong></div>
        <div><p>STYLE</p><strong>Hong Kong ’90s</strong></div>
        <div><p>MOTTO</p><strong>好玩最重要</strong></div>
      </section>

      {/* MANIFESTO */}
      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <div className={styles.manifestoMeta}>
          <p>CONCEPT</p><strong>國粹館 / HALL OF QUINTESSENCE</strong>
          <p>GAMES</p><strong>MAHJONG · POKER · LUCKY SYMBOLS</strong>
          <p>SPIRIT</p><strong>QUINTESSENCE OF LUCKS 666</strong>
        </div>
        <div className={styles.statement}>
          <p className={styles.label}>THE CLUBHOUSE</p>
          <h2 id="manifesto-title">Part clubhouse, part arcade, part old-school signboard.</h2>
          <p className={styles.lede}>
            Fun Hey Lucks Co (歡喜國粹館) explores the visual language of Hong Kong-inspired
            retro culture — mahjong, poker, games, lucky symbols and the rituals that happen
            around the table.
          </p>
          <p className={styles.lede}>
            國粹 means national essence: the traditions worth keeping. Here they get a ’90s
            makeover and turn into contemporary artwork, objects and collectibles.
          </p>
        </div>
      </section>

      {/* LUCKY MAHJONG CLUB */}
      <section className={styles.club} aria-labelledby="club-title">
        <div className={styles.clubCopy}>
          <p className={styles.label}>THE CLUB / 喜運麻將俱樂部</p>
          <h2 id="club-title">Lucky Mahjong Club.</h2>
          <p className={styles.lede}>
            Lucky Mahjong Club is Fun Hey&apos;s club for keeping mahjong culture alive — the
            clatter of tiles, the table talk, and the hand everyone is secretly chasing.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <p className={styles.cardTop}>CLUB CARD</p>
            <img
              src="/funhey-lucks/lmc-script.png"
              alt="Lucky Mahjong Club"
              width={4707}
              height={701}
              className={styles.cardScript}
            />
            <img
              src="/funhey-lucks/lmc-chinese.png"
              alt="喜運麻將俱樂部"
              width={2543}
              height={406}
              className={styles.cardChinese}
            />
            <p className={styles.cardBottom}>NO. 666</p>
          </div>
        </div>
      </section>

      {/* THE THREE DRAGONS */}
      <section className={styles.dragons} aria-labelledby="dragons-title">
        <div className={styles.felt} aria-hidden="true" />
        <div className={styles.dragonsHeading}>
          <p className={styles.labelLight}>THE THREE DRAGONS</p>
          <h2 id="dragons-title">中 · 發 · 白</h2>
          <p className={styles.dragonsSub}>= 大三元 / BIG THREE DRAGONS</p>
          <p className={styles.dragonsCopy}>
            Hold a set of each dragon and you&apos;re holding 大三元 — one of the big-scoring hands
            at the table. Three tiles, three colourways, one lucky club.
          </p>
        </div>

        <div className={styles.tileGrid}>
          {dragons.map((d) => (
            <article className={styles.tileWrap} key={d.id}>
              <div className={styles.tile}>
                <div className={styles.tileFace}>
                  <img
                    src={d.image}
                    alt={d.alt}
                    width={2430}
                    height={3349}
                    className={styles.tileImage}
                  />
                </div>
              </div>
              <p className={styles.tileId}>{d.id}</p>
              <h3 style={{ color: d.accent }}>
                <span className={styles.glyph}>{d.glyph}</span> {d.romanised}
              </h3>
              <p className={styles.tileName}>{d.name}</p>
              <p className={styles.tileNote}>{d.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSER */}
      <section className={styles.closer} aria-label="Fun Hey motto">
        <img
          src="/funhey-lucks/lmc-script.png"
          alt="Lucky Mahjong Club"
          width={4707}
          height={701}
          className={styles.closerScript}
        />
        <p className={styles.closerFinal}>Good luck. Good games.</p>
        <p className={styles.closerCn}>好玩最重要</p>
        <p className={styles.closerTag}>QUINTESSENCE OF LUCKS 666</p>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>
        <Link href="/about">THE HOUSE / ALL DIVISIONS</Link>
        <p>DIV-05 / END OF GAME</p>
      </footer>
    </main>
  );
}