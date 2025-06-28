import { LuBrainCircuit } from "react-icons/lu";
import styles from "./style.module.css";

const CUTRogo = ({ variant = "header" }: { variant?: "header" | "footer" }) => {
  const textColorClass =
    variant === "header" ? styles.textColor : styles.textColorFooter;
  const accentClass =
    variant === "header" ? styles.accent : styles.accentFooter;

  return (
    <a
      href="#hero-section"
      className={`${styles.logoCotainer} ${textColorClass}`}
    >
      <LuBrainCircuit className={styles.logo} />
      <div className={styles.titleContainer}>
        <p className={`${styles.subTitle} big-s`}>
          <span className={accentClass}>C</span>ybernetics{" "}
          <span className={accentClass}>U</span>niversity of{" "}
          <span className={accentClass}>T</span>
          echnology
        </p>
        <p className={styles.title}>電脳工科大学</p>
      </div>
    </a>
  );
};

export default CUTRogo;
