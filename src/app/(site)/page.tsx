import styles from "./page.module.scss";
import MainBanner from "./components/MainBanner/Index";
import Benefits from "./components/Benefits/Index";
import CustomSystems from "./components/CustomSystems/Index";
import WhyChooseUs from "./components/WhyChooseUs/Index";
import Portfolio from "./components/Portfolio/Index";
import Faq from "./components/Faq/Index";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainBanner />
      <div></div>
      <Benefits/>
      <CustomSystems />
      <WhyChooseUs />
      <Portfolio />
      <Faq />
      <div></div>
    </div>
  );
}
