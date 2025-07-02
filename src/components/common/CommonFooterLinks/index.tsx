import { useState } from "react";
import styles from "./style.module.css";
import { VscChevronDown } from "react-icons/vsc";
import { AnimatePresence, motion } from "motion/react";

const CommonFooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}) => {
  const [open, setOpen] = useState(false);

  const LinkContent = ({ keyName }: { keyName: string }) => (
    <motion.div
      key={keyName}
      className={styles.links}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    >
      {links.map((link, i) => (
        <motion.div key={i} className={styles.link}>
          <motion.div
            className={styles.linkBorder}
            initial={{ width: "0rem" }}
            animate={{ width: "1.5rem" }}
            transition={{ delay: i * 0.05, duration: 0.2 }}
          />
          <motion.a
            href={link.href}
            className={styles.linkA}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (i + 1) * 0.05 }}
          >
            {link.name}
          </motion.a>
        </motion.div>
      ))}
      <div className={styles.linkEnd}>
        <motion.div
          className={styles.linkEndBorder}
          initial={{ flex: 0 }}
          animate={{ flex: 1 }}
          transition={{ delay: links.length * 0.05 - 0.1, duration: 0.2 }}
        />
        <motion.div
          className={styles.linkEndPoint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: links.length * 0.05, duration: 0.2 }}
        ></motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className={styles.container}>
      <div className={`${styles.titleButton} ${styles.big}`}>
        <p className={styles.title}>{title}</p>
      </div>
      <button
        className={`${styles.titleButton} ${styles.smallFlex}`}
        onClick={() => setOpen(!open)}
      >
        <p className={styles.title}>{title}</p>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? 180 : 0 }}
        >
          <VscChevronDown className={styles.downButton} />
        </motion.span>
      </button>
      <div className={styles.linksContainer}>
        <div className={styles.linksBorderWrapper}>
          <div className={styles.linksBorder} />
        </div>
        <div className={styles.big}>
          <LinkContent keyName="links" />
        </div>
        <div className={styles.smallBlock}>
          <AnimatePresence>
            {open && <LinkContent keyName="links-small" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CommonFooterLinks;
