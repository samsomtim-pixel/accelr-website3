"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTheme } from "next-themes";
import { Menu, X, ArrowRight, Moon, Sun, ChevronDown } from "lucide-react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full text-text-dark-secondary transition-colors hover:text-text-dark dark:text-gray-400 dark:hover:text-white"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: "nl" | "en") {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 text-[13px]">
      <button
        onClick={() => switchLocale("nl")}
        className={`transition-colors ${
          locale === "nl"
            ? "font-bold text-text-dark dark:text-white"
            : "text-text-dark-muted hover:text-text-dark dark:text-gray-500 dark:hover:text-white cursor-pointer"
        }`}
      >
        NL
      </button>
      <span className="text-text-dark-muted dark:text-gray-500">|</span>
      <button
        onClick={() => switchLocale("en")}
        className={`transition-colors ${
          locale === "en"
            ? "font-bold text-text-dark dark:text-white"
            : "text-text-dark-muted hover:text-text-dark dark:text-gray-500 dark:hover:text-white cursor-pointer"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const expertiseItems = [
    { href: "/sales-strategie" as const, label: t("expertiseItems.strategieGtm") },
    { href: "/outbound-leadgeneratie" as const, label: t("expertiseItems.outboundLeadgen") },
    { href: "/crm-implementatie" as const, label: t("expertiseItems.crmSalesproces") },
    { href: "/sales-enablement" as const, label: t("expertiseItems.salesEnablement") },
    { href: "/ai-automation" as const, label: t("expertiseItems.aiAutomation") },
  ];

  const navItems = [
    { href: "/methode" as const, label: t("methode") },
    { href: "/over-tim" as const, label: t("overTim") },
    { href: "/blog" as const, label: t("blog") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExpertiseOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border-light-mode/50 bg-white/95 backdrop-blur-lg shadow-sm dark:border-[#2A2A2A]/50 dark:bg-[#0A0A0A]/95"
          : "bg-white dark:bg-[#0A0A0A]"
      }`}
    >
      <div className="container-wide flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-text-dark dark:text-white"
        >
          accelr<span className="text-accent-teal">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex" ref={dropdownRef}>
          {/* Expertise dropdown */}
          <div className="relative">
            <button
              onClick={() => setExpertiseOpen((prev) => !prev)}
              className="flex items-center gap-1 text-[13px] font-medium uppercase tracking-wider text-text-dark-secondary transition-colors duration-200 hover:text-accent-teal-dark dark:text-gray-400 dark:hover:text-accent-teal"
            >
              {t("expertise")}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${expertiseOpen ? "rotate-180" : ""}`}
              />
            </button>

            {expertiseOpen && (
              <div className="absolute left-0 top-full mt-3 w-64 rounded-xl border border-border-light-mode bg-white p-2 shadow-lg dark:border-[#2A2A2A] dark:bg-[#0A0A0A]">
                {expertiseItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setExpertiseOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm text-text-dark-secondary transition-colors hover:bg-bg-light hover:text-text-dark dark:text-gray-400 dark:hover:bg-[#1A1A1A] dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium uppercase tracking-wider text-text-dark-secondary transition-colors duration-200 hover:text-accent-teal-dark dark:text-gray-400 dark:hover:text-accent-teal"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitch />
          <ThemeToggle />
          <Link href="/contact" className="btn-primary">
            <span className="btn-label text-[13px]">{t("contact")}</span>
            <span className="btn-arrow">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitch />
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center text-text-dark-secondary hover:text-text-dark dark:text-gray-400 dark:hover:text-white"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border-light-mode bg-white md:hidden dark:border-[#2A2A2A] dark:bg-[#0A0A0A]">
          <div className="container-wide flex flex-col gap-4 py-8">
            {/* Expertise accordion */}
            <button
              onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
              className="flex items-center justify-between text-lg font-medium text-text-dark-secondary transition-colors hover:text-text-dark dark:text-gray-400 dark:hover:text-white"
            >
              {t("expertise")}
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${mobileExpertiseOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileExpertiseOpen && (
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-accent-teal/20">
                {expertiseItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-text-dark-secondary transition-colors hover:text-text-dark dark:text-gray-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-text-dark-secondary transition-colors hover:text-text-dark dark:text-gray-400 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 w-full justify-center"
            >
              <span className="btn-label flex-1 text-center">{t("contact")}</span>
              <span className="btn-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
