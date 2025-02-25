"use client"

import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  className?: string
};

export function ButtonFlutuante({ children, className }: Props) {
  return (
    <button
      className={className}
      onClick={() =>
        window.open(
          "https://api.whatsapp.com/send?phone=551434014400&text=Estou%20querendo%20saber%20mais%20sobre%20o%20MF%20MOV",
          "_blank"
        )
      }
    >
      {children}
    </button>
  );
}