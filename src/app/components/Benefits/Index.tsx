import React from 'react'
import styles from './Benefits.module.scss'
import Image from 'next/image'

const BenefitItem = ({ icon, title, description }) => {
    return (
        <div className={styles.benefitItem}>
            <Image src={icon} alt={title} width={50} height={50} />
            <h3 className={styles.benefitItemTitle}>{title}</h3>
            <p className={styles.benefitItemSubtitle}>{description}</p>
        </div>
    )
}

const Benefits = () => {
    return (
        <div className={styles.benefitsContainer}>
            <div className="container">
                <div className={styles.benefitsHeader}>
                    <h2 className={styles.benefitsHeaderTitle}>O que oferecemos</h2>
                    <p className={styles.benefitsHeaderSubtitle}>Soluções digitais completas para impulsionar sua marca e gerar resultados reais.</p>
                </div>

                <div className={styles.benefitsGrid}>
                    <BenefitItem
                        icon="/benefits/brand.svg"
                        title="Especialistas dedicados"
                        description="Profissionais que unem inovação e performance para transformar cada projeto em sucesso."
                    />
                    <BenefitItem
                        icon="/benefits/web_dev.svg"
                        title="Desenvolvimento Web"
                        description="Sites modernos, rápidos e responsivos, criados para engajar visitantes e gerar conversões."
                    />
                    <BenefitItem
                        icon="/benefits/digital_marketing.svg"
                        title="Suporte Contínuo"
                        description="Acompanhamento e manutenção para manter seu site sempre atualizado e funcionando sem falhas."
                    />
                    <BenefitItem
                        icon="/benefits/mobile_app.svg"
                        title="Experiência Multiplataforma"
                        description="Soluções que se adaptam a qualquer dispositivo, garantindo a melhor experiência em desktop e mobile."
                    />
                    <BenefitItem
                        icon="/benefits/seo.svg"
                        title="SEO"
                        description="Estratégias de otimização para aumentar sua visibilidade no Google e atrair mais clientes."
                    />
                    <BenefitItem
                        icon="/benefits/user.svg"
                        title="Testes de Usuário"
                        description="Analisamos a jornada do usuário para indicar melhorias que aumentam conversões e satisfação."
                    />


                </div>
            </div>

        </div>
    )
}

export default Benefits