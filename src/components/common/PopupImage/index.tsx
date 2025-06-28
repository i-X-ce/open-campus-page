import { motion } from "motion/react";
import styles from "./style.module.css";
import WindowTop from "../WindowTop";
import { getImagePath } from "../../../utils/imagePath";

const PopupImage = ({
  imgNum,
  size,
  delay = 0.3,
  className = "",
}: {
  imgNum: number;
  size?: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={`${styles.container} ${className}`}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
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
