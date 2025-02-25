import Image from "next/image"
import styles from "./styles.module.css"
import imgThais from "@/assets/thais.png"

export function About() {
  return (
    <section id="sobre">
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.aboutImage}>
          <figure>
            <Image src={imgThais} alt="Thaís Gonçalves"/>
          </figure>
        </div>
        <div className={styles.aboutContent}>
          <header>
            <h4>Sobre nós</h4>
            <h2>Entenda quem somos e por que existimos</h2>
          </header>

          <div className={styles.content}>
            <p>
              Dra. Thaís Gonçalves, cirurgiã-dentista apaixonada por transformar sorrisos e promover saúde com um olhar humanizado e inovador. Meu compromisso vai além do tratamento odontológico, busco proporcionar bem-estar e qualidade de vida para cada paciente.
              Nosso consultório nasceu do desejo de unir ciência e tecnologia para oferecer um atendimento diferenciado, onde cada detalhe foi pensado para garantir conforto, segurança e resultados duradouros. Além dos cuidados odontológicos tradicionais, trabalhamos com odontologia do sono, ajudando pacientes que sofrem com distúrbios como ronco, apneia e bruxismo a terem noites mais tranquilas.
              Também utilizamos laserterapia, uma solução moderna para aliviar dores, acelerar a cicatrização e tornar os tratamentos mais eficazes e confortáveis.
              Aqui, cada sorriso conta uma história, e o nosso objetivo é fazer parte da sua jornada rumo à saúde bucal plena.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}