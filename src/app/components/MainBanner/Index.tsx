import React from 'react'
import styles from './MainBanner.module.css'
import ContactForm from '../ContactForm/Index'


const MainBanner = () => {
  return (
         <div style={{ backgroundImage: `url("/main_banner.png")` }} className={styles.banner}>
        <div className={styles.bannerContent}>
          <h2 className={styles.bannerText}>
            Atraia<br /> <span>Novos Clientes</span> <br />como nunca <br />antes
          </h2>
          <p className={styles.bannerSubtext}>
            Transforme visitas em oportunidades reais. Cresça seu negócio com estratégias que geram resultados.
          </p>
          <ContactForm />
        </div>
      </div>
  )
}

export default MainBanner