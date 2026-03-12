import HeroSection from "components/section/HeroSection";
import SkillsSection from "components/section/SkillSection";
import FeaturedProjectsSection from "components/section/FeaturedProjectsSection";
import { CTASection } from "components/section/CtaSection";
import { ExperienceSection } from "components/section/ExperienceSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <CTASection />
    </>
  );
};

export default HomePage;
