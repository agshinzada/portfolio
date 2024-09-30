import React, { useRef } from "react";
import profile from "../../assets/profile.webp";
import SectionNavInfo from "../utils/SectionNavInfo";
import { motion, spring, useInView, useScroll } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="after:content-[''] after:w-full after:bg-[#242323] after:h-[1px] after:block"
      id="about"
    >
      <motion.div
        ref={ref}
        className="container text-white"
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all ease 2s",
        }}
      >
        <div className="flex gap-3 mobile:flex-col laptop:flex-row">
          <div className="pt-28 pb-12 pr-10 border-r border-[#242323] mobile:border-r-0 laptop:border-r mobile:pr-0 laptop:pr-10 ">
            <img
              src={profile}
              alt="profile"
              className="mobile:max-w-[20rem] laptop:max-w-[50rem] w-full mobile:mr-auto mobile:ml-auto"
            />
          </div>
          <div className="relative">
            <SectionNavInfo number={"02"} name={"about"} float={"right-0"} />
            <div className="pt-28 px-10 mb-10 mobile:px-0 laptop:px-10">
              <h2 className="mb-6 text-2xl font-bold">Salam,</h2>
              <p>
                Hal-hazırda Mazarina LLC-də ERP administrator olaraq çalışıram.
                Freelance olaraq front-end development üzrə çalışmalar edirəm.
                Çalışdığım şirkət üçün ERP inteqrasiyalı web application-lar
                proqramlamışam. Həmçinin 2 e-commerce layihənin müəllifiyəm.
                Daha ətraflı proyektlər bölməsinə nəzər yetirin.
              </p>
            </div>
            <div className="px-10 pt-1 bg-main-dark-slate mobile:mb-5">
              <ul className="py-10">
                <li className="flex gap-10 laptop:flex-row mobile:flex-col mobile:gap-5 laptop:gap-10 mobile:text-sm laptop:text-md text-md">
                  <span>Email:</span>
                  <span>agshinzada@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
