import { Navbar } from "@/components/Navbar";
import styles from "./page.module.css"
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
