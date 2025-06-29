import { VscChevronRight } from "react-icons/vsc";
import styles from "./style.module.css";
import TitleSet from "../../common/TitleSet";
import { ct2css } from "../../../utils/colorType";
import { motion } from "motion/react";
import { sectionInView } from "../../common/CommonSection";

const AboutButton2 = ({
  title,
  subTitle,
  delay = 0,
}: {
  title: string;
  subTitle: string;
  delay?: number;
}) => {
  return (
    <motion.a
      href="#"
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      variants={{ [sectionInView]: { opacity: 1, y: 0 } }}
      transition={{ delay }}
    >
      <TitleSet
        title={title}
        subTitle={subTitle}
        titleSize="1.2rem"
        subTitleSize="1rem"
        subTitleColor="detail"
      />
      <VscChevronRight className={styles.arrow} />
      <div className={styles.back} />
    </motion.a>
  );
};

export default AboutButton2;
