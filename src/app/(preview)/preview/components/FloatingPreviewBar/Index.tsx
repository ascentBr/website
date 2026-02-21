"use client";

import styles from "./floating-preview-bar.module.scss";
import { useRouter } from "next/navigation";

export default function FloatingPreviewBar() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>
          Você está visualizando um projeto demonstrativo.
          Gostou da estrutura?
        </p>

        <button
          type="button"
          onClick={() => router.push("/#contact")}
          className={styles.cta}
        >
          Vamos criar o seu
        </button>
      </div>
    </div>
  );
}