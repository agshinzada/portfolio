import React from "react";
import profile from "../../assets/profile.webp";
import SectionNavInfo from "../utils/SectionNavInfo";

const AboutSection = () => {
  return (
    <section
      className="after:content-[''] after:w-full after:bg-[#242323] after:h-[1px] after:block"
      id="about"
    >
      <div className="container text-white ">
        <div className="flex gap-3 mobile:flex-col laptop:flex-row">
          <div className="pt-28 pb-12 pr-10 border-r border-[#242323] mobile:border-r-0 laptop:border-r mobile:pr-0 laptop:pr-10">
            <img
              src={profile}
              alt="profile"
              className="min-w-[20rem] mobile:w-[10rem] mobile:mr-auto mobile:ml-auto"
            />
          </div>
          <div className="relative">
            <SectionNavInfo number={"02"} name={"about"} float={"right-0"} />
            <div className="pt-28 px-10 mb-10 mobile:px-0 laptop:px-10">
              <h2 className="mb-6 text-2xl font-bold">Salam,</h2>
              <p>
                Hal-hazırda Mazarina LLC-də İT mütəxəssis olaraq çalışıram.
                Freelance olaraq front-end development üzrə çalışmalar edirəm.
                Bir neçə proyektləri bitirmişəm. Bunla bağlı proyektlər
                bölməsindən tanış ola bilərsiz.
              </p>
            </div>
            <div className="px-10 pt-1 bg-main-dark-slate mobile:mb-5">
              <ul className="py-10">
                <li className="flex gap-10 mobile:gap-5 laptop:gap-10">
                  <span>Email</span> : agshinzada@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
