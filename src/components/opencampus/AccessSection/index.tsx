import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import WindowTop from "../../common/WindowTop";
import { CUTInfo } from "../../../utils/CUTInfo";

const AccessSection = () => {
  return (
    <CommonSection>
      <SectionTitle title="ACCESS" subTitle="アクセス" />
      <div className={styles.cotnainer}>
        <div className={styles.windowContainer}>
          <WindowTop />
          <div className={styles.window}>
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123055.83018701767!2d139.1865350220078!3d35.65567300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60191ddbe2e8769b%3A0xf1cd0ce672c86e75!2z5YWr546L5a2Q6aeF!5e1!3m2!1sja!2sjp!4v1750757151907!5m2!1sja!2sjp"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={styles.windowTextBox}>
              <p>{CUTInfo.address}</p>
              <p className={styles.callNumber}>{CUTInfo.phone}</p>
            </div>
          </div>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.imgBox} />
          <div className={styles.detailBorderContainer}>
            <div className={styles.detailBorder} />
          </div>
          <div className={styles.detailText}>
            <p>
              電脳工科大学(CUT)へは、東京駅から地下鉄(丸ノ内線)と専用シャトルバスで、約5分です。
            </p>
            <p>
              地下鉄丸ノ内線「新宿駅」JR中央線・京王線「八王子」駅からは、専用のシャトルバスが随時運行(所要時間約20分)しており、キャンパス内までダイレクトにアクセスできます。
            </p>
          </div>
        </div>
      </div>
    </CommonSection>
  );
};

export default AccessSection;
