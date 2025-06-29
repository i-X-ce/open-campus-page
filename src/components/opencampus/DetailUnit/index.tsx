import { motion } from "motion/react";
import { getEventId, type BigEventType } from "../../../utils/event";
import PopupImage from "../../common/PopupImage";
import TitleSet from "../../common/TitleSet";
import WindowTop from "../../common/WindowTop";
import styles from "./style.module.css";
import { VscChevronRight } from "react-icons/vsc";

const kEY_FRAME = {
  num: 0.1,
  window: 0.2,
  img: 0.6,
};

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
  const inViewVariant = `inViewUnit-${num}`;

  return (
    <div className={styles.containerWrapper}>
      <motion.div
        className={styles.containerBackWrapper}
        whileInView={"inViewUnitBack"}
        viewport={{ amount: 0.6 }}
      >
        <motion.div
          className={styles.containerBack}
          initial={{ opacity: 0, width: 0 }}
          variants={{ inViewUnitBack: { opacity: 1, width: "100%" } }}
        />
      </motion.div>
      <motion.div
        id={getEventId(bigEventData.eventData)}
        className={styles.container}
        style={{
          flexDirection: reverse ? "row-reverse" : "row",
        }}
        whileInView={inViewVariant}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={styles[`imgContainer${reverse ? "R" : "L"}`]}>
          <PopupImage
            imgNum={imageNum1}
            inViewVariant={inViewVariant}
            delay={kEY_FRAME.img}
          />
          <div className={styles.img2}>
            <PopupImage
              imgNum={imageNum2}
              inViewVariant={inViewVariant}
              delay={kEY_FRAME.img + 0.1}
            />
          </div>
        </div>
        <div className={styles.numContainer}>
          <motion.p
            className={`${styles.num} big-s`}
            initial={{ opacity: 0, y: -20 }}
            variants={{ [inViewVariant]: { opacity: 1, y: 0 } }}
            transition={{ delay: kEY_FRAME.num, duration: 1 }}
          >
            {num.toString().padStart(2, "0")}
          </motion.p>
          <motion.div
            className={styles.eventTitleContainer}
            initial={{ opacity: 0, x: 100 * (reverse ? 1 : -1) }}
            variants={{ [inViewVariant]: { opacity: 1, x: 0 } }}
            transition={{ delay: kEY_FRAME.num + 0.1, duration: 0.5 }}
          >
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
          </motion.div>
        </div>
        <motion.div
          className={styles.windowContainer}
          initial={{ opacity: 0, x: 100 * (reverse ? -1 : 1) }}
          variants={{ [inViewVariant]: { opacity: 1, x: 0 } }}
          transition={{ delay: kEY_FRAME.window, duration: 0.5 }}
        >
          <div>
            <WindowTop />
            <div className={styles.eventsContainer}>
              {bigEventData.subEvents?.map((event, i) => (
                <>
                  <motion.div
                    className={`${styles.eventTime} roboto`}
                    key={i}
                    initial={{ opacity: 0, y: -20 }}
                    variants={{ [inViewVariant]: { opacity: 1, y: 0 } }}
                    transition={{
                      delay: kEY_FRAME.window + i * 0.05 + 0.3,
                    }}
                  >
                    {event.time}
                  </motion.div>
                  <div key={i} className={styles.eventDetailContainer}>
                    <div className={styles.eventTitleWrapper}>
                      <motion.span
                        initial={{ opacity: 0, x: 100 }}
                        variants={{ [inViewVariant]: { opacity: 1, x: 0 } }}
                        transition={{
                          delay: kEY_FRAME.window + i * 0.1 + 0.3,
                        }}
                      >
                        <TitleSet
                          title={event.title}
                          subTitle={event.subTitle}
                          className={styles.eventTitle}
                          titleSize="1.5rem"
                          subTitleSize="1rem"
                        />
                      </motion.span>
                      {/* <p className={styles.eventTitle}>{event.title}</p> */}
                      {event.shouldApply && (
                        <motion.div
                          className={styles.applyTag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          variants={{
                            [inViewVariant]: { opacity: 1, scale: 1 },
                          }}
                          transition={{
                            delay: kEY_FRAME.window + i * 0.1 + 0.4,
                          }}
                        >
                          <span className={styles.applyText}>
                            <p>事前申込制</p>
                            <VscChevronRight className={styles.applyTagArrow} />
                          </span>
                        </motion.div>
                      )}
                    </div>
                    <motion.div
                      className={styles.eventTitleBorder}
                      initial={{ width: 0 }}
                      variants={{ [inViewVariant]: { width: "auto" } }}
                      transition={{
                        delay: kEY_FRAME.window + i * 0.1,
                      }}
                    />
                    <motion.p
                      className={styles.eventDescription}
                      initial={{ opacity: 0, x: 100 }}
                      variants={{ [inViewVariant]: { opacity: 1, x: 0 } }}
                      transition={{
                        delay: kEY_FRAME.window + i * 0.1 + 0.35,
                      }}
                    >
                      {event.description}
                    </motion.p>
                  </div>
                </>
              ))}
              <div className={styles.timeBg} />
            </div>
            <div className={styles.windowFooter} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DetailUnit;
