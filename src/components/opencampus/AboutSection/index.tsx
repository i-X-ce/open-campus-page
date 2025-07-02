import styles from "./style.module.css";

import CommonSection, { sectionInView } from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import AboutButton2 from "../AboutButton2";
import { motion } from "motion/react";

const ButtonData = [
  {
    title: "大学案内",
    subTitle: "UNIVERSITY GUIDE",
  },
  {
    title: "学校生活",
    subTitle: "STUDENT LIFE",
  },
  {
    title: "サークル紹介",
    subTitle: "CIRCLE INTRODUCTION",
  },
  {
    title: "研究室紹介",
    subTitle: "LABORATORY INTRODUCTION",
  },
];

const kEY_FRAME = {
  border: 0.1,
  text: 0.4,
  button: 0.8,
};

const AboutSection = () => {
  return (
    <CommonSection id="about-section">
      <SectionTitle title="ABOUT" subTitle="大学紹介" />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <motion.div
            className={styles.catchText}
            initial={{ opacity: 0, y: 30 }}
            variants={{ [sectionInView]: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, delay: kEY_FRAME.text }}
          >
            <p>目指すのは</p>
            <p className={styles.catchTextBig}>
              「
              <span className={styles.saikyou}>
                最強
                <motion.div
                  className={styles.saikyouBack}
                  initial={{ width: "100%" }}
                  variants={{ [sectionInView]: { width: 0 } }}
                  transition={{ delay: kEY_FRAME.text + 0.8 }}
                />
              </span>
              のプログラマー」
            </p>
          </motion.div>
          <div className={styles.textBorderWrapper}>
            <motion.div
              className={styles.textBorder}
              initial={{ width: 0 }}
              variants={{ [sectionInView]: { width: "100vw" } }}
              transition={{ duration: 1, delay: kEY_FRAME.border }}
            />
          </div>
          <motion.div
            className={styles.description}
            initial={{ opacity: 0, y: 50 }}
            variants={{ [sectionInView]: { opacity: 1, y: 0 } }}
            transition={{ delay: kEY_FRAME.text + 0.2 }}
          >
            <p>
              電脳工科大学(Cybernetics University of
              Technology)は、実践的なプログラム教育に特化した日本で唯一の工科大学です。
            </p>
            <p>
              国内各地から集まった優秀な学生と教員が、日々高度なプログラミング技術を追求するキャンパスは、わが国でも有数のCODEHUB(コードハブ)として高い評価を受けています。
            </p>
          </motion.div>

          <div className={styles.buttonsContainer}>
            {ButtonData.map((button, i) => (
              <AboutButton2
                key={i}
                title={button.title}
                subTitle={button.subTitle}
                delay={kEY_FRAME.button + i * 0.1}
              />
            ))}
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.imgContent}>
            {[1, 4, 8, 13].map((n, i) => (
              <div
                key={i}
                style={{
                  backgroundImage: `url("/images/image (${n}).jpeg")`,
                  gridArea: `i${i + 1}`,
                }}
                className={styles.img}
              />
            ))}
          </div>
        </div>
      </div>
    </CommonSection>
  );
};

export default AboutSection;
