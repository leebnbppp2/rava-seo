import VpnLandingPage, { buildMetadata } from "@/components/VpnLandingPage";
import { landingPages } from "@/lib/site";

const page = landingPages.home;

export const metadata = buildMetadata(page);

export default function Home() {
  return <VpnLandingPage page={page} />;
}
