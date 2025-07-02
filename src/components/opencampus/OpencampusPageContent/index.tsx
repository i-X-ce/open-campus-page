import styles from "./style.module.css";

import AboutSection from "../AboutSection";
import AccessSection from "../AccessSection";
import ApplicationButtonSection from "../ApplicationButtonSection";
import ApplicationSection from "../ApplicationSection";
import DetailSection from "../DetailSection";
import InfomationSection from "../InfomationSection";
import ProgramSection from "../ProgramSection";
import HeloSection from "../HeloSection";

const OpencampusPageContent = () => {
  return (
    <div className={styles.cotnainer}>
      <HeloSection />
      <ApplicationButtonSection />
      <ProgramSection />
      <DetailSection />
      <ApplicationSection />
      <AboutSection />
      <AccessSection />
      <InfomationSection />
    </div>
  );
};

export default OpencampusPageContent;
