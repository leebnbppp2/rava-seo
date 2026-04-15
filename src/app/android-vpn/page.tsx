import VpnLandingPage, { buildMetadata } from "@/components/VpnLandingPage";
import { landingPages } from "@/lib/site";

const page = landingPages.android;

export const metadata = buildMetadata(page);

export default function AndroidVpnPage() {
  return <VpnLandingPage page={page} />;
}
