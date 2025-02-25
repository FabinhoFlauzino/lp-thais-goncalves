import { ElementsServices } from "@/data/Services";
import styles from "./styles.module.css"
import { MdCheckCircle } from "react-icons/md";

export function Services() {
  return (
    <section className={styles.services}>
      <div className={`container ${styles.servicesContainer}`}>
        <header>
          <h4>Confira alguns dos tratamentos que oferecemos</h4>
          <h2>Como podemos ajudá-lo a se sentir melhor?</h2>
        </header>

        <div className={styles.content}>
          <div className={styles.cards}>
            {
              ElementsServices && ElementsServices.map((service) => (
                <div className={styles.card} key={service.id}>
                  <MdCheckCircle size={24} />

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}