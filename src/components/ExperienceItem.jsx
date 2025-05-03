import React from "react";

const ExperienceItem = ({ data }) => {
  return (
    <div className="bg-white dark:bg-secondaryDarkColor rounded-3xl p-5 flex flex-col gap-3">
      <p className="text-sm md:text-[20px] font-bold text-gray-500 dark:text-thirdDarkColor">
        {data.start_year + " - " + data.end_year}
      </p>
      <h4 className="text-xl md:text-[25px] font-bold dark:text-fourdDarkColor ">
        {data.name}
      </h4>
      <p className="text-sm md:text-[16px] text-gray-500 dark:text-thirdDarkColor">
        {data.company}
      </p>
    </div>
  );
};

export default ExperienceItem;
