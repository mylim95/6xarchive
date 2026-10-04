import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The House | 6XARCHIVE",
  description: "The organizational structure behind 6X Archives and its divisions.",
};

// ─────────────────────────────────────────────
// STRUCTURE DATA
// ─────────────────────────────────────────────
const root = {
  name: "6X ARCHIVES",
  tagline: "A home for ideas worth preserving.",
  description:
    "6X Archives is the gallery and archive layer of the house — a place for artworks, experiments, stories and creative projects that exist beyond commercial boundaries. It is where unfinished ideas, visual experiments and completed works can live together. Not everything needs to become a product to become part of the archive.",
};

type Division = {
  id: string;
  name: string;
  cn?: string;
  tagline: string;
  description: string;
  closing: string;
  leaves?: string[];
};

const divisions: Division[] = [
  {
    id: "DIV-01",
    name: "FADED ARCHIVE",
    tagline: "Preserving what slowly disappears.",
    description:
      "Faded Archive explores memory, emotion, imperfection and the fragments of life that are easily forgotten. Through artwork, collectible cards, prints, figures and experimental objects, each work becomes an artifact of something that once existed — a feeling, a moment, a story or a state of being.",
    closing: "Everything fades. We archive what remains.",
    /*leaves: ["Concept", "Visual Works", "Collectibles", "Custom Figures", "Postcards", "Experiments"],*/
  },
  {
    id: "DIV-02",
    name: "HIDUP BOLA CLUB — HBC",
    tagline: "Football is more than a game. It's a culture.",
    description:
      "Hidup Bola Club is a fictional club born from a love of football, street culture and the communities built around the game. Led by its Ape mascot, HBC turns football culture into characters, collectibles, apparel, objects and different worlds — from football and travel to coffee, adventure, gaming and beyond.",
    closing: "HBC is not just about playing bola. It's about living it. Mantap sejak 2014.",
  },
  {
    id: "DIV-03",
    name: "BREAKFAST CLUB",
    tagline: "From the kopitiam, with love.",
    description:
      "Breakfast Club celebrates the everyday rituals that make Malaysian life feel like home. Born from the kopitiam culture of Batu Pahat, Johor, it draws from 90s nostalgia, local food, old packaging, childhood memories and the simple joy of gathering around a table. From breakfast kaki to supper kaki, Breakfast Club turns familiar local culture into characters, graphics, apparel and collectible objects.",
    closing: "100% LOKAL.",
  },
  {
    id: "DIV-04",
    name: "BLESPORT",
    cn: "摆烂超六",
    tagline: "For those who still play, even when they've given up.",
    description:
      "BLesport is a playful take on esports, gaming culture and the attitude of simply being yourself. Built around a zombie mascot, 摆烂超六 embraces the chaos, frustration and humour behind gaming — the late nights, losing streaks, questionable decisions and the decision to queue for one more game anyway.",
    closing: "Play hard. Lose harder. 摆烂到底.",
  },
  {
    id: "DIV-05",
    name: "FUNHEY LUCKS CO.",
    cn: "欢喜国粹馆",
    tagline: "Luck, games and a little bit of chaos.",
    description:
      "Funhey Lucks Co. explores the visual language of Hong Kong-inspired retro culture through mahjong, poker, games, lucky symbols and the social rituals surrounding them. Part clubhouse, part nostalgic arcade, part old-school signboard — it turns traditional gaming culture into contemporary artwork, objects and collectibles.",
    closing: "Good luck. Good games. 好玩最重要.",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>6XARCHIVE</Link>
        <p>THE HOUSE / STRUCTURE</p>
        <Link href="/idx-000" className={styles.back}>IDX-000 ↗</Link>
      </header>

      {/* COVER */}
      <section className={styles.cover} aria-labelledby="title">
        <p className={styles.kicker}>ORGANIZATIONAL RECORD</p>
        <h1 id="title">{root.name}</h1>
        <p className={styles.coverTagline}>{root.tagline}</p>
        <p className={styles.coverCopy}>{root.description}</p>
      </section>

      {/* ORG CHART */}
      <section className={styles.chartSection} aria-labelledby="chart-title">
        <div className={styles.chartHeading}>
          <p className={styles.label}>THE STRUCTURE</p>
          <h2 id="chart-title">Five divisions, one archive.</h2>
        </div>

        <div className={styles.chart}>
          <div className={styles.rootNode}>
            <span>{root.name}</span>
          </div>

          <div className={styles.chartRow}>
            {divisions.map((div) => (
              <div className={styles.branch} key={div.id}>
                <div className={styles.divNode}>
                  <p className={styles.divNodeId}>{div.id}</p>
                  <span>{div.name}</span>
                  {div.cn && <em>{div.cn}</em>}
                </div>

                {div.leaves && (
                  <ul className={styles.leafList}>
                    {div.leaves.map((leaf) => (
                      <li key={leaf}>{leaf}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISION RECORDS */}
      <section className={styles.records} aria-label="Division records">
        {divisions.map((div) => (
          <article className={styles.record} key={div.id}>
            <div className={styles.recordMeta}>
              <p className={styles.recordId}>{div.id}</p>
              <p className={styles.recordStatus}>ACTIVE</p>
            </div>
            <div className={styles.recordBody}>
              <h3>
                {div.name} {div.cn && <em>{div.cn}</em>}
              </h3>
              <p className={styles.recordTagline}>{div.tagline}</p>
              <p className={styles.recordCopy}>{div.description}</p>
              <p className={styles.recordClosing}>{div.closing}</p>
            </div>
          </article>
        ))}
      </section>

      {/* POETIC CLOSER */}
      <section className={styles.closer} aria-labelledby="closer-title">
        <div className={styles.closerNoise} aria-hidden="true" />
        <h2 id="closer-title">NOT EVERYTHING<br />STARTS AS A BRAND.</h2>
        <div className={styles.closerLines}>
          <p>Some start as a sketch.</p>
          <p>Some start as a logo.</p>
          <p>Some start with a character.</p>
          <p>Some start with a memory.</p>
          <p>And some simply start with:</p>
          <p className={styles.whatIf}>&ldquo;What if?&rdquo;</p>
        </div>
        <p className={styles.closerFinal}>6X exists to see where those ideas can go.</p>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>
        <Link href="/faded-archive">ARC-001 / FADED ARCHIVE</Link>
        <p>THE HOUSE / END OF RECORD</p>
      </footer>
    </main>
  );
}