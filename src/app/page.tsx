import { Navbar } from "@/components/Navbar";
import styles from "./page.module.css"
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ButtonFlutuante } from "@/components/Buttom/ButtonFlutuante";
import { SiWhatsapp } from "react-icons/si";

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <div className={`${styles.hero}`}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <CallToAction />
        <Services />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <ButtonFlutuante className="btn-flutuante" aria-label="Botão de WhatsApp">
        <SiWhatsapp />
      </ButtonFlutuante>
    </>
  );
}
