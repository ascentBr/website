import Image from "next/image";
import styles from "./aurora.module.scss";

export default function Aurora() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            Aurora
            <span>Coffee Roasters</span>
          </h1>
        </div>

      </header>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <h2 className={styles.heroTitle}>
                O café que transforma<br></br> rotina em ritual
              </h2>
              <p className={styles.heroDescription}>
                Grãos selecionados, torrados artesanalmente<br></br> e entregues na sua porta
              </p>
              <div className={styles.heroButtons}>
                <button className={styles.btnPrimary}>
                  Assinar agora
                </button>
                <button className={styles.btnSecondary}>
                  Conhecer os grãos
                </button>
              </div>

            </div>
            <div className={styles.imageContent}>
              <Image src="/projects/aurora/aurora_01.jpg" alt="Imagem de destaque do projeto Aurora Coffee Roasters" className={styles.heroImage} width={400} height={500} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <hr className={styles.hr} />
          <div className={styles.processContent}>
            <div className={styles.processText}>
              <p>Feito com tempo. Entregue com propósito.</p>
              <p>Não acreditamos que café é só o prato. É pinta.<br></br>Cada grão é torrado com delicado para transformar a sua rotina.</p>
            </div>
            <div className={styles.processImage}>
              <Image src="/projects/aurora/aurora_02.jpg" alt="Processo de torrefação do café Aurora" className={styles.image} width={600} height={400} />
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}