import VpnLandingPage, { buildMetadata } from "@/components/VpnLandingPage";
import { landingPages } from "@/lib/site";

const page = landingPages.trial;

export const metadata = buildMetadata(page);

export default function VpnFreeTrialPage() {
  return <VpnLandingPage page={page} />;
}
