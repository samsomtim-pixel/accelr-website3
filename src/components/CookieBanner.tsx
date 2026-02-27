"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const t = useTranslations("cookieBanner");
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so the banner doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept(choice: "all" | "necessary") {
    localStorage.setItem("cookie-consent", choice);
    setVisible(false);
  }

  // Don't render anything server-side
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-border-light-mode bg-white p-5 shadow-xl shadow-black/10 dark:border-[#2A2A2A] dark:bg-[#1A1A2E] dark:shadow-black/40 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              {/* Icon */}
              <div className="hidden shrink-0 sm:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-teal/10">
                  <Cookie size={20} className="text-accent-teal" />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-text-dark-secondary dark:text-gray-300">
                  {t("text")}{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-accent-teal-dark underline underline-offset-2 transition-colors hover:text-accent-teal dark:text-accent-teal dark:hover:text-accent-teal-hover"
                  >
                    {t("privacyLink")}
                  </Link>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex shrink-0 items-center gap-3">
                <button
                  onClick={() => accept("necessary")}
                  className="rounded-full border border-border-light-mode px-5 py-2.5 text-sm font-medium text-text-dark-secondary transition-all duration-200 hover:border-text-dark-muted hover:text-text-dark dark:border-[#2A2A2A] dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-white"
                >
                  {t("necessary")}
                </button>
                <button
                  onClick={() => accept("all")}
                  className="rounded-full bg-accent-teal px-5 py-2.5 text-sm font-semibold text-bg-primary transition-all duration-200 hover:bg-accent-teal-hover hover:shadow-lg hover:shadow-accent-teal/25"
                >
                  {t("accept")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
