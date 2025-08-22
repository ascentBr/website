import Image from "next/image";
import Benefits from "../components/Benefits/Index";
import MainBanner from "../components/MainBanner/Index";
import WhyChooseUs from "../components/WhyChooseUs/Index";
import styles from "./page.module.scss";

export default function About() {
    return (
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
                    Somos uma equipe especializada em desenvolvimento Front End, com mais de 4 anos de experiência criando interfaces modernas, responsivas e de alta performance. Nosso compromisso é entregar soluções digitais que proporcionam a melhor experiência ao usuário, utilizando as tecnologias mais atuais do mercado.
                </p>
                <p>
                    Prezamos pela excelência, profissionalismo e atenção aos detalhes em cada etapa do desenvolvimento. Nosso objetivo é transformar ideias em produtos digitais de qualidade, alinhados às necessidades dos clientes.
                </p>
            </div>
        </div>
    );
}
