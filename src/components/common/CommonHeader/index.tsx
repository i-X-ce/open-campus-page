import styles from "./style.module.css";
import CUTRogo from "../CUTRogo";

const CommonHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <CUTRogo variant="header" />
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
