import { ct2css, type ColorType } from "../../../utils/colorType";
import styles from "./style.module.css";
import { useEffect, useRef, useState } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [uniqueId] = useState(
    () => `titleset-${Math.random().toString(36).substr(2, 9)}`
  );

  useEffect(() => {
    if (breakpoint.length === 0) return;

    // スコープ付きのスタイルを生成
    const mediaQueries = breakpoint
      .map(
        (bp) => `
        @media (max-width: ${bp.width}px) {
          .${uniqueId} .title-element {
            font-size: ${bp.titleSize || titleSize} !important;
          }
          .${uniqueId} .subtitle-element {
            font-size: ${bp.subTitleSize || subTitleSize} !important;
          }
        }
      `
      )
      .join("");

    // スタイル要素を作成して追加
    const styleElement = document.createElement("style");
    styleElement.textContent = mediaQueries;
    document.head.appendChild(styleElement);

    // クリーンアップ関数
    return () => {
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, [breakpoint, titleSize, subTitleSize, uniqueId]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className} ${uniqueId}`}
    >
      <p
        className={`${styles.subTitle} big-s subtitle-element`}
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
        className={`${styles.title} title-element`}
      >
        {title}
      </p>
    </div>
  );
};

export default TitleSet;
