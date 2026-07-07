"use client";

import { useEffect } from "react";

const LEMLIST_SRC =
  "https://app.lemlist.com/api/visitors/tracking?k=xfeYYP4BZ%2BElHVZFs6n5OsZXZvQIvwPWFc6pjxc0F70%3D&t=tea_n4ibXTd4ACyMBf7wh";

function loadLemlist() {
  if (typeof window === "undefined") return;
  const w = window as unknown as { __lemlistLoaded?: boolean };
  if (w.__lemlistLoaded) return;
  w.__lemlistLoaded = true;

  const s = document.createElement("script");
  s.src = LEMLIST_SRC;
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
}

export default function LemlistTracker() {
  useEffect(() => {
    if (localStorage.getItem("cookie-consent") === "all") {
      loadLemlist();
      return;
    }

    const handler = () => {
      if (localStorage.getItem("cookie-consent") === "all") loadLemlist();
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
