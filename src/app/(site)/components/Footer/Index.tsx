import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import ContactForm from '../ContactForm/Index'
import DynamicLogo from '../DynamicLogo/Index'

const companyInfo = {
  legalName: "68.010.885 DAVID LUCAS SILVA SANTOS",
  cnpj: "68.010.885/0001-43",
}

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
            <FooterMenu settings={{ title: "Links rápidos", links: [{ label: "Sobre Nós", url: "/sobre" }, { label: "Contato", url: "#contact" }] }} />
            {/* <FooterMenu settings={{ title: "Support", links: [{ label: "Contact", url: "/#contact" }, { label: "FAQ", url: "/faq" }] }} />
          <FooterMenu settings={{ title: "Support", links: [{ label: "Contact", url: "/#contact" }, { label: "FAQ", url: "/faq" }] }} /> */}
            {/* <FooterMenu settings={{ title: "Support", links: [{ label: "Contact", url: "/#contact" }, { label: "FAQ", url: "/faq" }] }} /> */}
            <div className={styles.FooterMenu}>
              <Link href="/" className={styles.FooterLogo}>
              <DynamicLogo lightModeSrc="/brand/Full_Logo_Blacklogo.svg" darkModeSrc="/brand/Full_Logo.svg" />
              </Link>
            </div>
          </div>
          <p className={styles.FooterLegal}>
            © {new Date().getFullYear()} {companyInfo.legalName} · CNPJ {companyInfo.cnpj}
          </p>
        </div>

      </div>
    </>

  )
}

export default Footer