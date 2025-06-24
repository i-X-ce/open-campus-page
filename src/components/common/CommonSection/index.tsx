import { ct2css, type ColorType } from "../../../utils/colorType";
import styles from "./style.module.css";

import type { ReactNode } from "react";

const CommonSection = ({
  children,
  backgroundColor = "background",
  className = "",
}: {
  children?: ReactNode;
  backgroundColor?: ColorType;
  className?: string;
}) => {
  return (
    <section
      className={`${styles.section} ${className}`}
      style={{
        backgroundColor: ct2css(backgroundColor),
      }}
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default CommonSection;
