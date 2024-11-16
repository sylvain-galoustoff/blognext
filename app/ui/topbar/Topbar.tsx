import MailAdress from "./mailAdress/MailAdress";
import Nav from "./nav/Nav";
import SocialIcons from "./socialIcons/SocialIcons";
import styles from "./topbar.module.css";

function Topbar() {
  return (
    <div id={styles.topbar}>
      <MailAdress />
      <Nav />
      <SocialIcons />
    </div>
  );
}

export default Topbar;
