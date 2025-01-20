import React from "react";

const ExperienceItem = ({ job, date, company }) => {
  return (
    <div className="bg-white dark:bg-secondaryDarkColor rounded-3xl p-5 flex flex-col gap-3">
      <p className="text-sm md:text-[20px] font-bold text-gray-500 dark:text-thirdDarkColor">
        {date}
      </p>
      <h4 className="text-xl md:text-[25px] font-bold dark:text-fourdDarkColor ">
        {job}
      </h4>
      <p className="text-sm md:text-[16px] text-gray-500 dark:text-thirdDarkColor">
        {company}
      </p>
    </div>
  );
};

export default ExperienceItem;
