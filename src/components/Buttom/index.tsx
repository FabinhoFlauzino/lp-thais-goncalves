"use client"

import Link from "next/link";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode
  link: string
  className?: string
};

export function Button({ children, link, className }: Props) {
  return (
    <Link
      className={className}
      href={link}
    >
      {children}
    </Link>
  );
}
