import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <h1>header</h1>
      </header>
      <section id={styles.focus}>focus cards</section>
      <section id={styles.projets}>Projets</section>
    </div>
  );
}
