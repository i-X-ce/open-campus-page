import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";

const EventsSection = () => {
  return (
    <CommonSection>
      <SectionTitle title="EVENTS" subTitle="イベント" />
      <div className={styles.cardsContainer}>
        
      </div>
    </CommonSection>
  );
};

export default EventsSection;
