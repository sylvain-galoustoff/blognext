import Separator from "../separator/Separator";
import styles from "./footer.module.css";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <footer id={styles.footer}>
      <p id={styles.name}>Sylvain Galoustoff</p>
      <Separator background="text" />
      <div id={styles.jobs}>
        <p>Développeur front-end / React</p>
        <p>UI Designer</p>
      </div>
      <p id={styles.contact}>
        <IoMail />
        contact@sylvain-galoustoff.dev
      </p>
    </footer>
  );
}

export default Footer;
