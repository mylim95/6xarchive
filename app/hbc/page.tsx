import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import CoverMedia from "./CoverMedia";

export const metadata: Metadata = {
  title: "HBC — Hidup Bola Club | 6XARCHIVE",
  description: "Hidup Bola Club — friendship, loyalty and mantap, born in Batu Pahat, Johor.",
};

const subBrands = [
  {
    number: "01",
    name: "Ape Benda Collection",
    kind: "MERCHANT SHOP",
    description: "Everyday HBC objects. Buatan Ape. 100% Lokal.",
    image: "/hbc/abc-flag.png",
    href: "/hbc/ape-benda-collection",
  },
  {
    number: "02",
    name: "Ape Atlas",
    kind: "TRAVEL & CULTURE",
    description: "One ape, collecting the character of every city.",
    image: "/hbc/ape-atlas-flag.png",
    href: "/hbc/ape-atlas",
  },
  {
    number: "03",
    name: "Caffeine Dose",
    kind: "COFFEE CULTURE",
    description: "Good coffee for the long talk before and after the game.",
    image: "/hbc/caffeine-dose-flag.png",
    href: "/hbc/caffeine-dose",
  },
  {
    number: "04",
    name: "Pixel Apes",
    kind: "DIGITAL CREW",
    description: "The HBC crew, reimagined pixel by pixel.",
    image: "/hbc/pixel-apes-flag.png",
    href: "/hbc/pixel-apes",
  },
  {
    number: "05",
    name: "Wanderland",
    kind: "OUTDOOR & ADVENTURE",
    description: "The squad takes the long way out.",
    image: "/hbc/wanderland-flag.png",
    href: "/hbc/wanderland",
  },
];

export default function HbcPage() {
  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>6XARCHIVE</Link>
        <p>DIV-02 / HIDUP BOLA CLUB</p>
        <Link href="/about" className={styles.back}>THE HOUSE ↗</Link>
      </header>

     {/* COVER */}
      <section className={styles.cover} aria-labelledby="title">
        <CoverMedia src="/hbc/cover-loop.mp4" poster="/hbc/cover-poster.jpg" />
        <div className={styles.coverOverlay} aria-hidden="true" />
        <div className={styles.coverContent}>
          <div className={styles.coverNoise} aria-hidden="true" />
          <img
            src="/hbc/HB-mascot-white.png"
            alt="HBC mascot mark"
            width={2117}
            height={2118}
            className={styles.coverMascot}
          />
          <p className={styles.kicker}>DIVISION 02 / EST. 2014</p>
          <h1 id="title">HIDUP BOLA<br /><em>CLUB</em></h1>
          <p className={styles.coverSub}>Football is more than a game. It&apos;s a culture.</p>
        </div>
      </section>

      {/* RECORD STRIP */}
      <section className={styles.strip} aria-label="Club record">
        <div><p>FOUNDED</p><strong>2014</strong></div>
        <div><p>ORIGIN</p><strong>Batu Pahat, Johor</strong></div>
        <div><p>STATUS</p><strong>Active</strong></div>
        <div><p>MOTTO</p><strong>Mantap</strong></div>
      </section>

      {/* MANIFESTO */}
      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <div className={styles.manifestoMeta}>
          <p>ORIGIN</p><strong>FRIENDSHIP FIRST</strong>
          <p>PHILOSOPHY</p><strong>LOYALTY &amp; UNITY</strong>
          <p>MASCOT</p><strong>THE APE</strong>
        </div>
        <div className={styles.statement}>
          <p className={styles.label}>THE ORIGIN STORY</p>
          <h2 id="manifesto-title">Not everyone plays. Everyone belongs.</h2>
          <p className={styles.lede}>
            HBC began as a circle of friends in Batu Pahat, Johor — friendship first, football
            second. Some of us play. Some of us never touch a ball. What holds the club
            together was never really the game; it&apos;s loyalty, brotherhood, and the habit of
            showing up for each other. Football just gave it a name.
          </p>
          <p className={styles.lede}>
            Led by its Ape mascot, Hidup Bola Club turns that friendship into characters,
            collectibles, apparel, objects and different worlds — from football and travel to
            coffee, adventure, gaming and beyond. HBC is not just about playing bola.
            It&apos;s about living it.
          </p>
        </div>
      </section>

      {/* HBC SUB-BRANDS */}
      <section className={styles.subBrands} aria-labelledby="subbrands-title">
        <div className={styles.subBrandsHeading}>
          <p className={styles.label}>HBC / THE WORLDS</p>
          <h2 id="subbrands-title">One club. Many ways to live it.</h2>
          <p>Meet the different sides of Hidup Bola Club, each carrying the same badge.</p>
        </div>

        <div className={styles.subBrandGrid}>
          {subBrands.map((brand) => (
            <Link className={styles.subBrandCard} href={brand.href} key={brand.number}>
              <span className={styles.subBrandNumber}>{brand.number}</span>
              <img
                className={styles.subBrandFlag}
                src={brand.image}
                alt={`${brand.name} stand flag`}
                width={1024}
                height={1536}
                loading="lazy"
              />
              <span className={styles.subBrandKind}>{brand.kind}</span>
              <span className={styles.subBrandName}>{brand.name}</span>
              <span className={styles.subBrandDescription}>{brand.description}</span>
              <span className={styles.subBrandEnter}>EXPLORE WORLD <span aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </div>
      </section>

      {/* CNY ARCHIVE */}
      <section className={styles.cnyFeature} aria-labelledby="cny-feature-title">
        <div className={styles.cnyFeatureArt}>
          <img src="/hbc/cny/CNY-ape.png" alt="HBC Lunar New Year ape mascot" width={900} height={900} loading="lazy" />
          <span lang="zh-Hant" aria-hidden="true">春</span>
        </div>
        <div className={styles.cnyFeatureCopy}>
          <p className={styles.cnyFeatureEyebrow}>HBC / LUNAR ARCHIVE · ANNUAL SERIES</p>
          <h2 id="cny-feature-title">Twelve signs.<br /><em>One club.</em></h2>
          <p>Explore HBC’s Chinese New Year editions, zodiac artwork, and festive collections across the years.</p>
          <Link href="/hbc/cny" className={styles.cnyFeatureLink}>ENTER THE CNY ARCHIVE <span aria-hidden="true">↗</span></Link>
        </div>
        <span className={styles.cnyFeatureSeal} aria-hidden="true">HBC · 新年</span>
      </section>
  {/*Exhibition introduction section */}
  <section className={styles.exhibitionPreview}>
    <div className={styles.exhibitionAtmosphere} />

    <div className={styles.exhibitionPreviewContent}>
      <span className={styles.exhibitionEyebrow}>
        HBC PRESENTS · SPECIAL EXHIBITION
      </span>

      <h2>
        GUARDIANS
        <br />
        <em>OF ASIA</em>
      </h2>

      <p>
        An artistic journey through the guardians,
        legends and cultural heritage of Asia.
      </p>

      <Link
        href="#"
        className={styles.exhibitionCTA}
      >
        Coming Soon
        <span>↗</span>
      </Link>
    </div>

    <span className={styles.exhibitionNumber}>
      EXHIBITION NO. 001 — 2026
    </span>
  </section>

      {/* THE CREST */}
      <section className={styles.crest} aria-labelledby="crest-title">
        <div className={styles.crestHeading}>
          <p className={styles.label}>THE CREST</p>
          <h2 id="crest-title">One badge, worn differently.</h2>
        </div>

        <div className={styles.crestGrid}>
          <figure className={styles.crestPiece}>
            <div className={styles.crestFrame}>
              <img src="/hbc/HB-badge-trans.png" alt="HBC club badge" width={1933} height={1932} />
            </div>
            <figcaption>
              <p className={styles.plateId}>CREST-01</p>
              <p>Club Badge</p>
            </figcaption>
          </figure>

          <figure className={styles.crestPiece}>
            <div className={styles.crestFrame}>
              <img src="/hbc/FABRIC_MOCKUP.png" alt="HBC embroidered on black mesh jersey fabric" width={1920} height={1080} />
            </div>
            <figcaption>
              <p className={styles.plateId}>CREST-02</p>
              <p>Mesh Application</p>
            </figcaption>
          </figure>

          <figure className={styles.crestPiece}>
            <div className={styles.crestFrame}>
              <img src="/hbc/FABRIC_MOCKUP_SEWING.png" alt="HBC embroidered patch on woven fabric" width={3646} height={2404} />
            </div>
            <figcaption>
              <p className={styles.plateId}>CREST-03</p>
              <p>Woven Patch</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* THE SQUAD */}
      <section className={styles.squad} aria-labelledby="squad-title">
        <div className={styles.squadNoise} aria-hidden="true" />
        <p className={styles.label} style={{ color: "var(--h-brass)" }}>THE SQUAD</p>
        <h2 id="squad-title">Every member, their own character.</h2>
        <p className={styles.squadCopy}>
          Soldier, samurai, ninja, joker, chicken, warlord — HBC was never one face. The squad
          is a roster of personas, each one carrying the same badge, the same loyalty, into a
          different kind of fight.
        </p>
        <img
          src="/hbc/HIDUP_BOLA__SQUAD.png"
          alt="HBC squad — illustrated roster of club characters"
          width={1080}
          height={1080}
          className={styles.squadArt}
        />
      </section>

      {/* MOTTO CLOSER */}
      <section className={styles.closer} aria-label="Club motto">
        <img
          src="/hbc/hb-img-5.png"
          alt="MANTAP — 2014, Batu Pahat"
          width={1501}
          height={338}
          className={styles.closerWordmark}
        />
        <p className={styles.closerFinal}>
          HBC is not just about playing bola. It&apos;s about living it.
        </p>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>
        <Link href="/about">THE HOUSE / ALL DIVISIONS</Link>
        <p>DIV-02 / END OF RECORD</p>
      </footer>
    </main>
  );
}

