import VpnLandingPage, { buildMetadata } from "@/components/VpnLandingPage";
import { landingPages } from "@/lib/site";

const page = landingPages.windows;

export const metadata = buildMetadata(page);

export default function WindowsVpnPage() {
  return <VpnLandingPage page={page} />;
}
