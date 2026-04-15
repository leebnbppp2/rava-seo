import VpnLandingPage, { buildMetadata } from "@/components/VpnLandingPage";

export const metadata = buildMetadata({
  metaTitle: "中国可用的稳定 VPN 推荐 | Rava VPN",
  metaDescription:
    "面向中文用户的简洁 VPN 引导页：主打中国网络环境下更稳的连接体验，支持 3 天免费试用、4 台设备同时使用、不留日志。",
  canonicalPath: "/",
});

export default function Home() {
  return (
    <VpnLandingPage
      label="中国可用 · 稳定连接 · 隐私保护"
      title="中国可用的稳定 VPN 推荐"
      description="如果你主要想找一个在中国网络环境下更稳、能先试、又兼顾隐私的 VPN，这个页面已经把最重要的信息整理好了。"
      introTitle="不绕弯，先看最关键的 4 个判断点"
      introBody="中文用户真正关心的，通常不是复杂参数，而是中国能不能用、连得稳不稳、能不能先试，以及一个账号够不够日常多设备使用。"
      finalTitle="先试一试，比反复比较更直接"
      finalBody="3 天免费试用已经足够判断它是否适合你。先体验速度、稳定性和设备切换，再决定是否继续使用，会更省时间。"
      metaTitle="中国可用的稳定 VPN 推荐 | Rava VPN"
      metaDescription="面向中文用户的简洁 VPN 引导页：主打中国网络环境下更稳的连接体验，支持 3 天免费试用、4 台设备同时使用、不留日志。"
      canonicalPath="/"
      keywordText="中国好用 vpn / 稳定 vpn 推荐 / 中国可用 vpn"
    />
  );
}
