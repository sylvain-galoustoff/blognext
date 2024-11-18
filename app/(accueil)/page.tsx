import styles from "./page.module.css";
import Header from "./ui/header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <section id={styles.focus}>focus cards</section>
      <section id={styles.projects}>Projets</section>
    </div>
  );
}
