// import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import DetailUnit from "../DetailUnit";

const DetailSection = () => {
  return (
    <CommonSection>
      <SectionTitle title="DETAIL" subTitle="イベント詳細" />
      <DetailUnit
        num={0}
        title={"合同説明"}
        subTitle={"GOUDOU"}
        events={[
          {
            time: "10:00 - 12:00",
            title: "学科説明",
            subTitle: "GAKKA SETSUMEI",
            description: " 学科の特徴やカリキュラムについて詳しく説明します。",
            isReservation: false,
          },
          {
            time: "10:00 - 12:00",
            title: "学科説明",
            subTitle: "GAKKA SETSUMEI",
            description: " 学科の特徴やカリキュラムについて詳しく説明します。",
            isReservation: false,
          },
          {
            time: "10:00 - 12:00",
            title: "学科説明",
            subTitle: "GAKKA SETSUMEI",
            description: " 学科の特徴やカリキュラムについて詳しく説明します。",
            isReservation: false,
          },
        ]}
      />
    </CommonSection>
  );
};

export default DetailSection;
