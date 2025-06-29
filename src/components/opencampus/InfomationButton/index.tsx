import styles from "./style.module.css";

import PentagonBox from "../../common/PentagonBox";
import TitleSet from "../../common/TitleSet";
import { BsChevronDoubleRight } from "react-icons/bs";

const InfomationButton = ({
  title,
  subTitle,
  imgNum = 1,
}: {
  title: string;
  subTitle: string;
  imgNum?: number;
}) => {
  return (
    <a href="#" className={styles.container}>
      <PentagonBox cutSize="50px">
        <div
          className={styles.content}
          style={{ backgroundImage: `url("/images/image (${imgNum}).jpeg")` }}
        >
          <TitleSet
            title={title}
            subTitle={subTitle}
            className={styles.titleSet}
            titleSize="1.5rem"
            subTitleSize="1rem"
          />
        </div>
        <div className={styles.back} />
        <div className={`${styles.more} big-s`}>
          <p>
            MORE
            <BsChevronDoubleRight />
          </p>
          <div className={styles.moreBorder} />
        </div>
      </PentagonBox>
    </a>
  );
};

export default InfomationButton;
