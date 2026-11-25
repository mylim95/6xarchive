import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The Crew — After the Whistle | 6XARCHIVE",
  description: "Meet the underground ape crew: six characters, one world beneath the game.",
};

const crew = [
  { number: "01", identity: "The Captain", signature: "Grey hoodie, goggles, serious personality", image: "/hbc/after-the-whistle/the-captain.jpg", tag: "THE LEAD" },
  { number: "02", identity: "The Ghost", signature: "Purple hoodie, face mask, mysterious", image: "/hbc/after-the-whistle/the-ghost.jpg", tag: "THE SHADOW" },
];
const skater = { number: "04", identity: "The Skater", signature: "Yellow hoodie, headphones, bubble gum", image: "/hbc/after-the-whistle/the-skater.jpg", tag: "THE RUNNER" };

const artistCollective = [
  { number: "03", identity: "The Artist", signature: "Multicolour fur, paint-splattered outfit, spray cans", tag: "THE MAKER" },
  { number: "05", identity: "The Producer", signature: "Orange beanie, headphones, digital creative", tag: "THE SIGNAL" },
  { number: "06", identity: "The Photographer", signature: "Bucket hat, camera, underground documentarian", tag: "THE EYE" },
];

export default function UndergroundPage() {
  return (
    <main className={styles.page}>
      <div className={styles.wallTexture} aria-hidden="true" />
      <header className={styles.header}>
        <Link className={styles.brand} href="/hbc" aria-label="HBC — Hidup Bola Club">
          <img src="/hbc/HB-mascot-white.png" alt="" width={48} height={48} />
          <span>HIDUP BOLA CLUB</span>
        </Link>
        <nav aria-label="Page navigation">
          <Link href="/hbc/after-the-whistle/intro">← THE TUNNEL</Link>
          <span>AFTER THE WHISTLE / 001</span>
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="page-title">
        <p className={styles.sprayTag}>NO. 001 / THE CREW</p>
        <h1 id="page-title"><span>MEET</span><br /><em>THE APES</em></h1>
        <p className={styles.heroCopy}>Six identities. One underground. The crew moves when the whistle stops.</p>
        <span className={styles.heroMark} aria-hidden="true">HBC<br />AFTER<br />HOURS</span>
        <span className={styles.downCue} aria-hidden="true">↓ SCROLL THE WALL</span>
      </section>

      <section className={styles.roster} aria-labelledby="roster-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>THE WALL / CREW FILES</p>
            <h2 id="roster-title">Know the faces.</h2>
          </div>
          <p className={styles.legend}><span>01 — 06</span> / CHARACTER ROSTER</p>
        </div>

        <article className={styles.artistFeature}>
          <div className={styles.artistPortrait}>
            <img src="/hbc/after-the-whistle/the-artist.jpg" alt="The Artist painting a mural in the underground" loading="lazy" />
            <span className={styles.featureStamp}>CREATIVE<br />UNIT / 03—06</span>
            <span className={styles.featureTag}>THE CREATIVE CREW</span>
          </div>
          <div className={styles.artistCollective}>
            <p className={styles.identityLabel}>ONE WALL / THREE VOICES</p>
            <h3 className={styles.collectiveTitle}>Made below<br />the surface.</h3>
            {artistCollective.map((member) => (
              <div className={styles.collectiveMember} key={member.number}>
                <span className={styles.collectiveNumber}>{member.number}</span>
                <div>
                  <p className={styles.collectiveTag}>{member.tag}</p>
                  <h4>{member.identity}</h4>
                  <p className={styles.collectiveSignature}>{member.signature}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className={styles.grid}>
          {crew.map((member) => (
            <article className={styles.card} key={member.number}>
              <div className={styles.portrait}>
                <img src={member.image} alt={`${member.identity} — ${member.signature}`} loading="lazy" />
                <span className={styles.number}>{member.number}</span>
                <span className={styles.tag}>{member.tag}</span>
              </div>
              <div className={styles.cardCopy}>
                <p className={styles.identityLabel}>IDENTITY / {member.number}</p>
                <h3>{member.identity}</h3>
                <p className={styles.signatureLabel}>SIGNATURE</p>
                <p className={styles.signature}>{member.signature}</p>
              </div>
            </article>
          ))}
          <article className={styles.card} key={skater.number}>
            <div className={styles.portrait}>
              <img src={skater.image} alt={`${skater.identity} — ${skater.signature}`} loading="lazy" />
              <span className={styles.number}>{skater.number}</span>
              <span className={styles.tag}>{skater.tag}</span>
            </div>
            <div className={styles.cardCopy}>
              <p className={styles.identityLabel}>IDENTITY / {skater.number}</p>
              <h3>{skater.identity}</h3>
              <p className={styles.signatureLabel}>SIGNATURE</p>
              <p className={styles.signature}>{skater.signature}</p>
            </div>
          </article>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/hbc/after-the-whistle/intro">← BACK THROUGH THE TUNNEL</Link>
        <span>HBC / UNDERGROUND DIVISION</span>
      </footer>
    </main>
  );
}
