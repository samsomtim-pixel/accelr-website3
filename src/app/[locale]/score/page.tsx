import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScoreAssessment from "@/components/ScoreAssessment";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "score.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `${t("title")} | Accelr`,
      description: t("description"),
      images: [{ url: "https://www.accelr.nl/images/og-default.png", width: 1200, height: 630, alt: "Accelr" }],
    },
  };
}

export default function ScorePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <ScoreAssessment />
      </main>
      <Footer />
    </>
  );
}
