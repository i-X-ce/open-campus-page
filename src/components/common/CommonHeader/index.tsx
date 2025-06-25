import { LuBrainCircuit } from "react-icons/lu";
import styles from "./style.module.css";

const CommonHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoCotainer}>
          <LuBrainCircuit className={styles.logo} />
          <div className={styles.titleContainer}>
            <p className={`${styles.subTitle} big-s`}>
              <span className={styles.accent}>C</span>ybernetics{" "}
              <span className={styles.accent}>U</span>niversity of{" "}
              <span className={styles.accent}>T</span>
              echnology
            </p>
            <p className={styles.title}>電脳工科大学</p>
          </div>
        </div>
        <ul className={styles.navList}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default CommonHeader;
