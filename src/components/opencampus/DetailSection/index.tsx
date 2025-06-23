import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import DetailUnit from "../DetailUnit";

const DetailSection = () => {
  return (
    <CommonSection>
      <SectionTitle title="DETAIL" subTitle="イベント詳細" />
      <div className={styles.unitContainer}>
        <DetailUnit
          num={0}
          title={"合同説明"}
          subTitle={"GOUDOU"}
          description="オープンキャンパスの全体説明を行います。"
          events={[
            {
              time: "10:00 - 12:00",
              title: "学科説明",
              subTitle: "GAKKA SETSUMEI",
              description:
                " 学科の特徴やカリキュラムについて詳しく説明します。",
              isReservation: false,
            },
            {
              time: "10:00 - 12:00",
              title: "学科説明",
              subTitle: "GAKKA SETSUMEI",
              description:
                " 学科の特徴やカリキュラムについて詳しく説明します。",
              isReservation: false,
            },
            {
              time: "10:00 - 12:00",
              title: "学科説明",
              subTitle: "GAKKA SETSUMEI",
              description:
                " 学科の特徴やカリキュラムについて詳しく説明します。",
              isReservation: false,
            },
          ]}
        />
        <DetailUnit
          num={1}
          title={"合同説明"}
          subTitle={"GOUDOU"}
          description="オープンキャンパスの全体説明を行います。"
          reverse
          events={[
            {
              time: "10:00 - 12:00",
              title: "学科説明",
              subTitle: "GAKKA SETSUMEI",
              description:
                " 学科の特徴やカリキュラムについて詳しく説明します。",
              isReservation: false,
            },
            {
              time: "10:00 - 12:00",
              title: "学科説明",
              subTitle: "GAKKA SETSUMEI",
              description:
                " 学科の特徴やカリキュラムについて詳しく説明します。",
              isReservation: false,
            },
            {
              time: "10:00 - 12:00",
              title: "学科説明",
              subTitle: "GAKKA SETSUMEI",
              description:
                " 学科の特徴やカリキュラムについて詳しく説明します。",
              isReservation: false,
            },
          ]}
        />
      </div>
    </CommonSection>
  );
};

export default DetailSection;
