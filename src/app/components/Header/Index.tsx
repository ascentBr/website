import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.container} container`}>
        <h1 className={styles.logo}>
          <Link href="/">
            <Image src="/brand/Namelogo.svg" alt="Ascent - web & performance" width={183} height={42} />
          </Link>
        </h1>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
            <li>
              <Link href="#benefits">Serviços</Link>
            </li>
            <li className={styles.cta}>
              <Link href="#contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header