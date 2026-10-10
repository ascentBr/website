import Image from "next/image";
import Benefits from "../components/Benefits/Index";
import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "Sobre nós",
    description: "Conheça a Ascent: desenvolvedor formado em Engenharia de Software, com mais de 7 anos de experiência em e-commerces e desenvolvimento web, criando sites para pequenos negócios.",
    alternates: { canonical: "/sobre" },
};

export default function About() {
    return (
        <div className={styles.page}>
            <div>
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

                    <div className={`${styles.container} container`}>
                        <h2>Sobre Nós</h2>
                    </div>

                </div>
                <div className={`${styles.content} container`}>
                    <p>
                        Sou desenvolvedor, formado em Engenharia de Software, com mais de 7 anos de experiência em e-commerces e desenvolvimento web. Ao longo desse tempo, trabalhei em lojas virtuais e sites onde cada detalhe de velocidade e usabilidade faz diferença nas vendas e nos contatos.
                    </p>
                    <p>
                        A Ascent nasceu para levar essa experiência a pequenos empreendedores: sites e landing pages rápidos, simples de entender e feitos para o seu cliente entrar em contato. Você fala direto comigo, sem intermediários e sem jargão técnico, e acompanha cada etapa do projeto.
                    </p>
                </div>
            </div>
            <div></div>
            <Benefits />
        </div>
    );
}
