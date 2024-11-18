import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <header id={styles.header}>
        <h1>About</h1>
      </header>
    </div>
  );
}