import styles from "./header.module.css";

function IntroText() {
  return (
    <div className={styles.container} id={styles.introText}>
      <p>
        Spécialisé dans la création d’interfaces web et mobiles modernes et réactives, je
        m’efforce de placer l’utilisateur au cœur de chaque projet.
      </p>
      <p>
        De la conception visuelle au développement, je prends en charge l’ensemble du
        processus pour offrir des expériences fluides, agréables et centrées sur les
        besoins de l’utilisateur.
      </p>
    </div>
  );
}

export default IntroText;
