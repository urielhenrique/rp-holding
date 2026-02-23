import {
  HeroSection,
  AISolutionsSection,
  TechnologySection,
  ProcessSection,
  ImpactSection,
  AboutSection,
  CTASection,
} from "../sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AISolutionsSection />
      <TechnologySection />
      <ProcessSection />
      <ImpactSection />
      <AboutSection />
      <CTASection />
    </main>
  );
}
