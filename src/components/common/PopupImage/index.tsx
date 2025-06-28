import { motion } from "motion/react";
import styles from "./style.module.css";
import WindowTop from "../WindowTop";
import { getImagePath } from "../../../utils/imagePath";

const PopupImage = ({
  imgNum,
  size = "350px",
  delay = 0.5,
}: {
  imgNum: number;
  size?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <WindowTop />
      <div
        className={styles.imgBox}
        style={{ backgroundImage: getImagePath(imgNum), width: size }}
      ></div>
    </motion.div>
  );
};

export default PopupImage;
