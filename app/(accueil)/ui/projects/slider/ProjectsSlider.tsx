"use client";

import Slide from "./Slide";
import styles from "./slider.module.css";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { projects } from "@/app/lib/mock";
import { useState } from "react";

function ProjectsSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const renderSlides = projects.map((project) => (
    <Slide key={project.id} data={project} currentIndex={slideIndex} />
  ));

  const changeSlide = (direction: "previous" | "next") => {
    let newIndex = 0;
    if (direction === "previous") {
      newIndex = slideIndex - 1;
      if (newIndex < 0) {
        newIndex = 0;
      }
    } else if (direction === "next") {
      newIndex = slideIndex + 1;
      if (newIndex > projects.length - 1) {
        newIndex = projects.length - 1;
      }
    }
    setSlideIndex(newIndex);
  };

  return (
    <div id={styles.slider}>
      <div id={styles.header}>
        <h3 id={styles.title}>{projects[slideIndex].name}</h3>
        <p id={styles.description}>{projects[slideIndex].description}</p>
      </div>
      <div id={styles.window}>
        <div
          id={styles.wrapper}
          style={{ transform: `translateX(${(-slideIndex * 100) / 3}%)` }}
        >
          {renderSlides}
        </div>
      </div>
      <div id={styles.counter}>
        <IoCaretBack className={styles.arrow} onClick={() => changeSlide("previous")} />
        <span className={styles.number} id={styles.current}>
          {slideIndex + 1}
        </span>
        |
        <span className={styles.number} id={styles.total}>
          {projects.length}
        </span>
        <IoCaretForward className={styles.arrow} onClick={() => changeSlide("next")} />
      </div>
    </div>
  );
}

export default ProjectsSlider;
