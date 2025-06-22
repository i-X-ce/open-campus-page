import styles from "./style.module.css";

import type { ReactNode } from "react";

const CommonSection = ({ children }: { children?: ReactNode }) => {
  return <section className={styles.section}>{children}</section>;
};

export default CommonSection;
