import React from 'react'
import styles from './Benefits.module.scss'
import BenefitItem from './BenefitItem';

const Benefits = () => {
    return (
        <div className={styles.benefitsContainer} id='benefits'>
            <div className="container">
                <div className={styles.benefitsHeader}>
                    <h2 className={styles.benefitsHeaderTitle}>O que oferecemos</h2>
                    <p className={styles.benefitsHeaderSubtitle}>O essencial para o seu negócio ser encontrado e receber contatos online.</p>
                </div>

                <div className={styles.benefitsGrid}>
                    <BenefitItem
                        icon="/benefits/web_dev.svg"
                        title="Site ou landing page"
                        description="Para quem quer mostrar o negócio na internet e receber contatos. Você ganha uma página clara, com seus serviços e um botão para falar com você."
                    />
                    <BenefitItem
                        icon="/benefits/mobile_app.svg"
                        title="Rápido no celular"
                        description="A maioria dos seus clientes acessa pelo celular. Seu site carrega rápido e funciona bem em qualquer tela, para ninguém desistir antes de ver sua oferta."
                    />
                    <BenefitItem
                        icon="/benefits/seo.svg"
                        title="Pronto para o Google"
                        description="Estrutura e textos preparados para que as pessoas da sua região encontrem você quando pesquisarem pelo que você faz."
                    />
                    <BenefitItem
                        icon="/benefits/digital_marketing.svg"
                        title="Suporte depois da entrega"
                        description="Precisa trocar um preço, uma foto ou um texto? Eu cuido das atualizações para você não ficar na mão."
                    />
                </div>
            </div>

        </div>
    )
}

export default Benefits