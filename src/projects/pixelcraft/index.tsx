import styles from "./pixelcraft.module.scss";

export default function PixelCraft() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <h1>
          Seu site deveria trazer clientes.
          <br />
          Não desculpas.
        </h1>

        <p>
          Criamos sites estratégicos para pequenas empresas que querem crescer
          com previsibilidade.
        </p>

        <div className={styles.actions}>
          <button>Agendar diagnóstico gratuito</button>
          <button className={styles.secondary}>Ver projetos</button>
        </div>
      </section>
    </div>
  );
}