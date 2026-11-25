import Link from "next/link";
import styles from "./24dragon/page.module.css";

type Props = { year: number; yearCode: string; cycleName: string; animal: string };

export default function YearArchive({ year, yearCode, cycleName, animal }: Props) {
  return (
    <main className={styles.page}>
      <header className={styles.header}><Link href="/hbc/cny">← CNY ZODIAC</Link><span>HBC / {String(year).slice(-2)} {animal.toUpperCase()}</span><Link href="/hbc">HBC ↗</Link></header>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>HBC · LUNAR ARCHIVE · {year}</p>
        <p className={styles.year} lang="zh-Hans">{yearCode}</p>
        <h1 lang="zh-Hant">{cycleName}</h1>
        <p className={styles.subtitle}>THE YEAR OF THE {animal.toUpperCase()}</p>
        <img src="/hbc/cny/CNY-ape.png" alt="HBC Chinese New Year ape mascot" />
        <Link className={styles.back} href="/hbc/cny">RETURN TO THE TWELVE SIGNS ↗</Link>
      </section>
    </main>
  );
}
