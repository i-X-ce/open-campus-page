import { VscChevronRight } from "react-icons/vsc";
import styles from "./style.module.css";
import TitleSet from "../../common/TitleSet";
import { ct2css } from "../../../utils/colorType";

const AboutButton2 = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <a href="#" className={styles.container}>
      <TitleSet
        title={title}
        subTitle={subTitle}
        titleSize="1.2rem"
        subTitleSize="1rem"
        subTitleColor="detail"
      />
      <VscChevronRight style={{ color: ct2css("primary") }} />
    </a>
  );
};

export default AboutButton2;
