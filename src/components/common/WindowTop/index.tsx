import styles from "./style.module.css";

import {
  VscChromeMaximize,
  VscChromeMinimize,
  VscClose,
} from "react-icons/vsc";

const ICON_SIZE = "1.2rem";

const WindowTop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <VscChromeMinimize size={ICON_SIZE} />
        <VscChromeMaximize size={ICON_SIZE} />
        <VscClose size={ICON_SIZE} />
      </div>
    </div>
  );
};

export default WindowTop;
