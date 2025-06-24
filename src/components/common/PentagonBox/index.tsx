import type { ColorType } from "../../../utils/colorType";
import styles from "./style.module.css";

import type { ReactNode } from "react";

const PentagonBox = ({
  children,
  className = "",
  classNameOuter = "",
  variant = "filled",
  cutSize = "10px",
  backgroundColor = "background",
  borderColor = "primary",
  borderSize = "1px",
}: {
  children?: ReactNode;
  className?: string;
  classNameOuter?: string;
  borderClassName?: string;
  variant?: "filled" | "outlined";
  cutSize?: string;
  backgroundColor?: ColorType;
  borderColor?: ColorType;
  borderSize?: string;
}) => {
  const cutStyle = {
    WebkitClipPath: `polygon(0% 0%, calc(100% - ${cutSize}) 0, 100% ${cutSize}, 100% 100%, 0% 100%)`,
    backgroundColor: `var(--bc-${backgroundColor})`,
  };
  if (variant === "filled") {
    return (
      <div className={`${className}`} style={cutStyle}>
        {children}
      </div>
    );
  } else if (variant === "outlined") {
    return (
      <div
        style={{
          ...cutStyle,
          backgroundColor: `var(--bc-${borderColor})`,
          padding: borderSize,
        }}
        className={classNameOuter}
      >
        <div className={className} style={cutStyle}>
          {children}
        </div>
      </div>
    );
  }
};

export default PentagonBox;
