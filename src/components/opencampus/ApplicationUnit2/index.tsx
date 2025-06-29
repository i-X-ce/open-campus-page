import styles from "./style.module.css";

import type { BigEventType } from "../../../utils/event";
import TitleSet from "../../common/TitleSet";
import { VscChevronRight } from "react-icons/vsc";
import { ct2css } from "../../../utils/colorType";
import { motion, type MotionNodeOptions } from "motion/react";

const ApplicationUnit2 = ({
  bigEventData,
  inViewVariant,
  delay = 0,
  motionData,
}: {
  bigEventData: BigEventType;
  inViewVariant?: string;
  delay?: number;
  motionData?: MotionNodeOptions;
}) => {
  const { title, subTitle, description } = bigEventData.eventData;
  return (
    <motion.div className={styles.container} {...motionData}>
      <div className={styles.textContainer}>
        <TitleSet
          title={title}
          titleSize="2rem"
          titleColor="primary"
          subTitleColor="detail"
        />
        <div className={styles.textBorder} />
        <p className={styles.description}>{description}</p>
        <div className={styles.subEventContainer}>
          {bigEventData.subEvents!.map((event, i) => (
            <a key={i} href="#" className={styles.eventButton}>
              <div className={styles.buttonBack} />
              <span className={styles.eventButtonText}>
                {/* <TitleSet
                title={event.title}
                subTitle={event.subTitle}
                titleSize="1rem"
                subTitleSize="1rem"
                titleColor="text"
                subTitleColor="detail"
              /> */}
                <p className={styles.subEventTitle}>{event.title}</p>
                <VscChevronRight
                  style={{ flexShrink: 0, color: ct2css("background") }}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ApplicationUnit2;
