import Link from "next/link";

export default function Footer() {
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
              Van founder-led sales naar een schaalbaar, AI-gedreven commercieel
              systeem.
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <p className="section-label mb-4">/ Navigatie</p>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/methode", label: "De Methode" },
                { href: "/over-tim", label: "Over Tim" },
                { href: "/blog", label: "Blog" },
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
                { href: "/de-scan", label: "De Scan" },
                { href: "/methode", label: "CRM & Infrastructuur" },
                { href: "/methode", label: "Outbound & Leads" },
                { href: "/methode", label: "AI & Automation" },
                { href: "/score", label: "Sales Maturity Score" },
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
                  Plan een gesprek
                </Link>
              </li>
              <li className="text-text-muted">Amsterdam, Nederland</li>
            </ul>
          </div>

          {/* Juridisch */}
          <div>
            <p className="section-label mb-4">/ Juridisch</p>
            <ul className="space-y-3">
              {[
                { href: "/privacy", label: "Privacybeleid" },
              ].map((item) => (
                <li key={item.href}>
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
        </div>

        <div className="divider mt-16 mb-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Accelr. Alle rechten
            voorbehouden.
          </p>
          <p className="text-xs text-text-muted">
            Your Sales Growth Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
