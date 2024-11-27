import styles from "./button.module.css";
import { Outfit } from "next/font/google";

type ButtonLinkProps = {
  variant?: string;
  size?: "regular" | "big" | "small";
  label: string;
  href: string;
  target: "_blank";
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  display: "swap",
});

function ButtonLink({ variant, size, label, href, target }: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={target === "_blank" ? "_blank" : undefined}
      className={`${outfit.className} ${styles.button} ${variant && styles[variant]} ${
        size && styles[size]
      }`}
    >
      {label}
    </a>
  );
}

export default ButtonLink;
