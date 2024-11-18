import styles from "./page.module.css";
import Avatar from "./ui/avatar/Avatar";
import Separator from "./ui/separator/Separator";

export default function Home() {
  return (
    <div className={styles.page}>
      <header id={styles.header}>
        <div className="container" id={styles.headerContent}>
          <div id={styles.resume}>
            <Avatar />
            <div id={styles.resumeText}>
              <p id={styles.name}>Sylvain Galoustoff</p>
              <p id={styles.job}>Spécialiste des interfaces utilisateur</p>
              <p id={styles.slogan}>De Figma à React</p>
            </div>
          </div>
          <Separator background="text" />
          <div id={styles.introText}>
            <p>
              Spécialisé dans la création d’interfaces web et mobiles modernes et
              réactives, je m’efforce de placer l’utilisateur au cœur de chaque projet.
            </p>
            <p>
              De la conception visuelle au développement, je prends en charge l’ensemble
              du processus pour offrir des expériences fluides, agréables et centrées sur
              les besoins de l’utilisateur.
            </p>
          </div>
          <Separator background="text" />
          <div></div>
        </div>
      </header>
      <section id={styles.focus}>focus cards</section>
      <section id={styles.projects}>Projets</section>
    </div>
  );
}
