"use client";

import { useEffect } from "react";

const APOLLO_APP_ID = "697b818b3368920011d047ca";

function loadApollo() {
  if (typeof window === "undefined") return;
  const w = window as unknown as { __apolloLoaded?: boolean; trackingFunctions?: { onLoad?: (opts: { appId: string }) => void } };
  if (w.__apolloLoaded) return;
  w.__apolloLoaded = true;

  const nocache = Math.random().toString(36).substring(7);
  const s = document.createElement("script");
  s.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${nocache}`;
  s.async = true;
  s.defer = true;
  s.onload = () => {
    w.trackingFunctions?.onLoad?.({ appId: APOLLO_APP_ID });
  };
  document.head.appendChild(s);
}

export default function ApolloTracker() {
  useEffect(() => {
    if (localStorage.getItem("cookie-consent") === "all") {
      loadApollo();
      return;
    }

    const handler = () => {
      if (localStorage.getItem("cookie-consent") === "all") loadApollo();
    };

    window.addEventListener("cookie-consent-changed", handler);
    window.addEventListener("storage", handler);

    return () => {
      window.removeEventListener("cookie-consent-changed", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  return null;
}
