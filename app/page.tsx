import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CaseStudySection } from "@/components/case-study-section"
import { ResultsSection } from "@/components/results-section"
import { B2BSolutionsSection } from "@/components/b2b-solutions-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CaseStudySection />
      <ResultsSection />
      <B2BSolutionsSection />
      <CTASection />
    </main>
  )
}

