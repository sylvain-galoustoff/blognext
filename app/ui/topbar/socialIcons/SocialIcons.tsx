import styles from "./socialIcons.module.css";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

function SocialIcons() {
  return (
    <div id={styles.socialIcons}>
      <div id={styles.wrapper}>
        <a
          href="https://www.linkedin.com/in/sylvain-galoustoff/"
          target="_blank"
          rel="noopener noreferrer"
          title="Voir mon profil LinkedIn"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="https://github.com/sylvain-galoustoff"
          target="_blank"
          rel="noopener noreferrer"
          title="Voir mon profil GitHub"
        >
          <IoLogoGithub />
        </a>
      </div>
    </div>
  );
}

export default SocialIcons;
