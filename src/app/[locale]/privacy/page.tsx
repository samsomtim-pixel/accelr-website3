import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/FadeIn";
import { ArrowLeft, Mail, MapPin, ExternalLink } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: `${t("title")} | Accelr`,
    description: t("intro"),
    openGraph: {
      title: `${t("title")} | Accelr`,
      description: t("intro"),
      url: "https://accelr.nl/privacy",
    },
  };
}

/* Reusable section wrapper */
function Section({
  id,
  children,
  alt = false,
}: {
  id?: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={
        alt ? "bg-bg-light py-12 sm:py-16" : "bg-white py-12 sm:py-16"
      }
    >
      <div className="container-wide">
        <div className="mx-auto max-w-3xl">{children}</div>
      </div>
    </section>
  );
}

export default async function PrivacyPage() {
  const t = await getTranslations("privacy");

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="bg-white py-20 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="container-wide">
            <FadeIn direction="none">
              <div className="mx-auto max-w-3xl">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-text-dark-muted transition-colors hover:text-accent-teal-dark"
                >
                  <ArrowLeft
                    size={16}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  {t("sections.backToHome")}
                </Link>

                <p className="section-label-dark mt-8">
                  {t("sections.legalLabel")}
                </p>

                <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-5xl">
                  {t("title")}
                </h1>

                <p className="mt-4 text-lg text-text-dark-secondary">
                  {t("sections.lastUpdate")}
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
            <div className="h-[500px] w-[800px] rounded-full bg-accent-teal/5 blur-3xl" />
          </div>
        </section>

        {/* 1. Wie zijn wij */}
        <Section alt>
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-text-dark sm:text-3xl">
              {t("sections.whoWeAre.title")}
            </h2>
            <p className="mt-4 text-text-dark-secondary leading-relaxed">
              {t("sections.whoWeAre.desc")}
            </p>
            <div className="mt-6 card-light">
              <dl className="grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                    {t("sections.whoWeAre.websiteLabel")}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-text-dark">
                    <a
                      href="https://accelr.nl"
                      className="transition-colors hover:text-accent-teal-dark"
                    >
                      accelr.nl
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                    {t("sections.whoWeAre.emailLabel")}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-text-dark">
                    <a
                      href="mailto:tim@accelr.nl"
                      className="transition-colors hover:text-accent-teal-dark"
                    >
                      tim@accelr.nl
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                    {t("sections.whoWeAre.kvkLabel")}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-text-dark">
                    99623544
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-text-dark-muted">
                    {t("sections.whoWeAre.locationLabel")}
                  </dt>
                  <dd className="mt-1 flex items-center gap-1 text-sm font-medium text-text-dark">
                    <MapPin size={14} className="text-text-dark-muted" />
                    {t("sections.whoWeAre.location")}
                  </dd>
                </div>
              </dl>
            </div>
          </FadeIn>
        </Section>

        {/* 2. Welke gegevens verzamelen wij */}
        <Section>
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-text-dark sm:text-3xl">
              {t("sections.dataCollection.title")}
            </h2>

            <h3 className="mt-8 font-display text-lg font-semibold text-text-dark">
              {t("sections.dataCollection.providedTitle")}
            </h3>
            <ul className="mt-3 space-y-2">
              {(
                t.raw("sections.dataCollection.providedItems") as string[]
              ).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-text-dark-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal-dark" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-lg font-semibold text-text-dark">
              {t("sections.dataCollection.autoTitle")}
            </h3>
            <ul className="mt-3 space-y-2">
              {(t.raw("sections.dataCollection.autoItems") as string[]).map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-text-dark-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal-dark" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </FadeIn>
        </Section>

        {/* 3. Waarvoor gebruiken wij je gegevens */}
        <Section alt>
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-text-dark sm:text-3xl">
              {t("sections.purpose.title")}
            </h2>

            <div className="mt-6 overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border-light-mode">
                    <th className="pb-3 pr-4 font-display font-semibold text-text-dark">
                      {t("sections.purpose.colPurpose")}
                    </th>
                    <th className="pb-3 font-display font-semibold text-text-dark">
                      {t("sections.purpose.colBasis")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light-mode">
                  {(
                    t.raw("sections.purpose.rows") as Array<{
                      doel: string;
                      grondslag: string;
                    }>
                  ).map((row) => (
                    <tr key={row.doel}>
                      <td className="py-3 pr-4 text-text-dark-secondary">
                        {row.doel}
                      </td>
                      <td className="py-3">
                        <span className="inline-flex rounded-full bg-accent-teal/10 px-3 py-1 text-xs font-medium text-accent-teal-dark">
                          {row.grondslag}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm font-medium text-text-dark">
              {t("sections.purpose.noSelling")}
            </p>
          </FadeIn>
        </Section>

        {/* 4. Cookies */}
        <Section>
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-text-dark sm:text-3xl">
              {t("sections.cookies.title")}
            </h2>
            <p className="mt-4 text-text-dark-secondary leading-relaxed">
              {t("sections.cookies.desc")}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {(
                t.raw("sections.cookies.types") as Array<{
                  title: string;
                  description: string;
                  status: string;
                  statusColor: string;
                }>
              ).map((cookie) => (
                <div key={cookie.title} className="card-light">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${cookie.statusColor}`}
                  >
                    {cookie.status}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-text-dark">
                    {cookie.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-dark-secondary leading-relaxed">
                    {cookie.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-text-dark-secondary">
              {t("sections.cookies.changePrefs")}
            </p>
          </FadeIn>
        </Section>

        {/* 5. Derden en verwerkers */}
        <Section alt>
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-text-dark sm:text-3xl">
              {t("sections.thirdParties.title")}
            </h2>
            <p className="mt-4 text-text-dark-secondary leading-relaxed">
              {t("sections.thirdParties.desc")}
            </p>

            <div className="mt-6 overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border-light-mode">
                    <th className="pb-3 pr-4 font-display font-semibold text-text-dark">
                      {t("sections.thirdParties.colParty")}
                    </th>
                    <th className="pb-3 pr-4 font-display font-semibold text-text-dark">
                      {t("sections.thirdParties.colPurpose")}
                    </th>
                    <th className="pb-3 font-display font-semibold text-text-dark">
                      {t("sections.thirdParties.colLocation")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light-mode">
                  {(
                    t.raw("sections.thirdParties.rows") as Array<{
                      partij: string;
                      doel: string;
                      locatie: string;
                    }>
                  ).map((row) => (
                    <tr key={row.partij}>
                      <td className="py-3 pr-4 font-medium text-text-dark">
                        {row.partij}
                      </td>
                      <td className="py-3 pr-4 text-text-dark-secondary">
                        {row.doel}
                      </td>
                      <td className="py-3 text-text-dark-secondary text-xs">
                        {row.locatie}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-text-dark-secondary">
              {t("sections.thirdParties.dpa")}
            </p>
          </FadeIn>
        </Section>

        {/* 6. Bewaartermijnen */}
        <Section>
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-text-dark sm:text-3xl">
              {t("sections.retention.title")}
            </h2>
            <ul className="mt-6 space-y-3">
              {(
                t.raw("sections.retention.items") as Array<{
                  label: string;
                  term: string;
                }>
              ).map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal-dark" />
                  <span>
                    <span className="font-semibold text-text-dark">
                      {item.label}:
                    </span>{" "}
                    <span className="text-text-dark-secondary">
                      {item.term}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Section>

        {/* 7. Jouw rechten */}
        <Section alt>
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-text-dark sm:text-3xl">
              {t("sections.rights.title")}
            </h2>
            <p className="mt-4 text-text-dark-secondary leading-relaxed">
              {t("sections.rights.desc")}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {(
                t.raw("sections.rights.items") as Array<{
                  right: string;
                  desc: string;
                }>
              ).map((item) => (
                <div key={item.right} className="card-light !p-4">
                  <p className="font-display text-sm font-semibold text-text-dark">
                    {item.right}
                  </p>
                  <p className="mt-1 text-xs text-text-dark-secondary">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 card-light flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Mail size={20} className="shrink-0 text-accent-teal" />
              <div>
                <p className="text-sm text-text-dark-secondary">
                  {t("sections.rights.sendRequest")}{" "}
                  <a
                    href="mailto:tim@accelr.nl"
                    className="font-medium text-text-dark transition-colors hover:text-accent-teal-dark"
                  >
                    tim@accelr.nl
                  </a>
                  . {t("sections.rights.responseTime")}
                </p>
                <p className="mt-2 text-xs text-text-dark-muted">
                  {t("sections.rights.complaint")}{" "}
                  <a
                    href="https://autoriteitpersoonsgegevens.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-accent-teal-dark"
                  >
                    {t("sections.rights.authority")}
                    <ExternalLink
                      size={11}
                      className="ml-0.5 inline-block"
                    />
                  </a>
                  .
                </p>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* 8. Beveiliging */}
        <Section>
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-text-dark sm:text-3xl">
              {t("sections.security.title")}
            </h2>
            <p className="mt-4 text-text-dark-secondary leading-relaxed">
              {t("sections.security.desc")}
            </p>
            <ul className="mt-4 space-y-2">
              {(t.raw("sections.security.items") as string[]).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-text-dark-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </Section>

        {/* 9. Wijzigingen */}
        <Section alt>
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-text-dark sm:text-3xl">
              {t("sections.changes.title")}
            </h2>
            <p className="mt-4 text-text-dark-secondary leading-relaxed">
              {t("sections.changes.desc")}{" "}
              <Link
                href="/privacy"
                className="font-medium text-text-dark underline underline-offset-2 transition-colors hover:text-accent-teal-dark"
              >
                accelr.nl/privacy
              </Link>
              . {t("sections.changes.notify")}
            </p>
          </FadeIn>
        </Section>

        {/* 10. Contact */}
        <Section>
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-text-dark sm:text-3xl">
              {t("sections.contact.title")}
            </h2>
            <p className="mt-4 text-text-dark-secondary leading-relaxed">
              {t("sections.contact.desc")}
            </p>
            <div className="mt-6 card-light">
              <p className="font-display text-lg font-bold text-text-dark">
                Tim Samsom
              </p>
              <a
                href="mailto:tim@accelr.nl"
                className="mt-1 inline-flex items-center gap-1.5 text-sm text-text-dark-secondary transition-colors hover:text-accent-teal-dark"
              >
                <Mail size={14} />
                tim@accelr.nl
              </a>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-text-dark-muted">
                <MapPin size={14} />
                {t("sections.whoWeAre.location")}
              </p>
            </div>
          </FadeIn>
        </Section>

        {/* Back to top */}
        <section className="bg-bg-light py-12 sm:py-16">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-medium text-text-dark-muted transition-colors hover:text-accent-teal-dark"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-1"
                />
                {t("sections.backToHome")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
