import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../ContactForm/Index'


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
    <>
      <div className={styles.FooterForm} id="contact">
        <div className={`container ${styles.FooterFormContainer}`}>
          <h2 className={styles.FooterFormTitle}>Vamos Conversar</h2>
          <p className={styles.FooterFormDescription}>
            Entre em contato conosco para saber mais sobre nossos serviços.
          </p>
          <ContactForm buttonStyle='secondary' buttonText='Enviar Mensagem'/>
        </div>

      </div>
      <div className={styles.Footer}>
        <div className={`container ${styles.FooterContainer}`}>
          <div className={styles.FooterContent}>
            <FooterMenu settings={{ title: "Links rápidos", links: [{ label: "Sobre Nós", url: "/sobre" }, { label: "Contato", url: "./#contact" }] }} />
            {/* <FooterMenu settings={{ title: "Support", links: [{ label: "Contact", url: "/#contact" }, { label: "FAQ", url: "/faq" }] }} />
          <FooterMenu settings={{ title: "Support", links: [{ label: "Contact", url: "/#contact" }, { label: "FAQ", url: "/faq" }] }} /> */}
            {/* <FooterMenu settings={{ title: "Support", links: [{ label: "Contact", url: "/#contact" }, { label: "FAQ", url: "/faq" }] }} /> */}
            <div className={styles.FooterMenu}>
              <Link href="/" className={styles.FooterLogo}>
                <Image src="/brand/Full_Logo.svg" alt="Ascent Logo" width={124} height={80} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </>

  )
}

export default Footer