import VpnLandingPage, { buildMetadata } from "@/components/VpnLandingPage";

export const metadata = buildMetadata({
  metaTitle: "无日志 VPN 推荐 | 更重视隐私保护的选择",
  metaDescription:
    "想找不留日志的 VPN？这页重点看隐私保护、中文用户使用场景、3 天免费试用，以及 4 台设备支持。",
  canonicalPath: "/no-log-vpn",
});

export default function NoLogVpnPage() {
  return (
    <VpnLandingPage
      label="无日志 VPN · 隐私保护 · 更安心使用"
      title="无日志 VPN 推荐"
      description="如果你在找 VPN 的时候很在意隐私，那不留日志通常会是一个很重要的判断点。它不能解决所有问题，但能减少很多顾虑。"
      introTitle="很多人要的不是最复杂的功能，而是更安心一点"
      introBody="对重视隐私的人来说，除了连得上、连得稳之外，还会特别关心使用记录会不会被保存。强调不留日志，至少能让这部分担心少很多。"
      finalTitle="如果你在意隐私，不留日志就是很值得先看的点"
      finalBody="再加上中国网络环境下更稳的连接、3 天免费试用和 4 台设备支持，这种组合会更适合想先试再决定的中文用户。"
      metaTitle="无日志 VPN 推荐 | 更重视隐私保护的选择"
      metaDescription="想找不留日志的 VPN？这页重点看隐私保护、中文用户使用场景、3 天免费试用，以及 4 台设备支持。"
      canonicalPath="/no-log-vpn"
      keywordText="无日志 vpn / 隐私保护 vpn / 不留日志 vpn"
    />
  );
}
