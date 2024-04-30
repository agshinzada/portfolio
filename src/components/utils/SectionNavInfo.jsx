import React from "react";
import { motion } from "framer-motion";

const SectionNavInfo = ({ number, name, float = "" }) => {
  return (
    <motion.div
      className={`absolute before:content-[''] before:h-10 before:w-[1px] before:bg-[#242323] before:absolute before:table before:top-0 font-semibold ${float} pt-4`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <sup className="mr-1 ml-2 text-slate-400">{number}</sup>
      <span className="text-slate-400">{name}</span>
    </motion.div>
  );
};

export default SectionNavInfo;
