import styles from "./page.module.css";
import MainBanner from "./components/MainBanner/Index";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainBanner />
    </div>
  );
}
