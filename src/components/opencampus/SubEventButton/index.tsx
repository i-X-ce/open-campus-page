import styles from "./style.module.css";

import PentagonBox from "../../common/PentagonBox";

const SubEventButton = ({ title }: { title: string }) => {
  return (
    <div className={styles.container}>
      <PentagonBox
        variant="outlined"
        cutSize="15px"
        backgroundColor="background"
      >
        <button className={`${styles.button} big-s`}>{title}</button>
      </PentagonBox>
    </div>
  );
};

export default SubEventButton;
