import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SeoAnalytics from "@/components/SeoAnalytics";
import "./globals.css";
import { buildAbsoluteUrl, siteName, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "中国可用的稳定 VPN 推荐｜中文用户优先";
const siteDescription =
  "面向中文用户的 VPN 推荐微站，围绕中国网络环境下的稳定连接、3 天免费试用、4 台设备支持和无日志隐私保护做专题化整理。";
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "中国好用vpn",
    "稳定vpn推荐",
    "免费试用vpn",
    "无日志vpn",
    "多设备vpn",
    "适合中国使用的vpn",
    "中文vpn推荐",
  ],
  alternates: {
    canonical: buildAbsoluteUrl("/"),
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: buildAbsoluteUrl("/"),
    siteName,
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  verification: {
    google: googleSiteVerification,
    other: bingSiteVerification
      ? {
          "msvalidate.01": bingSiteVerification,
        }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
        <SeoAnalytics />
      </body>
    </html>
  );
}
