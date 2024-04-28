import React from "react";

const SectionTitle = ({ name }) => {
  return (
    <h2 className="flex items-center gap-2 mb-8 text-2xl font-bold pt-20 after:content-[''] after:w-full after:bg-[#242323] after:h-[1px] after:block after:right-0 text-white">
      <span className="text-nowrap">{name}</span>
    </h2>
  );
};

export default SectionTitle;
