"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const gaId = process.env.NEXT_PUBLIC_GA_ID;

function trackPageView(url: string) {
  if (!gaId || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  });
}

function trackEvent(eventName: string, params: Record<string, string>) {
  if (!gaId || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export default function SeoAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const query = typeof window === "undefined" ? "" : window.location.search;
    const url = query ? `${pathname}${query}` : pathname;
    trackPageView(url);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const trackedLink = target.closest<HTMLElement>('[data-track-outbound="rava-go"]');
      if (!trackedLink) {
        return;
      }

      trackEvent("cta_click", {
        cta_label: trackedLink.dataset.ctaLabel ?? "unknown",
        cta_location: trackedLink.dataset.ctaLocation ?? pathname,
        destination: "/go",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return (
    <>
      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-base" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', { send_page_view: false });
            `}
          </Script>
        </>
      ) : null}
      <Analytics />
    </>
  );
}
