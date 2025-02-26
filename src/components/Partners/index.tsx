import styles from "@/components/About/styles.module.css"
import Image from "next/image"
import imgBiologix from "@/assets/biologix.jpeg"
import imgBiologix2 from "@/assets/biologix-sono.jpg"
import { Button } from "../Buttom"

export function Partners() {
  return (
    <section className="bg-beige">
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.aboutContent}>
          <header>
            <p>Biologix</p>
            <h2>O que é o exame do sono Biologix?</h2>
          </header>

          <div className={styles.content}>
            <p>
              O Biologix é um exame portátil de polissonografia domiciliar que monitora os principais parâmetros do seu sono, como respiração, oxigenação, frequência cardíaca e movimentos corporais. Ele é indicado para diagnosticar distúrbios do sono, como a apneia obstrutiva, bruxismo noturno e ronco, além de auxiliar na identificação de problemas que podem impactar sua saúde bucal e geral.
            </p>
          </div>
        </div>
        <div className={styles.aboutImage}>
          <figure>
            <Image src={imgBiologix} alt="Imagem biologix" />
          </figure>
        </div>
      </div>

      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.aboutImage}>
          <figure>
            <Image src={imgBiologix2} alt="Imagem biologix" />
          </figure>
        </div>
        <div className={styles.aboutContent}>
          <header>
            {/* <p>Sobre nós</p> */}
            <h2>Como funciona?</h2>
          </header>

          <div className={styles.content}>
            <p>
              O exame é realizado no conforto da sua casa, sem a necessidade de dormir em um laboratório. Basta utilizar um pequeno dispositivo que registra as informações durante a noite. No dia seguinte, os dados são analisados por profissionais especializados, permitindo um diagnóstico preciso e um plano de tratamento adequado para você.
            </p>

            <p>
              Se você tem dificuldades para dormir, acorda cansado ou sofre com sintomas como ronco e sonolência diurna, entre em contato e agende sua avaliação!
            </p>
          </div>

          <Button link="#contato" className="btn btn-primary">Quer saber mais ?</Button>
        </div>
      </div>
    </section>
  )
}
