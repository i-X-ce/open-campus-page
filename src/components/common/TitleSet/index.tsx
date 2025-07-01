import { ct2css, type ColorType } from "../../../utils/colorType";
import styles from "./style.module.css";

const TitleSet = ({
  title = "",
  subTitle = "",
  titleSize = "2rem",
  subTitleSize = "1.5rem",
  titleColor,
  subTitleColor,
  className = "",
  breakpoint = [],
}: {
  title?: string;
  subTitle?: string;
  titleSize?: string;
  subTitleSize?: string;
  titleColor?: ColorType;
  subTitleColor?: ColorType;
  className?: string;
  breakpoint?: {
    width: number;
    titleSize?: string;
    subTitleSize?: string;
  }[];
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <style>
        {breakpoint.map(
          (bp) => `
          @media (max-width: ${bp.width}px) {
            .${styles.subTitle} {
              font-size: ${bp.subTitleSize || subTitleSize} !important;
            }
            .${styles.title} {
              font-size: ${bp.titleSize || titleSize} !important;
            }
          }
        `
        )}
      </style>
      <p
        className={`${styles.subTitle} big-s`}
        style={{
          fontSize: subTitleSize,
          ...(subTitleColor && { color: ct2css(subTitleColor) }),
        }}
      >
        {subTitle}
      </p>
      <p
        style={{
          fontSize: titleSize,
          ...(titleColor && { color: ct2css(titleColor) }),
        }}
        className={styles.title}
      >
        {title}
      </p>
    </div>
  );
};

export default TitleSet;
