import FocusCard from "./FocusCard";
import styles from "./focus.module.css";
import { focus } from "@/app/lib/mock";

function Focus() {
  const renderCards = focus.map((card) => <FocusCard key={card.id} data={card} />);

  return (
    <section id={styles.focus}>
      <div className="container" id={styles.wrapper}>
        {renderCards}
      </div>
    </section>
  );
}

export default Focus;
