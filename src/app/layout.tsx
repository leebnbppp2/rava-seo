import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "中国可用的稳定 VPN 推荐 | Rava VPN";
const siteDescription =
  "面向中文用户的简洁 VPN 引导页面：自研协议、针对中国网络环境更强穿透力、3 天免费试用、支持 4 台设备、不留日志。";
const siteUrl = "https://rava-seo.vercel.app";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "中国好用vpn",
    "稳定vpn推荐",
    "免费试用vpn",
    "无日志vpn",
    "多设备vpn",
    "适合中国使用的vpn",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Rava VPN",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
      </body>
    </html>
  );
}
