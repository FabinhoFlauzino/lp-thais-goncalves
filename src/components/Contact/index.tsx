import { MdWhatsapp } from "react-icons/md"
import styles from "./styles.module.css"
import { CiLocationOn, CiPhone } from "react-icons/ci"
import Link from "next/link"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { ButtonFlutuante } from "../Buttom/ButtonFlutuante"

export function Contact() {
  return (
    <section id="contato" className="bg-beige">
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.contactContent}>
          <header>
            <p>Nossos contatos</p>
            <h2>Entre em contato com a gente!</h2>
          </header>

          <div className={styles.content}>
            <ul>
              <li>
                <CiLocationOn size={30} />
                <div className={styles.location}>
                  <span>Av. Carlos Gomes, 553 - Sala 22</span>
                  <span>Centro - Marília - SP, 17500-030</span>
                </div>
              </li>
              <li>
                <CiPhone size={30} />
                <div>
                  <Link href="tel:551434339411">(14) 3433-9411</Link>
                </div>
              </li>
              <li>
                <IoPhonePortraitOutline size={30} />
                <div>
                  <Link href="mailto:5514998003555">(14) 99800-3555</Link>
                </div>
              </li>
            </ul>

            <ButtonFlutuante className="btn btn-primary">
              <MdWhatsapp size={24} />
              Agendar consulta
            </ButtonFlutuante>
          </div>
        </div>
        <div className={styles.contactImage}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4414.991088805239!2d-49.9476455!3d-22.2177844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfd7c298a18981%3A0x483ed106b5ee200b!2sDra.%20Tha%C3%ADs%20F.%20In%C3%A1cio%20Gon%C3%A7alves%20-%20Odontologia%20do%20Sono!5e1!3m2!1spt-BR!2sbr!4v1740528946326!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" title="Localização do Endereço" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}