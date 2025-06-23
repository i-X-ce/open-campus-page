import { VscChevronRight } from "react-icons/vsc";
import TitleSet from "../../common/TitleSet";
import styles from "./style.module.css";

const ApplicationUnit = ({
  title,
  subTitle,
  description,
  events,
}: {
  title: string;
  subTitle: string;
  description: string;
  events: string[];
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <TitleSet title={title} subTitle={subTitle} />
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.eventContainer}>
        {events.map((event, i) => (
          <div className={styles.eventButtonContainer}>
            <div className={styles.eventBorder} />
            <div className={styles.eventPoint} />
            <a key={i} href="#" className={`${styles.eventButton} big-s`}>
              <p>{event}</p>
              <VscChevronRight size={"1rem"} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationUnit;
