import Image from "next/image";
import styles from "./focus.module.css";
import FocusType from "@/app/models/focus";

type FocusCardProps = {
  data: FocusType;
};

function FocusCard({ data }: FocusCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <Image src={`${data.img}.png`} alt={data.alt} fill={true} />
      </div>
      <h2 className={styles.title}>{data.title}</h2>
      <p className={styles.body}>{data.content}</p>
    </div>
  );
}

export default FocusCard;
