import Image from "next/image"
import styles from "./styles.module.css"
import logo from "@/assets/logo-transparente.png"
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si"
import Link from "next/link"
import { CiLocationOn, CiPhone } from "react-icons/ci"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { NavbarMenu } from "@/data/NavbarMenu"
import { ButtonFlutuante } from "../Buttom/ButtonFlutuante"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <Image src={logo} alt="Logo" />

            <p>Oferecemos atendimento personalizado com Odontologia do Sono e laserterapia para melhorar sua saúde bucal, qualidade de sono e aliviar dores, tornando seus tratamentos mais eficazes e confortáveis.</p>

            <ul className={styles.redesSociais}>
              <li>
                <Link href="https://www.facebook.com/dra.thagoncalves" target="_blank">
                  <SiFacebook size={30} />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/dra_thagoncalves" target="_blank">
                  <SiInstagram size={30} />
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.linksUteis}>
            <div>
              <h3>Recursos</h3>

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
            </div>
            <div>
              <h3>Mapa do site</h3>

              <ul>
                {
                  NavbarMenu.map((link) => (
                    <li key={link.id}>
                      <Link href={link.link}>{link.title}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h3>Mais informações</h3>

              <ButtonFlutuante className="btn btn-secondary">
                <SiWhatsapp size={20}/>
                Saiba mais
              </ButtonFlutuante>
            </div>
          </div>
        </div>

        <hr />

        <p className={styles.copy}>&copy; {new Date().getFullYear()}. Todos os direitos reservados. Desenvolvido por <Link href="https://www.linkedin.com/in/fabioflauzino" target="_blank">Fabio Flauzino</Link>.
        </p>
      </div>
    </footer>
  )
}