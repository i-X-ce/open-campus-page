import { ct2css, type ColorType } from "../../../utils/colorType";
import styles from "./style.module.css";

const TitleSet = ({
  title,
  subTitle,
  titleSize = "2rem",
  subTitleSize = "1.5rem",
  titleColor = "text",
  subTitleColor = "text",
  className = "",
}: {
  title: string;
  subTitle: string;
  titleSize?: string;
  subTitleSize?: string;
  titleColor?: ColorType;
  subTitleColor?: ColorType;
  className?: string;
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <p
        className={`${styles.subTitle} big-s`}
        style={{
          fontSize: subTitleSize,
          color: ct2css(subTitleColor),
        }}
      >
        {subTitle}
      </p>
      <p
        className={styles.title}
        style={{
          fontSize: titleSize,
          color: ct2css(titleColor),
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default TitleSet;
