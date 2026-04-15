import VpnLandingPage, { buildMetadata } from "@/components/VpnLandingPage";
import { landingPages } from "@/lib/site";

const page = landingPages.mac;

export const metadata = buildMetadata(page);

export default function MacVpnPage() {
  return <VpnLandingPage page={page} />;
}
