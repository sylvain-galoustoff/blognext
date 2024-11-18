import styles from "./separator.module.css";

type SeparatorProps = {
  background: "text";
};

function Separator({ background }: SeparatorProps) {
  return (
    <div className={`${styles.separator} ${styles[background]}`}>
      <div className={styles.mask}>
        <div className={styles.square} />
      </div>
    </div>
  );
}

export default Separator;
