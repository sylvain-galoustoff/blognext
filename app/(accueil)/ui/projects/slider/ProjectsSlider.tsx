import Button from "@/app/ui/button/Button";
import styles from "./slider.module.css";
import Image from "next/image";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";

function ProjectsSlider() {
  return (
    <div id={styles.slider}>
      <div id={styles.header}>
        <h3 id={styles.title}>Slide title</h3>
        <p id={styles.description}>Slogan ou description</p>
      </div>
      <div id={styles.wrapper}>
        <div className={styles.slide}>
          <div className={styles.thumbnail}>
            <Image
              src="/thumbnails/laptop-myexpressdriver.png"
              alt="alt text"
              fill={true}
            />
          </div>
        </div>
      </div>
      <div id={styles.counter}>
        <IoCaretBack />
        <span id={styles.number}>1</span>|<span id={styles.total}>3</span>
        <IoCaretForward />
      </div>
    </div>
  );
}

export default ProjectsSlider;
