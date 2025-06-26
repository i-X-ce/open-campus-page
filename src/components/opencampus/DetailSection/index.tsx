import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import DetailUnit from "../DetailUnit";
import { eventsData } from "../../../utils/event";

const DetailSection = () => {
  return (
    <>
      <CommonSection>
        <SectionTitle title="DETAIL" subTitle="イベント詳細" />
      </CommonSection>
      <div className={styles.unitContainer}>
        {eventsData.map((event, i) => (
          <DetailUnit
            key={i}
            bigEventData={event}
            num={i}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </>
  );
};

export default DetailSection;
