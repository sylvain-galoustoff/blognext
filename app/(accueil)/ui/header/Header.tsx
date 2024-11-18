import Separator from "@/app/ui/separator/Separator";
import styles from "./header.module.css";
import Resume from "./Resume";
import IntroText from "./IntroText";
import Cta from "./Cta";

function Header() {
  return (
    <header id={styles.header}>
      <div id={styles.headerContent}>
        <Resume />
        <Separator background="text" />
        <IntroText />
        <Separator background="text" />
        <Cta />
      </div>
    </header>
  );
}

export default Header;
