import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

type FooterMenuProps = {
  settings: {
    title: string;
    links: { label: string; url: string }[];
  }
}

const FooterMenu = ({ settings }: FooterMenuProps) => {
  return (<div className={styles.FooterMenu}>
    <h2 className={styles.FooterTitle}>{settings.title}</h2>
    <nav>
      <ul>
        {settings.links.map((link, index) => (
          <li key={index}>
            <Link href={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>)
}


const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={`container ${styles.FooterContainer}`}>
        <div className={styles.FooterContent}>
          <FooterMenu settings={{ title: "Company", links: [{ label: "About Us", url: "/about" }, { label: "Careers", url: "/careers" }] }} />
          {/* <FooterMenu settings={{ title: "Support", links: [{ label: "Contact", url: "/contact" }, { label: "FAQ", url: "/faq" }] }} />
          <FooterMenu settings={{ title: "Support", links: [{ label: "Contact", url: "/contact" }, { label: "FAQ", url: "/faq" }] }} /> */}
          {/* <FooterMenu settings={{ title: "Support", links: [{ label: "Contact", url: "/contact" }, { label: "FAQ", url: "/faq" }] }} /> */}
          <div className={styles.FooterMenu}>
            <Link href="/" className={styles.FooterLogo}>
              <Image src="/brand/Full_Logo.svg" alt="Ascent Logo" width={124} height={80} />
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer