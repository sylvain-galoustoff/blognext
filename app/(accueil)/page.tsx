import styles from "./page.module.css";
import Focus from "./ui/focus/Focus";
import Header from "./ui/header/Header";
import Projects from "./ui/projects/Projects";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Focus />
      <Projects />
    </div>
  );
}
