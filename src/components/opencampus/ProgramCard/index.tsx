import styles from "./style.module.css";

import TitleSet from "../../common/TitleSet";
import SubEventButton from "../SubEventButton";
import type { BigEventType } from "../../../utils/event";

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
        <div className={`${styles.card}`}>
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
            <div className={styles.border} />
            <p className={styles.description}>
              {bigEventData.eventData.description}
            </p>
          </div>
        </div>
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
