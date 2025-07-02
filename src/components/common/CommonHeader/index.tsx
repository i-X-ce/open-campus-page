import styles from "./style.module.css";
import CUTRogo from "../CUTRogo";
import { useState, type ReactNode } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import { AnimatePresence, motion } from "motion/react";

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
      {LINKS.map((link, i) => (
        <motion.li
          key={link}
          className={styles.navItem}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * i }}
        >
          <a href={`#${link.toLowerCase().toLowerCase()}-section`}>
            <p className={styles.linkText}>{link}</p>
          </a>
        </motion.li>
      ))}
    </ul>
  );

  const IconWrapper = ({
    children,
    keyName,
  }: {
    children: ReactNode;
    keyName: string;
  }) => (
    <motion.span
      key={keyName}
      className={styles.iconWrapper}
      initial={{ rotate: 180 }}
      animate={{ rotate: 0 }}
      exit={{ rotate: -180 }}
    >
      {children}
    </motion.span>
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <CUTRogo variant="header" />
        {content}
      </div>
      <div className={styles.smallContainer}>
        <AnimatePresence>
          <motion.div
            className={styles.toggleButton}
            onClick={() => {
              setOpen(!open);
            }}
            layout
          >
            {open ? (
              <IconWrapper keyName="icon-close">
                <VscClose />
              </IconWrapper>
            ) : (
              <IconWrapper keyName="icon-menu">
                <CiMenuBurger />
              </IconWrapper>
            )}
          </motion.div>
          {open && (
            <motion.div
              key={"small-menu"}
              className={styles.smallMenu}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
            >
              <div className={styles.smallRogoContainer}>
                <CUTRogo variant="footer" />
              </div>
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default CommonHeader;
