import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
const PortfolioItem = ({ status, tags, name, image, url }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  return (
    <motion.div
      className="text-white w-full relative h-full cursor-pointer"
      onClick={() => navigate("/projects/" + url)}
      style={{
        transform: isInView ? "none" : "translateY(150px)",
        opacity: isInView ? 1 : 0,
        transition: "all ease 1s",
      }}
      initial={{ bottom: 0 }}
      whileHover={{ bottom: "5%" }}
      ref={ref}
    >
      <img
        src={image}
        alt="project-image"
        className="w-full h-full rounded-xl mobile:w-full mobile:max-w-full laptop:max-w-96 "
      />
      <div className="absolute py-1 px-3 top-2 left-2 bg-green-600 dark:bg-secondaryDarkColor rounded-lg text-xs">
        <p className="uppercase">{status}</p>
      </div>
      <div className="bg-white dark:bg-primaryDarkColor py-3 px-4  absolute bottom-3 rounded-md text-black dark:text-fourdDarkColor mr-auto ml-auto  left-0 right-0 w-[93%]">
        <p className="text-xs text-gray-400">{tags}</p>
        <p className="font-bold text-lg">{name}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
