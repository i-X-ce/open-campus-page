export interface EventType {
  title: string;
  subTitle: string;
  description: string;
  time: string;
  shouldApply: boolean;
  imageUrl?: string;
}

export interface BigEventType {
  eventData: EventType;
  subEvents?: EventType[];
}

export const eventsData: BigEventType[] = [
  {
    eventData: {
      title: "基調講演",
      subTitle: "Keynote Speech",
      description:
        "電脳工科大学の学長が、最新のテクノロジーが社会に与える影響と、未来を担う若者への期待について語ります。",
      time: "10:00 - 11:00",
      shouldApply: false,
    },
    subEvents: [
      {
        title: "AIと社会の未来",
        subTitle: "AI and the Future of Society",
        description:
          "AI技術の進化が私たちの生活や社会構造にどのような変化をもたらすかを探ります。",
        time: "10:00 - 11:00",
        shouldApply: false,
      },
      {
        title: "ロボティクスが拓く新時代",
        subTitle: "New Era Opened by Robotics",
        description:
          "ロボット技術の最前線と、それが産業や日常生活に与える影響について解説します。",
        time: "10:00 - 11:00",
        shouldApply: false,
      },
      {
        title: "データサイエンスの力",
        subTitle: "The Power of Data Science",
        description:
          "ビッグデータの分析がどのようにビジネスや科学の発展に貢献しているかを紹介します。",
        time: "10:00 - 11:00",
        shouldApply: false,
      },
      {
        title: "バーチャルリアリティの可能性",
        subTitle: "The Potential of Virtual Reality",
        description:
          "VR/AR技術の現状と、エンターテイメント、教育、医療など様々な分野での応用例を解説します。",
        time: "10:00 - 11:00",
        shouldApply: false,
      },
    ],
  },
  {
    eventData: {
      title: "模擬授業体験",
      subTitle: "Hands-on Mock Lecture",
      description:
        "実際の授業を体験できるチャンスです。興味のある分野の授業を選んで、大学の学びの雰囲気を味わってみましょう。",
      time: "11:15 - 12:15",
      shouldApply: true,
    },
    subEvents: [
      {
        title: "AIプログラミング入門",
        subTitle: "Introduction to AI Programming",
        description:
          "AIの基礎と簡単なプログラミングを体験。AIがどのように私たちの生活を豊かにするかをご紹介。",
        time: "11:15 - 12:15",
        shouldApply: true,
      },
      {
        title: "次世代ロボット工学",
        subTitle: "Next-Generation Robotics",
        description:
          "最新のロボット技術とその応用について解説。未来のロボットがどのように社会を変えるのか探ります。",
        time: "11:15 - 12:15",
        shouldApply: true,
      },
      {
        title: "サイバーセキュリティ概論",
        subTitle: "Introduction to Cyber Security",
        description:
          "情報セキュリティの重要性と基本的な対策を学びます。デジタル社会を守るための知識を身につけましょう。",
        time: "11:15 - 12:15",
        shouldApply: true,
      },
      {
        title: "WebデザインとUX/UI",
        subTitle: "Web Design and UX/UI",
        description:
          "魅力的なウェブサイトをデザインするための基礎と、ユーザー体験を向上させるコツを学びます。",
        time: "11:15 - 12:15",
        shouldApply: true,
      },
    ],
  },
  {
    eventData: {
      title: "在学生との交流会",
      subTitle: "Exchange Session with Current Students",
      description:
        "在学生が、実際の大学生活や受験体験談、サークル活動などについて本音で語ります。質問も大歓迎です！",
      time: "13:00 - 14:00",
      shouldApply: false,
    },
    subEvents: [
      {
        title: "大学生活のリアル",
        subTitle: "Realities of University Life",
        description:
          "授業、アルバイト、友達との交流など、大学生活の日常について聞けます。",
        time: "13:00 - 14:00",
        shouldApply: false,
      },
      {
        title: "受験体験談",
        subTitle: "Exam Experience Stories",
        description:
          "受験勉強のコツや、入試当日の様子など、先輩たちのリアルな体験談を聞けます。",
        time: "13:00 - 14:00",
        shouldApply: false,
      },
      {
        title: "サークル活動の魅力",
        subTitle: "Charms of Club Activities",
        description:
          "多種多様なサークルの紹介と、サークル活動を通して得られることについて語ります。",
        time: "13:00 - 14:00",
        shouldApply: false,
      },
      {
        title: "キャンパスライフQ&A",
        subTitle: "Campus Life Q&A",
        description:
          "大学生活に関するどんな質問にも、在学生が直接お答えします。",
        time: "13:00 - 14:00",
        shouldApply: false,
      },
    ],
  },
  {
    eventData: {
      title: "研究室公開",
      subTitle: "Laboratory Open House",
      description:
        "最先端の研究が行われている研究室を公開します。普段見ることのできない研究設備や成果を間近でご覧ください。",
      time: "14:15 - 15:15",
      shouldApply: true,
    },
    subEvents: [
      {
        title: "AI研究室",
        subTitle: "AI Laboratory",
        description:
          "人工知能の最先端研究に触れ、デモンストレーションを体験できます。",
        time: "14:15 - 15:15",
        shouldApply: true,
      },
      {
        title: "ロボット開発研究室",
        subTitle: "Robot Development Laboratory",
        description:
          "実際に開発中のロボットを見学し、その動きや仕組みについて学ぶことができます。",
        time: "14:15 - 15:15",
        shouldApply: true,
      },
      {
        title: "宇宙工学研究室",
        subTitle: "Aerospace Engineering Laboratory",
        description:
          "宇宙開発に関する研究内容や、人工衛星の模型などを見学できます。",
        time: "14:15 - 15:15",
        shouldApply: true,
      },
      {
        title: "環境エネルギー研究室",
        subTitle: "Environmental Energy Laboratory",
        description:
          "持続可能な社会を目指す環境エネルギー技術の研究について紹介します。",
        time: "14:15 - 15:15",
        shouldApply: true,
      },
    ],
  },
];
