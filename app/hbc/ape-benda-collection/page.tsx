import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { products } from "@/data/ape-benda-collection";

export const metadata: Metadata = {
  title: "Ape Benda Collection — HBC | 6XARCHIVE",
  description: "Ape Benda Collection — HBC's merchant shop. Buatan Ape. 100% Lokal.",
};

export default function ApeBendaCollectionPage() {
  const coaster = products.find((p) => p.id === "ABC-001");

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>6XARCHIVE</Link>
        <p>HBC / APE BENDA COLLECTION</p>
        <Link href="/hbc" className={styles.back}>HBC ↗</Link>
      </header>

      {/* COVER */}
      <section className={styles.cover} aria-labelledby="title">
        <img
          src="/hbc/ape-benda-collection/shop-sign.jpg"
          alt="Ape Benda Collection shopfront signage"
          width={2976}
          height={4464}
          className={styles.coverPhoto}
        />
        <div className={styles.coverOverlay} aria-hidden="true" />
        <div className={styles.coverContent}>
          <h1 id="title" className={styles.srOnly}>Ape Benda Collection</h1>
          <p className={styles.kicker}>HBC SUB-BRAND / MERCHANT SHOP</p>
          <img
            src="/hbc/ape-benda-collection/logo-white.png"
            alt="Ape Benda Collection"
            width={3964}
            height={2344}
            className={styles.coverLogo}
          />
          <p className={styles.coverSub}>Buatan Ape. 100% Lokal.</p>
        </div>
      </section>

      {/* RECORD STRIP */}
      <section className={styles.strip} aria-label="Shop record">
        <div><p>PARENT DIVISION</p><strong>HBC</strong></div>
        <div><p>TYPE</p><strong>Merchant Shop</strong></div>
        <div><p>ORIGIN</p><strong>Batu Pahat, Johor</strong></div>
        <div><p>STATUS</p><strong>Active</strong></div>
      </section>

      {/* MANIFESTO */}
      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <div className={styles.manifestoMeta}>
          <p>CONCEPT</p><strong>THE BADGE, AS OBJECTS</strong>
          <p>OUTPUT</p><strong>EVERYDAY MERCHANDISE</strong>
        </div>
        <div className={styles.statement}>
          <p className={styles.label}>THE CONCEPT</p>
          <h2 id="manifesto-title">Everyday objects, wearing the badge.</h2>
          <p className={styles.lede}>
            Ape Benda Collection is HBC&apos;s merchandise line — the badge, turned into
            things you actually use. No hype drops, no queue. Just everyday objects, made
            properly, made here.
          </p>
          <p className={styles.lede}>
            Buatan Ape. 100% Lokal. Every piece carries the same crest as the club — proof
            that loyalty isn&apos;t just worn on a jersey, it sits on your desk too.
          </p>
        </div>
      </section>

      {/* FIRST MERCHANDISE — COASTER SPOTLIGHT */}
      {coaster && (
        <section className={styles.spotlight} aria-labelledby="coaster-title">
          <div className={styles.spotlightNoise} aria-hidden="true" />
          <div className={styles.spotlightMedia}>
            <img
              src={coaster.image}
              alt="Ape Coaster — blister pack and cork coaster stack"
              width={770}
              height={455}
              className={styles.spotlightImage}
            />
          </div>
          <div className={styles.spotlightBody}>
            <p className={styles.label} style={{ color: "var(--abc-gold)" }}>FIRST MERCHANDISE</p>
            <h2 id="coaster-title">{coaster.name}</h2>
            <p className={styles.spotlightTagline}>&ldquo;{coaster.tagline}&rdquo;</p>
            <p className={styles.spotlightCopy}>
              Cork, cut square, stamped with the HBC crest. Stack them, use them, spill on
              them — the Ape Coaster is the first object in the collection, built for the
              kopitiam table as much as the office desk.
            </p>
            <dl className={styles.spotlightMeta}>
              <div><dt>Merch ID</dt><dd>{coaster.merchId}</dd></div>
              <div><dt>Material</dt><dd>{coaster.material}</dd></div>
              <div><dt>Status</dt><dd>{coaster.status}</dd></div>
            </dl>
          </div>
        </section>
      )}

      {/* THE SHOP */}
      <section className={styles.shop} aria-labelledby="shop-title">
        <div className={styles.shopHeading}>
          <p className={styles.label}>THE SHOP</p>
          <h2 id="shop-title">The collection, so far.</h2>
        </div>

        <div className={styles.grid}>
          {products.map((item) => (
            <article className={styles.card} key={item.id}>
              <div className={styles.frame}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.frameImage}
                  />
                ) : (
                  <span className={styles.framePending}>COMING SOON</span>
                )}
                <span className={styles.frameStatus}>{item.status}</span>
              </div>
              <div className={styles.cardLabel}>
                <p className={styles.cardId}>{item.id}</p>
                <h3>{item.name}</h3>
                <p className={styles.cardMerchId}>{item.merchId}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSER */}
      <section className={styles.closer} aria-label="Shop motto">
        <img
          src="/hbc/ape-benda-collection/logo-white.png"
          alt="Ape Benda Collection"
          width={3964}
          height={2344}
          className={styles.closerLogo}
        />
        <p className={styles.closerFinal}>Buatan Ape. 100% Lokal.</p>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>
        <Link href="/hbc">HBC / DIV-02</Link>
        <p>APE BENDA COLLECTION / END OF RECORD</p>
      </footer>
    </main>
  );
}