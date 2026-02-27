import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="container-wide py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              accelr.
            </Link>
            <p className="mt-4 text-sm text-text-muted max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <p className="section-label mb-4">/ {t("navigation")}</p>
            <ul className="space-y-3">
              {[
                { href: "/" as const, label: "Home" },
                { href: "/methode" as const, label: t("deMethode") },
                { href: "/over-tim" as const, label: t("overTim") },
                { href: "/blog" as const, label: "Blog" },
              ].map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <p className="section-label mb-4">/ Expertise</p>
            <ul className="space-y-3">
              {[
                { href: "/de-scan" as const, label: t("deScan") },
                { href: "/crm-implementatie" as const, label: t("crmSalesproces") },
                { href: "/outbound-leadgeneratie" as const, label: t("outboundLeadgen") },
                { href: "/ai-sales-automation" as const, label: t("aiAutomation") },
                { href: "/score" as const, label: "Sales Maturity Score" },
              ].map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-4">/ Contact</p>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a
                  href="mailto:tim@accelr.nl"
                  className="transition-colors hover:text-accent-teal"
                >
                  tim@accelr.nl
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-accent-teal"
                >
                  {t("planEenGesprek")}
                </Link>
              </li>
              <li className="text-text-muted">Haarlem, Nederland</li>
            </ul>
          </div>

          {/* Juridisch */}
          <div>
            <p className="section-label mb-4">/ {t("juridisch")}</p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-text-secondary transition-colors hover:text-accent-teal"
                >
                  {t("privacybeleid")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider mt-16 mb-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Accelr. {t("alleRechten")}
          </p>
          <p className="text-xs text-text-muted">
            Your Sales Growth Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
