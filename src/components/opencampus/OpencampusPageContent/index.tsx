// import styles from "./style.module.css";

import ApplicationSection from "../ApplicationSection";
import DetailSection from "../DetailSection";
import ProgramSection from "../ProgramSection";
import TopSection from "../TopSection";

const OpencampusPageContent = () => {
  return (
    <div>
      <TopSection />
      <ProgramSection />
      <DetailSection />
      <ApplicationSection />
    </div>
  );
};

export default OpencampusPageContent;
