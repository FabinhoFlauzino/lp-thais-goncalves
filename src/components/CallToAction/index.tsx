import { Button } from "../Buttom";
import styles from "./styles.module.css";

export function CallToAction() {
  return (
    <section className={styles.actionContainer}>
      <div className={`container ${styles.actionContainerContent}`}>
        <header>
          <p>Seu sorriso merece o melhor cuidado</p>
          <h2>Agende sua consulta e descubra uma nova forma de cuidar da sua saúde bucal!</h2>
        </header>

          <Button link="#contato" className="btn btn-secondary">
            Agendar consulta
          </Button>
      </div>
    </section>
  )
}