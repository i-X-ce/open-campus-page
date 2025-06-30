import styles from "./style.module.css";

import CommonSection, { sectionInView } from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import ProgramCard from "../ProgramCard";
import type { ReactNode } from "react";
import { eventsData } from "../../../utils/event";
import { motion } from "motion/react";

const kEY_FRAME = {
  border: 0.1,
  card: 0.4,
};

const DURATION = 0.2; // アニメーションの持続時間

function ProgramCardWrapper({
  children,
  index,
  delay = 0,
}: {
  children: ReactNode;
  index: number;
  delay: number;
}) {
  const ProgramBorder = ({ is2 = false }: { is2?: boolean }) => (
    <motion.div
      className={`${styles.programBorder} ${
        is2 ? styles.programBorderSmall : ""
      }`}
      initial={{ height: 0 }}
      variants={{ [sectionInView]: { height: "100%" } }}
      transition={{ delay, duration: DURATION, ease: "linear" }}
    />
  );

  return (
    <>
      {index % 2 === 0 && (
        <>
          <div className={styles.null} />
          {<ProgramBorder />}
        </>
      )}
      {children}
      {<ProgramBorder is2 />}
      {index % 2 === 1 && (
        <>
          {<ProgramBorder />}
          <div className={styles.null} />
        </>
      )}
    </>
  );
}

function BorderPoint({ delay }: { delay: number }) {
  return (
    <>
      <div className={styles.null} />
      <motion.div
        className={styles.borderPoint}
        initial={{ opacity: 0 }}
        variants={{ [sectionInView]: { opacity: 1 } }}
        transition={{ delay, duration: DURATION }}
      />
      <div />
    </>
  );
}

const ProgramSection = () => {
  return (
    <CommonSection id="program-section">
      <SectionTitle title="PROGRAM" subTitle="プログラム" />
      <div className={styles.cardsContainer}>
        <BorderPoint delay={kEY_FRAME.border} />
        {eventsData.map((event, i) => (
          <>
            <ProgramCardWrapper
              index={i}
              delay={kEY_FRAME.border + DURATION * i}
            >
              <ProgramCard
                key={i}
                bigEventData={event}
                num={i}
                direction={i % 2 === 0 ? "R" : "L"}
                delay={kEY_FRAME.card + DURATION * i}
                duration={DURATION}
              />
            </ProgramCardWrapper>
          </>
        ))}
        <BorderPoint delay={eventsData.length * DURATION + kEY_FRAME.border} />
      </div>
    </CommonSection>
  );
};

export default ProgramSection;
