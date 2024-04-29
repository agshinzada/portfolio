import React from "react";
import cv from "../../../public/cv.pdf";
const ButtonSection = () => {
  return (
    <section>
      <div className="text-white py-20 flex gap-10 justify-center border-b border-[#242323] mobile:flex-col laptop:flex-row mobile:items-center">
        <a
          href={cv}
          className="flex justify-center py-4 px-8 text-sm font-bold rounded-sm bg-main-blue min-w-[180px] mobile:w-fit"
          download={true}
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="flex justify-center py-4 px-8 text-sm font-bold rounded-sm bg-main-green min-w-[180px] mobile:w-fit"
        >
          Əlaqə
        </a>
      </div>
    </section>
  );
};

export default ButtonSection;
