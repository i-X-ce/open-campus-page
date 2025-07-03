import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import { eventsData } from "../../../utils/event";
import { IoIosArrowDropright } from "react-icons/io";
import ApplicationUnit2 from "../ApplicationUnit2";
import { motion } from "motion/react";

const DELAY_TIME = 0.2;
const ANIMATION_DATA = (i: number) => {
  return {
    initial: { opacity: 0, y: 100 },
    variants: {
      sectionInView: { opacity: 1, y: 0 },
    },
    transition: { duration: 0.5, delay: DELAY_TIME * i },
  };
};

const ApplicationSection = () => {
  return (
    <CommonSection
      backgroundColor="section"
      insetShadow
      id="application-section"
      className={styles.section}
      grid
    >
      <SectionTitle title="APPLICATION" subTitle="お申込み" />
      <motion.a className={styles.topContainer} href="#" {...ANIMATION_DATA(0)}>
        <div className={styles.topContainerBack} />
        <div className={styles.topTextContainer}>
          <span className={styles.topText}>
            <p>お申込みは</p>
            <p>こちら</p>
          </span>
          <div className={styles.topBorder} />
          <ul className={styles.topPointersList}>
            <li>
              申し込みはお一人につき一つの学部・学科のみ申し込みいただけます
            </li>
            <li>
              当日参加可能ですが、事前に申し込みをしていただくと当日の受付がスムーズになります
            </li>
            <li>電話・メールからでも申し込みいただけます。</li>
            <li>キャンセルの場合は電話もしくはメールにてご連絡ください。</li>
          </ul>
          <div className={styles.arrowRightContainer}>
            <IoIosArrowDropright />
          </div>
        </div>
        {/* <a href="#" className={styles.topApplyButton}>
            <PentagonBox
              cutSize="var(--space-ll)"
              variant="outlined"
              classNameOuter={styles.topApplyButtonBox}
            >
              <div className={styles.topApplyButtonText}>
                <span>
                  <p>お申込み</p>
                  <p>ページへ</p>
                </span>
                <VscChevronRight size={"2rem"} />
              </div>
            </PentagonBox>
          </a> */}
      </motion.a>
      <div className={styles.applicationUnitsContainer}>
        {eventsData
          .filter((e) => {
            return (
              e.subEvents &&
              e.subEvents.filter((sub) => sub.shouldApply).length > 0
            );
          })
          .map((event, i) => (
            <ApplicationUnit2
              key={i}
              bigEventData={event}
              motionData={ANIMATION_DATA(i + 1)}
            />
          ))}
      </div>
    </CommonSection>
  );
};

export default ApplicationSection;
