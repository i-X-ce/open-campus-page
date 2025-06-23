import styles from "./style.module.css";

import CommonSection from "../../common/CommonSection";
import SectionTitle from "../../common/SectionTitle";
import PentagonBox from "../../common/PentagonBox";
import { VscChevronRight } from "react-icons/vsc";
import ApplicationUnit from "../ApplicationUnit";

const ApplicationSection = () => {
  return (
    <>
      <CommonSection>
        <SectionTitle title="APPLICATION" subTitle="お申込み" />
        <div className={styles.topContainer}>
          <div className={styles.topTextContainer}>
            <span className={styles.topText}>
              <p>お申込みは</p>
              <p>こちら</p>
            </span>
            <div className={styles.topBorder} />
            <ul className={styles.topPointersList}>
              <li>
                申し込みはお一人につき一つの学部・学科のみ申し込みいただけます
              </li>
              <li>
                当日参加可能ですが、事前に申し込みをしていただくと当日の受付がスムーズになります
              </li>
              <li>電話・メールからでも申し込みいただけます。</li>
              <li>キャンセルの場合は電話もしくはメールにてご連絡ください。</li>
            </ul>
          </div>
          <a href="#" className={styles.topApplyButton}>
            <PentagonBox
              cutSize="50px"
              className={styles.topApplyButtonBox}
              variant="outlined"
            >
              <div className={styles.topApplyButtonText}>
                <span>
                  <p>お申込み</p>
                  <p>ページへ</p>
                </span>
                <VscChevronRight size={"2rem"} />
              </div>
            </PentagonBox>
          </a>
        </div>
        <div className={styles.applicationUnitsContainer}>
          <ApplicationUnit
            title="授業体験"
            subTitle="TAIKEN"
            description="本物さながらの授業を体験していただきます。たくさんしばいたるから覚悟しときなさい。"
            events={["JAVA", "C++", "C#"]}
          />
          <ApplicationUnit
            title="授業体験"
            subTitle="TAIKEN"
            description="本物さながらの授業を体験していただきます。たくさんしばいたるから覚悟しときなさい。"
            events={["JAVA", "C++", "C#"]}
          />
        </div>
      </CommonSection>
    </>
  );
};

export default ApplicationSection;
