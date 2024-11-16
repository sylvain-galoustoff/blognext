import Link from "next/link";
import styles from "./nav.module.css";

function Nav() {
  return (
    <nav id={styles.navbar}>
      <ul>
        <li className={styles.active}>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/projets">Projets</Link>
        </li>
        <li>
          <Link href="/a-propos">A propos</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
