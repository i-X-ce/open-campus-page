import TitleSet from "../../common/TitleSet";
import WindowTop from "../../common/WindowTop";
import styles from "./style.module.css";

export type DetailUnitEventType = {
  time: string;
  title: string;
  subTitle: string;
  description: string;
  isReservation: boolean;
};

const DetailUnit = ({
  num,
  title,
  subTitle,
  events,
}: {
  num: number;
  title: string;
  subTitle: string;
  events: DetailUnitEventType[];
}) => {
  return (
    <div className={styles.container}>
      <p className={`${styles.num} big-s`}>{num.toString().padStart(2, "0")}</p>
      <div className={styles.windowContainer}>
        <div className={styles.window}>
          <WindowTop />
          <div className={styles.eventsContainer}>
            <div></div>
            <TitleSet
              title={title}
              subTitle={subTitle}
              titleSize="1.5rem"
              subTitleSize="1.2rem"
              className={styles.titleSet}
            />
            {events.map((event, i) => (
              <>
                <div className={`${styles.eventTime} roboto`}>{event.time}</div>
                <div className={styles.eventTextContainer} key={i}>
                  {/* <TitleSet title={event.title} subTitle={event.subTitle} /> */}
                  <p className={styles.eventTitle}>{event.title}</p>
                  <p className={styles.eventDescription}>{event.description}</p>
                </div>
              </>
            ))}
            <div className={styles.timeBg} />
            <div className={styles.windowFooter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUnit;
