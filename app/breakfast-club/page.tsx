import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { archive, tins } from "@/data/breakfast-club";

export const metadata: Metadata = {
  title: "Breakfast Club 早餐俱樂部 — 6XARCHIVE",
  description:
    "Breakfast Club — Nanyang breakfast nostalgia from Batu Pahat, Johor. Savor the flavor of ’90s nostalgia.",
};

export default function BreakfastClubPage() {
  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>6XARCHIVE</Link>
        <p>DIV-03 / BREAKFAST CLUB</p>
        <Link href="/about" className={styles.back}>THE HOUSE ↗</Link>
      </header>

      {/* COVER */}
      <section className={styles.cover} aria-labelledby="title">
        <div className={styles.coverFrame}>
          <img
            src="/breakfast-club/cover-lightbox.jpg"
            alt="Breakfast Club lightbox sign on a green tile wall"
            width={1925}
            height={1400}
            className={styles.coverImage}
          />
        </div>
        <div className={styles.coverPlate}>
          <h1 id="title" className={styles.srOnly}>Breakfast Club 早餐俱樂部</h1>
          <p className={styles.kicker}>BATU PAHAT, JOHOR</p>
          <img
            src="/breakfast-club/bfaz-color.png"
            alt="Bfaz Club"
            width={3859}
            height={1188}
            className={styles.coverWordmark}
          />
          <p className={styles.coverSub}>Savor the flavor of ’90s nostalgia.</p>
        </div>
      </section>

      {/* MENU STRIP */}
      <section className={styles.strip} aria-label="Club record">
        <div><p>ORIGIN</p><strong>Batu Pahat, Johor</strong></div>
        <div><p>STYLE</p><strong>Nanyang × HK Café</strong></div>
        <div><p>ERA</p><strong>The ’90s</strong></div>
        <div><p>中文</p><strong>早餐俱樂部</strong></div>
      </section>

      {/* MANIFESTO */}
      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <div className={styles.emblem}>
          <img
            src="/breakfast-club/logo-green.png"
            alt="Breakfast Club emblem — condensed milk tin, 100% Lokal"
            width={3674}
            height={3711}
          />
        </div>
        <div className={styles.statement}>
          <p className={styles.label}>THE CLUB</p>
          <h2 id="manifesto-title">Life is too short to eat ordinary breakfast.</h2>
          <p className={styles.lede}>
            Breakfast Club is Nanyang breakfast, remembered the way it tasted in the ’90s —
            kopitiam tables, Hong Kong café menus, condensed milk on everything. Authentic,
            from Batu Pahat, Johor.
          </p>
          <p className={styles.lede}>
            From breakfast kaki to supper kaki: gather your friends, order too much, and
            make a meal that takes you straight back.
          </p>
        </div>
      </section>

      {/* ARCHIVE COLLECTION */}
      <section className={styles.archive} aria-labelledby="archive-title">
        <div className={styles.archiveShade} aria-hidden="true" />
        <div className={styles.archiveHeading}>
          <p className={styles.labelLight}>ARCHIVE COLLECTION</p>
          <h2 id="archive-title">Souvenirs from the breakfast table.</h2>
          <p className={styles.archiveCopy}>
            Coasters, glass cups and tees — the objects that remember the kopitiam.
          </p>
        </div>

        <div className={styles.archiveGrid}>
          {archive.map((item, i) => (
            <article className={styles.menuCard} key={item.id}>
              <div className={styles.menuImageWrap}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.menuImage}
                  style={{ objectPosition: item.position ?? "center" }}
                />
              </div>
              <div className={styles.menuBody}>
                <p className={styles.menuNo}>No. {String(i + 1).padStart(2, "0")} / {item.id}</p>
                <h3>{item.name}</h3>
                <p className={styles.menuType}>{item.type}</p>
                <p className={styles.menuNote}>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BAMBOO BLIND DIVIDER */}
      <div className={styles.blind} aria-hidden="true">
        <img
          src="/breakfast-club/bamboo-blinds.jpg"
          alt=""
          width={1200}
          height={800}
          className={styles.blindImage}
        />
      </div>

      {/* THE TIN — CONCEPT PRODUCT */}
      <section className={styles.tin} aria-labelledby="tin-title">
        <div className={styles.tinHeading}>
          <p className={styles.labelLight}>CONCEPT PRODUCT</p>
          <h2 id="tin-title">Kosong means zero.</h2>
          <p className={styles.tinCopy}>
            The beverage tin: the OG kopitiam drinks, canned. Kopi O, Milo and Teh C, ordered
            the way regulars do — no sugar. No siew dai, only kosong.
          </p>
          <ul className={styles.tinSpecs}>
            <li>250ML</li>
            <li>Zero Sugar</li>
            <li>100% Lokal</li>
          </ul>
        </div>

        <div className={styles.tinGrid}>
          {tins.map((tin) => (
            <article className={styles.tinCard} key={tin.id}>
              <div className={styles.tinFrame}>
                <img src={tin.image} alt={`${tin.name} tin`} className={styles.tinImage} />
              </div>
              <p className={styles.tinId}>{tin.id} / {tin.status}</p>
              <h3>{tin.name}</h3>
              <p className={styles.tinDescriptor}>{tin.descriptor}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSER */}
      <section className={styles.closer} aria-label="Club motto">
        <img
          src="/breakfast-club/ribbon-green.png"
          alt="早餐俱樂部"
          width={3674}
          height={886}
          className={styles.closerRibbon}
        />
        <img
          src="/breakfast-club/bfaz-color.png"
          alt="Bfaz Club"
          width={3859}
          height={1188}
          className={styles.closerWordmark}
        />
        <p className={styles.closerFinal}>Savor the flavor of ’90s nostalgia.</p>
        <p className={styles.closerLokal}>100% LOKAL</p>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>
        <Link href="/about">THE HOUSE / ALL DIVISIONS</Link>
        <p>DIV-03 / END OF MENU</p>
      </footer>
    </main>
  );
}