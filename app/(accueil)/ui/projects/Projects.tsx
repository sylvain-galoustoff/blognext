import Separator from "@/app/ui/separator/Separator";
import styles from "./projects.module.css";

function Projects() {
  return (
    <section id={styles.projects}>
      <div className="container" id={styles.wrapper}>
        <h2>Mes derniers projets</h2>
        <Separator background="bgAlt" />
      </div>
    </section>
  );
}

export default Projects;