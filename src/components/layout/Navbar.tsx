"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, ArrowRight, Moon, Sun } from "lucide-react";

const navItems = [
  { href: "/#expertise", label: "Expertise" },
  { href: "/methode", label: "De Methode" },
  { href: "/over-tim", label: "Over Tim" },
  { href: "/blog", label: "Blog" },
];

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
  return (
    <div className="flex items-center gap-1 text-[13px]">
      <span className="font-bold text-text-dark dark:text-white">NL</span>
      <span className="text-text-dark-muted dark:text-gray-500">|</span>
      <span
        className="cursor-not-allowed text-text-dark-muted dark:text-gray-500"
        aria-disabled="true"
      >
        EN
      </span>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        <div className="hidden items-center gap-10 md:flex">
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

        {/* Right side: Language + Theme + Score + CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitch />
          <ThemeToggle />
          <Link
            href="/score"
            className="text-[13px] font-medium text-text-dark-secondary transition-colors duration-200 hover:text-accent-teal-dark dark:text-gray-400 dark:hover:text-accent-teal"
          >
            Score
          </Link>
          <Link href="/contact" className="btn-primary">
            <span className="btn-label text-[13px]">Plan een gesprek</span>
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
          <div className="container-wide flex flex-col gap-6 py-8">
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
              href="/score"
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-text-dark-secondary transition-colors hover:text-text-dark dark:text-gray-400 dark:hover:text-white"
            >
              Score
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full justify-center"
            >
              <span className="btn-label flex-1 text-center">Plan een gesprek</span>
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
