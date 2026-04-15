import type { Metadata } from "next";
import Link from "next/link";
import {
  buildAbsoluteUrl,
  getRelatedPages,
  LandingPageData,
  lastUpdated,
  pageLinks,
  primaryReferralPath,
  quickSignals,
  sharedFaqs,
  siteName,
} from "@/lib/site";

export function buildMetadata(page: Pick<LandingPageData, "path" | "metaTitle" | "metaDescription" | "title">): Metadata {
  const canonical = buildAbsoluteUrl(page.path);

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: [page.title, page.metaTitle, siteName, "中国好用vpn", "免费试用vpn", "无日志vpn"],
    alternates: { canonical },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      siteName,
      locale: "zh_CN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

type VpnLandingPageProps = {
  page: LandingPageData;
};

export default function VpnLandingPage({ page }: VpnLandingPageProps) {
  const relatedPages = getRelatedPages(page.relatedPaths);
  const heroSignals = quickSignals.slice(0, 1);
  const openingParagraphs = page.openingAnswer.slice(0, 1);
  const evaluationCards = page.evaluationPoints.slice(0, 2);
  const faqItems = sharedFaqs.slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: page.metaTitle,
        description: page.metaDescription,
        url: buildAbsoluteUrl(page.path),
        inLanguage: "zh-CN",
        dateModified: lastUpdated,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "首页",
            item: buildAbsoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.title,
            item: buildAbsoluteUrl(page.path),
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: sharedFaqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <main id="top" className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero-shell px-4 pb-16 pt-6 md:pb-24 md:pt-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 rounded-[2rem] border border-black/10 bg-white/45 px-5 py-4 backdrop-blur-sm md:px-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-black tracking-tight">{siteName}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">先免费用个三天，再决定要不要充个会员。</p>
              </div>
              <nav className="flex flex-wrap gap-2 text-sm font-semibold text-[var(--foreground)]/82">
                {pageLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-full border border-black/8 bg-white/70 px-4 py-2 transition hover:bg-white">
                    {item.shortTitle}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="section-label mb-4 text-[var(--accent-dark)]">{page.label}</p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">{page.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">{page.description}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={primaryReferralPath} className="btn-primary text-base md:text-lg">
                  先免费用个三天
                </a>
                <Link href="#analysis" className="btn-secondary text-base md:text-lg">
                  先看我该看什么
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-[var(--muted)]">
                <span className="rounded-full border border-black/10 bg-white/50 px-4 py-2">3 天免费试用</span>
                <span className="rounded-full border border-black/10 bg-white/50 px-4 py-2">4 台设备同时使用</span>
                <span className="rounded-full border border-black/10 bg-white/50 px-4 py-2">更适合中国网络环境</span>
                <span className="rounded-full border border-black/10 bg-white/50 px-4 py-2">无日志隐私保护</span>
              </div>
            </div>

            <div className="surface-card rounded-[2rem] p-6 md:p-8">
              <p className="section-label mb-4 text-[var(--accent)]">先看一眼</p>
              <div className="space-y-3">
                <div className="rounded-3xl border border-black/8 bg-white/70 p-5">
                  <p className="text-lg font-extrabold">你要是这种情况，就先看这里</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{page.searchIntent}</p>
                </div>
                {heroSignals.map((card) => (
                  <div key={card.title} className="rounded-3xl border border-black/8 bg-white/70 p-5">
                    <p className="text-lg font-extrabold">{card.title}</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="analysis" className="px-4 pb-12 md:pb-18">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="surface-dark rounded-[2rem] p-8 md:p-10">
            <p className="section-label mb-4 text-[#ffe557]">先说点实在的</p>
            <h2 className="text-3xl font-black md:text-4xl">别先看参数，先看用起来会不会闹心</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-white/78">
              {openingParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/62">就记这一句</p>
              <p className="mt-3 text-base leading-8 text-white/82">{page.keywordText}</p>
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-8 md:p-10">
            <p className="section-label mb-4 text-[var(--accent)]">具体看什么</p>
            <h2 className="text-3xl font-black md:text-4xl">别听它怎么说，先看你自己用着顺不顺</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {evaluationCards.map((item) => (
                <div key={item.title} className="rounded-3xl border border-black/8 bg-white/70 p-5">
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-18">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[var(--accent-dark)] px-6 py-10 text-white md:px-10 md:py-12">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div>
              <p className="section-label mb-4 text-[#ffe557]">接着看</p>
              <h2 className="text-3xl font-black md:text-4xl">先看重点，不够再点下一页</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                最怕不稳就看稳定性，想先试清楚就看试用，在意隐私就看无日志。
              </p>
            </div>
            <div className="grid gap-4">
              {relatedPages.slice(0, 3).map((item) => (
                <Link key={item.href} href={item.href} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 transition hover:bg-white/12">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/62">{item.shortTitle}</p>
                  <p className="mt-2 text-xl font-black">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 max-w-3xl">
            <p className="section-label mb-4 text-[var(--accent-dark)]">常见问题</p>
            <h2 className="text-3xl font-black md:text-4xl">常见问题</h2>
          </div>

          <div className="grid gap-4">
            {faqItems.map((item) => (
              <details key={item.q} className="faq-item surface-card rounded-[1.5rem] p-5 md:p-6">
                <summary className="cursor-pointer text-lg font-bold">{item.q}</summary>
                <p className="mt-3 max-w-4xl text-sm leading-8 text-[var(--muted)] md:text-base">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="surface-card mt-10 rounded-[2rem] p-8 md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="section-label mb-3 text-[var(--accent)]">最后一句</p>
                <h2 className="text-3xl font-black md:text-4xl">{page.finalTitle}</h2>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{page.finalBody}</p>
                <p className="mt-4 text-sm text-[var(--muted-foreground)]">页面更新时间：{lastUpdated}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={primaryReferralPath} className="btn-primary text-base md:text-lg">
                  先免费用个三天
                </a>
                <Link href="/vpn-guide" className="btn-secondary text-base md:text-lg">
                  先看看别的页
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
