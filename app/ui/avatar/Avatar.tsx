import Image from "next/image";
import styles from "./avatar.module.css";

function Avatar() {
  return (
    <div id={styles.avatar}>
      <Image
        src="/avatar_sylvain_galoustoff.jpg"
        alt="Portrait de Sylvain Galoustoff"
        width={150}
        height={150}
      />
    </div>
  );
}

export default Avatar;
