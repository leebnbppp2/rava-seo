export const siteUrl = "https://tryrava.com";
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
  faqs?: { q: string; a: string }[];
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
    shortTitle: "稳定 VPN",
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
    searchIntent: "适合已经被一堆套话看烦了，只想赶紧判断能不能试的人。",
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
      "很多人搜这个词，不是来做功课的，就是想赶紧知道：在中国用的时候到底稳不稳，会不会老掉线。",
    metaTitle: "中国好用 VPN 推荐｜适合中国网络环境，支持免费试用",
    metaDescription:
      "想找在中国更稳一点的 VPN？这页不跟你绕，直接看最关键的几件事：连得稳不稳、能不能先免费用 3 天、手机电脑能不能一起用，以及长期用起来安不安心。",
    keywordText: "别看它吹得多热闹，你就盯着一件事：在你手里到底稳不稳。",
    searchIntent: "适合已经被掉线搞烦了，只想赶紧找个稳一点的人。",
    openingAnswer: [
      "很多人不是想研究 VPN，是被逼得想赶紧找个能用的。最烦的就是刚连上没两分钟又掉，或者一换 Wi‑Fi、切成流量，又得重新折腾。真碰上这种情况，前面写得再漂亮也没用。",
      "所以这页就盯着一件事讲：在中国用的时候到底稳不稳。你把连接表现、网络切换、常用场景和试用期这几件事看完，心里基本就有数了。",
    ],
    evaluationPoints: [
      {
        title: "别光看能不能连上，晚上稳不稳才是真的",
        body: "很多服务白天看着像没事，一到晚上人多就开始抽风。最好就挑你平时最常用的时间去试，不然很容易被它骗过去。",
      },
      {
        title: "一换 Wi‑Fi 或流量就掉，那也挺烦",
        body: "家里 Wi‑Fi、公司网络、手机流量来回切的时候，要是动不动就断、还得重新连，日常用起来真的很磨人。",
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
    finalTitle: "别猜了，先拿自己的网络跑三天",
    finalBody:
      "你真想知道它在中国好不好用，最省事的办法就是先免费试三天。把自己最常用的 Wi‑Fi、流量、手机和电脑都跑一遍，答案基本自己就出来了。",
    relatedPaths: ["/", "/vpn-guide", "/vpn-free-trial", "/no-log-vpn"],
    faqs: [
      {
        q: "在中国用 VPN，到底先看啥？",
        a: "先别急着看一堆参数，你先盯三件事就够了：晚上高峰稳不稳，换 Wi‑Fi 或流量会不会掉，你常用的网站和 App 能不能顺顺打开。对大多数人来说，这比测速图实在多了。",
      },
      {
        q: "免费试用这事，真有必要吗？",
        a: "有。别人说稳，不一定到你这边也稳。你拿自己的手机、电脑、Wi‑Fi 和流量直接跑几天，比你再刷十篇总结都准。",
      },
      {
        q: "如果只是偶尔出问题，还算不算能用？",
        a: "要看你能不能接受。偶尔慢一下不一定致命，但如果经常掉线、切网络就要重连，长期用起来通常会很烦。",
      },
    ],
  },
  trial: {
    path: "/vpn-free-trial",
    label: "先别急着买",
    title: "免费试用 VPN 推荐",
    description:
      "要是你最怕钱先花了才发现不好用，那就先免费用个三天。",
    metaTitle: "免费试用 VPN 推荐｜先试 3 天，再判断是否适合",
    metaDescription:
      "想找能先试用的 VPN？这页重点介绍 3 天免费试用、适合中文用户的稳定连接、多设备支持和无日志隐私保护。",
    keywordText: "别只点开一次，拿你自己的网络和设备跑一轮。",
    searchIntent: "适合最怕买完后悔的人。",
    openingAnswer: [
      "试用的意义很简单：别光听别人说，拿自己的手机、电脑、Wi‑Fi 和流量跑一遍，很快就知道合不合适。",
      "很多人试不明白，不是时间不够，是只试了一下。真要试，就按平时最常用的场景去试。",
    ],
    evaluationPoints: [
      {
        title: "先看稳不稳",
        body: "不是连上一次就算。你要看的是挂着用会不会掉，常用网站和 App 打开顺不顺。",
      },
      {
        title: "手机电脑都装一下",
        body: "你平时要是两个设备都用，试用期就别偷懒，直接都装上。",
      },
      {
        title: "挑你最常用的时候试",
        body: "晚上用得多就晚上试，路上用得多就拿流量试。这样结论才准。",
      },
      {
        title: "顺手看清规则",
        body: "设备数、账号限制、无日志这些，试用时一起看完更省事。",
      },
    ],
    usefulFor: [
      "不想一上来就付费的人",
      "第一次接触 VPN 的人",
      "想拿自己的设备直接试的人",
      "怕买完后悔的人",
    ],
    avoidIf: [
      "只想找永久免费方案的人",
      "已经确定要买哪一个的人",
      "根本不打算自己试的人",
    ],
    recommendationReason:
      "因为这种东西，别人说再多，不如你自己用两天。",
    finalTitle: "先免费用个三天，再决定",
    finalBody:
      "先把手机、电脑、Wi‑Fi 和流量都试一遍，三天下来，基本就知道这钱该不该花。",
    relatedPaths: ["/", "/vpn-guide", "/best-vpn-for-china", "/no-log-vpn"],
    faqs: [
      {
        q: "免费试用时，最容易试错的地方是什么？",
        a: "最常见的问题就是只点开一次就下结论。真要试，最好把家里 Wi‑Fi、手机流量、手机和电脑都跑一遍，再挑你最常用的时间段看稳不稳。",
      },
      {
        q: "3 天试用够不够判断要不要买？",
        a: "对大多数人来说够了。你只要按自己平时最常用的场景去试，三天下来通常就能判断它适不适合长期留下来。",
      },
      {
        q: "试用时除了连不连得上，还该看什么？",
        a: "还要看换网络会不会掉、常用网站和 App 打开顺不顺、手机电脑一起用会不会麻烦。能不能长期省心，往往就在这些细节里。",
      },
    ],
  },
  nolog: {
    path: "/no-log-vpn",
    label: "在意隐私就看这个",
    title: "无日志 VPN 推荐",
    description:
      "无日志没那么玄，说白了就是你长期用的时候，想不想少留一点记录。",
    metaTitle: "无日志 VPN 推荐｜更重视隐私保护，也兼顾稳定试用",
    metaDescription:
      "想找不留日志的 VPN？这页重点介绍无日志隐私保护、中国网络环境下的稳定连接、3 天免费试用和 4 台设备支持。",
    keywordText: "如果你不想留下太多痕迹，那这一项值得早点看。",
    searchIntent: "适合在意隐私，但不想看太多术语的人。",
    openingAnswer: [
      "很多人一开始先看能不能连上。真打算长期用，后面多半都会在意另一件事：会留下多少东西。",
      "无日志的价值也很简单，不是吹得多厉害，而是让你少一层顾虑。",
    ],
    evaluationPoints: [
      {
        title: "别把它想太玄",
        body: "你不用是技术用户，才会在意少留一点痕迹。",
      },
      {
        title: "稳定和隐私一起看",
        body: "只讲隐私但老掉线，日常还是会很烦。两边都得过关。",
      },
      {
        title: "试用时顺手确认",
        body: "别等准备长期用了，才回头看无日志。试用时一起看完最省心。",
      },
      {
        title: "长期用更该看",
        body: "你要是手机电脑都会挂着用，这一项就更值得早点确认。",
      },
    ],
    usefulFor: [
      "本来就比较在意少留痕迹的人",
      "准备长期使用 VPN 的人",
      "想稳定和隐私一起看的人",
      "手机电脑都会用的人",
    ],
    avoidIf: [
      "只想找最便宜方案的人",
      "只是临时用一次的人",
      "想看特别硬核技术内容的人",
    ],
    recommendationReason:
      "因为很多人不是一开始最在意隐私，是用久了才开始在意。",
    finalTitle: "要长期用，无日志别最后才看",
    finalBody:
      "要是你本来就比较在意少留记录，那就把无日志和稳定性一起确认掉，再决定要不要继续用。",
    relatedPaths: ["/", "/vpn-guide", "/best-vpn-for-china", "/vpn-free-trial"],
    faqs: [
      {
        q: "无日志到底值不值得单独拿出来看？",
        a: "值得。如果你本来就比较在意少留痕迹，越早确认这件事越安心。它不一定是你第一眼就会看的点，但通常是长期使用时很难忽略的一项。",
      },
      {
        q: "无日志是不是就等于绝对安全？",
        a: "不是。无日志更像是少一层顾虑，不是开了以后就什么都不用管了。真正更实用的做法，是把隐私和稳定性一起确认。",
      },
      {
        q: "如果主要想长期用，除了无日志还该一起看什么？",
        a: "还要看中国网络环境下稳不稳、多个设备一起用麻不麻烦、试用时能不能把常用场景跑清楚。长期省心，通常不是只看一个标签。",
      },
    ],
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
    title: "先按你最在意的点来选",
    body: "最担心中国能不能稳用，就先看中国使用那页；最怕花了钱才后悔，就先看免费试用；更在意长期安心，就先看无日志。先把问题拆开，判断会更快。",
  },
  {
    title: "先看自己会不会用得顺",
    body: "很多人真正想知道的不是专业术语，而是自己平时会不会用得省心：连得上吗、切换方便吗、值不值得继续。先把这些事看清楚更重要。",
  },
  {
    title: "设备和试用期最容易帮你排除不合适的",
    body: "如果你平时用 iPhone、Android、Windows 或 Mac，就直接看对应页面；如果你还没想好要不要买，先拿 3 天试用把常用场景跑一遍，通常很快就有答案。",
  },
];

export function getRelatedPages(paths: string[]) {
  return pageLinks.filter((item) => paths.includes(item.href));
}

export function buildAbsoluteUrl(path: string) {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}



