import type { Metadata } from "next";
import Link from "next/link";
import { coreFeatures, primaryReferralPath, sharedFaqs, siteUrl, supportedDevices } from "@/lib/site";

type LandingPageProps = {
  label: string;
  title: string;
  description: string;
  introTitle: string;
  introBody: string;
  finalTitle: string;
  finalBody: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  keywordText?: string;
};

export function buildMetadata({ metaTitle, metaDescription, canonicalPath }: Pick<LandingPageProps, "metaTitle" | "metaDescription" | "canonicalPath">): Metadata {
  const canonical = `${siteUrl}${canonicalPath}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "中国好用vpn",
      "稳定vpn推荐",
      "免费试用vpn",
      "无日志vpn",
      "多设备vpn",
      metaTitle,
    ],
    alternates: { canonical },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: "Rava VPN",
      locale: "zh_CN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
}

export default function VpnLandingPage({
  label,
  title,
  description,
  introTitle,
  introBody,
  finalTitle,
  finalBody,
  keywordText,
}: LandingPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sharedFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main id="top" className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero-shell px-4 pb-16 pt-6 md:pb-24 md:pt-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 flex items-center justify-between gap-4 rounded-full border border-black/10 bg-white/40 px-5 py-3 backdrop-blur-sm">
            <div>
              <p className="text-lg font-black tracking-tight">Rava VPN</p>
              <p className="text-xs text-[var(--muted)]">中文用户优先的极简 VPN 引导页</p>
            </div>
            <Link href="#faq" className="text-sm font-semibold text-[var(--foreground)]/80 transition-opacity hover:opacity-70">
              常见问题
            </Link>
          </header>

          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="section-label mb-4 text-[var(--accent-dark)]">{label}</p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">{title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">{description}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={primaryReferralPath} className="btn-primary text-base md:text-lg">
                  开始免费试用
                </a>
                <Link href="#features" className="btn-secondary text-base md:text-lg">
                  查看核心特点
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-[var(--muted)]">
                <span className="rounded-full border border-black/10 bg-white/50 px-4 py-2">3 天免费试用</span>
                <span className="rounded-full border border-black/10 bg-white/50 px-4 py-2">4 台设备同时使用</span>
                <span className="rounded-full border border-black/10 bg-white/50 px-4 py-2">更适合中国网络环境</span>
              </div>
            </div>

            <div className="surface-card rounded-[2rem] p-6 md:p-8">
              <p className="section-label mb-4 text-[var(--accent)]">为什么很多人会先看这 4 点</p>
              <div className="space-y-4">
                {coreFeatures.map((card, index) => (
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
            <p className="section-label mb-4 text-[#ffe557]">为什么这个方向值得看</p>
            <h2 className="text-3xl font-black md:text-4xl">{introTitle}</h2>
            <p className="mt-4 text-base leading-8 text-white/78">{introBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {supportedDevices.map((item) => (
                <div key={item} className="app-chip">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-8 md:p-10">
            <p className="section-label mb-4 text-[var(--accent)]">适合什么人</p>
            <h2 className="text-3xl font-black md:text-4xl">想找一个简单、能先试、又更稳的 VPN</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              如果你主要关心中国能不能用、连接够不够稳、能不能多设备一起用，以及隐私是否更安心，那么这个方向就很适合你。
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-black/8 bg-white/70 p-5">
                <p className="text-lg font-bold">连接更稳</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">主打中国网络环境下更强穿透力，减少连不上或忽快忽慢的情况。</p>
              </div>
              <div className="rounded-3xl border border-black/8 bg-white/70 p-5">
                <p className="text-lg font-bold">先试再决定</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">3 天免费试用，先体验再决定，少一点心理负担。</p>
              </div>
              <div className="rounded-3xl border border-black/8 bg-white/70 p-5">
                <p className="text-lg font-bold">多设备更方便</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">一个账号支持 4 台设备，手机和电脑一起用更顺手。</p>
              </div>
              <div className="rounded-3xl border border-black/8 bg-white/70 p-5">
                <p className="text-lg font-bold">隐私顾虑更少</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">强调不留日志，适合更在意隐私保护的人群。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-18">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[var(--accent-dark)] px-6 py-10 text-white md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="section-label mb-4 text-[#ffe557]">简短结论</p>
              <h2 className="text-3xl font-black md:text-4xl">{finalTitle}</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">{finalBody}</p>
              {keywordText ? <p className="mt-4 text-sm text-white/62">关键词方向：{keywordText}</p> : null}
            </div>
            <div className="rounded-[2rem] bg-white/8 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">核心动作</p>
              <p className="mt-3 text-2xl font-black">先试 3 天，再决定要不要继续</p>
              <p className="mt-3 text-sm leading-7 text-white/72">对大多数中文用户来说，先试速度和稳定性，比先看一堆复杂介绍更有价值。</p>
              <a href={primaryReferralPath} className="btn-primary mt-6 w-full text-base">
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
            <h2 className="text-3xl font-black md:text-4xl">先把最关心的问题看清楚</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">这些问题，基本就是中文用户点进来之后最常问的几件事。</p>
          </div>

          <div className="grid gap-4">
            {sharedFaqs.map((item) => (
              <details key={item.q} className="faq-item surface-card rounded-[1.5rem] p-5 md:p-6">
                <summary className="cursor-pointer text-lg font-bold">{item.q}</summary>
                <p className="mt-3 max-w-4xl text-sm leading-8 text-[var(--muted)] md:text-base">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="surface-card mt-10 rounded-[2rem] p-8 text-center md:p-10">
            <p className="section-label mb-3 text-[var(--accent)]">下一步</p>
            <h2 className="text-3xl font-black md:text-4xl">如果你想找的是中国能用、连接更稳、还能先试的 VPN</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
              那最直接的做法就是先去试用。先体验连接效果，再决定是否继续使用，会比反复看评测更省时间。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={primaryReferralPath} className="btn-primary text-base md:text-lg">
                开始免费试用
              </a>
              <Link href="/" className="btn-secondary text-base md:text-lg">
                返回首页
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
