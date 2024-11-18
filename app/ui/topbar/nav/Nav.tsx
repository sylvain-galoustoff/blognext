"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./nav.module.css";
import { useEffect } from "react";

function Nav() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  });

  return (
    <nav id={styles.navbar}>
      <ul>
        <li className={`${pathname === "/" && styles.active}`}>
          <Link href="/">Accueil</Link>
        </li>
        <li className={`${pathname === "/projets" && styles.active}`}>
          <Link href="/projets">Projets</Link>
        </li>
        <li className={`${pathname === "/a-propos" && styles.active}`}>
          <Link href="/a-propos">A propos</Link>
        </li>
        <li className={`${pathname === "/contact" && styles.active}`}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
