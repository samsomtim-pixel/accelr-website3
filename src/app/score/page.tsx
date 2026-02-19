import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScoreAssessment from "@/components/ScoreAssessment";

export const metadata: Metadata = {
  title: "Sales Maturity Score — Check je salesmotor",
  description:
    "10 dimensies. Eén score. Weet waar je salesmotor vastloopt en wat de logische volgende stap is.",
  openGraph: {
    title: "Sales Maturity Score — Check je salesmotor | Accelr",
    description:
      "10 dimensies. Eén score. Weet waar je salesmotor vastloopt en wat de logische volgende stap is.",
  },
};

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
