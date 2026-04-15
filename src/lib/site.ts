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
    a: "更适合两类人：一类是人在中国网络环境里，最怕连不上或者老掉线；另一类是不想一上来就付钱，想先免费用个三天，拿自己的手机电脑先跑一遍。",
  },
  {
    q: "为什么这里没有放很长的测速表和一堆专业参数？",
    a: "因为大多数人真正想知道的不是参数漂不漂亮，而是自己用起来行不行。你平时连的网络稳不稳、晚上高峰会不会抽风、手机电脑切来切去麻不麻烦，这些比一长串数据更有用。",
  },
  {
    q: "3 天免费试用够不够？",
    a: "大多数情况够了。你不用把它想得太复杂，家里 Wi‑Fi 试一下，手机流量试一下，手机和电脑都装一下，再挑你平时最常用的时间段跑一跑，基本就知道它适不适合你。",
  },
  {
    q: "一个账号能同时用几台设备？",
    a: "一个账号能用 4 台设备。对大多数人来说已经够了，手机、电脑一起开基本没压力，也不用来回折腾登录。",
  },
  {
    q: "无日志是不是就等于绝对安全？",
    a: "不能这么理解。无日志更像是少留一层顾虑，不是开了以后就什么都不用管了。但如果你本来就比较在意隐私，它确实是很值得优先确认的一项。",
  },
];

export const pageLinks: PageLink[] = [
  {
    href: "/",
    shortTitle: "首页",
    title: "中国可用的稳定 VPN 推荐",
    summary: "适合先看个大概：到底稳不稳、值不值得先免费用个三天。",
    keywords: ["中国可用 vpn", "稳定 vpn 推荐", "中国网络环境 vpn"],
  },
  {
    href: "/best-vpn-for-china",
    shortTitle: "中国好用 VPN",
    title: "中国好用 VPN 推荐",
    summary: "如果你只关心一件事：在中国到底能不能稳用，那先看这页。",
    keywords: ["中国好用 vpn", "适合中国使用的 vpn", "中国可用 vpn 推荐"],
  },
  {
    href: "/vpn-free-trial",
    shortTitle: "免费试用 VPN",
    title: "免费试用 VPN 推荐",
    summary: "不想一上来就付钱的话，这页直接告诉你试用时该怎么试。",
    keywords: ["免费试用 vpn", "3 天免费试用 vpn", "先试再买 vpn"],
  },
  {
    href: "/no-log-vpn",
    shortTitle: "无日志 VPN",
    title: "无日志 VPN 推荐",
    summary: "如果你更在意少留痕迹、长期用着心里踏实一点，就看这页。",
    keywords: ["无日志 vpn", "隐私保护 vpn", "不留日志 vpn"],
  },
  {
    href: "/vpn-guide",
    shortTitle: "VPN 专题",
    title: "中文 VPN 选购专题",
    summary: "把几个最常见的入口放在一起，你按自己的情况直接挑着看就行。",
    keywords: ["vpn 专题", "vpn 推荐专题", "中文 vpn 选购"],
  },
];

export const quickSignals: InsightCard[] = [
  {
    title: "先看稳不稳，别先看花活",
    body: "人在中国网络环境里，用 VPN 最怕的不是功能少，而是今天能连、明天抽风。先把稳定性看明白最重要。",
  },
  {
    title: "先免费用个三天，很多事马上就知道了",
    body: "别光听别人说，拿你自己的 Wi‑Fi、流量、手机和电脑跑一遍，适不适合很快就有答案。",
  },
  {
    title: "多设备不是加分项，是省不省事",
    body: "很多人白天电脑用、晚上手机用。一个账号能带 4 台设备，日常会少很多来回折腾。",
  },
  {
    title: "无日志不是口号，是少一层顾虑",
    body: "它不是万能，但如果你本来就比较在意隐私，这件事最好早点确认，不要等用久了再补课。",
  },
];

export const landingPages: Record<string, LandingPageData> = {
  home: {
    path: "/",
    label: "给中文用户看的，不整虚的",
    title: "中国可用的稳定 VPN 推荐",
    description:
      "如果你现在就是想找个在中国能用、别老掉、还能先免费用个三天的 VPN，这页就够你先看了。",
    metaTitle: "中国可用的稳定 VPN 推荐｜支持试用、兼顾隐私与多设备",
    metaDescription:
      "面向中文用户的 VPN 推荐页面，重点介绍中国网络环境下更稳的连接体验、3 天免费试用、4 台设备支持和无日志隐私保护。",
    keywordText: "先看稳不稳，再看试用、设备和隐私，第一轮判断基本就够了。",
    searchIntent: "适合还没想好要不要买，但已经不想再看那些又长又空的话的人。",
    openingAnswer: [
      "大多数人第一次找 VPN，要的其实就几样：能连上，别老掉，手机电脑都能用，最好还能先试几天。别的都可以往后放。",
      "所以这页不跟你兜圈子。先把最影响体验的几件事摊开说，你看完大概就知道这东西值不值得你先免费用个三天。",
    ],
    evaluationPoints: [
      {
        title: "先看在中国用的时候会不会抽风",
        body: "别只看它能不能连上一次。你真正要看的，是晚上高峰会不会老断、换个网络会不会掉、常用网站和 App 打开顺不顺。",
      },
      {
        title: "试用别走形式，拿自己的网络直接测",
        body: "家里 Wi‑Fi 试一下，手机流量试一下，手机和电脑都装一下。这样试出来的结果，才跟你自己的日常使用最接近。",
      },
      {
        title: "多设备好不好用，决定你后面烦不烦",
        body: "很多人不是只在一个设备上用。白天电脑开着，出门手机还要接着用，这时候 4 台设备支持就不是装饰，是省事。",
      },
      {
        title: "无日志不用神化，但最好早点看",
        body: "它不是一句口号就能解决所有问题，但如果你本来就不想留下太多使用痕迹，这一点越早确认越安心。",
      },
    ],
    usefulFor: [
      "第一次找 VPN，只想先找个大概靠谱方向的人",
      "主要在中国网络环境里用，最怕老掉线的人",
      "手机和电脑都会用，不想来回折腾的人",
      "不想一上来就买长期，想先免费用个三天的人",
    ],
    avoidIf: [
      "你只想看一大堆测速图和特别细的节点参数",
      "你已经锁定好品牌，现在只差比最低价",
      "你只关心单一问题，比如纯隐私或纯免费工具",
    ],
    recommendationReason:
      "因为对大多数人来说，先把会不会掉线、试用顺不顺、设备够不够用这几件事看明白，比继续刷那些长评测有用。",
    finalTitle: "别先纠结太久，先免费用个三天再说",
    finalBody:
      "真想知道适不适合自己，还是得拿自己的网络和设备跑几天。能不能用、顺不顺手、会不会想继续用，三天下来通常就差不多了。",
    relatedPaths: ["/vpn-guide", "/best-vpn-for-china", "/vpn-free-trial", "/no-log-vpn"],
  },
  china: {
    path: "/best-vpn-for-china",
    label: "如果你只关心稳不稳，先看这页",
    title: "中国好用 VPN 推荐",
    description:
      "很多人搜中国好用 VPN，不是想听故事，就是想知道：在中国用的时候到底稳不稳，会不会老掉。",
    metaTitle: "中国好用 VPN 推荐｜适合中国网络环境，支持免费试用",
    metaDescription:
      "想找中国好用的 VPN？这页重点介绍中国网络环境下的稳定连接、3 天免费试用、4 台设备支持和无日志隐私保护。",
    keywordText: "先别管它写得多厉害，先看在中国用的时候稳不稳。",
    searchIntent: "适合已经没耐心看那些虚的，只想知道在中国到底稳不稳的人。",
    openingAnswer: [
      "人在中国找 VPN，最烦的不是功能少，而是它今天能连、明天不行；刚连上没多久，切个 Wi‑Fi 或换成流量又掉了。真碰上这种情况，前面写得再漂亮也没用。",
      "所以这页就盯着一件事讲：在中国用的时候到底稳不稳。你把连接表现、网络切换、常用场景和试用期这几件事看完，心里基本就有数了。",
    ],
    evaluationPoints: [
      {
        title: "晚上高峰稳不稳，比测速图更重要",
        body: "很多服务白天看着没问题，晚上人一多就开始抽风。你最好挑自己平时最常用的时间段试，不然很容易误判。",
      },
      {
        title: "换网络会不会掉，这个很关键",
        body: "家里 Wi‑Fi、公司网络、手机流量来回切的时候，要是每次都得重新折腾一遍，日常体验会很差。",
      },
      {
        title: "别只开一次，拿常用网站和 App 跑一轮",
        body: "浏览器能不能顺开、常用 App 卡不卡、切换后恢复快不快，这些才是你每天真会遇到的东西。",
      },
      {
        title: "先免费用个三天，比看十篇总结都实在",
        body: "别人说稳，不一定对你也稳。你自己的网络环境最有发言权，先试几天，结论通常比网上的统一说法更准。",
      },
    ],
    usefulFor: [
      "人在中国，最怕 VPN 连不上或者老掉的人",
      "平时会在不同网络之间来回切换的人",
      "不想先看一堆品牌对比，只想先知道能不能用的人",
      "想先免费试一下，再决定要不要继续的人",
    ],
    avoidIf: [
      "你主要想找永久免费工具，对稳定性要求不高",
      "你已经有固定在用的 VPN，只想做价格比较",
      "你更想看几十个品牌横评，而不是先判断一个方案行不行",
    ],
    recommendationReason:
      "因为中国环境下，最值钱的不是参数表，而是你用的时候会不会掉、会不会卡、会不会老让你重连。",
    finalTitle: "在中国能不能稳用，别靠猜，先自己跑几天",
    finalBody:
      "真想知道中国好不好用，还是得先免费用个三天。把你平时最常用的网络和设备都试一遍，基本不用看别人替你下结论。",
    relatedPaths: ["/", "/vpn-guide", "/vpn-free-trial", "/no-log-vpn"],
  },
  trial: {
    path: "/vpn-free-trial",
    label: "先别急着买，先把试用用明白",
    title: "免费试用 VPN 推荐",
    description:
      "很多人第一次找 VPN，不是不愿意花钱，而是不想还没搞清楚适不适合自己，就先把钱交了。那就先免费用个三天。",
    metaTitle: "免费试用 VPN 推荐｜先试 3 天，再判断是否适合",
    metaDescription:
      "想找能先试用的 VPN？这页重点介绍 3 天免费试用、适合中文用户的稳定连接、多设备支持和无日志隐私保护。",
    keywordText: "试用期别只点开一次，拿你自己的网络和设备认真跑一轮。",
    searchIntent: "适合最怕钱先花了，结果用两天就后悔的人。",
    openingAnswer: [
      "试用最值钱的地方，不是省这点钱，是你终于不用光听别人怎么说。拿自己的手机、电脑、Wi‑Fi、流量都跑一遍，合不合适其实很快就知道。",
      "很多人试用没试明白，不是因为时间不够，而是只开了一次就算了。真要试，就按自己平时怎么用去试：晚上高峰试一下，网络切换试一下，多个设备一起装上再试一下。",
    ],
    evaluationPoints: [
      {
        title: "第一件事：先看连得上以后稳不稳",
        body: "不是点一下连上就算过关。你要看的是挂着用半小时、一小时会不会掉，常用网站和 App 打开顺不顺。",
      },
      {
        title: "第二件事：手机电脑都装一下",
        body: "很多人最后不是卡在能不能连，而是卡在切换太麻烦。你平时要是两个设备都用，试用期就别偷懒，直接都装上。",
      },
      {
        title: "第三件事：故意挑你最常用的时候试",
        body: "别只在特别顺的时候试一次。你平时晚上用得多，就晚上试；通勤路上用得多，就拿流量试。这样结论才有意义。",
      },
      {
        title: "第四件事：顺手把规则也看清楚",
        body: "包括无日志、设备数、账号限制这些。别等你觉得还不错了，才发现有些地方跟自己预期不一样。",
      },
    ],
    usefulFor: [
      "不想一上来就付费，想先确认值不值的人",
      "第一次接触 VPN，怕选错的人",
      "想直接拿自己的设备和网络做判断的人",
      "知道自己在意稳定性，但还没想清楚别的需求的人",
    ],
    avoidIf: [
      "你只想找永久免费方案，不在意稳定性差别",
      "你已经知道自己要买哪一个，只剩价格问题",
      "你根本不打算自己试，只想看别人替你下结论",
    ],
    recommendationReason:
      "因为 VPN 这种东西，别人说再多都不如你自己上手用两天。试用期要是用对了，能帮你少走很多弯路。",
    finalTitle: "先免费用个三天，再决定也不迟",
    finalBody:
      "你不用急着现在就下结论。先把手机、电脑、Wi‑Fi 和流量都试一遍，三天下来，基本就知道这钱该不该花。",
    relatedPaths: ["/", "/vpn-guide", "/best-vpn-for-china", "/no-log-vpn"],
  },
  nolog: {
    path: "/no-log-vpn",
    label: "不是极客也会在意这个",
    title: "无日志 VPN 推荐",
    description:
      "很多人看到无日志三个字，会觉得这是不是太技术了。其实没那么复杂，说白了就是：你长期用的时候，想不想少留一点记录，心里更踏实一点。",
    metaTitle: "无日志 VPN 推荐｜更重视隐私保护，也兼顾稳定试用",
    metaDescription:
      "想找不留日志的 VPN？这页重点介绍无日志隐私保护、中国网络环境下的稳定连接、3 天免费试用和 4 台设备支持。",
    keywordText: "如果你本来就不想留下太多痕迹，那无日志值得你早点看。",
    searchIntent: "适合不一定懂很多术语，但就是不想留下太多痕迹的人。",
    openingAnswer: [
      "很多人一开始选 VPN，先看的都是能不能连上。这当然没错。但你要是打算长期用，后面多半都会在意一件事：用完之后会留下多少东西，自己心里安不安稳。",
      "无日志值钱的地方，不是把自己吹得多神，而是让你少一层顾虑。不过它也不能单独看，还是得和稳定性、试用体验放在一起看。",
    ],
    evaluationPoints: [
      {
        title: "先别把无日志想得太玄",
        body: "你不用是技术用户才关心这个。很多人只是单纯不想留下太多使用痕迹，这就已经是很正常、很实际的需求了。",
      },
      {
        title: "隐私和稳定性，最好两边一起看",
        body: "如果一个 VPN 说自己很重视隐私，但你一用就老掉、老断，那日常体验还是会很差。能长期用下去，往往得两边都过关。",
      },
      {
        title: "试用时顺手把隐私这项一起确认",
        body: "别等你已经打算长期用了，才回头看无日志。试用期里顺手看清楚，心里会更踏实。",
      },
      {
        title: "多设备一起用时，这种安心感更明显",
        body: "如果你手机电脑都会挂着用，那你对隐私的在意通常不会更少，只会更明显。所以这一项很适合早点确认。",
      },
    ],
    usefulFor: [
      "本来就比较在意少留痕迹的人",
      "准备长期使用 VPN，不想后面再补看隐私规则的人",
      "希望稳定性和隐私都别太拉胯的人",
      "手机电脑都会用，想整体更安心一点的人",
    ],
    avoidIf: [
      "你只想找最便宜的方案，别的都不在意",
      "你只是临时用一次，不太考虑长期感受",
      "你主要想看特别硬核的技术论文和白皮书",
    ],
    recommendationReason:
      "因为很多人不是一开始就最在意隐私，而是用久了以后才开始在意。早点看清楚，会比后面再补救省心得多。",
    finalTitle: "要长期用的话，无日志确实别放到最后再看",
    finalBody:
      "你不用把这事想得太复杂。要是你本来就比较在意少留记录，那就把无日志和稳定性一起确认掉，再决定要不要继续用，心里会踏实很多。",
    relatedPaths: ["/", "/vpn-guide", "/best-vpn-for-china", "/vpn-free-trial"],
  },
  iphone: {
    path: "/iphone-vpn",
    label: "iPhone VPN · 更适合苹果手机用户",
    title: "iPhone VPN 推荐",
    description:
      "如果你主要在 iPhone 上使用 VPN，那比起看很多复杂参数，更值得先确认的是安装方不方便、切换顺不顺手、连接稳不稳。",
    metaTitle: "iPhone VPN 推荐｜适合苹果手机用户，先试再决定",
    metaDescription:
      "想找适合 iPhone 的 VPN？这页重点介绍苹果手机上的连接稳定性、使用体验、3 天免费试用、多设备支持和隐私保护。",
    keywordText: "先看 iPhone 上安装顺不顺、连接稳不稳，再决定要不要继续用。",
    searchIntent: "适合主要用 iPhone，希望先看手机端体验再决定要不要试用的人。",
    openingAnswer: [
      "很多人找 iPhone VPN，真正想知道的不是专业术语，而是装上之后是不是顺手：好不好连、切换快不快、日常会不会麻烦。",
      "如果你本来就主要在 iPhone 上用，那最值得先确认的就是手机端体验，而不是先看一堆和自己无关的桌面端参数。",
    ],
    evaluationPoints: [
      {
        title: "先看安装和连接是不是省事",
        body: "对 iPhone 用户来说，第一次装上后能不能快速连上、切换是否顺手，往往比理论参数更重要。",
      },
      {
        title: "再看中国网络环境下稳不稳",
        body: "如果你是在中国网络环境下使用，稳定性依然是第一位。手机端再方便，如果经常掉线，体验还是会打折。",
      },
      {
        title: "多设备支持会更实用",
        body: "很多人不会只在手机上用，一个账号支持 4 台设备，意味着 iPhone 和电脑可以一起覆盖。",
      },
      {
        title: "隐私也别放到最后才看",
        body: "如果你会长期使用 iPhone VPN，那无日志这类隐私信号也值得早点确认。",
      },
    ],
    usefulFor: [
      "主要在 iPhone 上使用 VPN 的人",
      "想先看苹果手机端体验顺不顺的人",
      "希望手机和电脑后续一起用的人",
      "不想一开始就做长期决定的人",
    ],
    avoidIf: [
      "主要使用 Windows 或 Mac，手机只是偶尔才用的人",
      "只想看节点数量和复杂参数的人",
      "只想找完全免费的临时工具的人",
    ],
    recommendationReason:
      "如果你主要用 iPhone，那就先看手机端体验好不好。装得顺、连得稳、切换方便，通常比纸面参数更重要。",
    finalTitle: "如果你主要用 iPhone，先把手机端体验试出来",
    finalBody:
      "最直接的做法还是先试 3 天。你只要在自己常用的网络环境里试试连接速度、切换流畅度和日常使用感受，很快就能知道它适不适合你。",
    relatedPaths: ["/", "/vpn-guide", "/best-vpn-for-china", "/vpn-free-trial"],
  },
  android: {
    path: "/android-vpn",
    label: "Android VPN · 更适合安卓手机用户",
    title: "Android VPN 推荐",
    description:
      "如果你主要在安卓手机上使用 VPN，那除了能不能连上，更值得先确认的是兼容性、切换顺不顺，以及在中国网络环境下稳不稳。",
    metaTitle: "Android VPN 推荐｜适合安卓手机用户，连接稳定更重要",
    metaDescription:
      "想找适合 Android 的 VPN？这页重点介绍安卓手机上的连接稳定性、兼容性、3 天免费试用、多设备支持和隐私保护。",
    keywordText: "先看安卓手机上连得稳不稳、切换顺不顺，再决定要不要继续用。",
    searchIntent: "适合主要用安卓手机，希望先看稳定性和兼容性的人。",
    openingAnswer: [
      "很多人找 Android VPN，最担心的不是能不能装，而是装上之后是否稳定、通知栏切换顺不顺、不同网络环境下会不会掉。",
      "如果你本来就主要在安卓手机上使用，那先把手机端体验确认清楚，会比先看很多桌面端内容更有意义。",
    ],
    evaluationPoints: [
      {
        title: "先看兼容性和切换体验",
        body: "安卓机型和系统版本比较多，所以装上之后是否顺手、切换是否方便，是很值得先确认的一点。",
      },
      {
        title: "稳定性还是第一位",
        body: "尤其是在中国网络环境下，安卓端能不能长期稳定连接，决定了你后面愿不愿意继续用。",
      },
      {
        title: "试用期最适合验证真实体验",
        body: "先用自己的手机、自己的网络和自己的使用时间段去试，会比看别人总结更准确。",
      },
      {
        title: "多设备支持会让后续更方便",
        body: "如果你后面还想在电脑上一起用，一个账号支持 4 台设备会省很多事。",
      },
    ],
    usefulFor: [
      "主要在安卓手机上使用 VPN 的人",
      "希望先看兼容性和手机端顺手程度的人",
      "想先试几天再决定的人",
      "后续还想和电脑一起用的人",
    ],
    avoidIf: [
      "主要只在桌面端使用的人",
      "只想看复杂评测和机型横评的人",
      "只打算临时用一次的人",
    ],
    recommendationReason:
      "如果你是安卓用户，先看稳定性和兼容性通常最划算，因为这两点最直接影响日常体验。",
    finalTitle: "如果你主要用安卓，先把兼容性和稳定性试出来",
    finalBody:
      "对安卓用户来说，最靠谱的判断方式还是先试 3 天。装到自己的手机上，在常用网络环境里试试，结论通常很快就出来了。",
    relatedPaths: ["/", "/vpn-guide", "/best-vpn-for-china", "/vpn-free-trial"],
  },
  windows: {
    path: "/windows-vpn",
    label: "Windows VPN · 更适合电脑端使用",
    title: "Windows VPN 推荐",
    description:
      "如果你主要在 Windows 电脑上使用 VPN，那比起看很多花哨功能，更值得先确认的是连接稳不稳、切换快不快，以及日常用起来麻不麻烦。",
    metaTitle: "Windows VPN 推荐｜适合电脑端使用，先试再决定",
    metaDescription:
      "想找适合 Windows 的 VPN？这页重点介绍电脑端连接稳定性、切换效率、3 天免费试用、多设备支持和隐私保护。",
    keywordText: "先看 Windows 电脑上连接稳不稳、切换快不快，再决定值不值得继续用。",
    searchIntent: "适合主要在 Windows 电脑上使用，希望先看桌面端稳定性和效率的人。",
    openingAnswer: [
      "很多人找 Windows VPN，真正关心的是电脑端能不能稳、切换够不够快、日常使用时会不会频繁出问题。",
      "如果你本来就主要在电脑上使用，那先看桌面端体验会更有参考价值，比看太多泛泛的介绍更直接。",
    ],
    evaluationPoints: [
      {
        title: "先看电脑端连接稳定性",
        body: "Windows 端最重要的还是连接本身：能不能稳、会不会频繁断开、切换时是否顺畅。",
      },
      {
        title: "再看切换和日常使用效率",
        body: "如果每次切换都很慢、很卡，日常使用体验就会很差，所以桌面端的流畅度很重要。",
      },
      {
        title: "免费试用能少走弯路",
        body: "直接在自己的 Windows 电脑上试几天，通常比看很多测评更能说明问题。",
      },
      {
        title: "手机电脑一起用会更完整",
        body: "如果你不只在电脑上用，一个账号支持 4 台设备，后面扩到手机上也会更方便。",
      },
    ],
    usefulFor: [
      "主要在 Windows 电脑上使用 VPN 的人",
      "希望先看连接稳定和切换效率的人",
      "办公、学习或日常浏览更依赖电脑的人",
      "想先试几天再决定的人",
    ],
    avoidIf: [
      "主要只在手机端使用的人",
      "只想看特别技术化参数的人",
      "只是偶尔临时使用一次的人",
    ],
    recommendationReason:
      "如果你主要在 Windows 电脑上用，那最值得优先看的就是稳定性和切换效率，因为这两点最直接影响日常使用感受。",
    finalTitle: "如果你主要用 Windows，先把电脑端体验试清楚",
    finalBody:
      "最直接的办法还是先试 3 天。你只要在自己的 Windows 电脑上多用几个场景，很快就能判断它到底适不适合长期使用。",
    relatedPaths: ["/", "/vpn-guide", "/best-vpn-for-china", "/vpn-free-trial"],
  },
  mac: {
    path: "/mac-vpn",
    label: "Mac VPN · 更适合苹果电脑用户",
    title: "Mac VPN 推荐",
    description:
      "如果你主要在 Mac 上使用 VPN，那除了连接稳不稳，也值得先确认安装体验、切换流畅度，以及和 iPhone 等设备一起使用时顺不顺。",
    metaTitle: "Mac VPN 推荐｜适合苹果电脑用户，体验顺手更重要",
    metaDescription:
      "想找适合 Mac 的 VPN？这页重点介绍苹果电脑上的连接稳定性、安装体验、3 天免费试用、多设备支持和隐私保护。",
    keywordText: "先看 Mac 上安装顺不顺、切换流不流畅，再决定要不要继续用。",
    searchIntent: "适合主要在 Mac 上使用，希望先看苹果电脑端体验的人。",
    openingAnswer: [
      "很多人找 Mac VPN，真正想知道的是：装上后顺不顺、连起来稳不稳、和 iPhone 等设备一起用时会不会省事。",
      "如果你本来就在苹果生态里，那比起看很多抽象参数，更值得先确认的是实际体验够不够顺手。",
    ],
    evaluationPoints: [
      {
        title: "先看安装和切换是否顺手",
        body: "对 Mac 用户来说，安装体验和切换流畅度很影响第一印象，也是日常最常感受到的部分。",
      },
      {
        title: "稳定性依然不能放松",
        body: "即使是 Mac 端，真正决定你会不会留下来的，还是中国网络环境下能不能稳定使用。",
      },
      {
        title: "多设备支持会更有价值",
        body: "如果你还会在 iPhone 或 iPad 等设备上一起用，一个账号支持 4 台设备会更省心。",
      },
      {
        title: "隐私适合一起确认",
        body: "如果你会长期使用 Mac VPN，那无日志这类隐私信号也值得一起看清楚。",
      },
    ],
    usefulFor: [
      "主要在 Mac 上使用 VPN 的人",
      "身处苹果生态，希望多设备配合更顺的人",
      "想先看安装体验和流畅度的人",
      "希望先试几天再决定的人",
    ],
    avoidIf: [
      "主要使用 Windows 或安卓设备的人",
      "只想看特别底层参数的人",
      "只打算非常短期使用的人",
    ],
    recommendationReason:
      "如果你主要用 Mac，那先把安装体验、切换流畅度和稳定性看清楚，通常就够你判断它适不适合长期留下来。",
    finalTitle: "如果你主要用 Mac，先把顺手程度试出来",
    finalBody:
      "对 Mac 用户来说，最靠谱的方式还是先试 3 天。只要在自己的电脑和常用网络环境里实际用一轮，通常很快就知道值不值得继续。",
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



