import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import ProgramCard from "../ProgramCard";
import type { ReactNode } from "react";

type ProgramType = {
  title: string;
  subTitle: string;
  description: string;
  time: string;
  subEvents?: {
    title: string;
    id: string;
  }[];
};

const programs: ProgramType[] = [
  {
    title: "留学イベント",
    subTitle: "RYUUGAKU",
    description: "留学経験者のトークや留学プログラムを紹介。",
    time: "10:00 - 12:00",
    subEvents: [
      { title: "JAVA", id: "ryuugaku-java" },
      { title: "C++", id: "ryuugaku-cpp" },
      { title: "C#", id: "ryuugaku-cs" },
    ],
  },
  {
    title: "留学イベント",
    subTitle: "RYUUGAKU",
    description: "留学経験者のトークや留学プログラムを紹介。",
    time: "10:00 - 12:00",
    subEvents: [
      { title: "JAVA", id: "ryuugaku-java" },
      { title: "C++", id: "ryuugaku-cpp" },
      { title: "C#", id: "ryuugaku-cs" },
    ],
  },
  {
    title: "留学イベント",
    subTitle: "RYUUGAKU",
    description: "留学経験者のトークや留学プログラムを紹介。",
    time: "10:00 - 12:00",
    subEvents: [
      { title: "JAVA", id: "ryuugaku-java" },
      { title: "C++", id: "ryuugaku-cpp" },
      { title: "C#", id: "ryuugaku-cs" },
    ],
  },
  {
    title: "留学イベント",
    subTitle: "RYUUGAKU",
    description: "留学経験者のトークや留学プログラムを紹介。",
    time: "10:00 - 12:00",
    subEvents: [
      { title: "JAVA", id: "ryuugaku-java" },
      { title: "C++", id: "ryuugaku-cpp" },
      { title: "C#", id: "ryuugaku-cs" },
    ],
  },
  {
    title: "留学イベント",
    subTitle: "RYUUGAKU",
    description: "留学経験者のトークや留学プログラムを紹介。",
    time: "10:00 - 12:00",
    subEvents: [
      { title: "JAVA", id: "ryuugaku-java" },
      { title: "C++", id: "ryuugaku-cpp" },
      { title: "C#", id: "ryuugaku-cs" },
    ],
  },
  {
    title: "留学イベント",
    subTitle: "RYUUGAKU",
    description: "留学経験者のトークや留学プログラムを紹介。",
    time: "10:00 - 12:00",
    subEvents: [
      { title: "JAVA", id: "ryuugaku-java" },
      { title: "C++", id: "ryuugaku-cpp" },
      { title: "C#", id: "ryuugaku-cs" },
    ],
  },
  {
    title: "留学イベント",
    subTitle: "RYUUGAKU",
    description: "留学経験者のトークや留学プログラムを紹介。",
    time: "10:00 - 12:00",
    subEvents: [
      { title: "JAVA", id: "ryuugaku-java" },
      { title: "C++", id: "ryuugaku-cpp" },
      { title: "C#", id: "ryuugaku-cs" },
    ],
  },
];

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
    <CommonSection backgroundColor="section">
      <SectionTitle title="PROGRAM" subTitle="プログラム" />
      <div className={styles.cardsContainer}>
        {programs.map((program, i) => (
          <>
            <ProgramCardWrapper index={i}>
              <ProgramCard
                key={i}
                title={program.title}
                subTitle={program.subTitle}
                description={program.description}
                time={program.time}
                num={i}
                direction={i % 2 === 0 ? "R" : "L"}
                subEvents={program.subEvents}
              />
            </ProgramCardWrapper>
          </>
        ))}
      </div>
    </CommonSection>
  );
};

export default ProgramSection;
