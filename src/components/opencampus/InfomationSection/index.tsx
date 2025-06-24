import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import InfomationButton from "../InfomationButton";

const InfomationSection = () => {
  return (
    <CommonSection className={styles.section}>
      <SectionTitle title="INFORMATION" subTitle="大学情報" />
      <div className={styles.buttonsContainer}>
        <InfomationButton title="学生生活" subTitle="STUDENT LIFE" />
        <InfomationButton title="学生生活" subTitle="STUDENT LIFE" />
        <InfomationButton title="学生生活" subTitle="STUDENT LIFE" />
        <InfomationButton title="学生生活" subTitle="STUDENT LIFE" />
      </div>
    </CommonSection>
  );
};

export default InfomationSection;
