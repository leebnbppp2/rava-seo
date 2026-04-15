import VpnLandingPage, { buildMetadata } from "@/components/VpnLandingPage";
import { landingPages } from "@/lib/site";

const page = landingPages.nolog;

export const metadata = buildMetadata(page);

export default function NoLogVpnPage() {
  return <VpnLandingPage page={page} />;
}
