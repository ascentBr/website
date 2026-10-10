import Image from "next/image";
import Benefits from "../components/Benefits/Index";
import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "Sobre mim",
    description: "Conheça o David, desenvolvedor formado em Engenharia de Software, com mais de 7 anos de experiência em e-commerces e desenvolvimento web, criando sites para pequenos negócios.",
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
                        <h2>Sobre mim</h2>
                    </div>

                </div>
                <div className={`${styles.content} container`}>
                    <p>
                        Oi, eu sou o David. Sou desenvolvedor, formado em Engenharia de Software, com mais de 7 anos de experiência em e-commerces e desenvolvimento web.
                    </p>

                    <h3>O que eu já fiz</h3>
                    <ul>
                        <li>Lojas virtuais em plataformas como Wake, Jet, Linx, Tray, Nuvemshop e Shopify.</li>
                        <li>Sites e blogs em WordPress.</li>
                        <li>Sites pensados para aparecer melhor no Google.</li>
                        <li>Melhoria de velocidade em sites que já estavam no ar.</li>
                    </ul>

                    <h3>Por que a Ascent</h3>
                    <p>
                        Criei a Ascent para levar essa experiência a pequenos empreendedores: sites e landing pages rápidos, simples de entender e feitos para o seu cliente entrar em contato.
                    </p>
                    <p>
                        Eu atendo diretamente cada projeto. Se ele precisar de mais mãos, como outros desenvolvedores ou designers, tenho como reunir profissionais para isso. É por esse motivo que me apresento como Ascent, e não só como David: a marca existe para o seu projeto crescer sem depender de uma pessoa só.
                    </p>

                    <h3>Como eu trabalho</h3>
                    <p>
                        Você fala direto comigo, sem intermediários e sem jargão técnico, e acompanha cada etapa do projeto.
                    </p>
                    <p>
                        Em alguns projetos do meu portfólio, atuei em parceria com agências, cuidando do desenvolvimento a partir de um design pronto. Em cada um deles eu deixo claro o que fiz e o que não fiz.
                    </p>
                </div>
            </div>
            <div></div>
            <Benefits />
        </div>
    );
}
