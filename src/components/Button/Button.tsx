import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  type = "button",
  children,
  isDisabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      className={styles.button}
    >
      {children}
    </button>
  );
}
