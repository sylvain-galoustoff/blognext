import styles from "./mailAdress.module.css";
import { IoCopy } from "react-icons/io5";

function MailAdress() {
  return (
    <div id={styles.mailAdress}>
      <div id={styles.wrapper}>
        <IoCopy />
        <span>contact@sylvain-galoustoff.dev</span>
      </div>
    </div>
  );
}

export default MailAdress;
