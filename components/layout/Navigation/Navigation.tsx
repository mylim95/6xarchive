import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={styles.nav}>
      <a href="#entrance" className={styles.logo} aria-label="6XARCHIVE entrance">6XARCHIVE</a>
      <p className={styles.location}>EXHIBITION 00 <span>/</span> ENTRANCE</p>
      <nav className={styles.menu} aria-label="Archive navigation">
        <a href="/idx-000" className={styles.link}>INDEX</a>
        <a href="/faded-archive" className={styles.link}>FADED ARCHIVE</a>
      </nav>
    </header>
  );
}
