import VpnLandingPage, { buildMetadata } from "@/components/VpnLandingPage";

export const metadata = buildMetadata({
  metaTitle: "中国好用 VPN 推荐 | 更适合中文用户的稳定选择",
  metaDescription:
    "想找中国好用的 VPN？这页重点看 4 件事：在中国网络环境下更稳、3 天免费试用、支持 4 台设备、不留日志。",
  canonicalPath: "/best-vpn-for-china",
});

export default function BestVpnForChinaPage() {
  return (
    <VpnLandingPage
      label="中国好用 VPN · 稳定连接 · 先试再决定"
      title="中国好用 VPN 推荐"
      description="很多人找 VPN，最先问的就是在中国到底能不能稳定用。这一页只说最关键的结论：更强穿透力、能先试、支持多设备、隐私压力更小。"
      introTitle="真正适合中国使用的 VPN，重点不是花哨，而是连得上、连得稳"
      introBody="如果只是偶尔能连上，但经常掉线、速度忽快忽慢，那体验依然很差。对中文用户来说，能在中国网络环境下更稳地访问海外网站和 App，才是第一优先级。"
      finalTitle="想找中国好用的 VPN，先试用最省时间"
      finalBody="与其看很多复杂测评，不如先用 3 天免费试试看。连接稳定不稳定、切换顺不顺手，试一下就更清楚。"
      metaTitle="中国好用 VPN 推荐 | 更适合中文用户的稳定选择"
      metaDescription="想找中国好用的 VPN？这页重点看 4 件事：在中国网络环境下更稳、3 天免费试用、支持 4 台设备、不留日志。"
      canonicalPath="/best-vpn-for-china"
      keywordText="中国好用 vpn / 中国可用 vpn / 稳定 vpn 推荐"
    />
  );
}
