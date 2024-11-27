import Image from "next/image";
import styles from "./slider.module.css";
import { useEffect, useState } from "react";
import ButtonLink from "@/app/ui/button/ButtonLink";

type SlideProps = {
  data: ProjectType;
  currentIndex: number;
};

function Slide({ data, currentIndex }: SlideProps) {
  const [isCurrentSlide, setIsCurrentSlide] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const id = data.id - 1;
    if (currentIndex === id) {
      setIsCurrentSlide(true);
      setOpacity(1);
    } else if (currentIndex === id - 1 || currentIndex === id + 1) {
      setIsCurrentSlide(false);
      setOpacity(0.5);
    } else {
      setIsCurrentSlide(false);
      setOpacity(0);
    }
  }, [currentIndex]);

  return (
    <div
      className={styles.slide}
      style={{
        opacity,
        transform: isCurrentSlide ? `scale(1)` : `scale(.75)`,
      }}
    >
      <div className={styles.thumbnail}>
        <Image src={`/thumbnails/${data.thumbnail}`} alt="alt text" fill={true} />
      </div>
      <ButtonLink
        variant="primary"
        label="Voir le site"
        size="small"
        href={data.link}
        target="_blank"
      />
    </div>
  );
}

export default Slide;
