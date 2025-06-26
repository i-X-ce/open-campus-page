import { VscChevronRight } from "react-icons/vsc";
import TitleSet from "../../common/TitleSet";
import styles from "./style.module.css";
import type { BigEventType } from "../../../utils/event";

const ApplicationUnit = ({ bigEventData }: { bigEventData: BigEventType }) => {
  const { title, subTitle, description } = bigEventData.eventData;
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <TitleSet title={title} subTitle={subTitle} />
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.eventContainer}>
        {bigEventData.subEvents!.map((event, i) => (
          <div className={styles.eventButtonContainer}>
            <div className={styles.eventBorder} />
            <div className={styles.eventPoint} />
            <a key={i} href="#" className={`${styles.eventButton}`}>
              <TitleSet
                title={event.title}
                subTitle={event.subTitle}
                titleSize="1rem"
                subTitleSize="0.8rem"
                titleColor="primary"
                subTitleColor="primary"
              />
              {/* <p>{event.title}</p> */}
              <VscChevronRight size={"1rem"} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationUnit;
