import React from 'react'
import styles from './WhyChooseUs.module.scss'
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <div className={styles.whyChooseUs}>
        <div className={`container ${styles.whyChooseUsContainer}`}>
            <Image src="/searching.svg" alt="Why Choose Us" width={440} height={300} />
            <div className={styles.whyChooseUsContent}>
                <h2 className={styles.whyChooseUsTitle}>Por que escolher a Ascent?</h2>
                <p className={styles.whyChooseUsSubtitle}>
                    Na Ascent, unimos criatividade e tecnologia para oferecer soluções digitais que elevam sua marca a novos patamares.
                    Nossa equipe é apaixonada por inovação e comprometida com resultados reais.
                </p>
                <a href="">Lets connect</a>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs