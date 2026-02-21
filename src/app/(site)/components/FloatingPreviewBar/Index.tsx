"use client";

import styles from "./floating-preview-bar.module.scss";
import { useRouter } from "next/navigation";

export default function FloatingPreviewBar() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>
          Você está visualizando um projeto demonstrativo criado por David.
          Gostou da estrutura?
        </p>

        <button
          type="button"
          onClick={() => router.push("/contato")}
          className={styles.cta}
        >
          Vamos criar o seu
        </button>
      </div>
    </div>
  );
}