import React from 'react'
import styles from './Faq.module.scss'
import JsonLd from '../JsonLd/Index'
import { faqItems } from './faq'
import { siteUrl } from '../../seo'

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  inLanguage: "pt-BR",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
}

const Faq = () => {
  return (
    <div className={styles.faq} id="faq">
      <JsonLd data={faqJsonLd} />
      <div className="container">
        <h2 className={styles.faqTitle}>Perguntas frequentes</h2>
        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <details key={item.question} className={styles.faqItem}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
