import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cutly — Pixel Apes",
  description:
    "Cutly is a Pixel Apes digital product concept for salons and barbers — book, manage, grow.",
};

const features = [
  ["01", "Online Booking", "Let customers book without the back-and-forth."],
  ["02", "Automated Reminders", "Reduce missed appointments and manual follow-up."],
  ["03", "Manage Staff & Services", "Keep services, staff and working hours in one place."],
  ["04", "Simple Reports", "See bookings, revenue and business performance."],
  ["05", "Business Settings", "Control the essentials from one workspace."],
  ["06", "Calendar Sync", "Keep appointments aligned with Google Calendar."],
];

const flow = [
  ["01", "Business", "Find a salon or barber."],
  ["02", "Service", "Choose the service you need."],
  ["03", "Date & Time", "Pick an available slot."],
  ["04", "Customer", "Enter your details."],
  ["05", "Confirmation", "Get instant confirmation."],
];

const process = [
  ["01", "Concept", "Identify the problem and opportunity."],
  ["02", "Business Analysis", "Define requirements and user flow."],
  ["03", "Product Design", "Shape the UX and product experience."],
  ["04", "Development", "Build and iterate the solution."],
  ["05", "UAT", "Test the product with real users."],
  ["06", "Launch", "Release and continue improving."],
];

function ImageSlot({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`${styles.imageFrame} ${className ?? ""}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 70vw" />
    </div>
  );
}

export default function CutlyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>6XARCHIVE</Link>
        <span>PIXEL APES / PX-01</span>
        <Link href="/hbc/pixel-apes" className={styles.headerLink}>PIXEL APES ↗</Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>PX-01 / DIGITAL PRODUCT</p>
          <div className={styles.wordmarkWrap}>
            <Image src="/hbc/pixel-apes/wordmark.png" alt="Cutly" width={442} height={185} priority />
          </div>
          <h1>A simpler way for salons &amp; barbers to run their business.</h1>
          <p className={styles.heroText}>
            A booking and business management concept by Pixel Apes — designed around the everyday workflow of independent salons and barbers.
          </p>
          <div className={styles.pills}><span>BOOK</span><span>MANAGE</span><span>GROW</span></div>
        </div>
        <ImageSlot src="/hbc/pixel-apes/cutly-case-study.png" alt="Cutly product presentation" className={styles.heroImage} />
      </section>

      <section className={styles.recordStrip}>
        <div><small>PARENT</small><strong>PIXEL APES</strong></div>
        <div><small>TYPE</small><strong>DIGITAL PRODUCT</strong></div>
        <div><small>CATEGORY</small><strong>BOOKING / BMS</strong></div>
        <div><small>STATUS</small><strong>IN DEVELOPMENT</strong></div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionNo}>01</div>
        <div className={styles.sectionContent}>
          <p className={styles.eyebrow}>THE PROBLEM / CURRENT WORKFLOW</p>
          <div className={styles.headingRow}>
            <h2>Booking shouldn’t be this hard.</h2>
            <p>Many small salons and barbers still rely on messages, phone calls and walk-ins. Cutly starts by making that messy workflow visible.</p>
          </div>
          <ImageSlot src="/hbc/pixel-apes/problem-workflow.png" alt="Illustrated manual booking workflow using messaging, phone calls and walk-ins" className={styles.wideVisual} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.darkPanel}`}>
        <div className={styles.sectionNo}>02</div>
        <div className={styles.sectionContent}>
          <p className={styles.eyebrow}>THE SOLUTION</p>
          <div className={styles.headingRow}>
            <h2>Everything you need, in one place.</h2>
            <p>Cutly brings customer booking and everyday business management into one focused product.</p>
          </div>
          <ImageSlot src="/hbc/pixel-apes/product-ui-overview.png" alt="Cutly product UI overview" className={styles.wideVisual} />
          <div className={styles.featureGrid}>
            {features.map(([no, title, text]) => (
              <article key={no} className={styles.featureCard}>
                <span>{no}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionNo}>03</div>
        <div className={styles.sectionContent}>
          <p className={styles.eyebrow}>BOOKING FLOW</p>
          <div className={styles.headingRow}>
            <h2>A simple five-step booking process.</h2>
            <p>The customer journey is deliberately short: discover, choose, schedule, confirm.</p>
          </div>
          <ImageSlot src="/hbc/pixel-apes/booking-flow.png" alt="Illustrated five-step Cutly booking flow" className={styles.wideVisual} />
          <div className={styles.flowGrid}>
            {flow.map(([no, title, text]) => (
              <div className={styles.flowItem} key={no}><b>{no}</b><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.darkPanel}`}>
        <div className={styles.sectionNo}>04</div>
        <div className={styles.sectionContent}>
          <p className={styles.eyebrow}>BEHIND THE PRODUCT / BA</p>
          <div className={styles.headingRow}>
            <h2>Before we build, we define.</h2>
            <p>Cutly is being developed as a product system — not just a collection of screens. The BA work turns business needs into flows, rules and a buildable solution.</p>
          </div>
          <ImageSlot src="/hbc/pixel-apes/ba-system-overview.png" alt="Simplified Cutly business and system flow diagram" className={styles.wideVisual} />
          <div className={styles.processMini}>
            <div>DISCOVER</div><i>→</i><div>DEFINE</div><i>→</i><div>DESIGN</div><i>→</i><div>BUILD</div>
          </div>
          <Link href="/hbc/pixel-apes/process" className={styles.outlineButton}>VIEW PRODUCT PROCESS ↗</Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionNo}>05</div>
        <div className={styles.sectionContent}>
          <p className={styles.eyebrow}>PRODUCT PREVIEW</p>
          <div className={styles.headingRow}><h2>From idea to interface.</h2><p>Selected product views from the current Cutly concept.</p></div>
          <div className={styles.uiGrid}>
            <ImageSlot src="/hbc/pixel-apes/ui-booking.png" alt="Cutly booking screen" />
            <ImageSlot src="/hbc/pixel-apes/ui-calendar-sync.png" alt="Cutly calendar sync screen" />
            <ImageSlot src="/hbc/pixel-apes/ui-analytics.png" alt="Cutly analytics and revenue screen" />
          </div>
          <div className={styles.uiLabels}><span>01 / BOOKING</span><span>02 / CALENDAR SYNC</span><span>03 / ANALYTICS / REVENUE</span></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.darkPanel}`}>
        <div className={styles.sectionNo}>06</div>
        <div className={styles.sectionContent}>
          <p className={styles.eyebrow}>APPLICATION PROCESS</p>
          <div className={styles.headingRow}><h2>From concept to launch.</h2><p>A simple view of how a Pixel Apes product moves from a business problem to a usable digital solution.</p></div>
          <ImageSlot src="/hbc/pixel-apes/application-process.png" alt="Cutly product development process" className={styles.processVisual} />
          <div className={styles.processGrid}>
            {process.map(([no, title, text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className={styles.statusSection}>
        <p className={styles.eyebrow}>PROJECT STATUS</p>
        <h2>Still building.</h2>
        <div className={styles.statusLine}><span className={styles.done}>CONCEPT ✓</span><span className={styles.done}>BA ✓</span><span className={styles.done}>REQUIREMENTS ✓</span><span className={styles.active}>DEVELOPMENT ●</span><span>UAT ○</span><span>LAUNCH ○</span></div>
      </section>

      <section className={styles.closer}>
        <p className={styles.eyebrow}>A PIXEL APES PROJECT</p>
        <h2>Good products start with good problems.</h2>
        <p>Cutly is one of the digital things being explored and built under Pixel Apes.</p>
        <Link href="/hbc/pixel-apes" className={styles.outlineButton}>BACK TO PIXEL APES ↗</Link>
      </section>

      <footer className={styles.footer}><span>6XARCHIVE / PIXEL APES</span><span>CUTLY / PX-01</span><span>BOOK · MANAGE · GROW</span></footer>
    </main>
  );
}
