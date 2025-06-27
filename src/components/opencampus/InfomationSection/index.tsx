import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import InfomationButton from "../InfomationButton";

const InfomationSection = () => {
  return (
    <>
      <CommonSection id="infomation-section">
        <SectionTitle title="INFORMATION" subTitle="大学情報" />
      </CommonSection>
      <div className={styles.buttonsContainer}>
        <InfomationButton
          title="大学案内"
          subTitle="UNIVERSITY GUIDE"
          imgNum={10}
        />
        <InfomationButton title="学生生活" subTitle="STUDENT LIFE" imgNum={5} />
        <InfomationButton
          title="サークル紹介"
          subTitle="CIRCLE INTRODUCTION"
          imgNum={11}
        />

        <InfomationButton
          title="研究室紹介"
          subTitle="LABORATORY INTRODUCTION"
          imgNum={16}
        />
      </div>
    </>
  );
};

export default InfomationSection;
