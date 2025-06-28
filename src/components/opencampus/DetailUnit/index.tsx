import { getEventId, type BigEventType } from "../../../utils/event";
import PopupImage from "../../common/PopupImage";
import TitleSet from "../../common/TitleSet";
import WindowTop from "../../common/WindowTop";
import styles from "./style.module.css";
import { VscChevronRight } from "react-icons/vsc";

const DetailUnit = ({
  bigEventData,
  num,
  reverse = false,
  imageNum1 = 1,
  imageNum2 = 2,
}: {
  bigEventData: BigEventType;
  num: number;
  reverse?: boolean;
  imageNum1?: number;
  imageNum2?: number;
}) => {
  const { title, subTitle, description } = bigEventData.eventData;

  return (
    <div
      id={getEventId(bigEventData.eventData)}
      className={styles.container}
      style={{
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      <div className={styles[`imgContainer${reverse ? "R" : "L"}`]}>
        <PopupImage imgNum={imageNum1} />
        <div className={styles.img2}>
          <PopupImage imgNum={imageNum2} />
        </div>
      </div>
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
                <div key={i} className={styles.eventDetailContainer}>
                  <div className={styles.eventTitleWrapper}>
                    <TitleSet
                      title={event.title}
                      subTitle={event.subTitle}
                      className={styles.eventTitle}
                      titleSize="1.5rem"
                      subTitleSize="1rem"
                    />
                    {/* <p className={styles.eventTitle}>{event.title}</p> */}
                    {event.shouldApply && (
                      <div className={styles.applyTag}>
                        事前申込制
                        <VscChevronRight />
                      </div>
                    )}
                  </div>
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
