import styles from "./style.module.css";

import TitleSet from "../../common/TitleSet";
// import SubEventButton from "../SubEventButton";
import { getEventId, type BigEventType } from "../../../utils/event";
import { VscChevronRight } from "react-icons/vsc";
import { motion } from "motion/react";
import { sectionInView } from "../../common/CommonSection";

const ProgramCard = ({
  bigEventData,
  num,
  direction = "R",
  delay,
  duration,
}: {
  bigEventData: BigEventType;
  num: number;
  direction?: "R" | "L";
  delay: number;
  duration: number;
}) => {
  return (
    <div className={`${styles.container} ${styles[`container${direction}`]}`}>
      <div className={styles.programBorderWrapper}>
        <motion.div
          className={styles[`programBorder${direction}`]}
          initial={{ width: 0 }}
          variants={{ [sectionInView]: { width: "100%" } }}
          transition={{ delay, duration, ease: "linear" }}
        />
      </div>
      <motion.div
        className={styles.cardWrapper}
        initial={{ opacity: 0, y: 50 }}
        variants={{ [sectionInView]: { opacity: 1, y: 0 } }}
        transition={{ type: "spring", delay: delay + duration }}
      >
        <p className={`${styles.time} big-s`}>
          {bigEventData.eventData.time}
          <motion.div
            className={styles.timeBack}
            initial={{ width: "100%" }}
            variants={{ [sectionInView]: { width: 0 } }}
            transition={{ delay: delay + duration * 2 }}
          />
        </p>
        <a
          className={`${styles.card}`}
          href={`#${getEventId(bigEventData.eventData)}`}
        >
          <div className={styles.cardBack} />
          <p className={`${styles.num} big-s`}>
            {num.toString().padStart(2, "0")}
          </p>
          <div className={styles.textContainer}>
            <TitleSet
              title={bigEventData.eventData.title}
              subTitle={bigEventData.eventData.subTitle}
              titleSize="1.5rem"
              subTitleSize="1rem"
              subTitleColor="detail"
            />

            <div className={styles.borderWrapper}>
              <VscChevronRight className={styles.arrow} />
              <div className={styles.border} />
            </div>

            <p className={styles.description}>
              {bigEventData.eventData.description}
            </p>
          </div>
        </a>
      </motion.div>
      <div className={styles.subEventsContainer}>
        {/* {bigEventData.subEvents?.map((event, i) => (
          <SubEventButton key={i} event={event} />
        ))} */}
      </div>
    </div>
  );
};

export default ProgramCard;
