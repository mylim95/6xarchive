import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import downloadStyles from "./download.module.css";

export const metadata: Metadata = {
  title: "IDX-000 — The Curator | 6XARCHIVE",
  description: "The personal record of Ming Yang, digital operations and web support executive.",
};

const capabilities = [
  ["01", "Digital platforms", "Microsite management, website maintenance, content publishing, and customer-facing digital experiences."],
  ["02", "Operations", "Campaign support, troubleshooting, maintenance coordination, documentation, and SLA-aware delivery."],
  ["03", "Technical foundation", "PHP, MySQL, SQL Server, MongoDB, CodeIgniter, Yii, Laravel, CRM systems, and backend support."],
  ["04", "Creative inquiry", "Collectible customization, mascot concepts, packaging direction, coffee culture, and hospitality aesthetics."],
];

export default function CuratorPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>6XARCHIVE</Link>
        <p>INDEXED PERSONAL RECORD / 000</p>
        <a href="#record" className={styles.back}>RETURN TO FILE ↓</a>
      </header>

      <section className={styles.cover} aria-labelledby="title">
        <div className={styles.coverNoise} aria-hidden="true" />
        <p className={styles.kicker}>IDX-000 / FIRST ACCESSION</p>
        <h1 id="title">THE<br /><em>CURATOR</em></h1>
        <div className={styles.identity}>
          <p>MING YANG</p>
          <span>Digital Operations &amp; Web Support Executive</span>
          <span>Singapore / SG</span>
        </div>
        <p className={styles.coverFoot}>A RECORD OF SYSTEMS, STORIES, AND SELECTED MATTER</p>
      </section>

      <section id="record" className={styles.record} aria-labelledby="statement-title">
        <div className={styles.recordMeta}>
          <p>OBJECT TYPE</p><strong>PERSONAL ARCHIVE</strong>
          <p>STATUS</p><strong>ACTIVE / EVOLVING</strong>
          <p>ESTABLISHED</p><strong>2018 - PRESENT</strong>
        </div>
        <div className={styles.statement}>
          <p className={styles.label}>CURATOR&apos;S STATEMENT</p>
          <h2 id="statement-title">Building the practical systems behind experiences, then collecting the details that make them memorable.</h2>
          <p className={styles.lede}>Ming Yang works at the point where dependable digital operations meet a lasting fascination with visual culture, hospitality, and objects with personality. This archive is a place to give both sides of that practice equal weight.</p>
          <a className={downloadStyles.download} href="/resume/ming-yang-resume.pdf" download>
            <span>DOWNLOAD RÉSUMÉ</span>
            <b aria-hidden="true">↓</b>
          </a>
        </div>
      </section>

      <section className={styles.foundation} aria-labelledby="foundation-title">
        <div>
          <p className={styles.label}>PROFESSIONAL FOUNDATION</p>
          <h2 id="foundation-title">Digital operations<br />with a maker&apos;s eye.</h2>
        </div>
        <div className={styles.timeline}>
          <article>
            <p>2019 - 2026</p>
            <h3>CPR Vision Management Pte Ltd</h3>
            <strong>Digital Operations &amp; Web Support Executive</strong>
            <span>Regional hospitality, CRM, loyalty, and marketing platforms. Microsite management, AEM content support, campaign coordination, troubleshooting, and operational continuity.</span>
          </article>
          <article>
            <p>2018 - 2019</p>
            <h3>SGshop Malaysia</h3>
            <strong>IT Developer / IT Trainee</strong>
            <span>Backend development, systems engineering, e-commerce platform support, and the full-stack fundamentals that continue to inform the work.</span>
          </article>
          <article>
            <p>2015 - 2018</p>
            <h3>Universiti Teknikal Malaysia Melaka</h3>
            <strong>Bachelor&apos;s Degree, Computer Science</strong>
            <span>A technical grounding in building, maintaining, and thinking through digital systems.</span>
          </article>
        </div>
      </section>

      <section className={styles.capabilities} aria-labelledby="capabilities-title">
        <div className={styles.capabilityIntro}>
          <p className={styles.label}>CREATIVE CAPABILITIES</p>
          <h2 id="capabilities-title">The working collection.</h2>
        </div>
        <div className={styles.capabilityList}>
          {capabilities.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.exploration} aria-labelledby="exploration-title">
        <p className={styles.label}>CURRENT EXPLORATION</p>
        <h2 id="exploration-title">Collectibles, coffee, and the atmosphere around an object.</h2>
        <p>Personal work explores Southeast Asian-inspired collectible customization, mascot and packaging ideas, lifestyle brand storytelling, and the small rituals of cafe culture. These are not side notes to the record - they are its next exhibits.</p>
        <div className={styles.stamp}>NEXT<br />ARC-001</div>
      </section>

      <footer className={styles.footer}>
        <p>6XARCHIVE / DIGITAL MUSEUM</p>
        <a href="mailto:mylim95@gmail.com">mylim95@gmail.com</a>
        <p>IDX-000 / END OF RECORD</p>
      </footer>
    </main>
  );
}
