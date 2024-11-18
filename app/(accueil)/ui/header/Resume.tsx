import Avatar from "@/app/ui/avatar/Avatar";
import styles from "./header.module.css";

function Resume() {
  return (
    <div id={styles.resume}>
      <Avatar />
      <div id={styles.resumeText}>
        <p id={styles.name}>Sylvain Galoustoff</p>
        <p id={styles.job}>Spécialiste des interfaces utilisateur</p>
        <p id={styles.slogan}>De Figma à React</p>
      </div>
    </div>
  );
}

export default Resume;
