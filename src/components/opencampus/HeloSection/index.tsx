import { motion } from "motion/react";
import styles from "./style.module.css";
import { sectionInView } from "../../common/CommonSection";
import AnimateImage from "../../common/AnimateImage";

const kEY_FRAME = {
  line: 0.3,
  text: 0.5,
  img: 2,
};

const HeloSection = () => {
  return (
    <motion.section
      className={styles.section}
      id="hero-section"
      whileInView={sectionInView}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className={styles.container}>
        <div className={`${styles.textContainer} big-s`}>
          <div className={styles.lineWrapper1}>
            <motion.div
              className={styles.leftLine}
              initial={{ height: "70vw" }}
              variants={{
                sectionInView: { height: "100%" },
              }}
              transition={{
                duration: 0.7,
                delay: kEY_FRAME.line,
                ease: "circOut",
              }}
            />
          </div>
          <div className={styles.lineWrapper2}>
            <motion.div
              className={styles.leftLine2}
              initial={{ height: "70vh" }}
              variants={{
                sectionInView: { height: "100%" },
              }}
              transition={{
                duration: 0.6,
                delay: 0.5 + kEY_FRAME.line,
                ease: "circOut",
              }}
            />
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              variants={{ sectionInView: { opacity: 1, x: 0 } }}
              transition={{ duration: 1.5, delay: kEY_FRAME.text }}
            >
              OPEN
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              variants={{ sectionInView: { opacity: 1, x: 0 } }}
              transition={{ duration: 1.5, delay: 0.3 + kEY_FRAME.text }}
            >
              CAMPUS
            </motion.p>
            <motion.div
              className={styles.date}
              initial={{ opacity: 0, y: 20 }}
              variants={{ sectionInView: { opacity: 1, y: 0 } }}
              transition={{ duration: 1.5, delay: 0.5 + kEY_FRAME.text }}
            >
              2025{" "}
              <motion.div className={styles.day}>
                8/12-15
                <motion.div
                  className={styles.dayBack}
                  initial={{ width: "100%" }}
                  variants={{ sectionInView: { width: "0%" } }}
                  transition={{
                    duration: 1,
                    delay: 1 + kEY_FRAME.text,
                    ease: "circOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* <div className={styles.windowContainer}>
          <WindowTop />
        </div> */}
        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <motion.div
              className={styles.imgContainerBack}
              // initial={{ width: "0%" }}
              // variants={{ sectionInView: { width: "100%" } }}
              // transition={{
              //   duration: 1,
              //   delay: 1.2 + kEY_FRAME.img,
              //   ease: "circOut",
              // }}
            />
            {Array.from({ length: 10 }).map((_, i) => (
              // <div
              //   className={styles.img}
              //   style={{
              //     gridArea: `i${i + 1}`,
              //     backgroundImage: `url("/images/image (${i + 1}).jpeg")`,
              //   }}
              // />
              <AnimateImage
                key={i}
                imgNumber={i + 1}
                delay={0 + kEY_FRAME.img}
                gridArea={`i${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeloSection;
