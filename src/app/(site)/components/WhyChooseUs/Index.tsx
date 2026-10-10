import React from 'react'
import styles from './WhyChooseUs.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const WhyChooseUs = () => {
  return (
    <div className={styles.whyChooseUs}>
        <div className={`container ${styles.whyChooseUsContainer}`}>
            <Image src="/searching.svg" alt="" width={440} height={300} />
            <div className={styles.whyChooseUsContent}>
                <h2 className={styles.whyChooseUsTitle}>Por que escolher a Ascent?</h2>
                <p className={styles.whyChooseUsSubtitle}>
                    Falo a sua língua, sem jargão técnico. Você acompanha cada etapa
                    e recebe um site pensado para o seu cliente, não só para enfeitar.
                </p>
                <Link href="#contact">Vamos conversar</Link>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs