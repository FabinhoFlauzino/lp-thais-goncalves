
import { MdWhatsapp } from 'react-icons/md';
import { Button } from '../Buttom';
import styles from './styles.module.css';
import Image from 'next/image';
import perfilImg from '@/assets/foto-thais.png';
import logoComNome from '@/assets/logo-com-nome.png';

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroHeader}>
          <header>
            <h4>
              Sorrisos Saudáveis e Noites Tranquilas Começam Aqui
            </h4>
            <h1>Cuidado Odontológico Completo para Você e Sua Família</h1>
          </header>

          <div className={styles.heroContent}>
            <p>
              Oferecemos atendimento personalizado com Odontologia do Sono e laserterapia para melhorar sua saúde bucal, qualidade de sono e aliviar dores, tornando seus tratamentos mais eficazes e confortáveis.
            </p>
            <Button link="#contato" className='btn btn-primary'>
              <MdWhatsapp size={24} />
              Agende Sua consulta
            </Button>
          </div>
        </div>

        <div className={styles.heroImg}>
          <Image src={perfilImg} alt="Foto dr Thaís" className={styles.imgThais} />
          <div className={styles.imgLogoWrapper}>
            <Image src={logoComNome} alt="Logo Com Nome" className={styles.imgLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}