import styles from "./style.module.css";

import CommonSection, { sectionInView } from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import WindowTop from "../../common/WindowTop";
import { CUTInfo } from "../../../utils/CUTInfo";
import PopupImage from "../../common/PopupImage";
import { motion } from "motion/react";
import AnimateImage from "../../common/AnimateImage";

const kEY_FRAME = {
  map: 1.2,
  images: 1.5,
};

const AccessSection = () => {
  return (
    <motion.section
      className={styles.section}
      whileInView={sectionInView}
      viewport={{ once: true, amount: 0.5 }}
    >
      <CommonSection id="access-section">
        <span style={{ position: "relative", zIndex: 2 }}>
          <SectionTitle title="ACCESS" subTitle="アクセス" />
        </span>
        <div className={styles.container}>
          <div className={styles.imgWindowsContainer}>
            {[17, 18, 19, 20].map((n, i) => (
              <PopupImage
                key={i}
                imgNum={n}
                size="400px"
                className={styles.imgWindow}
                inViewVariant={sectionInView}
                delay={kEY_FRAME.images + i * 0.1}
              />
            ))}
          </div>
          <motion.div
            className={styles.windowContainer}
            initial={{ opacity: 0, x: 100 }}
            variants={{ [sectionInView]: { opacity: 1, x: 0 } }}
            transition={{ delay: kEY_FRAME.map, duration: 0.5 }}
          >
            <WindowTop />
            <div className={styles.window}>
              <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123055.83018701767!2d139.1865350220078!3d35.65567300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60191ddbe2e8769b%3A0xf1cd0ce672c86e75!2z5YWr546L5a2Q6aeF!5e1!3m2!1sja!2sjp!4v1750757151907!5m2!1sja!2sjp"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className={styles.detailText}>
                <p>
                  電脳工科大学(CUT)へは、東京駅から地下鉄(丸ノ内線)と専用シャトルバスで、約5分です。
                </p>
                <p>
                  地下鉄丸ノ内線「新宿駅」JR中央線・京王線「八王子」駅からは、専用のシャトルバスが随時運行(所要時間約20分)しており、キャンパス内までダイレクトにアクセスできます。
                </p>
              </div>
              <div className={styles.windowTextBoxInfoContainer}>
                <p>{CUTInfo.address}</p>
                <p className={styles.callNumber}>{CUTInfo.phone}</p>
              </div>
            </div>
          </motion.div>
          {/* <div className={styles.detailContainer}></div> */}
        </div>
      </CommonSection>
      <div className={styles.imgBox}>
        {[17, 18, 19, 20, 21].map((n, i) => (
          // <div
          //   className={styles.img}
          //   style={{
          //     gridArea: `i${i + 1}`,
          //     backgroundImage: getImagePath(n),
          //   }}
          // />
          <AnimateImage key={i} imgNumber={n} gridArea={`i${i + 1}`} />
        ))}
      </div>
    </motion.section>
  );
};

export default AccessSection;
