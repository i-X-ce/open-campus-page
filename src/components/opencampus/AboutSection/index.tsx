import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import AboutButton from "../AboutButton";

const AboutSection = () => {
  return (
    <CommonSection>
      <SectionTitle title="ABOUT" subTitle="大学紹介" />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.catchText}>
            <p>目指すのは</p>
            <p className={styles.catchTextBig}>
              「<span className={styles.saikyou}>最強</span>のプログラマー」
            </p>
          </div>
          <div className={styles.textBorder} />
          <div className={styles.description}>
            <p>
              電脳工科大学(Cybernetics University of
              Technology)は、実践的なプログラム教育に特化した日本で唯一の工科大学です。
            </p>
            <p>
              国内各地から集まった優秀な学生と教員が、日々高度なプログラミング技術を追求するキャンパスは、わが国でも有数のCODEHUB(コードハブ)として高い評価を受けています。
            </p>
          </div>

          <div className={styles.buttonsContainer}>
            <AboutButton title="学校生活" subTitle="STUDENT LIFE" />
            <AboutButton title="学校生活" subTitle="STUDENT LIFE" />
            <AboutButton title="学校生活" subTitle="STUDENT LIFE" />
            <AboutButton title="学校生活" subTitle="STUDENT LIFE" />
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
