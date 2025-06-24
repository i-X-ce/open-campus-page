import styles from "./style.module.css";

import PentagonBox from "../../common/PentagonBox";
import TitleSet from "../../common/TitleSet";

const InfomationButton = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <a href="#">
      <PentagonBox variant="outlined" borderColor="text" cutSize="30px">
        <TitleSet
          title={title}
          subTitle={subTitle}
          className={styles.titleSet}
          titleSize="1.5rem"
          subTitleSize="1rem"
        />
      </PentagonBox>
    </a>
  );
};

export default InfomationButton;
