import { AboutSection } from "@/components/about-section";
import { AchievementsSection } from "@/components/achievements-section";
import { ActivitiesSection } from "@/components/activities-section";
import { BenefitsSection } from "@/components/benefits-section";
import { EligibilitySection } from "@/components/eligibility-section";
import { HeroBanner } from "@/components/hero-banner";
import { OrganizerSection } from "@/components/organizer-section";
import { PartnersSection } from "@/components/partners-section";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <AchievementsSection />
      <PartnersSection />
      <EligibilitySection />
      <BenefitsSection />
      <OrganizerSection />
      <ActivitiesSection />
    </>
  );
}
