import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Caffeine Dose — HBC | 6XARCHIVE",
  description: "Caffeine Dose — coffee culture by Hidup Bola Club. Brew by Apes.",
};

const moments = [
  {
    number: "01",
    label: "BEFORE KICK-OFF",
    title: "First pour. First plan.",
    copy: "The match is hours away, but the group chat is already awake.",
  },
  {
    number: "02",
    label: "AT HALF-TIME",
    title: "Take five. Talk tactics.",
    copy: "A short pause, a fresh cup, and a debate that can wait until full-time.",
  },
  {
    number: "03",
    label: "AFTER THE WHISTLE",
    title: "Stay for one more.",
    copy: "The best stories usually start when the game is already over.",
  },
];

export default function CaffeineDosePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.archive}>6XARCHIVE</Link>
        <p>HBC / CAFFEINE DOSE</p>
        <Link href="/hbc" className={styles.back}>HBC ↗</Link>
      </header>

      <section className={styles.hero} aria-labelledby="title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}><span /> HBC COFFEE CULTURE</p>
          <h1 id="title" className={styles.srOnly}>Caffeine Dose — Brew by Apes</h1>
          <Image
            src="/hbc/caffeine-dose/caffeine-dose-lockup.png"
            alt=""
            aria-hidden="true"
            width={2418}
            height={814}
            loading="eager"
            className={styles.wordmark}
          />
          <p className={styles.heroLine}>Good coffee. Better company.</p>
          <p className={styles.heroBody}>
            From the first pour before kick-off to the long talk after the final whistle,
            there&apos;s always room for one more at the table.
          </p>
          <Link href="#ritual" className={styles.heroLink}>
            DISCOVER THE RITUAL <span aria-hidden="true">↓</span>
          </Link>

          <div className={styles.heroMeta} aria-label="Caffeine Dose details">
            <div><span>ROOTS</span><strong>Batu Pahat, Johor</strong></div>
            <div><span>BY</span><strong>Hidup Bola Club</strong></div>
          </div>
        </div>

        <figure className={styles.heroImage}>
          <Image
            src="/hbc/caffeine-dose/coffee-roastery.png"
            alt="A steaming espresso cup, roasted beans, and a hand grinder in a warm neighborhood roastery"
            width={1672}
            height={941}
            loading="eager"
            className={styles.roastery}
          />
          <figcaption>CAFFEINE DOSE / A RITUAL IN THE MAKING</figcaption>
        </figure>
      </section>

      <section className={styles.record} aria-label="Coffee concept record">
        <div><span>DIVISION</span><strong>HBC / 02</strong></div>
        <div><span>RITUAL</span><strong>POUR · PAUSE · PLAY</strong></div>
        <div><span>STATUS</span><strong>THE IDEA</strong></div>
      </section>

      <section className={styles.manifesto} id="ritual" aria-labelledby="manifesto-title">
        <aside className={styles.manifestoAside}>
          <Image
            src="/hbc/caffeine-dose/coffee-emblem.png"
            alt=""
            aria-hidden="true"
            width={1290}
            height={1157}
            className={styles.emblem}
          />
          <p>BREW BY APES</p>
          <span>HBC / COFFEE CULTURE</span>
        </aside>
        <div className={styles.statement}>
          <p className={styles.sectionLabel}>THE HBC COFFEE IDEA</p>
          <h2 id="manifesto-title">Coffee gives the good times somewhere to sit.</h2>
          <p>
            Caffeine Dose is HBC&apos;s coffee concept: built around the familiar rituals that
            happen before a match, between plans, and long after everyone should have gone home.
          </p>
          <p>
            Football brings us together. Coffee keeps the conversation going. No rush to leave,
            no score to settle — just good company and another round.
          </p>
        </div>
      </section>

      <section className={styles.moments} aria-labelledby="moments-title">
        <div className={styles.momentsHeading}>
          <p className={styles.sectionLabel}>THE COFFEE CLOCK</p>
          <h2 id="moments-title">Every match has its moments.</h2>
        </div>
        <div className={styles.momentGrid}>
          {moments.map((moment) => (
            <article className={styles.moment} key={moment.number}>
              <span className={styles.momentNumber}>{moment.number}</span>
              <p className={styles.momentLabel}>{moment.label}</p>
              <h3>{moment.title}</h3>
              <p className={styles.momentCopy}>{moment.copy}</p>
            </article>
          ))}
        </div>
        <p className={styles.momentsNote}>THE GAME ENDS. THE TABLE STAYS OPEN.</p>
      </section>

      <section className={styles.closer} aria-label="Caffeine Dose sign-off">
        <Image
          src="/hbc/caffeine-dose/caffeine-dose-lockup.png"
          alt="Caffeine Dose — Brew by Apes"
          width={2418}
          height={814}
          className={styles.closerLogo}
        />
        <p>Bring the squad. We&apos;ll put the kettle on.</p>
        <Link href="/hbc" className={styles.returnLink}>BACK TO HBC ↗</Link>
      </section>

      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>
        <Link href="/hbc">HBC / DIV-02</Link>
        <p>CAFFEINE DOSE / BREW BY APES</p>
      </footer>
    </main>
  );
}
