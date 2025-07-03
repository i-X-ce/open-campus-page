import styles from "./style.module.css";

import { getImagePath } from "../../../utils/imagePath";
import { motion, circOut } from "framer-motion";
import { sectionInView } from "../CommonSection";

const DIRECTION_Y = ["top", "bottom"] as const;
const DIRECTION_X = ["left", "right"] as const;

const AnimateImage = ({
  imgNumber,
  delay,
  gridArea,
}: {
  imgNumber: number;
  delay: number;
  gridArea?: string;
}) => {
  const directionY = DIRECTION_Y[Math.floor(Math.random() * 2)];
  const diractionX = DIRECTION_X[Math.floor(Math.random() * 2)];
  const direction = Math.random() < 0.5 ? "width" : "height";
  const commonDelay = delay + Math.random() * 1;

  const animateProps = (d: number) => {
    return {
      style: { [directionY]: 0, [diractionX]: 0 },
      initial: { [direction]: "0" },
      variants: {
        [sectionInView]: { [direction]: "100%" },
      },
      transition: {
        duration: 1,
        delay: commonDelay + d,
        ease: circOut,
      },
    };
  };

  return (
    <div style={{ gridArea }} className={styles.container}>
      <motion.div className={styles.imgContainer} {...animateProps(0.05)}>
        <div
          style={{
            backgroundImage: getImagePath(imgNumber),
          }}
          className={styles.imgBox}
        ></div>
      </motion.div>
      <motion.div className={styles.imgBack} {...animateProps(0)} />
    </div>
  );
};

export default AnimateImage;
