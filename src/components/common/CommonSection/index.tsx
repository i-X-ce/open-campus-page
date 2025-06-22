import { ct2css, type ColorType } from "../../../utils/colorType";
import styles from "./style.module.css";

import type { ReactNode } from "react";

const CommonSection = ({
  children,
  backgroundColor = "background",
}: {
  children?: ReactNode;
  backgroundColor?: ColorType;
}) => {
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: ct2css(backgroundColor),
      }}
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default CommonSection;
