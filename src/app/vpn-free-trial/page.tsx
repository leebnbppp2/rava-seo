import VpnLandingPage, { buildMetadata } from "@/components/VpnLandingPage";

export const metadata = buildMetadata({
  metaTitle: "免费试用 VPN 推荐 | 先试 3 天再决定",
  metaDescription:
    "想找能先试用的 VPN？这页重点介绍 3 天免费试用、适合中文用户、支持 4 台设备、连接更稳的 VPN 选择。",
  canonicalPath: "/vpn-free-trial",
});

export default function VpnFreeTrialPage() {
  return (
    <VpnLandingPage
      label="免费试用 VPN · 低门槛体验 · 中文用户优先"
      title="免费试用 VPN 推荐"
      description="很多人第一次找 VPN，不是想立刻付费，而是先看看速度稳不稳、使用顺不顺。能先试用，再决定要不要继续，通常更容易放心。"
      introTitle="先试用，再决定，才是更轻松的选择"
      introBody="对于第一次接触 VPN 的用户来说，免费试用比看一堆介绍更直接。你真正想知道的是：能不能连、速度怎么样、设备好不好切换。"
      finalTitle="3 天免费试用，足够判断适不适合你"
      finalBody="如果你现在最关心的是风险低一点、试错成本小一点，那先试用 3 天，就是最快得到答案的方式。"
      metaTitle="免费试用 VPN 推荐 | 先试 3 天再决定"
      metaDescription="想找能先试用的 VPN？这页重点介绍 3 天免费试用、适合中文用户、支持 4 台设备、连接更稳的 VPN 选择。"
      canonicalPath="/vpn-free-trial"
      keywordText="免费试用 vpn / 3 天免费试用 vpn / 先试再买 vpn"
    />
  );
}
