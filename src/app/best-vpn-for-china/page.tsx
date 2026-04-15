import VpnLandingPage, { buildMetadata } from "@/components/VpnLandingPage";
import { landingPages } from "@/lib/site";

const page = landingPages.china;

export const metadata = buildMetadata(page);

export default function BestVpnForChinaPage() {
  return <VpnLandingPage page={page} />;
}
