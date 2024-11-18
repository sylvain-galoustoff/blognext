import styles from "./page.module.css";
import Focus from "./ui/focus/Focus";
import Header from "./ui/header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Focus />
      <section id={styles.projects}>Projets</section>
    </div>
  );
}
