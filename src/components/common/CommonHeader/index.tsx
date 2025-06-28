import styles from "./style.module.css";
import CUTRogo from "../CUTRogo";

const LINKS = [
  "Program",
  "Detail",
  "Application",
  "About",
  "Access",
  "Information",
];

const CommonHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <CUTRogo variant="header" />
        <ul className={`${styles.navList} big-s`}>
          {LINKS.map((link) => (
            <li key={link} className={styles.navItem}>
              <a href={`#${link.toLowerCase().toLowerCase()}-section`}>
                <p className={styles.linkText}>{link}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default CommonHeader;
