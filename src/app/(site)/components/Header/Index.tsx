import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import ThemeChanger from '../ThemeChanger/Index';
import DynamicLogo from '../DynamicLogo/Index';

import Logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.container} container`}>
        <h1 className={styles.logo}>
          <Link href="/">
           <Logo />
          </Link>
        </h1>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            {/* <li>
              <ThemeChanger />
            </li> */}
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