import styles from "./style.module.css";

import TitleSet from "../../common/TitleSet";
import PentagonBox from "../../common/PentagonBox";
import SubEventButton from "../SubEventButton";

const ProgramCard = ({
  title,
  subTitle,
  description,
  time,
  num,
  direction = "R",
  subEvents,
}: {
  title: string;
  subTitle: string;
  description: string;
  time: string;
  num: number;
  direction?: "R" | "L";
  subEvents?: {
    title: string;
    id: string;
  }[];
}) => {
  return (
    <div className={`${styles.container} ${styles[`container-${direction}`]}`}>
      <div className={styles.programBorderWrapper}>
        <div className={styles.programBorder} />
      </div>
      <div className={styles.cardWrapper}>
        <p className={`${styles.time} big-s`}>{time}</p>
        <div className={`${styles.card} ${styles[`card-${direction}`]}`}>
          <p className={`${styles.num} big-s`}>
            {num.toString().padStart(2, "0")}
          </p>
          <div className={styles.textContainer}>
            <TitleSet title={title} subTitle={subTitle} />
            <div className={styles.border} />
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
      <div className={styles.subEventsContainer}>
        {subEvents?.map((event, i) => (
          <SubEventButton key={i} title={event.title} id={event.id} />
        ))}
      </div>
    </div>
  );
};

export default ProgramCard;
