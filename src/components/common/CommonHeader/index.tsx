import styles from "./style.module.css";
import CUTRogo from "../CUTRogo";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";

const LINKS = [
  "Program",
  "Detail",
  "Application",
  "About",
  "Access",
  "Information",
];

const CommonHeader = () => {
  const [open, setOpen] = useState(false);
  const content = (
    <ul className={`${styles.navList} big-s`}>
      {LINKS.map((link) => (
        <li key={link} className={styles.navItem}>
          <a href={`#${link.toLowerCase().toLowerCase()}-section`}>
            <p className={styles.linkText}>{link}</p>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <CUTRogo variant="header" />
        {content}
      </div>
      <div className={styles.smallContainer}>
        <div
          className={styles.toggleButton}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <VscClose /> : <CiMenuBurger />}
        </div>
        {open && (
          <div className={styles.smallMenu}>
            <div className={styles.smallRogoContainer}>
              <CUTRogo variant="footer" />
            </div>
            {content}
          </div>
        )}
      </div>
    </header>
  );
};

export default CommonHeader;
