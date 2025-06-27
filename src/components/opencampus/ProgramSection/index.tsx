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
    <CommonSection backgroundColor="section" id="program-section">
      <SectionTitle title="PROGRAM" subTitle="プログラム" />
      <div className={styles.cardsContainer}>
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
      </div>
    </CommonSection>
  );
};

export default ProgramSection;
