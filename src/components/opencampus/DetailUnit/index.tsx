import type { BigEventType } from "../../../utils/event";
import TitleSet from "../../common/TitleSet";
import WindowTop from "../../common/WindowTop";
import styles from "./style.module.css";

const DetailUnit = ({
  bigEventData,
  num,
  reverse = false,
}: {
  bigEventData: BigEventType;
  num: number;
  reverse?: boolean;
}) => {
  const { title, subTitle, description } = bigEventData.eventData;

  return (
    <div
      className={styles.container}
      style={{
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      <div className={styles.numContainer}>
        <p className={`${styles.num} big-s`}>
          {num.toString().padStart(2, "0")}
        </p>
        <div className={styles.eventTitleContainer}>
          <TitleSet
            title={title}
            subTitle={subTitle}
            titleSize="2rem"
            subTitleSize="1.3rem"
            titleColor="background"
            subTitleColor="background"
            className={styles.eventTitleSet}
          />
          <div className={styles.bigEventDescription}>{description}</div>
        </div>
      </div>
      <div className={styles.windowContainer}>
        <div>
          <WindowTop />
          <div className={styles.eventsContainer}>
            {bigEventData.subEvents?.map((event, i) => (
              <>
                <div className={`${styles.eventTime} roboto`}>{event.time}</div>
                <div key={i}>
                  {/* <TitleSet title={event.title} subTitle={event.subTitle} /> */}
                  <p className={styles.eventTitle}>{event.title}</p>
                  <p className={styles.eventDescription}>{event.description}</p>
                </div>
              </>
            ))}
            <div className={styles.timeBg} />
          </div>
          <div className={styles.windowFooter} />
        </div>
      </div>
    </div>
  );
};

export default DetailUnit;
