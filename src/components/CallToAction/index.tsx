import { MdWhatsapp } from "react-icons/md";
import { Button } from "../Buttom";
import styles from "./styles.module.css";

export function CallToAction() {
  return (
    <section className={styles.actionContainer}>
      <div className={`container ${styles.actionContainerContent}`}>
        <header>
          <h4>Seu sorriso merece o melhor cuidado</h4>
          <h2>Agende sua consulta e descubra uma nova forma de cuidar da sua saúde bucal!</h2>
        </header>

          <Button link="#contato" className="btn btn-secondary">
            <MdWhatsapp size={24}/>
            Agendar consulta
          </Button>
      </div>
    </section>
  )
}