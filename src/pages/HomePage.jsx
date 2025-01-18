import { motion } from "framer-motion";
import SectionTitleItem from "components/SectionTitleItem";
import PortfolioSection from "components/PortfolioSection";
import ContactSection from "components/ContactSection";
import ExperienceSection from "components/ExperienceSection";
import SkillSection from "components/SkillSection";
import CoverSection from "components/CoverSection";
import { Link } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";

const HomePage = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <motion.div
          className="bg-[url('assets/bg-cover.png')] opacity-[0.05] -inset-[200%] w-[400%] h-[400%] absolute"
          animate={{
            x: ["0%", "20%", "0%", "-20%", "0%"], // X ekseninde ileri-geri hareket
            y: ["0%", "20%", "0%", "-20%", "0%"], // Y ekseninde yukarı-aşağı hareket
          }}
          transition={{
            duration: 0.5, // Hızlı bir hareket için kısa süre
            repeat: Infinity, // Sonsuz döngü
            repeatType: "mirror", // Hareketin simetrik olması için
          }}
        ></motion.div>
        <CoverSection />
        <SkillSection />
        <section className="bg-[#F4F4F2] px-6 pt-24 md:px-10 pb-1 flex flex-col gap-20">
          <SectionTitleItem title={"PROJECTS"} />
          <div className="flex flex-col gap-6">
            <PortfolioSection />
            <div className="flex justify-center">
              <Link
                to={"projects"}
                className="bg-black text-white text-xs font-semibold px-8 py-4 rounded-full z-10 flex gap-2 items-center w-fit"
              >
                See more <RxExternalLink className="text-lg" />
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-[#F4F4F2] p-6 pt-24 md:px-10">
          <SectionTitleItem title={"EXPERIENCE"} />
          <ExperienceSection />
        </section>
        <section className="bg-[#F4F4F2] px-6 pb-20 pt-10 md:px-10">
          <ContactSection />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
