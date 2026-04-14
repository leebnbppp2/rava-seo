const faqItems = [
  {
    q: "这个 VPN 在中国网络环境下能用吗？",
    a: "核心卖点就是更适合中国网络环境。页面主打的是自研连通协议和更强的穿透能力，目标就是帮助用户更稳定地访问海外网站和应用。",
  },
  {
    q: "可以先试用再决定吗？",
    a: "可以，提供 3 天免费试用。对于第一次使用 VPN 的用户，这是最直接的低门槛体验方式。",
  },
  {
    q: "一个账号能同时给几台设备用？",
    a: "一个账号支持 4 台设备同时使用，覆盖 Android、iPhone、Windows 和 Mac，日常手机 + 电脑一起用也够。",
  },
  {
    q: "会记录我的使用日志吗？",
    a: "页面主打不留存日志，重点是保护用户隐私，减少对浏览行为和使用记录的担忧。",
  },
];

const appTargets = ["Android", "iPhone", "Windows", "Mac"];

const featureCards = [
  {
    title: "针对中国网络环境更强",
    body: "自研连通协议，穿透力更强，适合需要更稳定访问体验的中文用户。",
  },
  {
    title: "3 天免费试用",
    body: "先试用，再决定是否继续使用，不用一开始就承担太高成本。",
  },
  {
    title: "1 个账号支持 4 台设备",
    body: "手机、电脑都能一起用，适合日常多设备切换的使用场景。",
  },
  {
    title: "不留日志，更重视隐私",
    body: "减少用户对访问记录和隐私泄露的顾虑，强调更安心的使用体验。",
  },
];

const useCases = [
  "访问海外网站与应用",
  "旅行或出差时保持稳定连接",
  "手机和电脑同时使用",
  "更重视隐私保护的日常浏览",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <main id="top" className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-shell px-4 pb-16 pt-6 md:pb-24 md:pt-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 flex items-center justify-between gap-4 rounded-full border border-black/10 bg-white/40 px-5 py-3 backdrop-blur-sm">
            <div>
              <p className="text-lg font-black tracking-tight">Rava VPN</p>
              <p className="text-xs text-[var(--muted)]">简洁、稳定、面向中文用户的 VPN 引导页</p>
            </div>
            <a href="#faq" className="text-sm font-semibold text-[var(--foreground)]/80 transition-opacity hover:opacity-70">
              常见问题
            </a>
          </header>

          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="section-label mb-4 text-[var(--accent-dark)]">中国可用 · 稳定连接 · 隐私保护</p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                中国可用的稳定 VPN 推荐
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
                适合中文用户的简洁 VPN 入口页。自研协议针对中国网络环境有更强穿透力，支持 3 天免费试用、4 台设备同时使用，并强调不留日志的隐私保护。
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="/go" className="btn-primary text-base md:text-lg">
                  开始免费试用
                </a>
                <a href="#features" className="btn-secondary text-base md:text-lg">
                  查看核心特点
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-[var(--muted)]">
                <span className="rounded-full border border-black/10 bg-white/50 px-4 py-2">3 天免费试用</span>
                <span className="rounded-full border border-black/10 bg-white/50 px-4 py-2">4 台设备同时使用</span>
                <span className="rounded-full border border-black/10 bg-white/50 px-4 py-2">针对中国网络更强穿透</span>
              </div>
            </div>

            <div className="surface-card rounded-[2rem] p-6 md:p-8">
              <p className="section-label mb-4 text-[var(--accent)]">为什么很多中文用户会先看这 4 点</p>
              <div className="space-y-4">
                {featureCards.map((card, index) => (
                  <div key={card.title} className="rounded-3xl border border-black/8 bg-white/70 p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-dark)] text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <h2 className="text-lg font-extrabold">{card.title}</h2>
                    </div>
                    <p className="text-sm leading-7 text-[var(--muted)]">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-4 pb-12 md:pb-18">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="surface-dark rounded-[2rem] p-8 md:p-10">
            <p className="section-label mb-4 text-[#ffe557]">适合的使用场景</p>
            <h2 className="text-3xl font-black md:text-4xl">简单、直接、够稳定</h2>
            <p className="mt-4 text-base leading-8 text-white/78">
              这个页面不讲很多技术细节，只讲中文用户最关心的几个判断标准：能不能用、能不能先试、能不能多设备、会不会影响隐私。
            </p>
            <div className="mt-8 grid gap-3">
              {useCases.map((item) => (
                <div key={item} className="app-chip">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-8 md:p-10">
            <p className="section-label mb-4 text-[var(--accent)]">支持平台</p>
            <h2 className="text-3xl font-black md:text-4xl">一个账号，可覆盖 4 类常用设备</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              日常手机、电脑一起使用更方便，不需要只给单一设备开通。适合需要在多个设备间切换的中文用户。
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {appTargets.map((item) => (
                <div key={item} className="rounded-3xl border border-black/8 bg-white/70 p-5">
                  <p className="text-lg font-bold">{item}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">支持稳定使用，适合手机和电脑混合场景。</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-18">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[var(--accent-dark)] px-6 py-10 text-white md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="section-label mb-4 text-[#ffe557]">为什么这个页面更适合中文用户</p>
              <h2 className="text-3xl font-black md:text-4xl">不是讲很多，而是让你更快做决定</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                如果你主要关心中国能不能稳定使用、是否有免费试用、是否支持多设备、以及是否重视隐私保护，那么这个页面已经把最重要的信息收拢好了。
              </p>
            </div>
            <div className="rounded-[2rem] bg-white/8 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">核心引导</p>
              <p className="mt-3 text-2xl font-black">先试 3 天，再决定要不要继续</p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                对第一次使用 VPN 的用户来说，免费试用比复杂评测更直接，也更容易做出决定。
              </p>
              <a href="/go" className="btn-primary mt-6 w-full text-base">
                立即前往试用
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <p className="section-label mb-4 text-[var(--accent-dark)]">常见问题</p>
            <h2 className="text-3xl font-black md:text-4xl">先把最重要的问题看清楚</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              这几个问题，基本就是中文用户点击前最常见的顾虑。
            </p>
          </div>

          <div className="grid gap-4">
            {faqItems.map((item) => (
              <details key={item.q} className="faq-item surface-card rounded-[1.5rem] p-5 md:p-6">
                <summary className="cursor-pointer text-lg font-bold">{item.q}</summary>
                <p className="mt-3 max-w-4xl text-sm leading-8 text-[var(--muted)] md:text-base">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="surface-card mt-10 rounded-[2rem] p-8 text-center md:p-10">
            <p className="section-label mb-3 text-[var(--accent)]">最后一步</p>
            <h2 className="text-3xl font-black md:text-4xl">如果你主要在找中国可用、稳定、可先试的 VPN</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              那么现在最简单的动作就是先去试用。先看连接体验，再决定是否继续使用，比看一堆复杂介绍更有价值。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/go" className="btn-primary text-base md:text-lg">
                开始免费试用
              </a>
              <a href="#top" className="btn-secondary text-base md:text-lg">
                回到顶部
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-4 py-8 text-center text-sm text-[var(--muted)]">
        <div className="mx-auto max-w-6xl">
          <p>© 2026 Rava SEO Landing Page</p>
          <p className="mt-2">本页为简洁引导页，重点帮助中文用户快速了解产品特点并进入试用流程。</p>
        </div>
      </footer>
    </main>
  );
}
