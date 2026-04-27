import type { Metadata } from "next";
import Link from "next/link";
import { buildAbsoluteUrl, lastUpdated, pageLinks, primaryReferralPath, quickSignals, siteName, topicHubSections } from "@/lib/site";

export const metadata: Metadata = {
  title: "中文 VPN 选购专题｜中国使用、免费试用、无日志与多设备",
  description:
    "整理中文用户最常见的 VPN 搜索主题：适合中国使用、免费试用、无日志、多设备和设备兼容，作为百度和 Google 双兼容的专题聚合页。",
  keywords: ["vpn 专题", "中文 vpn 选购", "中国好用 vpn", "免费试用 vpn", "无日志 vpn"],
  alternates: { canonical: buildAbsoluteUrl("/vpn-guide") },
  openGraph: {
    title: "中文 VPN 选购专题｜中国使用、免费试用、无日志与多设备",
    description:
      "整理中文用户最常见的 VPN 搜索主题：适合中国使用、免费试用、无日志、多设备和设备兼容，作为百度和 Google 双兼容的专题聚合页。",
    url: buildAbsoluteUrl("/vpn-guide"),
    siteName,
    locale: "zh_CN",
    type: "website",
  },
};

export default function VpnGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: '中文 VPN 选购专题',
        description:
          '整理中国使用、免费试用、无日志和多设备支持等主题，帮助中文用户快速选择更适合自己的 VPN 页面入口。',
        url: buildAbsoluteUrl('/vpn-guide'),
        inLanguage: 'zh-CN',
        dateModified: lastUpdated,
      },
      {
        '@type': 'ItemList',
        itemListElement: pageLinks.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: buildAbsoluteUrl(item.href),
          name: item.title,
        })),
      },
    ],
  };

  return (
    <main className="w-full px-4 pb-20 pt-6 md:pb-24 md:pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-6xl">
        <header className="hero-shell rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
          <div className="max-w-4xl">
            <p className="section-label mb-4 text-[var(--accent-dark)]">中文 VPN 选购专题 · 按需求快速找入口</p>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">先按需求选入口，比来回看资料更快</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              这一页把中文用户最常见的几个判断方向整理在一起：适合中国使用、免费试用、无日志、设备兼容和多设备场景。你可以先看自己最在意哪一项，再进入对应页面，会比盲目到处找资料更省时间。
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={primaryReferralPath}
                className="btn-primary text-base md:text-lg"
                data-track-outbound="rava-go"
                data-cta-label="guide-hero-trial"
                data-cta-location="/vpn-guide"
              >
                直接开始试用
              </a>
              <Link href="/" className="btn-secondary text-base md:text-lg">
                返回首页总览
              </Link>
            </div>
          </div>
        </header>

        <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quickSignals.map((item) => (
            <div key={item.title} className="surface-card rounded-[1.75rem] p-5">
              <p className="text-lg font-bold">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-dark rounded-[2rem] p-8 md:p-10">
            <p className="section-label mb-4 text-[#ffe557]">为什么要做专题页</p>
            <div className="space-y-5 text-base leading-8 text-white/78">
              {topicHubSections.map((item) => (
                <div key={item.title}>
                  <h2 className="text-2xl font-black text-white">{item.title}</h2>
                  <p className="mt-2">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {pageLinks.map((item) => (
              <Link key={item.href} href={item.href} className="surface-card rounded-[2rem] p-6 transition hover:-translate-y-0.5">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="section-label text-[var(--accent)]">{item.shortTitle}</p>
                    <h2 className="mt-2 text-2xl font-black">{item.title}</h2>
                  </div>
                  <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--muted)]">
                    进入页面
                  </span>
                </div>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{item.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="surface-card mt-12 rounded-[2rem] p-8 md:p-10">
          <p className="section-label mb-4 text-[var(--accent-dark)]">阅读建议</p>
          <h2 className="text-3xl font-black md:text-4xl">如果你不知道先看哪一页，可以按这个顺序走</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-black/8 bg-white/70 p-5">
              <p className="text-lg font-bold">第一步：看首页总览</p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">先搞清稳定性、试用、多设备和隐私这四个判断标准。</p>
            </div>
            <div className="rounded-[1.5rem] border border-black/8 bg-white/70 p-5">
              <p className="text-lg font-bold">第二步：按需求进子页</p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">更在意中国使用就看“中国好用 VPN”，更在意试错成本就看“免费试用 VPN”。</p>
            </div>
            <div className="rounded-[1.5rem] border border-black/8 bg-white/70 p-5">
              <p className="text-lg font-bold">第三步：直接试 3 天</p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">真实网络环境下的体验，会比任何总结更能帮你做决定。</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={primaryReferralPath}
              className="btn-primary text-base md:text-lg"
              data-track-outbound="rava-go"
              data-cta-label="guide-footer-trial"
              data-cta-location="/vpn-guide"
            >
              立即前往试用
            </a>
            <Link href="/best-vpn-for-china" className="btn-secondary text-base md:text-lg">
              先看中国使用页
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
