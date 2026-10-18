import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Wanderland 玩乐猿 — HBC | 6XARCHIVE",
  description: "Wanderland 玩乐猿 — HBC's outdoor and adventure sub-brand. Lead by apes.",
};

const waypoints = [
  { id: "01", name: "Basecamp", note: "Pack the bag. Argue about the route." },
  { id: "02", name: "Trailhead", note: "Last signal. First wrong turn." },
  { id: "03", name: "The Wild", note: "No itinerary. Just apes and a compass." },
  { id: "04", name: "Summit", note: "Plant the flag. Light the stove." },
];

const terrain = ["Camping", "Hiking", "Overlanding", "Fishing", "Bonfire Nights", "Off-Road"];

export default function WanderlandPage() {
  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>6XARCHIVE</Link>
        <p>HBC / WANDERLAND</p>
        <Link href="/hbc" className={styles.back}>HBC ↗</Link>
      </header>

      {/* COVER */}
      <section className={styles.cover} aria-labelledby="title">
        <div className={styles.coverGrain} aria-hidden="true" />
        <h1 id="title" className={styles.srOnly}>Wanderland 玩乐猿 — Lead by Apes</h1>
        <p className={styles.kicker}>HBC SUB-BRAND / OUTDOOR &amp; ADVENTURE</p>
        <img
          src="/hbc/wanderland/icon-full.png"
          alt="Wanderland explorer ape mascot"
          width={3415}
          height={3462}
          className={styles.coverIcon}
        />
        <img
          src="/hbc/wanderland/wordmark-en.png"
          alt="Wanderland — Lead by Apes"
          width={7387}
          height={2716}
          className={styles.coverWordmark}
        />
        <img
          src="/hbc/wanderland/wordmark-cn.png"
          alt="玩乐猿"
          width={7543}
          height={3130}
          className={styles.coverWordmarkCn}
        />
      </section>

      {/* RECORD STRIP */}
      <section className={styles.strip} aria-label="Sub-brand record">
        <div><p>PARENT DIVISION</p><strong>HBC</strong></div>
        <div><p>TYPE</p><strong>Outdoor / Camp</strong></div>
        <div><p>中文</p><strong>玩乐猿</strong></div>
        <div><p>STATUS</p><strong>Active</strong></div>
      </section>

      {/* MANIFESTO */}
      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <div className={styles.manifestoMeta}>
          <p>MOTTO</p><strong>LEAD BY APES</strong>
          <p>TERRAIN</p><strong>CAMP · TRAIL · WILD</strong>
        </div>
        <div className={styles.statement}>
          <p className={styles.label}>THE EXPEDITION</p>
          <h2 id="manifesto-title">Apes don&apos;t follow trails. They make them.</h2>
          <p className={styles.lede}>
            Wanderland is HBC&apos;s outdoor arm — camping, hiking, overlanding, and everything
            that happens when the squad leaves the kopitiam for the wild. No itinerary, no
            air-con, just a compass and questionable decision-making.
          </p>
          <p className={styles.lede}>
            玩乐猿 — the ape who plays. Lead by apes, followed by anyone brave enough to keep up.
          </p>
        </div>
      </section>

      {/* THE ROUTE */}
      <section className={styles.route} aria-labelledby="route-title">
        <div className={styles.routeGrain} aria-hidden="true" />
        <div className={styles.routeHeading}>
          <p className={styles.label} style={{ color: "var(--w-cream)" }}>THE ROUTE</p>
          <h2 id="route-title">Every trip starts at basecamp.</h2>
        </div>

        <ol className={styles.trail}>
          {waypoints.map((wp) => (
            <li className={styles.waypoint} key={wp.id}>
              <span className={styles.waypointDot}>{wp.id}</span>
              <h3>{wp.name}</h3>
              <p>{wp.note}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TERRAIN */}
      <section className={styles.terrain} aria-labelledby="terrain-title">
        <p className={styles.label}>WHAT WE GET UP TO</p>
        <h2 id="terrain-title">Field notes, by terrain.</h2>
        <ul className={styles.terrainList}>
          {terrain.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      {/* CLOSER */}
      <section className={styles.closer} aria-label="Wanderland motto">
        <img
          src="/hbc/wanderland/icon-olive.png"
          alt=""
          aria-hidden="true"
          width={1708}
          height={1732}
          className={styles.closerIcon}
        />
        <p className={styles.closerFinal}>Pack light. Wander far.</p>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>
        <Link href="/hbc">HBC / DIV-02</Link>
        <p>WANDERLAND / END OF TRAIL</p>
      </footer>
    </main>
  );
}