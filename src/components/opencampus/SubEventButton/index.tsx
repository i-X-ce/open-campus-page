import styles from "./style.module.css";

import PentagonBox from "../../common/PentagonBox";
import type { EventType } from "../../../utils/event";
import TitleSet from "../../common/TitleSet";

const SubEventButton = ({ event }: { event: EventType }) => {
  return (
    <div className={styles.container}>
      <PentagonBox
        variant="outlined"
        cutSize="15px"
        backgroundColor="background"
      >
        <button className={`${styles.button} big-s`}>
          <TitleSet
            title={""}
            subTitle={event.subTitle}
            titleSize="1rem"
            subTitleSize="1rem"
            titleColor="primary"
            subTitleColor="primary"
          />
        </button>
      </PentagonBox>
    </div>
  );
};

export default SubEventButton;
