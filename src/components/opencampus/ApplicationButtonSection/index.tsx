import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import { VscChevronDown } from "react-icons/vsc";

const ApplicationButtonSection = () => {
  return (
    <CommonSection insetShadow>
      <a href="#application-section" className={styles.button}>
        <div className={styles.back} />
        <div className={styles.textContainer}>
          <p>お申込みへ</p>
          <VscChevronDown />
        </div>
        <span className={styles.accent}>APPLICATION</span>
      </a>
    </CommonSection>
  );
};

export default ApplicationButtonSection;
