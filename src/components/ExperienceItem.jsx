import React from "react";

const ExperienceItem = ({ job, date, company }) => {
  return (
    <div className="bg-white rounded-3xl p-5 flex flex-col gap-1">
      <p className="text-sm md:text-[20px] font-bold text-gray-500">{date}</p>
      <h4 className="text-xl md:text-[25px] font-bold">{job}</h4>
      <p className="text-sm md:text-[16px] text-gray-500">{company}</p>
    </div>
  );
};

export default ExperienceItem;
