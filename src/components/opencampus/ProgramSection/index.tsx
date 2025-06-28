import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import ProgramCard from "../ProgramCard";
import type { ReactNode } from "react";
import { eventsData } from "../../../utils/event";

function ProgramCardWrapper({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  const border = <div className={styles.programBorder} />;

  return (
    <>
      {index % 2 === 0 && (
        <>
          <div />
          {border}
        </>
      )}
      {children}
      {index % 2 === 1 && (
        <>
          {border}
          <div />
        </>
      )}
    </>
  );
}

const ProgramSection = () => {
  return (
    <CommonSection id="program-section">
      <SectionTitle title="PROGRAM" subTitle="プログラム" />
      <div className={styles.cardsContainer}>
        <div />
        <div className={styles.borderPoint} />
        <div />
        {eventsData.map((event, i) => (
          <>
            <ProgramCardWrapper index={i}>
              <ProgramCard
                key={i}
                bigEventData={event}
                num={i}
                direction={i % 2 === 0 ? "R" : "L"}
              />
            </ProgramCardWrapper>
          </>
        ))}
        <div />
        <div className={styles.borderPoint} />
        <div />
      </div>
    </CommonSection>
  );
};

export default ProgramSection;
