import { FaInstagram, FaYoutube } from "react-icons/fa";
import CUTRogo from "../CUTRogo";
import styles from "./style.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { CUTInfo } from "../../../utils/CUTInfo";
import CommonFooterLinks from "../CommonFooterLinks";
import WindowTop from "../WindowTop";

const NAVS = [
  {
    title: "大学案内",
    links: [
      { name: "大学概要", href: "/about" },
      { name: "教育理念・目的", href: "/philosophy" },
      { name: "沿革", href: "/history" },
      { name: "組織図", href: "/organization" },
      { name: "財務情報", href: "/finance" },
      { name: "情報公開", href: "/disclosure" },
      { name: "教員紹介", href: "/faculty" },
      { name: "研究活動", href: "/research" },
      { name: "産学連携", href: "/industry-academia" },
      { name: "社会貢献", href: "/community-engagement" },
      { name: "IR情報", href: "/ir" },
      { name: "大学評価", href: "/evaluation" },
    ],
  },
  {
    title: "学部・大学院",
    links: [
      { name: "学部・学科", href: "/departments" },
      { name: "大学院", href: "/graduate" },
      { name: "各学部紹介", href: "/undergraduate-intro" },
      { name: "各研究科紹介", href: "/graduate-intro" },
      { name: "カリキュラム", href: "/curriculum" },
      { name: "取得可能資格", href: "/qualifications" },
      { name: "卒業生の進路", href: "/alumni-careers" },
      { name: "科目等履修生・聴講生", href: "/auditor" },
      { name: "通信教育課程", href: "/correspondence" },
      { name: "教育研究施設", href: "/facilities" },
    ],
  },
  {
    title: "入試情報",
    links: [
      { name: "入試情報", href: "/admissions" },
      { name: "学部入試", href: "/undergraduate-admissions" },
      { name: "大学院入試", href: "/graduate-admissions" },
      { name: "外国人留学生入試", href: "/international-admissions" },
      { name: "社会人入試", href: "/adult-admissions" },
      { name: "編入学試験", href: "/transfer-admissions" },
      { name: "アドミッションポリシー", href: "/admission-policy" },
      { name: "募集要項", href: "/application-guidelines" },
      { name: "インターネット出願", href: "/online-application" },
      { name: "過去の入試データ", href: "/past-admissions-data" },
      { name: "オープンキャンパス", href: "/opencampus" },
      { name: "個別相談会", href: "/individual-consultation" },
      { name: "入試説明会", href: "/admission-briefing" },
    ],
  },
  {
    title: "学費・奨学金",
    links: [
      { name: "学費・奨学金", href: "/tuition" },
      { name: "授業料", href: "/tuition-fees" },
      { name: "入学金", href: "/admission-fee" },
      { name: "その他の費用", href: "/other-fees" },
      { name: "大学独自の奨学金", href: "/university-scholarships" },
      { name: "日本学生支援機構奨学金", href: "/jasso-scholarships" },
      {
        name: "地方公共団体・民間団体奨学金",
        href: "/external-scholarships",
      },
      { name: "教育ローン", href: "/education-loan" },
      { name: "経済的支援制度", href: "/financial-support" },
      { name: "学費延納・分納制度", href: "/deferred-payment" },
    ],
  },
  {
    title: "学生生活",
    links: [
      { name: "学生生活", href: "/student-life" },
      { name: "クラブ・サークル", href: "/clubs" },
      { name: "学生支援", href: "/student-support" },
      { name: "キャンパスライフ", href: "/campus-life" },
      { name: "国際交流", href: "/international" },
      { name: "キャリア支援", href: "/career-support" },
      { name: "年間行事", href: "/annual-events" },
      { name: "福利厚生施設", href: "/welfare-facilities" },
      { name: "学生相談室", href: "/counseling" },
      { name: "保健室", href: "/health-center" },
      { name: "アルバイト紹介", href: "/part-time-jobs" },
      { name: "一人暮らしサポート", href: "/living-support" },
      { name: "ボランティア活動", href: "/volunteer" },
    ],
  },
  {
    title: "国際交流",
    links: [
      { name: "国際交流", href: "/international-exchange" },
      { name: "留学プログラム", href: "/study-abroad-programs" },
      { name: "海外提携校", href: "/partner-universities" },
      { name: "短期語学研修", href: "/language-training" },
      { name: "交換留学", href: "/exchange-programs" },
      { name: "海外インターンシップ", href: "/overseas-internship" },
      { name: "留学生向け情報", href: "/info-for-international-students" },
      { name: "国際交流イベント", href: "/international-events" },
      { name: "異文化理解プログラム", href: "/intercultural-programs" },
      { name: "日本語教育", href: "/japanese-language-education" },
    ],
  },
  {
    title: "キャリア・就職",
    links: [
      { name: "キャリア支援", href: "/career-support" },
      { name: "就職実績", href: "/employment-results" },
      { name: "キャリアセンター", href: "/career-center" },
      { name: "就職支援プログラム", href: "/job-support-programs" },
      { name: "企業向け情報", href: "/info-for-companies" },
      { name: "インターンシップ", href: "/internship" },
      { name: "OB・OG訪問", href: "/alumni-visits" },
      { name: "就職ガイダンス", href: "/job-guidance" },
      { name: "個別面談", href: "/individual-consultations" },
      { name: "卒業生の活躍", href: "/alumni-achievements" },
    ],
  },
  {
    title: "研究・地域連携",
    links: [
      { name: "研究活動", href: "/research-activities" },
      { name: "地域連携", href: "/community-collaboration" },
      { name: "公開講座", href: "/public-lectures" },
      { name: "共同研究", href: "/joint-research" },
      { name: "受託研究", href: "/contract-research" },
      { name: "社会人向け講座", href: "/adult-courses" },
      { name: "研究施設", href: "/research-facilities" },
      { name: "研究者紹介", href: "/researchers" },
      { name: "科研費採択状況", href: "/grants-in-aid" },
      { name: "地域貢献活動", href: "/regional-contributions" },
    ],
  },
  {
    title: "お問い合わせ",
    links: [
      { name: "お問い合わせフォーム", href: "/contact" },
      { name: "よくある質問", href: "/faq" },
      { name: "アクセス", href: "/access" },
      { name: "サイトマップ", href: "/sitemap" },
      { name: "プライバシーポリシー", href: "/privacy-policy" },
      { name: "利用規約", href: "/terms-of-service" },
      { name: "ソーシャルメディアポリシー", href: "/social-media-policy" },
      { name: "情報セキュリティポリシー", href: "/security-policy" },
      { name: "著作権について", href: "/copyright" },
      { name: "ウェブアクセシビリティ", href: "/accessibility" },
      { name: "緊急時の連絡先", href: "/emergency-contact" },
      { name: "資料請求", href: "/brochure-request" },
    ],
  },
  {
    title: "図書館・施設",
    links: [
      { name: "図書館", href: "/library" },
      { name: "学術情報センター", href: "/academic-info-center" },
      { name: "情報科学センター", href: "/info-science-center" },
      { name: "語学学習施設", href: "/language-facilities" },
      { name: "体育施設", href: "/sports-facilities" },
      { name: "食堂・カフェ", href: "/cafeteria" },
      { name: "売店", href: "/shop" },
      { name: "多目的ホール", href: "/multi-purpose-hall" },
      { name: "駐車場", href: "/parking" },
      { name: "キャンパスマップ", href: "/campus-map" },
      { name: "交通アクセス", href: "/access" },
    ],
  },
];
const SHARE_LINKS = [
  { href: "https://www.youtube.com/", icon: <FaYoutube /> },
  { href: "https://twitter.com/", icon: <FaXTwitter /> },
  { href: "https://www.instagram.com/", icon: <FaInstagram /> },
];

const CommonFooter = () => {
  return (
    <>
      <WindowTop />
      <footer className={styles.topFooter}>
        <div className={`${styles.container} ${styles.topContainer}`}>
          <div className={styles.shareLinksContainer}>
            {SHARE_LINKS.map((link, i) => (
              <a key={i} href={link.href}>
                {link.icon}
              </a>
            ))}
          </div>
          <div className={styles.navs}>
            {NAVS.map((nav, i) => (
              <CommonFooterLinks key={i} title={nav.title} links={nav.links} />
            ))}
          </div>
        </div>
      </footer>
      <footer className={styles.bottomFooter}>
        <div className={`${styles.container} ${styles.bottomContainer}`}>
          <div className={styles.bottomContainerLeft}>
            <CUTRogo variant="footer" />
            <div>
              <p>{CUTInfo.address}</p>
              <p>TEL: {CUTInfo.phone}</p>
            </div>
          </div>
          <div className={styles.bottmContainerRight}>
            © 2025 {CUTInfo.fullName}
          </div>
        </div>
      </footer>
    </>
  );
};

export default CommonFooter;
