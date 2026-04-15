import VpnLandingPage, { buildMetadata } from "@/components/VpnLandingPage";
import { landingPages } from "@/lib/site";

const page = landingPages.iphone;

export const metadata = buildMetadata(page);

export default function IphoneVpnPage() {
  return <VpnLandingPage page={page} />;
}
