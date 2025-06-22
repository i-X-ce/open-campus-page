// import styles from "./style.module.css";

import type { ReactNode } from "react";

const Stack = ({
  type = "v",
  children,
  className,
  gap = "0px",
  alignItem = "stretch",
  justyfyContent = "flex-start",
}: {
  type?: "v" | "h";
  children?: ReactNode;
  className?: string;
  gap?: string;
  alignItem?: string;
  justyfyContent?: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: type === "v" ? "column" : "row",
        gap,
        alignItems: alignItem,
        justifyContent: justyfyContent,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Stack;
