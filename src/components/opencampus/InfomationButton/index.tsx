import styles from "./style.module.css";

import PentagonBox from "../../common/PentagonBox";
import TitleSet from "../../common/TitleSet";
import { BsChevronDoubleRight } from "react-icons/bs";
import { motion } from "motion/react";
import { sectionInView } from "../../common/CommonSection";

const InfomationButton = ({
  title,
  subTitle,
  imgNum = 1,
  delay = 0,
}: {
  title: string;
  subTitle: string;
  imgNum?: number;
  delay?: number;
}) => {
  return (
    <motion.a
      href="#"
      className={styles.container}
      initial={{ opacity: 0, x: 50 }}
      variants={{ [sectionInView]: { opacity: 1, x: 0 } }}
      transition={{ delay }}
    >
      <PentagonBox cutSize="50px">
        <div
          className={styles.content}
          style={{ backgroundImage: `url("/images/image (${imgNum}).jpeg")` }}
        >
          <TitleSet
            title={title}
            subTitle={subTitle}
            className={styles.titleSet}
            titleSize="1.5rem"
            subTitleSize="1rem"
          />
        </div>
        <div className={styles.back} />
        <div className={`${styles.more} big-s`}>
          <p>
            MORE
            <BsChevronDoubleRight />
          </p>
          <div className={styles.moreBorder} />
        </div>
      </PentagonBox>
    </motion.a>
  );
};

export default InfomationButton;
