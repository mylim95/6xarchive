import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Pixel Apes — HBC | 6XARCHIVE",
  description:
    "Pixel Apes — Hidup Bola Club's digital playground for websites, tools, systems and creative technology.",
};

const things = [
  {
    id: "PX-01",
    title: "WEB",
    description: "Websites, landing pages and digital experiences.",
    status: "BUILDING",
    symbol: "01",
  },
  {
    id: "PX-02",
    title: "TOOLS",
    description: "Useful digital tools made for real-world problems.",
    status: "BUILDING",
    symbol: "02",
  },
  {
    id: "PX-03",
    title: "SYSTEMS",
    description: "Applications, workflows and connected digital systems.",
    status: "EXPERIMENTAL",
    symbol: "03",
  },
  {
    id: "PX-04",
    title: "EXPERIMENTS",
    description: "Ideas, prototypes and strange things worth building.",
    status: "ALWAYS ON",
    symbol: "04",
  },
];

export default function PixelApesPage() {
  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>
          6XARCHIVE
        </Link>

        <p>HBC / PIXEL APES</p>

        <Link href="/hbc" className={styles.back}>
          HBC ↗
        </Link>
      </header>

      {/* COVER */}
      <section className={styles.cover} aria-labelledby="title">
        <div className={styles.coverGrid} aria-hidden="true" />
        <div className={styles.coverGlow} aria-hidden="true" />

        <h1 id="title" className={styles.srOnly}>
          Pixel Apes
        </h1>

        <p className={styles.kicker}>
          HBC SUB-BRAND / DIGITAL DIVISION
        </p>

        <img
          src="/hbc/pixel-apes/lockup.png"
          alt="Pixel Apes logo"
          width={1200}
          height={1200}
          className={styles.coverLockup}
        />

        <p className={styles.coverSub}>
          Digital things, made by Apes.
        </p>

        <div className={styles.coverSignal} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      {/* RECORD STRIP */}
      <section className={styles.strip} aria-label="Sub-brand record">
        <div>
          <p>PARENT DIVISION</p>
          <strong>HBC</strong>
        </div>

        <div>
          <p>TYPE</p>
          <strong>Digital Sub-Line</strong>
        </div>

        <div>
          <p>FOCUS</p>
          <strong>Technology</strong>
        </div>

        <div>
          <p>STATUS</p>
          <strong>Active</strong>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        className={styles.manifesto}
        aria-labelledby="manifesto-title"
      >
        <div className={styles.manifestoMeta}>
          <p>CONCEPT</p>
          <strong>DIGITAL PLAYGROUND</strong>

          <p>OUTPUT</p>
          <strong>WEB / TOOLS / SYSTEMS</strong>

          <p>PHILOSOPHY</p>
          <strong>OLD-SCHOOL SOUL / NEW-SCHOOL TECH</strong>
        </div>

        <div className={styles.statement}>
          <p className={styles.label}>THE CONCEPT</p>

          <h2 id="manifesto-title">
            We make digital things.
          </h2>

          <p className={styles.lede}>
            Pixel Apes is the digital playground of Hidup Bola Club —
            a space for websites, tools, systems, experiments and
            creative technology.
          </p>

          <p className={styles.lede}>
            Inspired by pixels, arcades and the early internet, we mix
            retro culture with modern technology. Simple ideas. Useful
            things. Occasionally weird experiments.
          </p>

          <p className={styles.lede}>
            No unnecessary complexity. No corporate tech-speak.
            Just digital things, made by Apes.
          </p>
        </div>
      </section>

      {/* WHAT WE MAKE */}
      <section
        className={styles.things}
        aria-labelledby="things-title"
      >
        <div className={styles.thingsHeading}>
          <p className={styles.label}>THE PLAYGROUND</p>

          <h2 id="things-title">
            Things we like to build.
          </h2>

          <p>
            From useful tools to experimental digital objects,
            Pixel Apes exists to turn ideas into things.
          </p>
        </div>

        <div className={styles.grid}>
          {things.map((thing) => (
            <article className={styles.card} key={thing.id}>
              <div className={styles.cardTop}>
                <span className={styles.cardId}>
                  {thing.id}
                </span>

                <span className={styles.cardStatus}>
                  {thing.status}
                </span>
              </div>

              <div className={styles.cardVisual}>
                <span className={styles.pixelNumber}>
                  {thing.symbol}
                </span>

                <div className={styles.pixelApe} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className={styles.cardLabel}>
                <h3>{thing.title}</h3>

                <p>{thing.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

            {/* PROJECTS */}
     {/* PROJECTS */}
<section
  className={styles.projects}
  aria-labelledby="projects-title"
>
  <div className={styles.projectsHeading}>
    <p className={styles.label}>SELECTED PROJECTS</p>

    <h2 id="projects-title">
      Things we&apos;re building.
    </h2>

    <p>
      Digital products built from real problems, real ideas and
      a little bit of Ape curiosity.
    </p>
  </div>

  <article className={styles.project}>
    {/* PROJECT IMAGE */}
    <div className={styles.projectVisual}>
      <span className={styles.projectNumber}>
        PX-01 / CUTLY
      </span>

      <img
        src="/hbc/pixel-apes/cutly-case-study.png"
        alt="Cutly — booking and business management app for salons and barbers"
        className={styles.projectImage}
      />
    </div>

    {/* PROJECT INFORMATION */}
    <div className={styles.projectInfo}>
      <div className={styles.projectMeta}>
        <span>PROJECT 01</span>
        <span>DIGITAL PRODUCT</span>
      </div>

      <h3>CUTLY</h3>

      <p className={styles.projectTagline}>
        Appointments, cut down to simple.
      </p>

      <p className={styles.projectDescription}>
        A booking and business management app designed for
        salons and barbers — making it easier to run their
        business and manage their everyday appointments.
      </p>

      <p className={styles.projectDescription}>
        Cutly brings booking, services, staff management,
        reminders, reports and calendar sync into one simple
        digital experience.
      </p>

      <div className={styles.projectDetails}>
        <div>
          <span>TYPE</span>
          <strong>Digital Product</strong>
        </div>

        <div>
          <span>CATEGORY</span>
          <strong>Booking / Business Management</strong>
        </div>

        <div>
          <span>PLATFORM</span>
          <strong>Web / Mobile</strong>
        </div>

        <div>
          <span>STATUS</span>
          <strong>Concept / Development</strong>
        </div>
      </div>

      <div className={styles.projectActions}>
        <span className={styles.projectStatus}>
          ● PIXEL APES PROJECT
        </span>

        <Link href="/hbc/pixel-apes/cutly" className={styles.outlineButton}>VIEW PRODUCT ↗</Link>
      </div>
    </div>
  </article>
</section>

      {/* CLOSER */}
      <section
        className={styles.closer}
        aria-label="Pixel Apes motto"
      >
        <img
          src="/hbc/pixel-apes/wordmark.png"
          alt="Pixel Apes wordmark"
          width={1564}
          height={662}
          className={styles.closerWordmark}
        />

        <p className={styles.closerFinal}>
          Old-school soul. New-school technology.
        </p>

        <p className={styles.closerSub}>
          100% Buatan Apes.
        </p>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>

        <Link href="/hbc">
          HBC / DIV-02
        </Link>

        <p>PIXEL APES / END OF RECORD</p>
      </footer>
    </main>
  );
}