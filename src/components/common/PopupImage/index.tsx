import { motion } from "motion/react";
import styles from "./style.module.css";
import WindowTop from "../WindowTop";
import { getImagePath } from "../../../utils/imagePath";

const PopupImage = ({
  imgNum,
  size,
  delay = 0.3,
  className = "",
  inViewVariant,
}: {
  imgNum: number;
  size?: string;
  delay?: number;
  className?: string;
  inViewVariant?: string;
}) => {
  return (
    <motion.div
      className={`${styles.container} ${className}`}
      initial={{ opacity: 0, y: -50 }}
      variants={
        inViewVariant
          ? {
              [inViewVariant]: {
                opacity: 1,
                y: 0,
              },
            }
          : undefined
      }
      transition={{ delay }}
    >
      <WindowTop />
      <div
        className={styles.imgBox}
        style={{
          backgroundImage: getImagePath(imgNum),
          ...(size && { width: size }),
        }}
      ></div>
    </motion.div>
  );
};

export default PopupImage;
