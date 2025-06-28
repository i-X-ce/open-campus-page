import styles from "./style.module.css";

import TitleSet from "../../common/TitleSet";
import SubEventButton from "../SubEventButton";
import type { BigEventType } from "../../../utils/event";
import { VscChevronRight } from "react-icons/vsc";

const ProgramCard = ({
  bigEventData,
  num,
  direction = "R",
}: {
  bigEventData: BigEventType;
  num: number;
  direction?: "R" | "L";
}) => {
  return (
    <div className={`${styles.container} ${styles[`container${direction}`]}`}>
      <div className={styles.programBorderWrapper}>
        <div className={styles.programBorder} />
      </div>
      <div className={styles.cardWrapper}>
        <p className={`${styles.time} big-s`}>{bigEventData.eventData.time}</p>
        <a className={`${styles.card}`} href="#">
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
      </div>
      <div className={styles.subEventsContainer}>
        {/* {bigEventData.subEvents?.map((event, i) => (
          <SubEventButton key={i} event={event} />
        ))} */}
      </div>
    </div>
  );
};

export default ProgramCard;
