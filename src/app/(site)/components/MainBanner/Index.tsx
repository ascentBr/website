import React from 'react'
import styles from './MainBanner.module.scss'
import Image from 'next/image'


const MainBanner = () => {
  return (
        <div
          style={{ backgroundImage: `url("/main_banner.png")` }}
          className={styles.banner}
        >
          <Image
            src="/main_banner.png"
            alt=""
            style={{ display: 'none' }}
            unoptimized
            width={0}
            height={0}
            fetchPriority="high"
          />
          
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerText}>
          Seu negócio <br /><span>no Google</span> <br />com um site <br />rápido
            </h1>
            <p className={styles.bannerSubtext}>
          Sites e landing pages para pequenos empreendedores: rápidos no celular, simples de entender e feitos para o cliente entrar em contato com você.
            </p>
            <a className={styles.callToAction} href="#contact-form">Quero meu site</a>
          </div>
        </div>
  )
}

export default MainBanner