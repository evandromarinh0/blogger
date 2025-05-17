import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <article className="flex flex-col bg-gray-700">
      <HeroSection />
      <FeatureSection />
    </article>
  );
}
