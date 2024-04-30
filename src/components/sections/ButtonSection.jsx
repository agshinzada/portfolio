import React, { useRef } from "react";
import cv from "../../../public/cv.pdf";
import { useInView } from "framer-motion";
const ButtonSection = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <section>
      <div className="text-white py-20 flex gap-10 justify-center border-b border-[#242323] mobile:flex-col laptop:flex-row mobile:items-center">
        <a
          href={cv}
          className="flex justify-center py-4 px-8 text-sm font-bold rounded-sm bg-main-blue min-w-[180px] mobile:w-fit"
          download={true}
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all ease 2s",
          }}
          ref={ref}
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="flex justify-center py-4 px-8 text-sm font-bold rounded-sm bg-main-green min-w-[180px] mobile:w-fit"
          style={{
            transform: isInView2 ? "none" : "translateX(100px)",
            opacity: isInView2 ? 1 : 0,
            transition: "all ease 2s",
          }}
          ref={ref2}
        >
          Əlaqə
        </a>
      </div>
    </section>
  );
};

export default ButtonSection;
