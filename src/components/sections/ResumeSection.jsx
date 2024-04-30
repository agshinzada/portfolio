import React, { useRef } from "react";
import ResumeItem from "../utils/ResumeItem";
import SectionTitle from "../utils/SectionTitle";
import SkillBox from "../utils/SkillBox";
import SectionNavInfo from "../utils/SectionNavInfo";
import { useInView, motion } from "framer-motion";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="after:content-[''] after:w-full after:bg-[#242323] after:h-[1px] after:block">
      <div className="flex container mobile:flex-col laptop:flex-row">
        <div className="relative pr-[13.8rem] border-r border-[#242323]">
          <SectionNavInfo number={"03"} name={"resume"} />
          <div className="text-white font-bold pt-12 mt-10 mobile:hidden laptop:block relative h-full">
            <motion.ul
              className="flex flex-col text-nowrap gap-3 sticky top-[110px]"
              style={{
                transform: isInView ? "none" : "translateX(-150px)",
                opacity: isInView ? 1 : 0,
                transition: "all ease 2s",
              }}
              ref={ref}
            >
              <li>
                <a href="#work">İş təcrübəsi</a>
              </li>
              <li>
                <a href="#education">Təhsil</a>
              </li>
              <li>
                <a href="#skills">Bacarıqlar</a>
              </li>
            </motion.ul>
          </div>
        </div>
        <div className="text-white px-12 mobile:px-0 laptop:px-12 w-full">
          <div id="work">
            <SectionTitle name={"İş təcrübəsi"} />
            <ul>
              <li>
                <ResumeItem
                  date={"2023 - Present"}
                  name={"Frontend developer"}
                  location={"Freelance"}
                  description={
                    "Freelance olaraq frontend development üzrə çalışmalar edirəm."
                  }
                />
              </li>
              <li>
                <ResumeItem
                  date={"2021 - Present"}
                  name={"IT mütəxəssis"}
                  location={"Mazarina Trade Company"}
                  description={
                    "Şirkət cihazlarına texniki dəstək, şəbəkə avadanlıqlarının qoşulması və sazlanması, ERP baza əməliyyatları"
                  }
                />
              </li>
              <li>
                <ResumeItem
                  date={"2021 - 2021"}
                  name={"Helpdesk təcrübə proqramı"}
                  location={"Mazarina Trade Company"}
                  description={
                    "Helpdesk üzrə 3 aylıq təcrübə proqramında iştirak etmişəm."
                  }
                />
              </li>
            </ul>
          </div>
          <div id="education">
            <SectionTitle name={"Təhsil"} />
            <ResumeItem
              date={"2019 - 2021"}
              name={"Məişət radioelektron aparatları"}
              location={"Azərbaycan Texniki Universiteti | Magistr"}
              description={""}
            />
            <ResumeItem
              date={"2015 - 2019"}
              name={
                "Elektronika, telekommunikasiya və radiotexnika mühəndisliyi"
              }
              location={"Azərbaycan Texniki Universiteti | Bakalavr"}
              description={"SABAH qrupunda təhsil almışam."}
            />
          </div>
          <div id="skills" className="mb-24">
            <SectionTitle name={"Bacarıqlar"} />
            <div>
              <SkillBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
