import React from 'react'
import Link from 'next/link'
import styles from './CustomSystems.module.scss'

const CustomSystems = () => {
  return (
    <div className={styles.customSystems} id="sistemas">
      <div className="container">
        <div className={styles.card}>
          <h2 className={styles.title}>Precisa de um sistema para o seu bar, restaurante ou empresa?</h2>
          <p className={styles.text}>
            Vamos conversar. Desenvolvo de acordo com a sua necessidade, por um preço justo.
          </p>
          <Link className={styles.cta} href="#contact">Falar sobre o meu sistema</Link>
        </div>
      </div>
    </div>
  )
}

export default CustomSystems
