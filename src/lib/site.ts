export const siteUrl = "https://rava-seo-work.vercel.app";
export const siteName = "Rava VPN";
export const primaryReferralPath = "/go";
export const lastUpdated = "2026-04-14";

export type PageLink = {
  href: string;
  shortTitle: string;
  title: string;
  summary: string;
  keywords: string[];
};

export type InsightCard = {
  title: string;
  body: string;
};

export type LandingPageData = {
  path: string;
  label: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywordText: string;
  searchIntent: string;
  openingAnswer: string[];
  evaluationPoints: InsightCard[];
  usefulFor: string[];
  avoidIf: string[];
  recommendationReason: string;
  finalTitle: string;
  finalBody: string;
  relatedPaths: string[];
};

export const supportedDevices = ["Android", "iPhone", "Windows", "Mac"];

export const sharedFaqs = [
  {
    q: "这个 VPN 更适合哪些中文用户？",
    a: "更适合主要想解决中国网络环境下连接稳定性、又希望先试再决定的人。如果你在意试错成本、设备兼容性和隐私，这类方案会更容易上手。",
  },
  {
    q: "为什么这个站没有做很长的测速表或复杂评测？",
    a: "因为很多中文用户的第一需求不是看大量参数，而是先确认中国能不能用、值不值得试。这个站更偏向先给结论，再提供延伸页面帮助你按场景判断。",
  },
  {
    q: "3 天免费试用够判断吗？",
    a: "对大多数人来说够了。你可以直接用自己的网络、自己的设备和常用场景去试，实际体验通常比看别人总结更有参考价值。",
  },
  {
    q: "一个账号支持几台设备？",
    a: "一个账号支持 4 台设备，常见的手机、电脑混合使用场景基本都能覆盖。",
  },
  {
    q: "无日志就等于绝对匿名吗？",
    a: "不能简单等同。无日志更像是减少使用记录被保留的风险，对重视隐私的人是重要信号，但日常使用时仍然建议保持良好安全习惯。",
  },
];

export const pageLinks: PageLink[] = [
  {
    href: "/",
    shortTitle: "首页",
    title: "中国可用的稳定 VPN 推荐",
    summary: "适合先看总览：稳定性、免费试用、多设备和隐私四个核心判断点。",
    keywords: ["中国可用 vpn", "稳定 vpn 推荐", "中国网络环境 vpn"],
  },
  {
    href: "/best-vpn-for-china",
    shortTitle: "中国好用 VPN",
    title: "中国好用 VPN 推荐",
    summary: "适合更在意中国能不能用、连接稳不稳的人，先看稳定性和使用场景。",
    keywords: ["中国好用 vpn", "适合中国使用的 vpn", "中国可用 vpn 推荐"],
  },
  {
    href: "/vpn-free-trial",
    shortTitle: "免费试用 VPN",
    title: "免费试用 VPN 推荐",
    summary: "适合想先试再决定的人，重点看试用期里最该验证什么。",
    keywords: ["免费试用 vpn", "3 天免费试用 vpn", "先试再买 vpn"],
  },
  {
    href: "/no-log-vpn",
    shortTitle: "无日志 VPN",
    title: "无日志 VPN 推荐",
    summary: "适合更在意隐私的人，重点看无日志到底能减少哪些顾虑。",
    keywords: ["无日志 vpn", "隐私保护 vpn", "不留日志 vpn"],
  },
  {
    href: "/vpn-guide",
    shortTitle: "VPN 专题",
    title: "中文 VPN 选购专题",
    summary: "把中国使用、免费试用、无日志和设备兼容几个方向放在一起，方便你按需求继续看。",
    keywords: ["vpn 专题", "vpn 推荐专题", "中文 vpn 选购"],
  },
];

export const quickSignals: InsightCard[] = [
  {
    title: "中国网络环境下更看重稳定性",
    body: "对中文用户来说，VPN 是否能长期稳定连接，通常比花哨功能更关键。",
  },
  {
    title: "免费试用能降低试错成本",
    body: "先用自己的网络和设备测试，能更快判断它到底适不适合你。",
  },
  {
    title: "多设备支持更接近日常使用",
    body: "不少人会同时在手机和电脑上使用 VPN，4 台设备支持更实用。",
  },
  {
    title: "无日志是重要但不夸张的隐私信号",
    body: "它不能替代全部安全措施，但能减少很多人对使用记录的顾虑。",
  },
];

export const landingPages: Record<string, LandingPageData> = {
  home: {
    path: "/",
    label: "中文用户优先 · 先看重点再决定要不要试用",
    title: "中国可用的稳定 VPN 推荐",
    description:
      "如果你现在想找一个在中国网络环境下更稳、能先试、也更让人放心的 VPN，这一页会先把最值得看的重点整理给你。",
    metaTitle: "中国可用的稳定 VPN 推荐｜支持试用、兼顾隐私与多设备",
    metaDescription:
      "面向中文用户的 VPN 推荐页面，重点介绍中国网络环境下更稳的连接体验、3 天免费试用、4 台设备支持和无日志隐私保护。",
    keywordText: "先看稳定性、试用门槛、多设备和隐私这四个点，通常就足够判断它适不适合你。",
    searchIntent: "适合第一次来了解整体情况、想先看重点再决定要不要试用的人。",
    openingAnswer: [
      "如果你最担心的是在中国到底能不能稳定使用 VPN，那就先看稳定性、免费试用、多设备和隐私这四个点，通常已经够你做第一轮判断。",
      "与其一开始就被各种参数和评测绕晕，不如先确认它是不是适合你的网络环境、常用设备和日常使用习惯。",
    ],
    evaluationPoints: [
      {
        title: "先看中国网络环境下的连接表现",
        body: "很多人找 VPN，真正想知道的其实就是“能不能稳定用”。如果只是偶尔连得上，但经常掉线，体验还是会很差。",
      },
      {
        title: "再看有没有免费试用或低成本体验",
        body: "免费试用真正有用的地方，不只是少花一点钱，而是你能直接用自己的网络和设备去试，判断会更准。",
      },
      {
        title: "多设备支持决定了日常是否方便",
        body: "现在很多人都会手机和电脑一起用，一个账号能覆盖 4 台设备，日常切换会轻松很多。",
      },
      {
        title: "无日志更适合在意隐私的人",
        body: "它不是一句口号就能说明白的事，但对比较在意隐私的人来说，确实是很值得先确认的一点。",
      },
    ],
    usefulFor: [
      "第一次找 VPN，想先看重点再决定要不要试用的人",
      "主要在中国网络环境中使用，优先考虑稳定性的人",
      "想在 iPhone、Android、Windows、Mac 间切换使用的人",
      "希望先试 3 天，不想一上来就做长期决定的人",
    ],
    avoidIf: [
      "只想看特别细的测速表、节点列表和专业参数的人",
      "希望一次看完几十款产品的横向评测",
      "已经明确知道自己只关心某个单一主题，比如纯隐私或纯免费试用",
    ],
    recommendationReason:
      "如果你先按稳定性、试用门槛和隐私来判断，通常会比一上来就看很多零散信息更快缩小范围。",
    finalTitle: "先试一试，比来回比参数更容易得到答案",
    finalBody:
      "如果你现在想找的是一个在中国网络环境下更稳、又能先试用的 VPN，那最省时间的做法不是继续翻很多相似文章，而是先用 3 天试试自己的真实体验。",
    relatedPaths: ["/vpn-guide", "/best-vpn-for-china", "/vpn-free-trial", "/no-log-vpn"],
  },
  china: {
    path: "/best-vpn-for-china",
    label: "中国好用 VPN · 先看稳定性和可用性",
    title: "中国好用 VPN 推荐",
    description:
      "很多人搜中国好用 VPN，最关心的其实就两件事：在中国能不能用，以及连接到底稳不稳。这一页就围绕这两个问题来讲。",
    metaTitle: "中国好用 VPN 推荐｜适合中国网络环境，支持免费试用",
    metaDescription:
      "想找中国好用的 VPN？这页重点介绍中国网络环境下的稳定连接、3 天免费试用、4 台设备支持和无日志隐私保护。",
    keywordText: "中国好用 vpn / 适合中国使用的 vpn / 中国可用 vpn 推荐",
    searchIntent: "适合已经明确想找中国能用、连接更稳的方案，希望尽快判断值不值得试的人。",
    openingAnswer: [
      "中国好用 VPN 真正重要的，不是功能写得多热闹，而是你在中国网络环境里打开常用网站和 App 时，能不能稳定连上、切换顺不顺手。",
      "所以这页更想直接回答几个实际问题：为什么它更适合中国使用、试用时该看什么，以及什么样的人更适合先试。",
    ],
    evaluationPoints: [
      {
        title: "稳定性比理论速度更重要",
        body: "对大多数人来说，偶尔测速快没有太大意义，真正重要的是早晚高峰和不同网络环境下还能不能保持稳定。",
      },
      {
        title: "先用真实场景测试比看评测更靠谱",
        body: "把 VPN 装到自己常用的设备上，试试浏览器、应用和网络切换时的体验，通常几天内就能知道它适不适合自己。",
      },
      {
        title: "设备兼容和切换效率不能忽略",
        body: "如果你平时会在 iPhone、Windows 或 Mac 之间来回切换，一个账号支持 4 台设备会方便很多。",
      },
      {
        title: "隐私策略是加分项，不是可忽略项",
        body: "很多人一开始先看稳定性，但真正用久了之后，往往会越来越在意是否留日志和使用痕迹。",
      },
    ],
    usefulFor: [
      "明确就是想找“中国能用”的 VPN 用户",
      "经常需要切换网络环境，希望连接更稳的人",
      "不想先花太多时间做功课，想直接试用判断的人",
      "希望手机和电脑都能一起使用的人",
    ],
    avoidIf: [
      "主要只是想找完全免费的工具",
      "更想看大量品牌横评，而不是先判断单一方案适不适合自己",
      "已经有固定 VPN，只是偶尔想做价格比价",
    ],
    recommendationReason:
      "如果你的核心需求就是中国能用、连接更稳，那先看这页会更省时间，因为最影响体验的几个判断点都已经放在前面了。",
    finalTitle: "想找中国好用 VPN，先把“能不能稳”试出来",
    finalBody:
      "如果你已经确定自己最在意的是中国能用、连接更稳，那就别只停在看介绍。用自己的网络环境试 3 天，通常比看很多碎片信息更有参考价值。",
    relatedPaths: ["/", "/vpn-guide", "/vpn-free-trial", "/no-log-vpn"],
  },
  trial: {
    path: "/vpn-free-trial",
    label: "免费试用 VPN · 先试后决定更安心",
    title: "免费试用 VPN 推荐",
    description:
      "很多人第一次找 VPN，并不是想马上付费，而是想先确认它稳不稳、切换顺不顺。免费试用正好适合这种情况。",
    metaTitle: "免费试用 VPN 推荐｜先试 3 天，再判断是否适合",
    metaDescription:
      "想找能先试用的 VPN？这页重点介绍 3 天免费试用、适合中文用户的稳定连接、多设备支持和无日志隐私保护。",
    keywordText: "先试 3 天，重点看能不能稳定连上、设备切换顺不顺手，以及值不值得继续用。",
    searchIntent: "适合不想马上付费，想先用自己的网络和设备确认体验的人。",
    openingAnswer: [
      "免费试用真正有价值的地方，不只是“免费”两个字，而是你终于不用只靠别人的体验替自己做决定。",
      "尤其对中文用户来说，网络环境、设备组合和使用时间段都不一样，先试 3 天，通常比看很多评测更快得出结论。",
    ],
    evaluationPoints: [
      {
        title: "试用期先看能否稳定连上",
        body: "第一步不是研究功能菜单，而是看你常用的浏览器、应用和网络环境下，连接能不能稳定建立。",
      },
      {
        title: "再看设备之间切换是否顺手",
        body: "如果你平时会在手机和电脑之间切换，试用期里最好直接把多个设备都装上。",
      },
      {
        title: "观察高频使用场景是否稳定",
        body: "不要只试一次。最好在你平时最常用的时间段多测几次，这样结论会更接近真实体验。",
      },
      {
        title: "顺便确认隐私和账号规则",
        body: "试用阶段也适合顺手确认无日志、多设备支持和账号限制，避免后面才发现不适合自己。",
      },
    ],
    usefulFor: [
      "第一次接触 VPN，希望先低成本判断的人",
      "不想立刻做长期决定，希望先体验几天的人",
      "想直接用自己的设备和网络做测试的人",
      "对稳定性有要求，但还没完全确定需求重点的人",
    ],
    avoidIf: [
      "只想找永久免费、不考虑稳定性差异的人",
      "已经明确知道目标产品，只差比价格的人",
      "不打算亲自测试，只想快速看结果汇总的人",
    ],
    recommendationReason:
      "如果你最怕试错成本太高，那先看试用期到底该怎么判断，通常会比直接去比一堆参数更实用。",
    finalTitle: "先试 3 天，很多问题就不用靠猜了",
    finalBody:
      "如果你现在最在意的是试错成本，那就把重点放在试用期。能不能连、稳不稳、设备切换顺不顺手，这些通常几天内就能看出来。",
    relatedPaths: ["/", "/vpn-guide", "/best-vpn-for-china", "/no-log-vpn"],
  },
  nolog: {
    path: "/no-log-vpn",
    label: "无日志 VPN · 更适合在意隐私的人",
    title: "无日志 VPN 推荐",
    description:
      "如果你在找 VPN 的时候比较在意隐私，那无日志通常会是非常靠前的判断项。这一页重点讲清它为什么重要，以及它和稳定性、试用体验之间的关系。",
    metaTitle: "无日志 VPN 推荐｜更重视隐私保护，也兼顾稳定试用",
    metaDescription:
      "想找不留日志的 VPN？这页重点介绍无日志隐私保护、中国网络环境下的稳定连接、3 天免费试用和 4 台设备支持。",
    keywordText: "如果你更在意隐私，就先确认无日志、连接稳定性和试用体验这三件事。",
    searchIntent: "适合对隐私更敏感，希望长期使用时更安心一点的人。",
    openingAnswer: [
      "无日志 VPN 让人在意的地方，不是把“安全”说得多夸张，而是长期使用时，对自己的访问记录和痕迹能少一点顾虑。",
      "对中文用户来说，真正合适的选择通常不是只看隐私，还要一起看中国网络环境下的连接稳定性和试用体验。",
    ],
    evaluationPoints: [
      {
        title: "无日志是长期使用的重要信号",
        body: "很多人第一次选 VPN 先看的是能不能用，真正决定会不会长期留下来的，常常是对隐私策略的信任。",
      },
      {
        title: "稳定连接和隐私并不冲突",
        body: "对中文用户来说，真正让人放心的体验通常是两者兼顾：既能更稳地连接，也能减少对日志留存的担心。",
      },
      {
        title: "免费试用更适合验证整体体验",
        body: "隐私策略可以看说明，但连接顺不顺手、设备好不好用，还是得靠自己试过才知道。",
      },
      {
        title: "多设备使用影响的是日常便利度",
        body: "如果你既会在手机上用，也会在电脑上用，那么 4 台设备支持会更适合日常长期使用。",
      },
    ],
    usefulFor: [
      "比较在意使用记录和隐私顾虑的人",
      "想找更适合长期使用，而不只是临时连接的人",
      "希望稳定性和隐私一起兼顾的中文用户",
      "会在多个设备上使用 VPN 的人",
    ],
    avoidIf: [
      "只想找最便宜方案，不太关心隐私策略的人",
      "只需要临时用一次，不考虑长期体验的人",
      "主要想看复杂技术白皮书，而不是先做日常判断的人",
    ],
    recommendationReason:
      "如果你会长期使用 VPN，那除了能不能连上，也值得提前确认隐私这件事。先把无日志看明白，心里会更有底。",
    finalTitle: "如果你在意隐私，无日志值得优先确认",
    finalBody:
      "当稳定连接、免费试用和多设备支持都具备时，无日志就会成为区分“能不能用”和“适不适合长期使用”的关键一步。",
    relatedPaths: ["/", "/vpn-guide", "/best-vpn-for-china", "/vpn-free-trial"],
  },
};

export const topicHubSections = [
  {
    title: "先按自己最在意的点来选入口",
    body: "如果你最担心的是中国能不能用，就先看稳定性；如果你最担心试错成本，就先看免费试用；如果你更在意长期使用是否安心，就先看无日志。把问题分开看，会更容易判断。",
  },
  {
    title: "别一上来就看一堆参数",
    body: "很多人真正想知道的并不是专业术语，而是自己平时会不会用得顺：连得上吗、切换方便吗、值不值得继续。先把这些问题看清楚更重要。",
  },
  {
    title: "设备兼容和试用体验是很多人忽略的筛选条件",
    body: "比起一味比较参数，更值得先确认的是：你常用的 iPhone、Android、Windows、Mac 能不能顺利用起来，以及 3 天试用能否给出清晰答案。",
  },
];

export function getRelatedPages(paths: string[]) {
  return pageLinks.filter((item) => paths.includes(item.href));
}

export function buildAbsoluteUrl(path: string) {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

