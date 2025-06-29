import styles from "./style.module.css";

import CommonSection, { sectionInView } from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import InfomationButton from "../InfomationButton";
import { motion } from "motion/react";

const ButtonData = [
  {
    title: "大学案内",
    subTitle: "UNIVERSITY GUIDE",
    imgNum: 10,
  },
  {
    title: "学生生活",
    subTitle: "STUDENT LIFE",
    imgNum: 5,
  },
  {
    title: "サークル紹介",
    subTitle: "CIRCLE INTRODUCTION",
    imgNum: 11,
  },
  {
    title: "研究室紹介",
    subTitle: "LABORATORY INTRODUCTION",
    imgNum: 16,
  },
];

const InfomationSection = () => {
  return (
    <>
      <CommonSection id="information-section">
        <SectionTitle title="INFORMATION" subTitle="大学情報" />
      </CommonSection>
      <motion.div
        className={styles.buttonsContainer}
        whileInView={sectionInView}
      >
        {ButtonData.map((button, i) => (
          <InfomationButton
            key={i}
            title={button.title}
            subTitle={button.subTitle}
            imgNum={button.imgNum}
            delay={0.1 * i}
          />
        ))}
      </motion.div>
    </>
  );
};

export default InfomationSection;
