// import styles from "./style.module.css";

import AboutSection from "../AboutSection";
import AccessSection from "../AccessSection";
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
      <AboutSection />
      <AccessSection />
    </div>
  );
};

export default OpencampusPageContent;
