import styles from "./button.module.css";
import { Outfit } from "next/font/google";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: string;
  size?: "regular" | "big" | "small";
  label: string;
  onClick?: () => void;
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  display: "swap",
});

function Button({
  type = "button",
  variant,
  label,
  size = "regular",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${outfit.className} ${styles.button} ${variant && styles[variant]} ${
        size && styles[size]
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
