import { ct2css, type ColorType } from "../../../utils/colorType";
import styles from "./style.module.css";

import type { ReactNode } from "react";

const CommonSection = ({
  children,
  backgroundColor = "background",
  className = "",
  id = "",
  insetShadow = false,
}: {
  children?: ReactNode;
  backgroundColor?: ColorType;
  className?: string;
  id?: string;
  insetShadow?: boolean;
}) => {
  return (
    <section
      className={`${styles.section} ${className}`}
      style={{
        backgroundColor: ct2css(backgroundColor),
        ...(insetShadow && { boxShadow: "inset var(--shadow-big)" }),
      }}
      id={id}
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default CommonSection;
