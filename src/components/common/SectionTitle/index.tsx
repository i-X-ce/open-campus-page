import { motion } from "motion/react";
import styles from "./style.module.css";
import { sectionInView } from "../CommonSection";

const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 2 }, (_, i) => (
        <motion.div
          className={`${styles.titleContainer} ${
            i === 1 ? styles.titleContainer1 : ""
          }`}
          key={i}
          initial={i === 0 ? { opacity: 0 } : { opacity: 0, width: 0 }}
          variants={{
            [sectionInView]:
              i === 0
                ? { opacity: 1, transition: { duration: 0.5 } }
                : {
                    width: "auto",
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.7 },
                  },
          }}
        >
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            variants={{ [sectionInView]: { opacity: 1, x: 0 } }}
            transition={{ delay: 0.6 }}
            className={styles.subTitle}
          >
            {subTitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            variants={{ [sectionInView]: { opacity: 1, x: 0 } }}
            transition={{ delay: 0.5 }}
            className={`${styles.title} big-s`}
          >
            {title}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionTitle;
