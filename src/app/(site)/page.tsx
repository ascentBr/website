import styles from "./page.module.scss";
import MainBanner from "./components/MainBanner/Index";
import Benefits from "./components/Benefits/Index";
import WhyChooseUs from "./components/WhyChooseUs/Index";
import Portfolio from "./components/Portfolio/Index";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainBanner />
      <div></div>
      <Benefits/>
      <WhyChooseUs />
      <Portfolio />
      <div></div>
      <div></div>
    </div>
  );
}
