import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header id={styles.header}>
        <h1>Home</h1>
      </header>
      <section id={styles.focus}>focus cards</section>
      <section id={styles.projects}>Projets</section>
    </div>
  );
}
